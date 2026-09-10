import { otherServices, waLink } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import { WhatsAppButton } from './WhatsAppButton'

function ServiceRow({ item, index }: { item: (typeof otherServices)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal flex flex-col sm:flex-row sm:items-center gap-6 rounded-2xl border border-ink/10 bg-bone p-6 md:p-8"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="sm:w-56 md:w-64 aspect-[4/3] shrink-0 overflow-hidden rounded-xl bg-ink/5">
        {item.image && <img src={item.image} alt={item.name} className="h-full w-full object-cover" />}
      </div>

      <div className="flex-1">
        <p className="text-xs tracking-[0.4em] text-graphite mb-2">{item.number}</p>
        <h3 className="font-display text-2xl md:text-3xl leading-none">{item.name}</h3>
        <p className="mt-2 text-graphite text-base font-light leading-relaxed max-w-xl">{item.description}</p>
      </div>

      <div className="flex flex-col items-start sm:items-end gap-3 sm:shrink-0">
        <p className="font-display text-2xl">{item.priceLabel}</p>
        <WhatsAppButton href={waLink(item.name)} size="sm">
          Solicitar Avaliação
        </WhatsAppButton>
      </div>
    </div>
  )
}

export function OtherServices() {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section id="outros-servicos" className="bg-paper py-14 md:py-16">
      <div ref={headingRef} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 mb-12 md:mb-16">
        <p className="text-xs tracking-[0.4em] text-graphite mb-4">MAIS SERVIÇOS</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none">OUTROS CUIDADOS</h2>
        <p className="mt-4 text-graphite text-base md:text-lg font-light max-w-md">
          Além dos tratamentos técnicos, cuidamos de cada detalhe extra do seu veículo.
        </p>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 flex flex-col gap-5">
        {otherServices.map((item, i) => (
          <ServiceRow key={item.slug} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
