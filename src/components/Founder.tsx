import { certifications, images } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import { SealIcon } from './SealIcon'

export function Founder() {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  return (
    <section id="vini" className="bg-ink text-white py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24 items-center">
        <div ref={imgRef} className="reveal relative order-2 md:order-1 mb-28 md:mb-0">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <img
              src={images.vini}
              alt="Vini — fundador da Revom Studio Detail"
              className="relative h-full w-full object-contain object-bottom p-6"
            />
          </div>

          {/* Certificações — flutuam atrás dele no mobile, ao lado no desktop. */}
          <div className="absolute inset-x-4 -bottom-8 grid grid-cols-2 gap-3 md:inset-x-auto md:bottom-10 md:-right-4 md:grid-cols-1 md:w-52 md:gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.number}
                className="cert-badge relative overflow-hidden rounded-xl border border-white/15 bg-ink shadow-2xl p-4"
              >
                <span
                  className="shine-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
                <SealIcon className="h-6 w-6 text-white" />
                <p className="mt-3 text-xs font-medium text-white/90 leading-snug">{cert.area}</p>
                <p className="text-[10px] text-white/35 mt-1">{cert.name} — placeholder</p>
              </div>
            ))}
          </div>
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
        </div>
      </div>
    </section>
  )
}
