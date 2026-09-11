// Conteúdo central do site REVOM STUDIO DETAIL.
// Edite este arquivo para atualizar textos, imagens e dados de contato do site inteiro.

export const business = {
  name: 'REVOM',
  fullName: 'REVOM STUDIO DETAIL',
  tagline: 'Tratamento Detalhado Técnico & Proteção',
  slogan: 'Seu sonho deseja REVOM!',
  city: 'Itapevi',
  state: 'SP',
  address: {
    street: 'R. Edmundo Pagiossi Filho, 25',
    neighborhood: 'Jardim Rosemary',
    cityState: 'Itapevi - SP',
    zip: '06657-200',
  },
  phoneDisplay: '(11) 96829-0280',
  phoneWhatsapp: '5511968290280',
  instagramHandle: '@revom.studio',
  instagramUrl: 'https://www.instagram.com/revom.studio',
  googleRating: 5.0,
  googleReviewCount: 10,
  googleReviewsUrl: 'https://www.google.com/search?q=revom+studio+detail+itapevi',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=R.+Edmundo+Pagiossi+Filho%2C+25%2C+Jardim+Rosemary%2C+Itapevi+-+SP%2C+06657-200',
  mapsEmbedUrl: 'https://www.google.com/maps?q=R.+Edmundo+Pagiossi+Filho,+25,+Jardim+Rosemary,+Itapevi+-+SP,+06657-200&output=embed',
}

export function waLink(message: string) {
  return `https://wa.me/${business.phoneWhatsapp}?text=${encodeURIComponent(message)}`
}

export const whatsapp = {
  hero: waLink('Olá! Gostaria de solicitar uma avaliação para o meu veículo na Revom Studio Detail.'),
  services: waLink('Olá! Vi os serviços da Revom Studio Detail e gostaria de mais informações.'),
  nav: waLink('Olá! Gostaria de solicitar uma avaliação na Revom Studio Detail.'),
  finalCta: waLink('Olá! Quero começar meu projeto na Revom Studio Detail. Pode me ajudar?'),
  location: waLink('Olá! Gostaria de falar sobre um atendimento na Revom Studio Detail.'),
}

// Hrefs com "/" na frente para funcionar tanto na home quanto nas páginas de
// planos (rota separada) — o navegador volta para a home e rola até a âncora.
export const nav = [
  { label: 'Início', href: '/#hero' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Planos', href: '/#planos' },
  { label: 'Sobre', href: '/#vini' },
  { label: 'Contato', href: '/#localizacao' },
]

// Placeholders premium — substituir por fotografias reais da Revom.
export const images = {
  // Fundo da Hero, reaproveitado também como fundo do CTA final.
  heroPoster: '/images/hero.png',
  finalCtaBg: '/images/hero.png',
  vini: '/images/vini_revom.png',
  services: {
    ppf: '/images/services/ppf.png',
    ceramic: '/images/services/ceramica.jpeg',
    detailing: '/images/services/detalhamento.jpeg',
    paintCorrection: '/images/services/correcao-pintura.jpeg',
  },
  // Trabalhos reais da Revom.
  gallery: [
    { src: '/images/gallery/ranger-traseira.jpeg', caption: 'Ford Ranger' },
    { src: '/images/gallery/audi-frente.jpeg', caption: 'Audi RS3' },
    { src: '/images/gallery/fiat-interior.jpeg', caption: 'Fiat — Interior' },
    { src: '/images/gallery/nissan-interior.jpeg', caption: 'Nissan — Interior' },
  ],
  instagramShowcase: '/images/instagram-showcase.png',
}

export const services = [
  {
    number: '01',
    name: 'PPF',
    description: 'Proteção avançada para preservar a pintura do veículo.',
    image: images.services.ppf,
  },
  {
    number: '02',
    name: 'REVESTIMENTO CERÂMICO',
    description: 'Proteção, profundidade e acabamento para preservar a pintura.',
    image: images.services.ceramic,
  },
  {
    number: '03',
    name: 'DETALHAMENTO',
    description: 'Detalhamento técnico em cada superfície e acabamento.',
    image: images.services.detailing,
  },
  {
    number: '04',
    name: 'CORREÇÃO DE PINTURA',
    description: 'Recuperação técnica do acabamento e da profundidade da pintura.',
    image: images.services.paintCorrection,
  },
]

// Demais serviços do catálogo — agrupados por categoria (não são os planos
// de tratamento nem os 4 destaques do carrossel de "Nossas Soluções").
// `image` usa fotos que já temos, só como teste — trocar pelas fotos reais
// de cada categoria assim que a Revom mandar.
export const otherServices = [
  {
    slug: 'higienizacao-bancos',
    number: '01',
    name: 'Higienização de Bancos',
    description: 'Limpeza profunda, desinfecção e hidratação de bancos de couro ou tecido.',
    priceLabel: 'A partir de R$ 195,00',
    image: images.gallery[2].src,
  },
  {
    slug: 'protecao-vitrificacao',
    number: '02',
    name: 'Proteção & Vitrificação',
    description: 'Vitrificação de pintura, plásticos, motor, faróis e bancos, com proteção de longa duração.',
    priceLabel: 'A partir de R$ 237,90',
    image: images.services.ppf,
  },
  {
    slug: 'polimento',
    number: '03',
    name: 'Polimento',
    description: 'Preparação, descontaminação e polimento completo da pintura, com proteção final.',
    priceLabel: 'R$ 730,00',
    image: images.services.detailing,
  },
  {
    slug: 'moto-detail',
    number: '04',
    name: 'Moto Detail',
    description: 'Tratamento técnico completo para motos, com proteção prolongada.',
    priceLabel: 'R$ 189,00',
    image: images.gallery[0].src,
  },
  {
    slug: 'servicos-extras',
    number: '05',
    name: 'Serviços Extras',
    description: 'Descontaminação, cristalização, enceramento técnico e aplicações avulsas de PPF.',
    priceLabel: 'A partir de R$ 120,00',
    image: images.services.paintCorrection,
  },
]

export const founder = {
  name: 'Vinícius Loyola',
  role: 'Fundador & especialista em detalhamento automotivo',
}

export const certifications = [
  { number: '01', name: 'CERTIFICAÇÃO 01', area: 'Detalhamento Automotivo' },
  { number: '02', name: 'CERTIFICAÇÃO 02', area: 'Proteção de Pintura' },
  { number: '03', name: 'CERTIFICAÇÃO 03', area: 'PPF' },
  { number: '04', name: 'CERTIFICAÇÃO 04', area: 'Revestimento Cerâmico' },
]

// Avaliações reais de clientes — 5 estrelas. Nome e foto de cada um em
// public/images/testimonials/.
export const testimonials = [
  {
    name: 'Bruno Simões',
    avatar: '/images/testimonials/bruno-simoes.png',
    quote:
      'Super recomendamos os serviços da Revom! Fizemos o Tratamento Max, nosso carro ficou perfeito, o nível de detalhamento é excelente. O atendimento e recepção do Vini e da equipe fizeram toda diferença. Faça o seu agendamento.',
  },
  {
    name: 'Matheus',
    avatar: '/images/testimonials/matheus.png',
    quote: 'Ótimo trabalho, bem executado, e muito zeloso com meu carro. Super recomendo!',
  },
  {
    name: 'Artur Boccia',
    avatar: '/images/testimonials/artur-boccia.png',
    quote: 'O trabalho foi feito muito bem, dentro das minhas expectativas. Eu recomendo.',
  },
  {
    name: 'Felipe Almeida',
    avatar: '/images/testimonials/felipe-almeida.png',
    quote: 'Muito atencioso e cuidadoso. Excelente trabalho!',
  },
  {
    name: 'Julia Oliveira',
    avatar: '/images/testimonials/julia-oliveira.png',
    quote: 'Atendimento sensacional, o tratamento no veículo então nem se fale. Obrigada, meninos!',
  },
]

// Planos de Tratamento Técnico de Carros — extraídos do catálogo oficial da
// Revom. A mensagem de WhatsApp de cada plano é sempre só o nome do plano.
export const plans = [
  {
    slug: 'tratamento-basico',
    name: 'Tratamento Básico',
    price: 'R$ 95,00',
    summary: 'Lavagem técnica externa e interna com proteção de cera líquida.',
    benefits: [
      'Lavagem técnica detalhada externa',
      'Limpeza técnica detalhada interna',
      'Limpeza e condicionamento das caixas de rodas',
      'Limpeza e selagem de pneus',
      'Aplicação de Cera Líquida Tok Final — 30 dias de proteção e brilho',
    ],
  },
  {
    slug: 'tratamento-plus',
    name: 'Tratamento Plus',
    price: 'R$ 215,00',
    summary: 'Tratamento técnico completo, externo e interno, com proteção de até 4 meses.',
    benefits: [
      'Lavagem detalhada técnica externa',
      'Higienização detalhada técnica interna',
      'Limpeza e condicionamento das caixas de rodas',
      'Limpeza e selagem de pneus',
      'Limpeza e revitalização de plásticos externos',
      'Limpeza de vidros',
      'Condicionamento dos plásticos internos',
      'Limpeza técnica de painel, portas e colunas',
      'Acabamento de canto de portas e borrachas',
      'Aplicação de cera — duração de até 4 meses de proteção e brilho',
    ],
  },
  {
    slug: 'tratamento-max',
    name: 'Tratamento Max',
    price: 'R$ 375,00',
    summary: 'O tratamento mais completo da Revom, incluindo motor e proteção prolongada.',
    benefits: [
      'Lavagem técnica detalhada externa',
      'Higienização técnica detalhada interna',
      'Limpeza e condicionamento das caixas de rodas',
      'Limpeza e selagem de pneus',
      'Limpeza e revitalização de plásticos externos',
      'Condicionamento dos plásticos internos',
      'Limpeza de vidros',
      'Limpeza técnica de teto, painel e portas',
      'Higienização de cinto de segurança',
      'Lavagem técnica de motor',
      'Proteção especial de motor — revestimento à base d’água',
      'Higienização de canto de portas e borrachas',
      'Aplicação de cera — duração de até 4 meses de proteção e brilho',
    ],
  },
]

// Perguntas frequentes — conteúdo provisório/fictício, ajustar depois com
// respostas reais da Revom.
export const faqs = [
  {
    question: 'Preciso agendar com antecedência?',
    answer:
      'Sim. Recomendamos agendar pelo WhatsApp com pelo menos 1 dia de antecedência para garantir seu horário no studio.',
  },
  {
    question: 'Quanto tempo dura cada tratamento?',
    answer:
      'Varia conforme o plano e o estado do veículo — do Tratamento Básico ao Max, o tempo médio fica entre 1h30 e 4h. Informamos uma previsão no agendamento.',
  },
  {
    question: 'Vocês buscam e entregam o veículo?',
    answer:
      'Consulte disponibilidade de busca e entrega na sua região diretamente pelo WhatsApp — depende da localização e da agenda do dia.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos Pix, cartão de crédito/débito e dinheiro.',
  },
  {
    question: 'A proteção aplicada tem garantia?',
    answer:
      'Sim, cada proteção (cera, coating ou PPF) tem uma durabilidade estimada informada no próprio plano. Cuidados de manutenção são passados na entrega do veículo.',
  },
]
