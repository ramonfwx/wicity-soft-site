<template>
  <header class="sticky top-0 z-50 border-b border-line bg-night/80 backdrop-blur-lg">
    <div class="container-custom flex h-[72px] items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3" aria-label="Wicity Soft, página inicial" @click="open = false">
        <img :src="logoIcon" alt="" width="34" height="34" class="h-[34px] w-[34px] rounded-lg" />
        <span class="text-[1.3rem] font-extrabold tracking-tight">Wicity <span class="font-medium text-mute">Soft</span></span>
      </NuxtLink>

      <nav class="hidden items-center gap-9 md:flex" aria-label="Principal">
        <NuxtLink v-for="l in links" :key="l.to" :to="l.to" class="nav-link text-[0.92rem] font-semibold text-mute hover:text-ink">{{ l.label }}</NuxtLink>
        <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-grad !px-5 !py-2.5 !text-sm">Vamos conversar</a>
      </nav>

      <button type="button" class="rounded-md p-2 md:hidden" :aria-expanded="open" aria-label="Abrir menu" @click="open = !open">
        <svg v-if="!open" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 8h16M4 16h16" /></svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
    </div>

    <nav v-if="open" class="container-custom flex flex-col pb-5 md:hidden" aria-label="Principal (celular)">
      <NuxtLink v-for="l in links" :key="l.to" :to="l.to" class="border-t border-line py-3.5 text-xl font-bold" @click="open = false">{{ l.label }}</NuxtLink>
      <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-grad mt-3">Vamos conversar</a>
    </nav>
  </header>
</template>

<script setup>
import { whatsappLink } from '~/utils/site'

// src dinâmico: o import estático de /public quebra no dev quando o caminho do projeto tem espaço
const logoIcon = '/brand/icone-192.png'
const links = [
  { label: 'Produtos', to: '/produtos' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' }
]
const open = ref(false)
</script>

<style scoped>
.nav-link {
  transition: color 0.2s ease;
}
.nav-link.router-link-active {
  color: #e8f0f8;
}
</style>
