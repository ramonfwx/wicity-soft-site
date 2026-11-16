// https://nuxt.com/docs/api/configuration/nuxt-config
// Prefixo da publicação (GitHub Pages usa /wicity-soft-site/); vazio em dev e no domínio próprio
const base = (process.env.NUXT_APP_BASE_URL || '/').replace(/\/$/, '')

export default defineNuxtConfig({
  devtools: { enabled: false },

  devServer: {
    port: 3010
  },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/sitemap'],

  site: {
    url: 'https://wicity.com.br',
    name: 'Wicity Soft'
  },

  sitemap: {
    discoverImages: false
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Wicity Soft | Sites, sistemas e soluções em tecnologia',
      meta: [
        { name: 'description', content: 'Desenvolvemos sites, sistemas sob medida, lojas virtuais, aplicativos, integrações e automações para empresas que querem crescer com tecnologia.' },
        { name: 'theme-color', content: '#0B1220' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:site_name', content: 'Wicity Soft' },
        { property: 'og:title', content: 'Wicity Soft | Sites, sistemas e soluções em tecnologia' },
        { property: 'og:description', content: 'Sites, sistemas sob medida, aplicativos e integrações para o seu negócio.' },
        { property: 'og:image', content: 'https://wicity.com.br/brand/icone-512.png' },
        { name: 'twitter:card', content: 'summary' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: `${base}/favicon.ico` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${base}/brand/icone-32.png` },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${base}/brand/icone-16.png` },
        { rel: 'apple-touch-icon', href: `${base}/brand/icone-180.png` },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@400;500&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  // O caminho do projeto tem espaço ("Wicity Soft"): sem isto o Vite devolve 403 em /node_modules no dev.
  vite: {
    server: { fs: { strict: false } }
  },

  compatibilityDate: '2024-07-30'
})
