<template>
  <div>
    <!-- Hero: texto à esquerda, globo à direita -->
    <section class="relative overflow-hidden border-b border-line">
      <div class="grid-lines absolute inset-0"></div>
      <div class="glow-pulse pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand/25 blur-[120px]"></div>

      <div class="container-custom relative grid items-center gap-6 pb-16 pt-14 md:pt-20 lg:grid-cols-12 lg:pb-24">
        <div class="lg:col-span-6">
          <p class="tag rise">// A empresa por trás dos produtos</p>
          <h1 class="h-display rise mt-6 text-[clamp(2.7rem,6vw,4.7rem)]" style="--d: 100ms">
            Software para quem vende na <span class="grad-text">cidade.</span>
          </h1>
          <p class="rise mt-6 max-w-[46ch] text-lg text-mute" style="--d: 200ms">
            Do Wi-Fi da loja ao link do Instagram: a Wicity Soft cria e mantém os próprios produtos, e cada um tem marca e site próprios.
          </p>
          <div class="rise mt-9 flex flex-wrap gap-3" style="--d: 300ms">
            <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-grad">Fale com a gente</a>
            <NuxtLink to="/produtos" class="btn-ghost">Conheça os produtos</NuxtLink>
          </div>
        </div>

        <div class="rise lg:col-span-6" style="--d: 250ms">
          <GlobeCanvas class="mx-auto max-w-[560px] lg:ml-auto lg:mr-[-2rem] lg:max-w-none" />
        </div>
      </div>
    </section>

    <!-- Faixa com o que os produtos fazem (tirado dos recursos reais) -->
    <section class="overflow-hidden border-b border-line py-5" aria-label="O que os produtos fazem">
      <div class="marquee font-mono text-sm text-mute" aria-hidden="true">
        <div v-for="n in 2" :key="n" class="flex shrink-0 items-center">
          <span v-for="t in ticker" :key="`${n}-${t}`" class="flex items-center">
            <span class="px-6">{{ t }}</span><span class="text-cyan/50">/</span>
          </span>
        </div>
      </div>
    </section>

    <!-- Produtos: vitrine interativa -->
    <section class="container-custom py-20 md:py-28">
      <p class="eyebrow">/* produtos */</p>
      <h2 class="h-display mt-3 max-w-[18ch] text-3xl sm:text-5xl">Dois no ar. <span class="text-mute">Um em obras.</span></h2>
      <p class="mt-4 max-w-[56ch] text-mute">Cada produto resolve um problema, tem site próprio e atende um tipo de negócio.</p>
      <div class="mt-12">
        <ProductShowcase />
      </div>
    </section>

    <!-- Modelo de trabalho, com a janela de código pequena ao lado -->
    <section class="border-y border-line bg-night-800/40">
      <div class="container-custom grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <p class="eyebrow">/* modelo */</p>
          <h2 class="h-display mt-3 max-w-[22ch] text-3xl sm:text-5xl">A empresa que fica por trás de cada produto.</h2>
          <div class="mt-10 grid gap-6 sm:grid-cols-3">
            <div v-for="s in steps" :key="s.n">
              <div class="flow-line h-px w-full" :style="{ animationDelay: `${s.n * -0.9}s` }"></div>
              <p class="mt-3 font-mono text-xs text-brand-sky">0{{ s.n }}</p>
              <p class="mt-1 font-bold">{{ s.title }}</p>
              <p class="mt-1 text-[0.9rem] text-mute">{{ s.text }}</p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-5">
          <CodeWindow class="mx-auto max-w-[430px] lg:ml-auto" />
        </div>
      </div>
    </section>

    <!-- Chamada final com borda de luz girando -->
    <section class="container-custom py-24 md:py-32">
      <div class="beam relative overflow-hidden px-6 py-16 text-center md:py-24">
        <div class="grid-lines absolute inset-0 opacity-70"></div>
        <div class="glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[110px]"></div>
        <div class="relative">
          <h2 class="h-display mx-auto max-w-[20ch] text-3xl sm:text-5xl">Tem um problema que um <span class="grad-text">software resolve?</span></h2>
          <p class="mx-auto mt-5 max-w-[46ch] text-mute">Conte para a gente. A conversa é sem burocracia.</p>
          <div class="mt-9 flex flex-wrap justify-center gap-3">
            <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn-grad">Vamos conversar no WhatsApp</a>
            <a :href="`mailto:${company.email}`" class="btn-ghost">{{ company.email }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { company, whatsappLink } from '~/utils/site'

useHead({ title: 'Wicity Soft | Desenvolvimento de softwares e sistemas' })

const ticker = ['Wi-Fi com portal', 'Contatos para campanhas', 'Acesso cobrado via Pix', 'Anúncios em stories', 'Loja na bio', 'Links agendados', 'Estatísticas de cliques', 'Vários pontos, um painel']

const steps = [
  { n: 1, title: 'Criamos', text: 'Cada produto nasce de um problema real de quem vende na cidade.' },
  { n: 2, title: 'Publicamos', text: 'Marca e site próprios para cada um.' },
  { n: 3, title: 'Mantemos', text: 'Evolução, suporte e atendimento ficam com a gente.' }
]
</script>
