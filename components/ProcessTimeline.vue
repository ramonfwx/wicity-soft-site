<template>
  <!-- Horizontal no desktop, vertical no celular; a linha azul se preenche ao entrar na tela -->
  <ol v-reveal class="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
    <span class="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-night-line lg:hidden"></span>
    <span class="tl-fill absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-brand lg:hidden"></span>
    <span class="absolute left-0 right-0 top-[7px] hidden h-px bg-night-line lg:block"></span>
    <span class="tl-fill absolute left-0 right-0 top-[7px] hidden h-px bg-brand lg:block"></span>

    <li v-for="s in process" :key="s.n" class="relative pl-9 lg:pl-0 lg:pt-10">
      <span class="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-brand bg-night lg:top-0"></span>
      <p class="font-mono text-xs text-blue-400">{{ s.n }}</p>
      <h3 class="mt-2 text-[1.25rem] font-semibold tracking-tight text-white">{{ s.title }}</h3>
      <p class="mt-2 max-w-[30ch] text-[0.95rem] text-mute-dark">{{ s.text }}</p>
    </li>
  </ol>
</template>

<script setup>
import { process } from '~/utils/site'
</script>
