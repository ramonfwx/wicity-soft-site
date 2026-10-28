<template>
  <!-- Vitrine: lista de produtos à esquerda (o ativo se abre), palco com o celular à direita. Troca sozinha até o usuário escolher. -->
  <div class="showcase grid gap-5 lg:grid-cols-12 lg:gap-8">
    <ul class="flex flex-col gap-3 lg:col-span-5">
      <li v-for="(p, i) in products" :key="p.id">
        <button
          type="button"
          class="group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition duration-300 md:p-6"
          :class="active === i ? 'border-cyan/40 bg-night-800' : 'border-line bg-night-800/30 hover:border-line hover:bg-night-800/60'"
          :aria-expanded="active === i"
          @click="select(i)"
        >
          <div class="flex items-center justify-between gap-3">
            <span class="font-mono text-xs" :class="active === i ? 'text-brand-sky' : 'text-mute'">/0{{ i + 1 }}</span>
            <span class="flex items-center gap-2 font-mono text-xs text-mute">
              <span class="h-1.5 w-1.5 rounded-full" :class="p.status === 'em-breve' ? 'animate-pulse bg-amber' : 'bg-[#28c840]'"></span>{{ p.status === 'em-breve' ? 'em obras' : 'no ar' }}
            </span>
          </div>
          <h3 class="mt-3 text-2xl font-extrabold tracking-tight transition-colors" :class="active === i ? 'text-ink' : 'text-ink/60 group-hover:text-ink/90'">{{ p.name }}</h3>

          <!-- conteúdo que abre no item ativo -->
          <div class="grid transition-all duration-500 ease-out" :class="active === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
            <div class="overflow-hidden">
              <p class="mt-3 text-mute">{{ p.summary }}</p>
              <div v-if="p.features.length" class="mt-4 flex flex-wrap gap-2">
                <span v-for="f in p.features.slice(0, 4)" :key="f.title" class="rounded-md border border-line bg-night/60 px-2.5 py-1 font-mono text-[0.7rem] text-ink/80">{{ f.title }}</span>
              </div>
              <div class="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-bold">
                <NuxtLink :to="`/produtos#${p.id}`" class="text-cyan hover:underline" :tabindex="active === i ? 0 : -1" @click.stop>Ver detalhes</NuxtLink>
                <a v-if="p.href" :href="p.href" target="_blank" rel="noopener" class="text-ink/80 hover:text-cyan" :tabindex="active === i ? 0 : -1" @click.stop>Visitar {{ p.domain }} ↗</a>
              </div>
            </div>
          </div>

          <!-- barra de progresso da troca automática -->
          <span v-if="auto && active === i" :key="`bar-${tick}`" class="bar absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-brand to-cyan" @animationend="next"></span>
        </button>
      </li>
    </ul>

    <!-- palco: todos empilhados, só o ativo aparece -->
    <div class="relative min-h-[460px] overflow-hidden rounded-2xl border border-line bg-night-800 lg:col-span-7 lg:min-h-[560px]">
      <div class="dots absolute inset-0 opacity-50"></div>

      <div class="absolute inset-x-0 top-0 z-20 flex items-center gap-2 border-b border-line bg-night/50 px-4 py-3 backdrop-blur">
        <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
        <span class="ml-3 truncate rounded-md border border-line bg-night/60 px-3 py-1 font-mono text-xs text-mute">{{ current.domain || 'em-breve.wicity' }}</span>
      </div>

      <div
        v-for="(p, i) in products"
        :key="p.id"
        class="absolute inset-0 flex items-center justify-center pt-8 transition duration-700 ease-out"
        :class="active === i ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'"
        :aria-hidden="active !== i"
      >
        <div class="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" :style="{ backgroundColor: p.tint }"></div>
        <ProductMock :kind="p.id === 'em-breve' ? 'soon' : p.id" class="relative scale-[1.3] sm:scale-[1.45]" />

        <!-- etiquetas flutuando ao redor do celular -->
        <template v-if="p.features.length">
          <span v-for="(f, k) in p.features.slice(0, 3)" :key="f.title" class="bob absolute hidden rounded-lg border border-line bg-night/80 px-3 py-1.5 font-mono text-xs text-ink/90 shadow-lg backdrop-blur sm:block" :class="chipPos[k]" :style="{ animationDelay: `${k * -1.1}s` }">
            {{ f.title }}
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { products } from '~/utils/site'

const active = ref(0)
const tick = ref(0)
const auto = ref(false)

const current = computed(() => products[active.value])
const chipPos = ['left-[7%] top-[26%]', 'right-[6%] top-[44%]', 'left-[11%] bottom-[14%]']

const next = () => {
  active.value = (active.value + 1) % products.length
  tick.value++
}
const select = (i) => {
  active.value = i
  auto.value = false
}

onMounted(() => {
  auto.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<style scoped>
.bar {
  animation: fill 7s linear both;
  transform: scaleX(0);
}
@keyframes fill {
  to { transform: scaleX(1); }
}
.showcase:hover .bar,
.showcase:focus-within .bar {
  animation-play-state: paused;
}
</style>
