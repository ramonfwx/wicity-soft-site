<template>
  <!-- Prévia ilustrativa de interface de software, feita em CSS. Sem dados: só formas e rótulos genéricos. -->
  <div class="overflow-hidden rounded-card border border-night-line bg-night-800" aria-hidden="true">
    <div class="flex items-center gap-1.5 border-b border-night-line px-4 py-3">
      <span class="h-2.5 w-2.5 rounded-full bg-slate-600"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-slate-600"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-slate-600"></span>
      <span class="ml-4 h-5 w-40 max-w-[40%] rounded bg-night-line"></span>
    </div>

    <div class="grid sm:grid-cols-[10rem_1fr]">
      <div class="hidden border-r border-night-line p-4 sm:block">
        <div class="h-4 w-20 rounded bg-slate-500"></div>
        <ul class="mt-6 space-y-1">
          <li v-for="(item, i) in menu" :key="item" class="rounded-lg px-3 py-2 text-[0.78rem]" :class="i === 0 ? 'bg-brand/15 font-medium text-blue-300' : 'text-mute-dark'">{{ item }}</li>
        </ul>
      </div>

      <div class="p-5">
        <div class="flex items-center justify-between">
          <p class="text-[0.9rem] font-medium text-white">Visão geral</p>
          <span class="h-7 w-20 rounded-lg bg-brand"></span>
        </div>

        <div class="mt-4 grid grid-cols-3 gap-3">
          <div v-for="l in ['Registros', 'Usuários', 'Tarefas']" :key="l" class="rounded-lg border border-night-line p-3">
            <p class="text-[0.7rem] text-mute-dark">{{ l }}</p>
            <div class="mt-3 h-4 w-10 rounded bg-slate-300/80"></div>
            <div class="mt-2 h-1.5 w-14 rounded bg-night-line"></div>
          </div>
        </div>

        <div class="mt-3 rounded-lg border border-night-line p-3">
          <svg viewBox="0 0 600 120" class="h-24 w-full" preserveAspectRatio="none">
            <g stroke="#1E293B" stroke-width="1"><path d="M0 20H600M0 60H600M0 100H600" /></g>
            <path d="M0 92 C60 88 90 70 140 74 S230 40 290 48 S390 78 450 42 S550 22 600 30 V120 H0Z" fill="#2563EB" fill-opacity="0.12" />
            <path d="M0 92 C60 88 90 70 140 74 S230 40 290 48 S390 78 450 42 S550 22 600 30" fill="none" stroke="#3B82F6" stroke-width="1.75" />
          </svg>
        </div>

        <div class="mt-3 divide-y divide-night-line rounded-lg border border-night-line">
          <div v-for="(s, i) in ['Concluído', 'Em andamento', 'Pendente']" :key="s" class="flex items-center gap-3 px-3 py-2.5">
            <span class="h-2 w-2 rounded-full" :class="i === 0 ? 'bg-brand' : 'bg-slate-600'"></span>
            <span class="h-1.5 rounded bg-night-line" :style="{ width: `${50 - i * 9}%` }"></span>
            <span class="ml-auto rounded border border-night-line px-2 py-0.5 text-[0.65rem] text-mute-dark">{{ s }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const menu = ['Visão geral', 'Cadastros', 'Processos', 'Relatórios']
</script>
