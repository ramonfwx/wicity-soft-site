<template>
  <!-- Fechamento: azul sólido, sem degradê -->
  <section class="bg-brand text-white">
    <div class="container-site section">
      <div v-reveal class="grid items-end gap-10 lg:grid-cols-12">
        <div class="lg:col-span-8">
          <h2 class="t-display max-w-[18ch] text-[clamp(2.2rem,5.4vw,4.4rem)]">Vamos transformar sua ideia em uma solução real?</h2>
          <p class="mt-6 max-w-[48ch] text-[1.1rem] text-blue-100">Conte o que você precisa. Respondemos com clareza sobre como podemos ajudar.</p>
        </div>
        <div class="lg:col-span-4 lg:text-right">
          <NuxtLink to="/contato" class="btn-white">Conversar sobre meu projeto <ArrowRight :size="18" :stroke-width="1.75" class="arrow" /></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>
