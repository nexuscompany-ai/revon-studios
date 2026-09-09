import { certifications, images } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function Founder() {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  return (
    <section id="vini" className="bg-ink text-white py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div
          ref={imgRef}
          className="reveal relative aspect-[4/5] overflow-hidden bg-ink-soft order-2 md:order-1"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_60%)]" />
          <img
            src={images.vini}
            alt="Vini — fundador da Revom Studio Detail"
            className="relative h-full w-full object-contain object-bottom p-6"
          />
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
            Vini lidera a Revom Studio Detail com foco em técnica e resultado — cada veículo passa
            por um processo criterioso, do primeiro contato à entrega final.
          </p>

          <div className="mt-14">
            <p className="text-xs tracking-[0.4em] text-white/50 mb-6">CERTIFICAÇÕES</p>
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.number}
                  className="rounded-xl border border-white/15 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-[10px] tracking-wide text-white/70">
                    {cert.number}
                  </span>
                  <p className="mt-3 text-sm font-medium text-white/90 leading-snug">{cert.area}</p>
                  <p className="text-[10px] text-white/35 mt-1">{cert.name} — placeholder</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
