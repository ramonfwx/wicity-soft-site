<template>
  <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="(s, i) in items" :key="s.title" v-reveal="i * 60">
      <div class="card-lift h-full p-7">
        <span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
          <component :is="icons[s.icon]" :size="22" :stroke-width="1.75" />
        </span>
        <h3 class="mt-6 text-[1.15rem] font-semibold tracking-tight">{{ s.title }}</h3>
        <p class="mt-2 text-[0.95rem] text-mute">{{ s.text }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ChartNoAxesCombined, Code2, PanelsTopLeft, ShieldCheck, Smartphone, Workflow } from 'lucide-vue-next'
import { services } from '~/utils/site'

defineProps({ items: { type: Array, default: () => services } })
const icons = { Code2, PanelsTopLeft, Smartphone, Workflow, ChartNoAxesCombined, ShieldCheck }
</script>
