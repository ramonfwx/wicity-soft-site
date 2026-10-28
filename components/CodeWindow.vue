<template>
  <!-- Janela de código decorativa: lista os produtos como se fosse um arquivo de configuração -->
  <div class="overflow-hidden rounded-2xl border border-line bg-night-800/80 shadow-2xl shadow-black/50 backdrop-blur" aria-hidden="true">
    <div class="flex items-center gap-2 border-b border-line px-4 py-3">
      <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
      <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
      <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
      <span class="ml-3 font-mono text-xs text-mute">wicity.config.ts</span>
    </div>
    <div class="overflow-x-auto px-4 py-4 font-mono text-[0.72rem] leading-6 sm:text-xs">
      <div v-for="(l, i) in lines" :key="i" class="flex gap-5">
        <span class="w-4 shrink-0 select-none text-right text-mute/50">{{ i + 1 }}</span>
        <span class="type-line" :style="{ '--n': l.len, '--d': `${0.5 + i * 0.85}s` }" v-html="l.html"></span>
      </div>
      <div class="flex gap-5">
        <span class="w-4 shrink-0 select-none text-right text-mute/50">{{ lines.length + 1 }}</span>
        <span class="caret"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
const c = (cls, t) => `<span class="${cls}">${t}</span>`
const com = (t) => c('text-mute/70 italic', t)
const kw = (t) => c('text-[#c4a7ff]', t)
const key = (t) => c('text-[#7fd1ff]', t)
const str = (t) => c('text-[#7ee8a8]', t)
const num = (t) => c('text-[#ffb86b]', t)

// len = quantidade de caracteres visíveis da linha (controla a largura da animação)
const lines = [
  { len: 38, html: com('// Wicity Soft · produtos próprios') },
  { len: 39, html: `${kw('const')} produtos = ${kw('await')} wicity.${key('listar')}({` },
  { len: 36, html: `  ${key('no_ar')}: [${str('"hotspot"')}, ${str('"linksouw"')}],` },
  { len: 17, html: `  ${key('em_obras')}: ${num('1')},` },
  { len: 39, html: `  ${key('site')}: ${str('"um para cada produto"')},` },
  { len: 36, html: `  ${key('mantido_por')}: ${str('"nós"')}` },
  { len: 3, html: '});' }
]
</script>
