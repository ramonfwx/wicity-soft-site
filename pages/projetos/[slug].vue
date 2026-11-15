<template>
  <div>
    <PageHero :eyebrow="project.category" :lede="project.summary">
      {{ project.name }}
      <template #actions>
        <a :href="project.href" target="_blank" rel="noopener" class="btn-primary">Visitar {{ project.domain }} <ArrowUpRight :size="18" :stroke-width="1.75" class="arrow" /></a>
        <NuxtLink to="/projetos" class="btn-outline-dark">Todos os projetos</NuxtLink>
      </template>
    </PageHero>

    <section class="section bg-snow">
      <div class="container-site grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-7"><BrowserFrame :src="project.image" :alt="`Captura de tela do ${project.name}`" :domain="project.domain" eager /></div>

        <div class="lg:col-span-5">
          <p class="eyebrow">Sobre o projeto</p>
          <p class="mt-4 text-[1.1rem] text-slate-700">{{ project.description }}</p>

          <p v-if="project.pending" class="mt-6 flex gap-3 rounded-card border border-line bg-white p-4 text-[0.9rem] text-mute">
            <Info :size="18" :stroke-width="1.75" class="mt-0.5 shrink-0 text-brand" />{{ project.pending }}
          </p>

          <template v-if="project.features.length">
            <p class="eyebrow mt-10">O que ele faz</p>
            <ul class="mt-4 space-y-3">
              <li v-for="f in project.features" :key="f" class="grid grid-cols-[1.5rem_1fr] gap-2 text-[0.97rem] text-slate-700">
                <Check :size="18" :stroke-width="2" class="mt-0.5 text-brand" />{{ f }}
              </li>
            </ul>
          </template>
        </div>
      </div>
    </section>

    <FinalCta />
  </div>
</template>

<script setup>
import { ArrowUpRight, Check, Info } from 'lucide-vue-next'
import { projects } from '~/utils/site'

const route = useRoute()
const project = projects.find((p) => p.slug === route.params.slug)
if (!project) throw createError({ statusCode: 404, statusMessage: 'Projeto não encontrado', fatal: true })

useHead({
  title: project.name,
  meta: [
    { name: 'description', content: project.summary },
    { property: 'og:title', content: `${project.name} | Wicity Soft` },
    { property: 'og:description', content: project.summary }
  ]
})
</script>
