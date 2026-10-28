<template>
  <!-- Card com luz que segue o mouse (brilho interno + borda acesa), no estilo Linear -->
  <component :is="to ? NuxtLink : 'div'" :to="to" class="spot block" @pointermove="move">
    <div class="relative h-full"><slot /></div>
  </component>
</template>

<script setup>
defineProps({ to: { type: String, default: '' } })
const NuxtLink = resolveComponent('NuxtLink')

const move = (e) => {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}
</script>

<style>
.spot {
  position: relative;
  overflow: hidden;
  border-radius: 1.25rem;
  border: 1px solid rgba(148, 178, 210, 0.14);
  background: linear-gradient(180deg, rgba(20, 30, 51, 0.55), rgba(12, 19, 34, 0.85));
}
.spot::before,
.spot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.35s ease;
}
.spot::before {
  background: radial-gradient(440px circle at var(--mx, 50%) var(--my, 50%), rgba(0, 204, 255, 0.11), transparent 65%);
}
.spot::after {
  padding: 1px;
  background: radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(0, 204, 255, 0.85), transparent 70%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
}
.spot:hover::before,
.spot:hover::after {
  opacity: 1;
}
</style>
