<template>
  <footer class="border-t border-line bg-night">
    <div class="container-custom py-16">
      <div class="grid gap-12 md:grid-cols-12">
        <div class="md:col-span-5">
          <p class="eyebrow">/* wicity soft */</p>
          <p class="h-display mt-3 max-w-[16ch] text-3xl sm:text-4xl">Software para quem vende na cidade.</p>
        </div>

        <div class="grid gap-10 sm:grid-cols-[1fr_1fr_1.5fr] md:col-span-7">
          <div>
            <h2 class="font-mono text-xs text-mute">/produtos</h2>
            <ul class="mt-4 space-y-2.5 text-[0.95rem]">
              <li v-for="p in products.filter((x) => x.href)" :key="p.id">
                <a :href="p.href" target="_blank" rel="noopener" class="text-ink/80 hover:text-cyan">{{ p.name }}</a>
              </li>
              <li><NuxtLink to="/produtos" class="text-ink/80 hover:text-cyan">Todos os produtos</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h2 class="font-mono text-xs text-mute">/empresa</h2>
            <ul class="mt-4 space-y-2.5 text-[0.95rem]">
              <li><NuxtLink to="/sobre" class="text-ink/80 hover:text-cyan">Sobre</NuxtLink></li>
              <li><NuxtLink to="/contato" class="text-ink/80 hover:text-cyan">Contato</NuxtLink></li>
              <li><NuxtLink to="/termos" class="text-ink/80 hover:text-cyan">Termos de uso</NuxtLink></li>
              <li><NuxtLink to="/privacidade" class="text-ink/80 hover:text-cyan">Privacidade</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h2 class="font-mono text-xs text-mute">/contato</h2>
            <ul class="mt-4 space-y-2.5 text-[0.95rem]">
              <li><a :href="whatsappLink()" target="_blank" rel="noopener" class="text-ink/80 hover:text-cyan">{{ company.whatsappLabel }}</a></li>
              <li><a :href="`mailto:${company.email}`" class="text-ink/80 hover:text-cyan">{{ company.email }}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <p class="mt-14 border-t border-line pt-6 text-sm text-mute">© {{ year }} {{ company.legalName }}. CNPJ {{ company.cnpj }}.</p>
    </div>
  </footer>
</template>

<script setup>
import { company, products, whatsappLink } from '~/utils/site'

const year = new Date().getFullYear()
</script>
