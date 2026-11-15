<template>
  <!-- Moldura de navegador para capturas de tela reais. Sem imagem, mostra um espaço reservado identificado. -->
  <div class="overflow-hidden rounded-card border border-line bg-white">
    <div class="flex items-center gap-1.5 border-b border-line bg-snow px-4 py-2.5">
      <span class="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
      <span class="ml-3 truncate rounded-md border border-line bg-white px-3 py-0.5 font-mono text-[0.7rem] text-mute">{{ domain }}</span>
    </div>
    <img v-if="src" :src="src" :alt="alt" :width="800" :height="640" :loading="eager ? 'eager' : 'lazy'" decoding="async" class="aspect-[5/4] w-full object-cover object-top" />
    <div v-else class="grid aspect-[5/4] place-items-center bg-snow-2 p-8 text-center">
      <div>
        <Lock :size="22" :stroke-width="1.75" class="mx-auto text-mute" />
        <p class="mt-3 text-[0.9rem] font-medium text-ink">Captura de tela pendente</p>
        <p class="mt-1 max-w-[30ch] text-[0.82rem] text-mute">Área restrita. A imagem será adicionada quando houver uma captura autorizada.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Lock } from 'lucide-vue-next'

defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  domain: { type: String, required: true },
  eager: { type: Boolean, default: false }
})
</script>
