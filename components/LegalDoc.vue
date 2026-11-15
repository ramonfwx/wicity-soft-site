<template>
  <div>
    <section class="bg-night text-white">
      <div class="container-site pb-14 pt-16 md:pb-20 md:pt-24">
        <p class="eyebrow !text-blue-400">Legal</p>
        <h1 class="t-display mt-5 max-w-4xl text-[clamp(2.4rem,6vw,4.4rem)]">{{ title }}</h1>
        <p class="mt-5 font-mono text-xs text-mute-dark">Atualizada em {{ updated }}</p>
      </div>
    </section>
    <div class="container-site pb-20 pt-12 md:pb-28">
      <article class="legal max-w-[66ch]">
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
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #0f172a;
}
.legal p,
.legal li {
  margin-top: 0.75rem;
  line-height: 1.75;
  color: #475569;
}
.legal ul {
  list-style: disc;
  padding-left: 1.25rem;
}
.legal a {
  color: #2563eb;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.legal strong {
  color: #0f172a;
}
</style>
