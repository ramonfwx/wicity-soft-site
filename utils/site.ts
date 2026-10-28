// Dados da empresa em um lugar só. Itens marcados com PENDENTE aguardam confirmação do usuário.
export const company = {
  name: 'Wicity Soft',
  legalName: 'WiCity Soft Desenvolvimento de Sistemas LTDA',
  cnpj: '69.026.726/0001-08',
  url: 'https://wicity.com.br',
  email: 'contato@wicity.com.br',
  whatsappNumber: '554491671595',
  whatsappLabel: '+55 44 9167-1595'
}

export const whatsappLink = (message = 'Olá! Vim pelo site da Wicity Soft.') =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`

export type Feature = { title: string; text: string }

export type Product = {
  id: string
  name: string
  tagline: string
  summary: string
  description: string
  href: string | null
  // endereço mostrado na tela, sem https://
  domain: string | null
  status: 'ativo' | 'em-breve'
  // cor do brilho atrás do celular do produto
  tint: string
  features: Feature[]
  // tipos de negócio que o produto atende (vindos do site do produto)
  audience: string[]
}

// Textos tirados dos sites atuais de cada produto. Não colocar números sem confirmar.
export const products: Product[] = [
  {
    id: 'hotspot',
    name: 'Wicity Hotspot',
    tagline: 'Transforme seu Wi-Fi em ferramenta de marketing',
    summary: 'Wi-Fi com portal de acesso, captura de contatos e cobrança via Pix.',
    description:
      'Quem conecta no Wi-Fi do seu negócio passa por um portal com a sua marca. Você fica com o contato e usa nas campanhas. Também dá para cobrar o acesso via Pix e vender anúncios em formato de stories para marcas parceiras.',
    href: 'https://wicity.com.br/',
    domain: 'wicity.com.br',
    status: 'ativo',
    tint: 'rgba(27, 118, 199, 0.55)',
    features: [
      { title: 'Portal com a sua marca', text: 'Página de acesso personalizada com a identidade do negócio.' },
      { title: 'Contatos para campanhas', text: 'Quem conecta deixa os dados, e você envia campanhas e promoções para essas pessoas.' },
      { title: 'Acesso cobrado via Pix', text: 'Cobre pelo acesso ao Wi-Fi e receba direto pelo Pix.' },
      { title: 'Anúncios em stories', text: 'Marcas parceiras anunciam para quem está conectado.' },
      { title: 'Vários pontos, um painel', text: 'Gerencie todas as unidades e acompanhe os conectados em tempo real.' }
    ],
    audience: ['Provedores', 'Hotéis', 'Restaurantes', 'Escolas', 'Co-workings', 'Cafeterias']
  },
  {
    id: 'linksouw',
    name: 'Linksouw',
    tagline: 'Um link. Tudo o que você faz.',
    summary: 'Instagram, WhatsApp, loja e vídeos em uma única página, com estatísticas de cada clique.',
    description:
      'Junte Instagram, WhatsApp, loja, portfólio e vídeos numa única página bonita e rápida. Coloque na bio e deixe seus seguidores acharem tudo. O plano básico é grátis para sempre, sem cartão.',
    href: 'https://linksouw.com.br/',
    domain: 'linksouw.com.br',
    status: 'ativo',
    tint: 'rgba(236, 72, 153, 0.42)',
    features: [
      { title: 'Loja na bio', text: 'Venda seus produtos com Pix, cartão ou pedido no WhatsApp.' },
      { title: 'Vídeos e músicas', text: 'Vídeos do YouTube e músicas do Spotify tocam direto na página.' },
      { title: 'Ícones das redes', text: 'Instagram, TikTok, WhatsApp e mais de 30 redes com o ícone certo, sozinho.' },
      { title: 'Links agendados', text: 'Programe uma promoção para aparecer e sumir na hora certa.' },
      { title: 'Estatísticas', text: 'Visitas, cliques e de onde vem cada visita.' },
      { title: 'QR Code grátis', text: 'Imprima no balcão, no cardápio ou no cartão de visita.' }
    ],
    audience: ['Confeitarias', 'DJs e músicos', 'Barbearias', 'Personal trainers', 'Lojas online', 'Streamers', 'Restaurantes']
  },
  {
    id: 'em-breve',
    name: 'O próximo produto',
    tagline: 'Ainda na prancheta',
    summary: 'Ainda na prancheta. Conte o seu problema para a gente.',
    description: 'O próximo produto da Wicity Soft ainda está na prancheta. Se você tem um problema que um software poderia resolver, conte para a gente.',
    href: null,
    domain: null,
    status: 'em-breve',
    tint: 'rgba(100, 116, 139, 0.4)',
    features: [],
    audience: []
  }
]

export const hotspotEquipment = ['Mikrotik', 'OpenWrt', 'Unifi']
