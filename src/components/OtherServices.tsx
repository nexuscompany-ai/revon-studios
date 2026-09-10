import { otherServices, waLink } from '../content/site'
import { useReveal } from '../hooks/useReveal'

function ServiceCard({ item, index }: { item: (typeof otherServices)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal flex-none w-[78vw] sm:w-[46vw] md:w-[28vw] lg:w-[22vw] snap-start flex flex-col rounded-2xl border border-ink/10 bg-bone p-8"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <p className="text-xs tracking-[0.4em] text-graphite mb-3">{item.number}</p>
      <h3 className="font-display text-2xl md:text-3xl leading-none">{item.name}</h3>
      <p className="mt-3 text-graphite text-sm font-light leading-relaxed flex-1">{item.description}</p>
      <p className="mt-6 font-display text-2xl">{item.priceLabel}</p>
      <a
        href={waLink(item.name)}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-ink px-5 py-2.5 text-xs tracking-[0.2em] uppercase hover:bg-ink hover:text-white transition-colors"
      >
        Solicitar Avaliação
      </a>
    </div>
  )
}

export function OtherServices() {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section id="outros-servicos" className="bg-paper py-28 md:py-36">
      <div ref={headingRef} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 mb-12 md:mb-16">
        <p className="text-xs tracking-[0.4em] text-graphite mb-4">MAIS SERVIÇOS</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none">OUTROS CUIDADOS</h2>
        <p className="mt-4 text-graphite text-sm md:text-base font-light max-w-md">
          Além dos tratamentos técnicos, cuidamos de cada detalhe extra do seu veículo.
        </p>
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-6 md:px-10 pb-2 snap-x snap-mandatory">
        {otherServices.map((item, i) => (
          <ServiceCard key={item.slug} item={item} index={i} />
        ))}
        <div className="flex-none w-[6vw]" aria-hidden />
      </div>
    </section>
  )
}
