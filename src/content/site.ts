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

export const nav = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#vini' },
  { label: 'Contato', href: '#localizacao' },
]

// Placeholders premium — substituir por fotografias reais da Revom.
export const images = {
  heroBg: '/images/hero.png',
  finalCtaBg:
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2400&auto=format&fit=crop',
  vini: '/images/vini.png',
  services: {
    ppf: '/images/services/ppf.jpeg',
    ceramic: '/images/services/ceramica.jpeg',
    detailing: '/images/services/detalhamento.jpeg',
    paintCorrection: '/images/services/correcao-pintura.jpeg',
  },
  // Trabalhos reais da Revom.
  gallery: [
    '/images/gallery/ranger-traseira.jpeg',
    '/images/gallery/audi-frente.jpeg',
    '/images/gallery/fiat-interior.jpeg',
    '/images/gallery/nissan-interior.jpeg',
  ],
  instagram: [
    'https://images.unsplash.com/photo-1567818735868-e71b99932e29?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
  ],
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
