<template>
  <NuxtLink :to="`/projetos/${project.slug}`" class="card-lift group block p-3 md:p-4" :aria-label="`${project.name}: ver projeto`">
    <BrowserFrame :src="project.image" :alt="`Captura de tela do ${project.name}`" :domain="project.domain" />
    <div class="flex items-start justify-between gap-6 px-2 pb-2 pt-6">
      <div>
        <p class="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-brand">{{ project.category }}</p>
        <h3 class="mt-2 text-[1.5rem] font-semibold tracking-tight">{{ project.name }}</h3>
        <p class="mt-2 max-w-[46ch] text-[0.95rem] text-mute">{{ project.summary }}</p>
      </div>
      <span class="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors duration-200 group-hover:border-brand group-hover:text-brand">
        <ArrowUpRight :size="18" :stroke-width="1.75" class="arrow" />
      </span>
    </div>
  </NuxtLink>
</template>

<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

defineProps({ project: { type: Object, required: true } })
</script>
