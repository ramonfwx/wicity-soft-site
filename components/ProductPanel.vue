<template>
  <!-- Palco escuro com brilho na cor do produto e o celular no centro -->
  <div class="relative flex items-center justify-center overflow-hidden rounded-2xl border border-line bg-night-800" :style="{ minHeight: minHeight }">
    <div class="dots absolute inset-0 opacity-60"></div>
    <div class="glow-pulse absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" :style="{ backgroundColor: tint }"></div>
    <ProductMock :kind="kind" class="relative my-14 scale-[1.15]" />
  </div>
</template>

<script setup>
defineProps({
  kind: { type: String, required: true },
  // cor do brilho atrás do celular
  tint: { type: String, required: true },
  minHeight: { type: String, default: '460px' }
})
</script>
