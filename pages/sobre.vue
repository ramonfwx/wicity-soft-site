<template>
  <div>
    <section class="relative overflow-hidden border-b border-line">
      <div class="dots absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"></div>
      <div class="container-custom relative pb-14 pt-16 md:pb-20 md:pt-24">
        <p class="tag rise">// sobre</p>
        <h1 class="h-display rise mt-6 max-w-[20ch] text-[clamp(2.4rem,6vw,4.6rem)]" style="--d: 100ms">
          Projetamos, publicamos e mantemos os <span class="grad-text">nossos softwares.</span>
        </h1>
      </div>
    </section>

    <section class="container-custom grid gap-12 py-16 md:py-24 lg:grid-cols-12">
      <div class="space-y-5 text-lg text-mute lg:col-span-6">
        <p>
          O <strong class="text-ink">Wicity Hotspot</strong> transforma o Wi-Fi de empresas em captação de contatos e receita. O <strong class="text-ink">Linksouw</strong> reúne links, loja e estatísticas em uma página.
        </p>
        <p>Cada produto tem marca e site próprios. A empresa é quem está por trás dos dois, e dos que vêm a seguir.</p>
        <NuxtLink to="/produtos" class="btn-ghost mt-2">Ver os produtos</NuxtLink>
      </div>

      <div class="lg:col-span-6">
        <p class="eyebrow">/* dados da empresa */</p>
        <dl class="card mt-4 divide-y divide-line">
          <div class="grid gap-1 p-5 sm:grid-cols-[9rem_1fr] sm:gap-6"><dt class="font-mono text-xs text-mute sm:pt-1">razao_social</dt><dd>{{ company.legalName }}</dd></div>
          <div class="grid gap-1 p-5 sm:grid-cols-[9rem_1fr] sm:gap-6"><dt class="font-mono text-xs text-mute sm:pt-1">cnpj</dt><dd>{{ company.cnpj }}</dd></div>
          <div class="grid gap-1 p-5 sm:grid-cols-[9rem_1fr] sm:gap-6"><dt class="font-mono text-xs text-mute sm:pt-1">e-mail</dt><dd><a :href="`mailto:${company.email}`" class="text-cyan hover:underline">{{ company.email }}</a></dd></div>
          <div class="grid gap-1 p-5 sm:grid-cols-[9rem_1fr] sm:gap-6"><dt class="font-mono text-xs text-mute sm:pt-1">whatsapp</dt><dd><a :href="whatsappLink()" target="_blank" rel="noopener" class="text-cyan hover:underline">{{ company.whatsappLabel }}</a></dd></div>
        </dl>
      </div>
    </section>
  </div>
</template>

<script setup>
import { company, whatsappLink } from '~/utils/site'

useHead({
  title: 'Sobre',
  meta: [{ name: 'description', content: 'A Wicity Soft projeta, publica e mantém os próprios softwares, como o Wicity Hotspot e o Linksouw.' }]
})
</script>
