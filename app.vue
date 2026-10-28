<template>
  <div>
    <TheHeader />
    <main>
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { company } from '~/utils/site'

useHead({
  titleTemplate: (chunk) => (!chunk ? 'Wicity Soft' : chunk.includes('Wicity Soft') ? chunk : `${chunk} | Wicity Soft`),
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: company.name,
        legalName: company.legalName,
        taxID: company.cnpj,
        vatID: company.cnpj,
        url: company.url,
        logo: `${company.url}/brand/icone-512.png`,
        image: `${company.url}/brand/icone-512.png`,
        description: 'Desenvolvedora de softwares e sistemas com produtos próprios, como o Wicity Hotspot e o Linksouw.',
        email: company.email,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: `+${company.whatsappNumber}`,
          email: company.email,
          areaServed: 'BR',
          availableLanguage: 'Portuguese'
        }
      })
    }
  ]
})
</script>
