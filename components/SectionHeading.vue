<template>
  <div v-reveal>
    <p class="eyebrow" :class="dark ? '!text-blue-400' : ''">{{ eyebrow }}</p>
    <h2 class="t-title mt-4 max-w-[20ch] text-[clamp(1.9rem,4.2vw,3.25rem)]" :class="dark ? 'text-white' : 'text-ink'"><slot name="title">{{ title }}</slot></h2>
    <p v-if="text" class="mt-5 max-w-[56ch] text-[1.05rem]" :class="dark ? 'text-mute-dark' : 'text-mute'">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, default: '' },
  text: { type: String, default: '' },
  dark: { type: Boolean, default: false }
})
</script>
