<template>
  <div>
    <!-- Hero escuro -->
    <section class="bg-night text-white">
      <div class="container-site grid items-center gap-14 pb-[88px] pt-16 md:pt-24 lg:grid-cols-12 lg:gap-10 lg:pb-[120px]">
        <div class="lg:col-span-6">
          <p class="fade-in inline-flex items-center gap-2 rounded-full border border-night-line px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-blue-300" style="animation-delay: 150ms">
            <span class="h-1.5 w-1.5 rounded-full bg-brand"></span>Desenvolvimento de software sob medida
          </p>
          <h1 class="t-display mt-7 text-[clamp(2.05rem,4.6vw,4.2rem)]">
            <span class="rise block" style="--d: 250ms">Software sob medida</span>
            <span class="rise block" style="--d: 340ms">para ideias que</span>
            <span class="rise block" style="--d: 430ms">precisam <span class="text-brand">acontecer.</span></span>
          </h1>
          <p class="rise mt-7 max-w-[46ch] text-[1.1rem] text-mute-dark" style="--d: 560ms">
            Criamos sistemas, plataformas e soluções digitais pensadas para o jeito que sua empresa trabalha.
          </p>
          <div class="rise mt-9 flex flex-wrap gap-3" style="--d: 680ms">
            <NuxtLink to="/contato" class="btn-primary">Conversar sobre meu projeto <ArrowRight :size="18" :stroke-width="1.75" class="arrow" /></NuxtLink>
            <NuxtLink to="/projetos" class="btn-outline-dark">Ver projetos</NuxtLink>
          </div>
        </div>

        <div class="rise-scale lg:col-span-6" style="--d: 500ms">
          <HeroPreview />
          <p class="mt-3 text-right font-mono text-[0.68rem] text-slate-500">Ilustração de interface</p>
        </div>
      </div>
    </section>

    <!-- Projetos selecionados -->
    <section id="projetos" class="section bg-snow">
      <div class="container-site">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Projetos selecionados" title="Produtos e sistemas que já estão no ar." />
          <NuxtLink to="/projetos" class="group inline-flex min-h-[44px] items-center gap-2 text-[0.95rem] font-medium text-brand hover:text-brand-hover">Ver todos os projetos <ArrowRight :size="18" :stroke-width="1.75" class="arrow" /></NuxtLink>
        </div>
        <div class="mt-14 grid gap-5 lg:grid-cols-3">
          <div v-for="(p, i) in projects" :key="p.slug" v-reveal="i * 70"><ProjectCard :project="p" class="h-full" /></div>
        </div>
      </div>
    </section>

    <!-- Soluções -->
    <section class="section bg-white">
      <div class="container-site">
        <SectionHeading eyebrow="Soluções" title="O que a gente desenvolve para a sua empresa." text="Cada solução parte de um problema real do seu dia a dia, explicado em linguagem simples." />
        <div class="mt-14"><ServicesGrid /></div>
      </div>
    </section>

    <!-- Processo (escuro) -->
    <section id="processo" class="section bg-night text-white">
      <div class="container-site">
        <SectionHeading dark eyebrow="Processo" title="Como um projeto acontece." text="Quatro etapas, com você acompanhando cada uma." />
        <div class="mt-16"><ProcessTimeline /></div>
      </div>
    </section>

    <!-- Diferenciais -->
    <section class="section bg-snow">
      <div class="container-site grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5"><SectionHeading eyebrow="Diferenciais" title="Do jeito que o seu negócio precisa." /></div>
        <ul class="lg:col-span-7">
          <li v-for="(d, i) in differentials" :key="d.title" v-reveal="i * 50" class="grid grid-cols-[2rem_1fr] gap-4 border-t border-line py-6 first:border-t-0 first:pt-0">
            <Check :size="20" :stroke-width="2" class="mt-1 text-brand" />
            <div>
              <h3 class="font-semibold tracking-tight">{{ d.title }}</h3>
              <p class="mt-1 text-[0.95rem] text-mute">{{ d.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <FinalCta />
  </div>
</template>

<script setup>
import { ArrowRight, Check } from 'lucide-vue-next'
import { differentials, projects } from '~/utils/site'

useHead({
  title: 'Software sob medida para ideias que precisam acontecer',
  meta: [{ name: 'description', content: 'Criamos sistemas, plataformas e soluções digitais sob medida: projetos web, aplicações, integrações, automações e dashboards.' }]
})
</script>
