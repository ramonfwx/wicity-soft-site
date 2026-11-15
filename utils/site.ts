// Todo o conteúdo editável do site fica aqui.
export const company = {
  name: 'Wicity Soft',
  tagline: 'Software sob medida.',
  legalName: 'WiCity Soft Desenvolvimento de Sistemas LTDA',
  cnpj: '69.026.726/0001-08',
  url: 'https://wicity.com.br',
  email: 'contato@wicity.com.br',
  whatsappNumber: '554491671595',
  whatsappLabel: '+55 44 9167-1595'
}

export const whatsappLink = (message = `Olá! Vim pelo site da ${company.name} e quero conversar sobre um projeto.`) =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`

// Redes sociais: preencha o href para aparecerem no rodapé. Vazio = não aparece.
export const socials: { label: string; href: string }[] = [
  { label: 'Instagram', href: '' },
  { label: 'LinkedIn', href: '' },
  { label: 'GitHub', href: '' }
]

export const nav = [
  { label: 'Início', to: '/' },
  { label: 'Soluções', to: '/solucoes' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Processo', to: '/#processo' },
  { label: 'Contato', to: '/contato' }
]

// Projetos do portfólio. Para adicionar um: copie um item e troque os campos.
// image: arquivo em /public/projetos (captura autorizada). Sem image, aparece um espaço reservado identificado.
export type Project = {
  slug: string
  name: string
  category: string
  summary: string
  description: string
  href: string
  domain: string
  image?: string
  features: string[]
  // texto extra exibido no case quando o conteúdo ainda precisa de confirmação
  pending?: string
}

export const projects: Project[] = [
  {
    slug: 'linksouw',
    name: 'Linksouw',
    category: 'Plataforma web',
    summary: 'Uma página de bio para reunir links, redes sociais, loja e conteúdo em um só lugar.',
    description:
      'Plataforma para reunir Instagram, WhatsApp, loja, portfólio e vídeos em uma única página, pensada para ser colocada na bio. Cada pessoa ou negócio escolhe o próprio endereço, personaliza a aparência e acompanha as visitas e os cliques.',
    href: 'https://linksouw.com.br/',
    domain: 'linksouw.com.br',
    image: '/projetos/linksouw.jpg',
    features: [
      'Loja na bio com Pix, cartão ou pedido no WhatsApp',
      'Vídeos do YouTube e músicas do Spotify na própria página',
      'Ícones de mais de 30 redes reconhecidos automaticamente',
      'Links agendados para aparecer e sumir na hora certa',
      'Temas, fontes e cores personalizáveis, com domínio próprio',
      'Estatísticas de visitas, cliques e origem do acesso',
      'QR Code para imprimir em balcão, cardápio e cartão'
    ]
  },
  {
    slug: 'wicity',
    name: 'WiCity',
    category: 'Produto SaaS',
    summary: 'Hotspot e Wi-Fi marketing com gestão, captação de contatos e cobrança por Pix.',
    description:
      'Solução que transforma o Wi-Fi de um negócio em ferramenta de marketing: portal de acesso com a marca da empresa, gestão dos conectados, captação de contatos para campanhas e cobrança pelo acesso via Pix. Funciona com os principais concentradores do mercado.',
    href: 'https://wicity.com.br/',
    domain: 'wicity.com.br',
    image: '/projetos/wicity.jpg',
    features: [
      'Portal de acesso personalizado com a identidade da empresa',
      'Gestão dos clientes conectados em tempo real',
      'Captação de contatos para campanhas e promoções',
      'Cobrança pelo acesso via Pix',
      'Anúncios em formato de stories para quem está conectado',
      'Vários pontos de acesso em um único painel',
      'Compatível com Mikrotik, OpenWrt e Unifi'
    ]
  },
  {
    slug: 'central-jsouzanet',
    name: 'Central JSouzaNet',
    category: 'Aplicação web',
    summary: 'Central web de atendimento da JSouzaNet.',
    description: 'Aplicação web de central de atendimento, de uso interno da equipe.',
    href: 'https://central.jsouzanet.com.br/atendente/#/inicio',
    domain: 'central.jsouzanet.com.br',
    features: [],
    pending: 'A área é restrita e ainda não há captura de tela autorizada. A descrição será detalhada após confirmação com o responsável.'
  }
]

export const services = [
  { icon: 'Code2', title: 'Sistemas sob medida', text: 'Para quando planilhas e sistemas prontos já não acompanham o jeito que sua empresa trabalha.' },
  { icon: 'PanelsTopLeft', title: 'Plataformas web', text: 'Portais, painéis e aplicações no navegador, para clientes, equipe ou parceiros.' },
  { icon: 'Smartphone', title: 'Aplicações e experiências mobile', text: 'Apps e telas pensadas para o celular, onde seu cliente e sua equipe já estão.' },
  { icon: 'Workflow', title: 'Integrações e automações', text: 'Conectamos os sistemas que você já usa e eliminamos tarefas repetidas e digitação em duplicidade.' },
  { icon: 'ChartNoAxesCombined', title: 'Dados e dashboards', text: 'Informação espalhada vira painel claro, para decidir com mais segurança.' },
  { icon: 'ShieldCheck', title: 'Manutenção e evolução', text: 'Acompanhamento depois da entrega: correções, ajustes e novas funcionalidades.' }
]

export const process = [
  { n: '01', title: 'Descoberta', text: 'Entendemos o negócio, o problema e quem vai usar a solução.' },
  { n: '02', title: 'Planejamento', text: 'Definimos escopo, prioridades e etapas antes de escrever código.' },
  { n: '03', title: 'Desenvolvimento', text: 'Construímos em ciclos, com entregas que você acompanha e valida.' },
  { n: '04', title: 'Entrega e evolução', text: 'Publicamos, orientamos o uso e seguimos melhorando.' }
]

// PENDENTE: confirmar com o usuário que todos estes pontos são de fato oferecidos.
export const differentials = [
  { title: 'Desenvolvimento adaptado ao negócio', text: 'A solução segue o seu processo, e não um modelo pronto.' },
  { title: 'Comunicação próxima', text: 'Você fala direto com quem constrói o seu projeto.' },
  { title: 'Organização', text: 'Escopo, etapas e combinados registrados e claros.' },
  { title: 'Escalabilidade', text: 'Base preparada para crescer junto com a operação.' },
  { title: 'Manutenção contínua', text: 'Depois do lançamento, seguimos cuidando do sistema.' }
]
