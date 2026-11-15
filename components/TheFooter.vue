<template>
  <footer class="border-t border-night-line bg-night text-white">
    <div class="container-site py-16 md:py-20">
      <div class="grid gap-12 md:grid-cols-12">
        <div class="md:col-span-5">
          <p class="text-[1.1rem] font-semibold tracking-tight">{{ company.name }}</p>
          <p class="mt-3 max-w-[36ch] text-[0.95rem] text-mute-dark">Criamos sistemas, plataformas e soluções digitais pensadas para o jeito que cada empresa trabalha.</p>
        </div>

        <div class="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
          <div>
            <h2 class="font-mono text-xs uppercase tracking-[0.1em] text-mute-dark">Navegação</h2>
            <ul class="mt-4 space-y-3 text-[0.92rem]">
              <li v-for="l in nav" :key="l.to"><NuxtLink :to="l.to" class="text-slate-300 transition-colors hover:text-white">{{ l.label }}</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h2 class="font-mono text-xs uppercase tracking-[0.1em] text-mute-dark">Soluções</h2>
            <ul class="mt-4 space-y-3 text-[0.92rem]">
              <li v-for="s in services.slice(0, 4)" :key="s.title"><NuxtLink to="/solucoes" class="text-slate-300 transition-colors hover:text-white">{{ s.title }}</NuxtLink></li>
            </ul>
          </div>
          <div class="col-span-2 md:col-span-1">
            <h2 class="font-mono text-xs uppercase tracking-[0.1em] text-mute-dark">Contato</h2>
            <ul class="mt-4 space-y-3 text-[0.92rem]">
              <li><a :href="`mailto:${company.email}`" class="break-all text-slate-300 transition-colors hover:text-white">{{ company.email }}</a></li>
              <li><a :href="whatsappLink()" target="_blank" rel="noopener" class="text-slate-300 transition-colors hover:text-white">{{ company.whatsappLabel }}</a></li>
              <li v-for="s in activeSocials" :key="s.label"><a :href="s.href" target="_blank" rel="noopener" class="text-slate-300 transition-colors hover:text-white">{{ s.label }}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-16 flex flex-col gap-3 border-t border-night-line pt-6 text-[0.82rem] text-mute-dark md:flex-row md:justify-between">
        <p>© {{ year }} {{ company.legalName }}. CNPJ {{ company.cnpj }}.</p>
        <p class="flex gap-5">
          <NuxtLink to="/termos" class="transition-colors hover:text-white">Termos de uso</NuxtLink>
          <NuxtLink to="/privacidade" class="transition-colors hover:text-white">Privacidade</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { company, nav, services, socials, whatsappLink } from '~/utils/site'

const year = new Date().getFullYear()
const activeSocials = socials.filter((s) => s.href)
</script>
