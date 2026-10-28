<template>
  <!-- Celular ilustrativo de cada produto, feito em CSS (não são capturas reais) -->
  <div class="mx-auto h-[270px] w-[150px] rounded-[26px] bg-night p-[5px] shadow-2xl shadow-black/40 ring-1 ring-white/20">
    <div class="relative h-full w-full overflow-hidden rounded-[21px]" :class="screen">
      <div class="absolute left-1/2 top-1.5 h-1 w-10 -translate-x-1/2 rounded-full bg-black/30"></div>

      <!-- Hotspot: portal do Wi-Fi -->
      <div v-if="kind === 'hotspot'" class="flex h-full flex-col items-center px-3.5 pt-9 text-center text-white">
        <svg class="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
          <path class="wave-3" d="M2 9a15 15 0 0120 0" /><path class="wave-2" d="M5.5 12.5a10 10 0 0113 0" /><path class="wave-1" d="M9 16a5 5 0 016 0" /><circle cx="12" cy="19.5" r="1" fill="currentColor" />
        </svg>
        <p class="mt-2 text-[11px] font-extrabold leading-tight">Bem-vindo!<br />Conecte-se ao Wi-Fi</p>
        <div class="mt-3 w-full space-y-1.5">
          <div class="h-5 rounded-md bg-white/20"></div>
          <div class="h-5 rounded-md bg-white/20"></div>
        </div>
        <div class="mt-3 flex h-6 w-full items-center justify-center rounded-full bg-white text-[10px] font-extrabold text-brand-deep">Conectar</div>
        <div class="mt-auto mb-4 grid h-10 w-10 grid-cols-3 gap-px rounded-md bg-white p-1">
          <span v-for="i in 9" :key="i" class="rounded-[1px]" :class="[1, 3, 5, 7, 9].includes(i) ? 'bg-night' : 'bg-night/15'"></span>
        </div>
      </div>

      <!-- Linksouw: página de links -->
      <div v-else-if="kind === 'linksouw'" class="flex h-full flex-col items-center px-3.5 pt-9 text-center text-white">
        <div class="h-11 w-11 rounded-full bg-white/90 ring-2 ring-white/60"></div>
        <p class="mt-2 text-[11px] font-extrabold">@seunome</p>
        <p class="text-[9px] text-white/80">Todos os meus links</p>
        <div class="mt-3 w-full space-y-1.5">
          <div v-for="(l, i) in ['Instagram', 'WhatsApp', 'Minha loja', 'Portfólio']" :key="l"
            class="bob flex h-6 items-center justify-center rounded-full bg-white/95 text-[9px] font-bold text-violet-700"
            :style="{ animationDelay: `${i * -0.5}s` }">{{ l }}</div>
        </div>
      </div>

      <!-- Em breve -->
      <div v-else class="flex h-full flex-col items-center justify-center text-white">
        <div class="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-3xl font-extrabold">
          <span class="ping-ring absolute inset-0 rounded-full border border-white/40"></span>?
        </div>
        <p class="mt-3 text-[11px] font-bold text-white/70">Em desenvolvimento</p>
      </div>

      <div class="glare pointer-events-none absolute inset-0"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ kind: { type: String, required: true } })
const screen = computed(
  () =>
    ({
      hotspot: 'bg-gradient-to-b from-[#0B4FA0] via-[#1B76C7] to-[#00A8E8]',
      linksouw: 'bg-gradient-to-b from-[#5b21b6] via-[#db2777] to-[#fb923c]',
      soon: 'bg-gradient-to-b from-slate-700 to-slate-900'
    })[props.kind]
)
</script>
