import { certifications, images } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function Founder() {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  return (
    <section id="vini" className="bg-ink text-white py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div ref={imgRef} className="reveal relative aspect-[4/5] overflow-hidden bg-ink-soft order-2 md:order-1">
          <img
            src={images.vini}
            alt="Vini — fundador da Revom Studio Detail (foto ilustrativa, a ser substituída)"
            className="h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div ref={textRef} className="reveal order-1 md:order-2">
          <p className="text-xs tracking-[0.4em] text-white/50 mb-4">POR TRÁS DA REVOM</p>
          <h2 className="font-display text-5xl md:text-7xl leading-none">VINI</h2>
          <p className="mt-3 text-white/60 text-sm md:text-base font-light">
            Fundador &amp; especialista em detalhamento automotivo
          </p>

          <div className="mt-8 h-px w-16 bg-white/20" />

          <p className="mt-8 text-white/85 text-lg md:text-xl font-light leading-relaxed">
            Cuidado, técnica e atenção aos detalhes.
          </p>
          <p className="mt-5 text-white/55 text-sm md:text-base font-light leading-relaxed max-w-md">
            À frente da Revom Studio Detail, Vini representa a busca constante por excelência em
            cada projeto. A proposta da marca nasce da combinação entre técnica, cuidado e respeito
            por cada veículo que passa pelo studio.
          </p>

          <div className="mt-14">
            <p className="text-xs tracking-[0.4em] text-white/50 mb-6">CERTIFICAÇÕES</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {certifications.map((cert) => (
                <div key={cert.number} className="border-t border-white/15 pt-4">
                  <span className="text-[10px] tracking-[0.3em] text-white/40">{cert.number}</span>
                  <p className="mt-1 text-sm font-medium text-white/90">{cert.area}</p>
                  <p className="text-[11px] text-white/40 mt-0.5">{cert.name} — placeholder</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
