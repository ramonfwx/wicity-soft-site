<template>
  <header class="fade-in sticky top-0 z-50 border-b transition-colors duration-300" :class="scrolled || open ? 'border-night-line bg-night/90 backdrop-blur-md' : 'border-transparent bg-night'">
    <div class="container-site flex h-[68px] items-center justify-between">
      <NuxtLink to="/" class="text-[1.1rem] font-semibold tracking-tight text-white" :aria-label="`${company.name}, página inicial`" @click="open = false">{{ company.name }}</NuxtLink>

      <nav class="hidden items-center gap-8 lg:flex" aria-label="Principal">
        <NuxtLink v-for="l in nav" :key="l.to" :to="l.to" class="text-[0.92rem] text-mute-dark transition-colors duration-200 hover:text-white">{{ l.label }}</NuxtLink>
        <NuxtLink to="/contato" class="btn-primary !min-h-[40px] !px-4 !py-2 !text-[0.88rem]">Iniciar projeto</NuxtLink>
      </nav>

      <button type="button" class="-mr-2 grid h-11 w-11 place-items-center text-white lg:hidden" :aria-expanded="open" aria-controls="menu-mobile" aria-label="Abrir menu" @click="open = !open">
        <X v-if="open" :size="22" :stroke-width="1.75" />
        <Menu v-else :size="22" :stroke-width="1.75" />
      </button>
    </div>

    <nav v-show="open" id="menu-mobile" class="container-site pb-8 pt-2 lg:hidden" aria-label="Principal (celular)">
      <NuxtLink v-for="l in nav" :key="l.to" :to="l.to" class="flex min-h-[52px] items-center border-t border-night-line text-lg font-medium text-white" @click="open = false">{{ l.label }}</NuxtLink>
      <NuxtLink to="/contato" class="btn-primary mt-4 w-full" @click="open = false">Iniciar projeto</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
import { Menu, X } from 'lucide-vue-next'
import { company, nav } from '~/utils/site'

const open = ref(false)
const scrolled = ref(false)

onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 8)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>
