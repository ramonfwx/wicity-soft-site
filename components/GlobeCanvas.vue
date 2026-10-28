<template>
  <!-- Globo decorativo em canvas: terra em pontos, arcos de conexão e marcadores. Arraste para girar. -->
  <div ref="wrap" class="relative aspect-square w-full select-none" aria-hidden="true">
    <div class="absolute inset-[12%] rounded-full bg-brand/20 blur-3xl"></div>
    <canvas ref="canvas" class="relative h-full w-full cursor-grab touch-pan-y active:cursor-grabbing"></canvas>
  </div>
</template>

<script setup>
import { LAND_H, LAND_MASK, LAND_W } from '~/utils/land-mask'

const wrap = ref(null)
const canvas = ref(null)

const rad = Math.PI / 180
const PITCH = -0.32

// [lat, lon]. Arcos saem de um polo central e vão para outros pontos (ilustrativo)
const HUB = [-23.55, -46.63]
const BR = [
  [-25.43, -49.27],
  [-15.79, -47.88],
  [-8.05, -34.88],
  [-30.03, -51.23],
  [-3.12, -60.02],
  [-12.97, -38.5]
]
const WORLD = [
  [38.72, -9.14],
  [25.76, -80.19],
  [51.5, -0.12],
  [40.71, -74.0],
  [-34.6, -58.38],
  [-26.2, 28.04],
  [35.68, 139.69]
]
const ARC_ENDS = [...BR, ...WORLD]

const toVec = (lat, lon) => {
  const la = lat * rad
  const lo = lon * rad
  return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)]
}

// Pontos de terra: grade quase uniforme em área, filtrada pela máscara
const buildLand = () => {
  const bin = atob(LAND_MASK)
  const isLand = (lat, lon) => {
    const x = Math.min(LAND_W - 1, Math.floor(((lon + 180) / 360) * LAND_W))
    const y = Math.min(LAND_H - 1, Math.floor(((90 - lat) / 180) * LAND_H))
    const i = y * LAND_W + x
    return (bin.charCodeAt(i >> 3) >> (i & 7)) & 1
  }
  const pts = []
  for (let lat = -84; lat <= 84; lat += 2.4) {
    const step = 2.4 / Math.max(0.2, Math.cos(lat * rad))
    for (let lon = -180; lon < 180; lon += step) {
      if (isLand(lat, lon)) {
        const [x, y, z] = toVec(lat, lon)
        const brazil = lat > -34 && lat < 6 && lon > -74 && lon < -34
        pts.push({ x, y, z, brazil })
      }
    }
  }
  return pts
}

// Interpolação esférica entre dois vetores unitários, com altura para formar o arco
const arcPoint = (a, b, t, lift) => {
  const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]))
  const om = Math.acos(dot)
  const s = Math.sin(om) || 1
  const k1 = Math.sin((1 - t) * om) / s
  const k2 = Math.sin(t * om) / s
  const h = 1 + lift * Math.sin(Math.PI * t)
  return [(a[0] * k1 + b[0] * k2) * h, (a[1] * k1 + b[1] * k2) * h, (a[2] * k1 + b[2] * k2) * h]
}

onMounted(() => {
  const cv = canvas.value
  const ctx = cv.getContext('2d')
  if (!ctx) return

  const land = buildLand()
  const hub = toVec(...HUB)
  const arcs = ARC_ENDS.map((e, i) => {
    const b = toVec(...e)
    const om = Math.acos(Math.min(1, hub[0] * b[0] + hub[1] * b[1] + hub[2] * b[2]))
    return { b, lift: 0.1 + om * 0.22, speed: 0.16 + (i % 4) * 0.035, phase: (i * 0.137) % 1 }
  })
  const markers = [HUB, ...BR].map((c) => toVec(...c))

  let size = 0
  let dpr = 1
  let R = 0
  let rot = 50 * rad // Brasil de frente
  let vel = 0.0016
  let dragging = false
  let lastX = 0
  let raf = 0
  let visible = true
  let t0 = performance.now()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const resize = () => {
    const r = wrap.value.getBoundingClientRect()
    dpr = Math.min(2, window.devicePixelRatio || 1)
    size = r.width
    cv.width = Math.round(size * dpr)
    cv.height = Math.round(size * dpr)
    R = size * 0.4 * dpr
  }

  const cosP = Math.cos(PITCH)
  const sinP = Math.sin(PITCH)
  // gira em Y (rotação do planeta) e inclina em X (câmera)
  const xf = (v, cr, sr) => {
    const x1 = v[0] * cr + v[2] * sr
    const z1 = v[2] * cr - v[0] * sr
    return [x1, v[1] * cosP - z1 * sinP, v[1] * sinP + z1 * cosP]
  }

  const draw = (now) => {
    const w = cv.width
    const c = w / 2
    const cr = Math.cos(rot)
    const sr = Math.sin(rot)
    const time = (now - t0) / 1000
    ctx.clearRect(0, 0, w, w)

    // esfera: oceano escuro com luz vinda de cima à esquerda
    const sph = ctx.createRadialGradient(c - R * 0.35, c - R * 0.4, R * 0.1, c, c, R)
    sph.addColorStop(0, '#12294a')
    sph.addColorStop(0.55, '#0a1730')
    sph.addColorStop(1, '#060c1a')
    ctx.beginPath()
    ctx.arc(c, c, R, 0, Math.PI * 2)
    ctx.fillStyle = sph
    ctx.fill()

    // graticule
    ctx.lineWidth = Math.max(1, dpr * 0.6)
    ctx.strokeStyle = 'rgba(80, 160, 230, 0.13)'
    for (let lon = -180; lon < 180; lon += 30) {
      ctx.beginPath()
      let pen = false
      for (let lat = -90; lat <= 90; lat += 6) {
        const p = xf(toVec(lat, lon), cr, sr)
        if (p[2] > 0) {
          const X = c + p[0] * R
          const Y = c - p[1] * R
          pen ? ctx.lineTo(X, Y) : ctx.moveTo(X, Y)
          pen = true
        } else pen = false
      }
      ctx.stroke()
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      ctx.beginPath()
      let pen = false
      for (let lon = -180; lon <= 180; lon += 6) {
        const p = xf(toVec(lat, lon), cr, sr)
        if (p[2] > 0) {
          const X = c + p[0] * R
          const Y = c - p[1] * R
          pen ? ctx.lineTo(X, Y) : ctx.moveTo(X, Y)
          pen = true
        } else pen = false
      }
      ctx.stroke()
    }

    // terra em pontos
    const dr = R * 0.0085
    for (let i = 0; i < land.length; i++) {
      const d = land[i]
      const p = xf([d.x, d.y, d.z], cr, sr)
      if (p[2] <= 0) continue
      const a = 0.25 + p[2] * 0.75
      ctx.fillStyle = d.brazil ? `rgba(120, 225, 255, ${a})` : `rgba(70, 150, 225, ${a * 0.8})`
      ctx.beginPath()
      ctx.arc(c + p[0] * R, c - p[1] * R, d.brazil ? dr * 1.25 : dr, 0, Math.PI * 2)
      ctx.fill()
    }

    // arcos: trilha tênue + cabeça luminosa viajando
    const SEG = 36
    for (const arc of arcs) {
      const prog = (time * arc.speed + arc.phase) % 1
      for (let s = 0; s < SEG; s++) {
        const t1 = s / SEG
        const t2 = (s + 1) / SEG
        const p1 = xf(arcPoint(hub, arc.b, t1, arc.lift), cr, sr)
        const p2 = xf(arcPoint(hub, arc.b, t2, arc.lift), cr, sr)
        const hidden = (q) => q[2] < 0 && q[0] * q[0] + q[1] * q[1] < 1
        if (hidden(p1) || hidden(p2)) continue
        // distância atrás da cabeça: 0 = cabeça, 1 = fim da cauda
        let behind = prog - t2
        if (behind < 0) behind += 1
        const glow = Math.max(0, 1 - behind / 0.28)
        ctx.beginPath()
        ctx.moveTo(c + p1[0] * R, c - p1[1] * R)
        ctx.lineTo(c + p2[0] * R, c - p2[1] * R)
        ctx.strokeStyle = glow > 0 ? `rgba(0, 220, 255, ${0.18 + glow * 0.8})` : 'rgba(0, 168, 232, 0.16)'
        ctx.lineWidth = dpr * (glow > 0 ? 1.4 + glow : 0.8)
        ctx.stroke()
      }
    }

    // marcadores pulsantes
    markers.forEach((m, i) => {
      const p = xf(m, cr, sr)
      if (p[2] <= 0.05) return
      const X = c + p[0] * R
      const Y = c - p[1] * R
      const k = (time * 0.9 + i * 0.31) % 1
      ctx.beginPath()
      ctx.arc(X, Y, dr * (2 + k * 5), 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(0, 220, 255, ${(1 - k) * 0.7})`
      ctx.lineWidth = dpr
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(X, Y, dr * (i === 0 ? 2.6 : 1.9), 0, Math.PI * 2)
      ctx.fillStyle = i === 0 ? '#ffffff' : '#7fe8ff'
      ctx.fill()
    })

    // borda de luz
    const rim = ctx.createRadialGradient(c, c, R * 0.92, c, c, R * 1.02)
    rim.addColorStop(0, 'rgba(0, 168, 232, 0)')
    rim.addColorStop(0.85, 'rgba(0, 190, 255, 0.28)')
    rim.addColorStop(1, 'rgba(0, 190, 255, 0)')
    ctx.beginPath()
    ctx.arc(c, c, R * 1.02, 0, Math.PI * 2)
    ctx.fillStyle = rim
    ctx.fill()
  }

  const frame = (now) => {
    if (visible) {
      if (!dragging) {
        rot += vel
        vel += (0.0016 - vel) * 0.03
      }
      draw(now)
    }
    raf = requestAnimationFrame(frame)
  }

  const down = (e) => {
    dragging = true
    lastX = e.clientX
    cv.setPointerCapture(e.pointerId)
  }
  const move = (e) => {
    if (!dragging) return
    const dx = e.clientX - lastX
    lastX = e.clientX
    const d = (dx * dpr) / R
    rot += d
    vel = d
  }
  const up = () => {
    dragging = false
  }

  resize()
  const ro = new ResizeObserver(() => {
    resize()
    if (reduce) draw(performance.now())
  })
  ro.observe(wrap.value)
  const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting), { threshold: 0 })
  io.observe(wrap.value)

  if (reduce) draw(performance.now())
  else {
    cv.addEventListener('pointerdown', down)
    cv.addEventListener('pointermove', move)
    cv.addEventListener('pointerup', up)
    cv.addEventListener('pointercancel', up)
    raf = requestAnimationFrame(frame)
  }

  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    ro.disconnect()
    io.disconnect()
  })
})
</script>
