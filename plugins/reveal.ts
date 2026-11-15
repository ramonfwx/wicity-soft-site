// v-reveal: o elemento sobe e aparece uma única vez, quando entra na tela.
// O que já está visível ao carregar não é escondido (sem "piscar"), e movimento reduzido desliga tudo.
// No servidor a diretiva existe só para não quebrar a renderização.
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    nuxtApp.vueApp.directive('reveal', { getSSRProps: () => ({}) })
    return
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        const el = e.target as HTMLElement
        // dois quadros: garante que o estado "escondido" foi pintado antes da transição
        requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('reveal-in')))
        io.unobserve(el)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  )

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      if (reduce) return
      if (binding.value) el.style.setProperty('--d', `${binding.value}ms`)
      const rect = el.getBoundingClientRect()
      if (rect.top > window.innerHeight * 0.92) el.classList.add('reveal-pre')
      io.observe(el)
    },
    unmounted(el: HTMLElement) {
      io.unobserve(el)
    },
    getSSRProps: () => ({})
  })
})
