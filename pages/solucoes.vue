<template>
  <div>
    <PageHero eyebrow="Soluções" lede="Resolvemos problemas do dia a dia da sua empresa com tecnologia desenhada para ela.">
      O que a gente desenvolve.
    </PageHero>

    <section class="section bg-snow">
      <div class="container-site"><ServicesGrid /></div>
    </section>

    <section class="section bg-night text-white">
      <div class="container-site">
        <SectionHeading dark eyebrow="Processo" title="Como um projeto acontece." />
        <div class="mt-16"><ProcessTimeline /></div>
      </div>
    </section>

    <FinalCta />
  </div>
</template>

<script setup>
useHead({
  title: 'Soluções',
  meta: [{ name: 'description', content: 'Sistemas sob medida, plataformas web, aplicações mobile, integrações e automações, dashboards e manutenção.' }]
})
</script>
