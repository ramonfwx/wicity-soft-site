<template>
  <div>
    <PageHero eyebrow="Projetos" lede="Produtos e sistemas que desenvolvemos. Cada um tem site próprio e uma página com os detalhes.">
      Projetos que já saíram do papel.
    </PageHero>

    <section class="section bg-snow">
      <div class="container-site grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(p, i) in projects" :key="p.slug" v-reveal="i * 70"><ProjectCard :project="p" class="h-full" /></div>
      </div>
    </section>

    <FinalCta />
  </div>
</template>

<script setup>
import { projects } from '~/utils/site'

useHead({
  title: 'Projetos',
  meta: [{ name: 'description', content: 'Projetos desenvolvidos pela Wicity Soft: Linksouw, WiCity e Central JSouzaNet.' }]
})
</script>
