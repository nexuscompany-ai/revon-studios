import { services, waLink } from '../content/site'
import { useReveal } from '../hooks/useReveal'

/** Card individual: imagem com overlay escuro e nome/descrição centralizados,
 * inspirado numa referência de grade que o cliente gostou — adaptado à
 * identidade da Revom (tipografia, cor de ação nos botões). */
function ServiceCard({ item, index }: { item: (typeof services)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 bg-ink"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h3 className="font-display text-2xl md:text-3xl leading-none text-white">{item.name}</h3>
        <p className="mt-3 max-w-[240px] text-xs tracking-[0.15em] uppercase text-white/70">{item.description}</p>
        <a
          href={waLink(item.name)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 text-xs tracking-[0.2em] uppercase text-white border-b border-white/40 pb-1 hover:opacity-70 transition-opacity"
        >
          Saiba mais →
        </a>
      </div>
    </div>
  )
}

/** Grade estática dos serviços em destaque — substitui temporariamente o
 * carrossel 3D ("Nossas Soluções", em ./Services.tsx). O componente antigo
 * continua no repositório; para restaurar o carrossel, troque de volta
 * `<ServicesGrid />` por `<Services />` em App.tsx. */
export function ServicesGrid() {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section id="servicos" className="bg-paper py-14 md:py-16">
      <div ref={headingRef} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 mb-10 md:mb-12">
        <p className="text-xs tracking-[0.4em] text-graphite mb-4">SERVIÇOS</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none">NOSSAS SOLUÇÕES</h2>
        <p className="mt-4 text-graphite text-base md:text-lg font-light max-w-sm">
          Cuidado técnico para veículos que merecem mais.
        </p>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {services.map((item, i) => (
          <ServiceCard key={item.number} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
