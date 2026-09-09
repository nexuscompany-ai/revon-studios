import { CoverFlowCarousel, type CarouselItem } from './ui/3-d-coverflow-carousel'
import { services, waLink } from '../content/site'
import { useReveal } from '../hooks/useReveal'

// Mapeia os serviços da Revom para o formato do carrossel 3D.
const carouselItems: CarouselItem[] = services.map((service) => {
  const [titleLine1, ...rest] = service.name.split(' ')
  const titleLine2 = rest.join(' ') || undefined

  return {
    tag: `#${service.number}`,
    titleLine1,
    titleLine2,
    desc: service.description,
    img: service.image,
    ctaText: 'Solicitar Avaliação',
    ctaUrl: waLink(
      `Olá! Tenho interesse no serviço de ${service.name.toLowerCase()} da Revom Studio Detail. Podem me passar mais informações?`,
    ),
  }
})

export function Services() {
  const headingRef = useReveal<HTMLDivElement>()

  const handleCtaClick = (item: CarouselItem) => {
    if (item.ctaUrl) window.open(item.ctaUrl, '_blank', 'noreferrer')
  }

  return (
    <section id="servicos" className="bg-paper">
      <div ref={headingRef} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 pt-28 md:pt-36 pb-14 md:pb-16">
        <p className="text-xs tracking-[0.4em] text-graphite mb-4">SERVIÇOS</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none">NOSSAS SOLUÇÕES</h2>
        <p className="mt-4 text-graphite text-sm md:text-base font-light max-w-sm">
          Cuidado técnico para veículos que merecem mais.
        </p>
      </div>

      <CoverFlowCarousel
        items={carouselItems}
        sectionLabel=""
        autoplay
        autoplayDelay={5000}
        onCtaClick={handleCtaClick}
      />
    </section>
  )
}
