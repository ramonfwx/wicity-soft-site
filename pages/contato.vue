<template>
  <div>
    <PageHero eyebrow="Contato" lede="Conte o que você precisa: um sistema, uma plataforma, uma integração ou só uma ideia. O caminho mais rápido é o WhatsApp.">
      Vamos conversar sobre o seu projeto.
    </PageHero>

    <section class="section bg-snow">
      <div class="container-site grid gap-5 md:grid-cols-2">
        <a :href="whatsappLink()" target="_blank" rel="noopener" class="card-lift group block p-8 md:p-10">
          <span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><MessageCircle :size="22" :stroke-width="1.75" /></span>
          <p class="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-mute">WhatsApp</p>
          <p class="mt-2 text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-tight">{{ company.whatsappLabel }}</p>
          <p class="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-medium text-brand">Abrir conversa <ArrowRight :size="18" :stroke-width="1.75" class="arrow" /></p>
        </a>
        <a :href="`mailto:${company.email}`" class="card-lift group block p-8 md:p-10">
          <span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><Mail :size="22" :stroke-width="1.75" /></span>
          <p class="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-mute">E-mail</p>
          <p class="mt-2 break-all text-[clamp(1.3rem,2.4vw,1.8rem)] font-semibold tracking-tight">{{ company.email }}</p>
          <p class="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-medium text-brand">Escrever <ArrowRight :size="18" :stroke-width="1.75" class="arrow" /></p>
        </a>
      </div>
      <p class="container-site mt-10 text-[0.85rem] text-mute">{{ company.legalName }}, CNPJ {{ company.cnpj }}.</p>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight, Mail, MessageCircle } from 'lucide-vue-next'
import { company, whatsappLink } from '~/utils/site'

useHead({
  title: 'Contato',
  meta: [{ name: 'description', content: 'Fale com a Wicity Soft por WhatsApp ou e-mail e conte sobre o seu projeto.' }]
})
</script>
