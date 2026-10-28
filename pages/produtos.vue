<template>
  <div>
    <section class="relative overflow-hidden border-b border-line">
      <div class="dots absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"></div>
      <div class="container-custom relative pb-14 pt-16 md:pb-20 md:pt-24">
        <p class="tag rise">// produtos</p>
        <h1 class="h-display rise mt-6 text-[clamp(2.7rem,7vw,5.2rem)]" style="--d: 100ms">Nossos <span class="grad-text">produtos</span></h1>
        <p class="rise mt-6 max-w-[52ch] text-lg text-mute" style="--d: 200ms">
          Softwares independentes. Cada um resolve um problema, tem site próprio e atende um tipo de negócio.
        </p>
        <nav class="rise mt-9 flex flex-wrap gap-3" style="--d: 300ms" aria-label="Produtos nesta página">
          <a v-for="p in products" :key="p.id" :href="`#${p.id}`" class="btn-ghost !px-4 !py-2 font-mono !text-xs">{{ p.name }}</a>
        </nav>
      </div>
    </section>

    <!-- Wicity Hotspot -->
    <section id="hotspot" class="container-custom grid scroll-mt-24 items-start gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-x-14">
      <div class="lg:col-span-5 lg:sticky lg:top-28">
        <ProductPanel kind="hotspot" :tint="hotspot.tint" min-height="540px" />
      </div>
      <div class="lg:col-span-7">
        <p class="flex items-center gap-2 font-mono text-xs text-mute"><span class="h-1.5 w-1.5 rounded-full bg-[#28c840]"></span>/01 · no ar</p>
        <h2 class="h-display mt-4 text-4xl sm:text-6xl">{{ hotspot.name }}</h2>
        <p class="mt-3 text-xl font-bold text-cyan">{{ hotspot.tagline }}</p>
        <p class="mt-5 max-w-[56ch] text-lg text-mute">{{ hotspot.description }}</p>

        <div class="mt-9 grid gap-4 sm:grid-cols-2">
          <SpotCard v-for="(f, i) in hotspot.features" :key="f.title" class="p-5">
            <p class="font-mono text-xs text-brand-sky">/0{{ i + 1 }}</p>
            <h3 class="mt-2 font-bold">{{ f.title }}</h3>
            <p class="mt-1 text-[0.95rem] text-mute">{{ f.text }}</p>
          </SpotCard>
        </div>
        <div class="mt-7 flex flex-wrap items-center gap-2">
          <span class="mr-1 font-mono text-xs text-mute">feito para</span>
          <span v-for="a in hotspot.audience" :key="a" class="rounded-md border border-line px-2.5 py-1 text-sm text-ink/80">{{ a }}</span>
        </div>
        <p class="mt-6 font-mono text-sm text-mute">// Funciona com {{ hotspotEquipment.slice(0, -1).join(', ') }} e {{ hotspotEquipment.at(-1) }}.</p>
        <a :href="hotspot.href" target="_blank" rel="noopener" class="btn-grad mt-7">Visitar o site do Hotspot</a>
      </div>
    </section>

    <!-- Linksouw -->
    <section id="linksouw" class="border-t border-line">
      <div class="container-custom grid scroll-mt-24 items-start gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-x-14">
        <div class="order-2 lg:order-1 lg:col-span-7">
          <p class="flex items-center gap-2 font-mono text-xs text-mute"><span class="h-1.5 w-1.5 rounded-full bg-[#28c840]"></span>/02 · no ar</p>
          <h2 class="h-display mt-4 text-4xl sm:text-6xl">{{ linksouw.name }}</h2>
          <p class="mt-3 text-xl font-bold text-cyan">{{ linksouw.tagline }}</p>
          <p class="mt-5 max-w-[56ch] text-lg text-mute">{{ linksouw.description }}</p>

          <div class="mt-9 grid gap-4 sm:grid-cols-2">
            <SpotCard v-for="(f, i) in linksouw.features" :key="f.title" class="p-5">
              <p class="font-mono text-xs text-brand-sky">/0{{ i + 1 }}</p>
              <h3 class="mt-2 font-bold">{{ f.title }}</h3>
              <p class="mt-1 text-[0.95rem] text-mute">{{ f.text }}</p>
            </SpotCard>
          </div>
          <div class="mt-7 flex flex-wrap items-center gap-2">
            <span class="mr-1 font-mono text-xs text-mute">feito para</span>
            <span v-for="a in linksouw.audience" :key="a" class="rounded-md border border-line px-2.5 py-1 text-sm text-ink/80">{{ a }}</span>
          </div>
          <a :href="linksouw.href" target="_blank" rel="noopener" class="btn-grad mt-7">Visitar o site do Linksouw</a>
        </div>
        <div class="order-1 lg:order-2 lg:col-span-5 lg:sticky lg:top-28">
          <ProductPanel kind="linksouw" :tint="linksouw.tint" min-height="540px" />
        </div>
      </div>
    </section>

    <!-- Em obras -->
    <section id="em-breve" class="scroll-mt-24 border-t border-line">
      <div class="container-custom py-16 md:py-24">
        <div class="card border-dashed p-8 md:p-12">
          <p class="flex items-center gap-2 font-mono text-xs text-mute"><span class="h-1.5 w-1.5 rounded-full bg-amber"></span>/03 · em obras</p>
          <h2 class="h-display mt-4 text-4xl sm:text-6xl">{{ soon.name }}</h2>
          <p class="mt-5 max-w-[56ch] text-lg text-mute">{{ soon.description }}</p>
          <a :href="whatsappLink('Olá! Quero saber dos próximos produtos da Wicity Soft.')" target="_blank" rel="noopener" class="btn-ghost mt-7">Perguntar pelas novidades</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { hotspotEquipment, products, whatsappLink } from '~/utils/site'

useHead({
  title: 'Produtos',
  meta: [{ name: 'description', content: 'Os produtos da Wicity Soft: Wicity Hotspot (Wi-Fi com portal, leads e Pix), Linksouw (página de links com loja) e o próximo em obras.' }]
})

const hotspot = products.find((p) => p.id === 'hotspot')
const linksouw = products.find((p) => p.id === 'linksouw')
const soon = products.find((p) => p.id === 'em-breve')
</script>
