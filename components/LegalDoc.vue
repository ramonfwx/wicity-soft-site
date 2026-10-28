<template>
  <div>
    <section class="relative overflow-hidden border-b border-line">
      <div class="dots absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"></div>
      <div class="container-custom relative pb-12 pt-16 md:pb-16 md:pt-24">
        <p class="tag">// legal</p>
        <h1 class="h-display mt-6 max-w-4xl text-4xl sm:text-6xl">{{ title }}</h1>
        <p class="mt-4 font-mono text-xs text-mute">Atualizada em {{ updated }}</p>
      </div>
    </section>
    <div class="container-custom py-12 md:py-16">
      <article class="legal max-w-[68ch]">
        <slot />
      </article>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  updated: { type: String, required: true }
})
</script>

<style>
.legal h2 {
  margin-top: 2.25rem;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #e8f0f8;
}
.legal p,
.legal li {
  margin-top: 0.75rem;
  line-height: 1.75;
  color: #8fa3b5;
}
.legal ul {
  list-style: disc;
  padding-left: 1.25rem;
}
.legal a {
  color: #00ccff;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.legal strong {
  color: #e8f0f8;
}
</style>
