// https://nuxt.com/docs/api/configuration/nuxt-config
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
      title: 'Wicity Soft | Desenvolvimento de softwares e sistemas',
      meta: [
        { name: 'description', content: 'A Wicity Soft desenvolve softwares e sistemas próprios, como o Wicity Hotspot e o Linksouw. Conheça a empresa e os produtos.' },
        { name: 'theme-color', content: '#070b14' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:site_name', content: 'Wicity Soft' },
        { property: 'og:title', content: 'Wicity Soft | Desenvolvimento de softwares e sistemas' },
        { property: 'og:description', content: 'Softwares e sistemas próprios, cada um com identidade e site próprios.' },
        { property: 'og:image', content: 'https://wicity.com.br/brand/icone-512.png' },
        { name: 'twitter:card', content: 'summary' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/brand/icone-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/brand/icone-16.png' },
        { rel: 'apple-touch-icon', href: '/brand/icone-180.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400..800&family=JetBrains+Mono:wght@400;500&display=swap' }
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
