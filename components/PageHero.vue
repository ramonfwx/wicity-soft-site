<template>
  <section class="bg-night text-white">
    <div class="container-site pb-16 pt-16 md:pb-24 md:pt-24">
      <p class="eyebrow rise !text-blue-400">{{ eyebrow }}</p>
      <h1 class="t-display rise mt-5 max-w-[20ch] text-[clamp(2.4rem,5.6vw,4.6rem)]" style="--d: 90ms"><slot /></h1>
      <p v-if="lede" class="rise mt-6 max-w-[54ch] text-[1.1rem] text-mute-dark" style="--d: 180ms">{{ lede }}</p>
      <div v-if="$slots.actions" class="rise mt-8 flex flex-wrap gap-3" style="--d: 270ms"><slot name="actions" /></div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  lede: { type: String, default: '' }
})
</script>
