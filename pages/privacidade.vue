<template>
  <LegalDoc title="Política de privacidade" updated="28 de outubro de 2026">
    <p>
      Esta política explica como a {{ company.legalName }}, CNPJ {{ company.cnpj }} (“Wicity Soft”), trata dados pessoais neste site, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018, a LGPD).
    </p>

    <h2>1. Quais dados tratamos</h2>
    <ul>
      <li>
        <strong>Dados que você nos envia:</strong> ao nos chamar por e-mail ou WhatsApp, recebemos seu nome, contato e o conteúdo da mensagem. Usamos esses dados apenas para responder e dar andamento ao assunto.
      </li>
      <li>
        <strong>Dados técnicos de navegação:</strong> ao acessar o site, servidores de hospedagem e de entrega de conteúdo registram dados como endereço IP, navegador e página acessada, para segurança e funcionamento.
      </li>
    </ul>
    <p>Este site não tem formulários de cadastro, não exige login e, até esta data, não usa cookies de publicidade ou de análise.</p>

    <h2>2. Fontes carregadas de terceiros</h2>
    <p>
      O site carrega fontes de letra do Google Fonts, o que envia seu endereço IP e dados do navegador ao Google. Ao clicar em links para o WhatsApp ou para os sites dos produtos, você passa a seguir as regras de privacidade desses serviços.
    </p>

    <h2>3. Para que usamos e com que base legal</h2>
    <ul>
      <li>Responder a contatos e pedidos: execução de procedimentos preliminares a um contrato e legítimo interesse.</li>
      <li>Manter o site seguro e funcionando: legítimo interesse.</li>
      <li>Cumprir obrigações legais: quando a lei exigir.</li>
    </ul>

    <h2>4. Compartilhamento</h2>
    <p>
      Não vendemos dados pessoais. Podemos compartilhá-los com provedores que nos ajudam a operar o site e o atendimento (hospedagem, e-mail e mensagens), e com autoridades quando houver obrigação legal.
    </p>

    <h2>5. Por quanto tempo guardamos</h2>
    <p>
      Mantemos mensagens de contato pelo tempo necessário para atender o pedido e cumprir obrigações legais. Depois, os dados são apagados ou anonimizados.
    </p>

    <h2>6. Seus direitos</h2>
    <p>
      Você pode pedir confirmação de tratamento, acesso, correção, anonimização, eliminação, portabilidade, informações sobre compartilhamento e a revogação de consentimento, nos termos da LGPD. Basta escrever para <a :href="`mailto:${company.email}`">{{ company.email }}</a>. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
    </p>

    <h2>7. Produtos da Wicity Soft</h2>
    <p>
      O Wicity Hotspot, o Linksouw e os demais produtos tratam dados de seus próprios usuários e têm políticas de privacidade próprias, publicadas nos respectivos sites.
    </p>

    <h2>8. Alterações</h2>
    <p>Se esta política mudar, a nova versão será publicada aqui, com a data de atualização no topo.</p>
  </LegalDoc>
</template>

<script setup>
import { company } from '~/utils/site'

useHead({
  title: 'Política de privacidade',
  meta: [{ name: 'description', content: 'Como a Wicity Soft trata dados pessoais neste site, conforme a LGPD.' }]
})
</script>
