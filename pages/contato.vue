<template>
  <div>
    <section class="relative overflow-hidden border-b border-line">
      <div class="dots absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"></div>
      <div class="container-custom relative pb-14 pt-16 md:pb-20 md:pt-24">
        <p class="tag rise">// contato</p>
        <h1 class="h-display rise mt-6 text-[clamp(2.7rem,7vw,5.2rem)]" style="--d: 100ms">Vamos <span class="grad-text">conversar.</span></h1>
        <p class="rise mt-6 max-w-[48ch] text-lg text-mute" style="--d: 200ms">
          Dúvida sobre um produto, parceria ou uma ideia de software. O caminho mais rápido é o WhatsApp.
        </p>
      </div>
    </section>

    <section class="container-custom py-14 md:py-20">
      <div class="grid gap-5 md:grid-cols-2">
        <a :href="whatsappLink()" target="_blank" rel="noopener" class="card group p-8">
          <p class="font-mono text-xs text-brand-sky">/whatsapp</p>
          <p class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{{ company.whatsappLabel }}</p>
          <p class="mt-4 text-sm font-bold text-cyan">Abrir conversa <span class="inline-block transition group-hover:translate-x-1">→</span></p>
        </a>
        <a :href="`mailto:${company.email}`" class="card group p-8">
          <p class="font-mono text-xs text-brand-sky">/e-mail</p>
          <p class="mt-4 break-all text-2xl font-extrabold tracking-tight sm:text-3xl">{{ company.email }}</p>
          <p class="mt-4 text-sm font-bold text-cyan">Escrever <span class="inline-block transition group-hover:translate-x-1">→</span></p>
        </a>
      </div>

      <p class="mt-10 font-mono text-sm text-mute">// {{ company.legalName }}, CNPJ {{ company.cnpj }}.</p>
    </section>
  </div>
</template>

<script setup>
import { company, whatsappLink } from '~/utils/site'

useHead({
  title: 'Contato',
  meta: [{ name: 'description', content: 'Fale com a Wicity Soft por WhatsApp ou e-mail.' }]
})
</script>
