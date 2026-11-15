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
  titleTemplate: (chunk) => (!chunk ? company.name : chunk.includes(company.name) ? chunk : `${chunk} | ${company.name}`),
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
        description: 'Desenvolvimento de sites, sistemas sob medida, lojas virtuais, aplicativos, integrações e automações.',
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
