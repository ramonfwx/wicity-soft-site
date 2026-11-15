<template>
  <LegalDoc title="Termos de uso" updated="28 de outubro de 2026">
    <p>
      Este site é mantido pela {{ company.legalName }}, CNPJ {{ company.cnpj }} (“{{ company.name }}”). Ao navegar por ele, você concorda com os termos abaixo.
    </p>

    <h2>1. Sobre este site</h2>
    <p>
      Este site apresenta a empresa, os serviços de desenvolvimento de sites, sistemas e soluções em tecnologia, e os canais de contato. Cada projeto contratado segue as condições combinadas em proposta ou contrato próprio.
    </p>

    <h2>2. Uso permitido</h2>
    <ul>
      <li>Você pode navegar e consultar o conteúdo para fins pessoais ou profissionais.</li>
      <li>Não é permitido tentar acessar áreas restritas, interferir no funcionamento do site ou usá-lo para fins ilícitos.</li>
    </ul>

    <h2>3. Propriedade intelectual</h2>
    <p>
      Nome, marca, logotipo, textos, ilustrações e código deste site pertencem à {{ company.name }} ou são usados com autorização. A reprodução depende de autorização prévia, exceto nos casos previstos em lei.
    </p>

    <h2>4. Informações do site</h2>
    <p>
      Fazemos o possível para manter as informações corretas e atualizadas, mas elas podem mudar sem aviso, como a lista de serviços. Para condições comerciais, fale conosco.
    </p>

    <h2>5. Links para outros sites</h2>
    <p>
      O site contém links para serviços de terceiros, como o WhatsApp. Não controlamos o conteúdo nem as políticas de privacidade de sites de terceiros.
    </p>

    <h2>6. Alterações</h2>
    <p>Podemos atualizar estes termos a qualquer momento. A data da última atualização fica no topo desta página.</p>

    <h2>7. Foro e contato</h2>
    <p>
      Fica eleito o foro da comarca de domicílio da {{ company.name }} para resolver dúvidas sobre estes termos, sem prejuízo de direitos do consumidor previstos em lei. Dúvidas: <a :href="`mailto:${company.email}`">{{ company.email }}</a>.
    </p>
  </LegalDoc>
</template>

<script setup>
import { company } from '~/utils/site'

useHead({
  title: 'Termos de uso',
  meta: [{ name: 'description', content: 'Termos de uso do site da Wicity Soft.' }]
})
</script>
