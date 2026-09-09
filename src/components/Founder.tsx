import { certifications, founder, images } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import { SealIcon } from './SealIcon'

export function Founder() {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()
  const certsRef = useReveal<HTMLDivElement>()

  return (
    <section id="vini" className="bg-ink text-white py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 md:items-center">
        {/* No mobile: nome primeiro, depois a foto, depois os certificados
            "saindo" de trás dela. No desktop: foto à esquerda ocupando as
            duas linhas, nome e certificados empilhados à direita. */}
        <div ref={textRef} className="reveal order-1 md:order-none md:col-start-2">
          <p className="text-xs tracking-[0.4em] text-white/50 mb-4">POR TRÁS DA REVOM</p>
          <h2 className="font-display text-4xl md:text-6xl leading-none uppercase">{founder.name}</h2>
          <p className="mt-3 text-white/60 text-sm md:text-base font-light">{founder.role}</p>
          <div className="mt-10 h-px w-16 bg-white/20" />
        </div>

        <div
          ref={imgRef}
          className="reveal relative order-2 md:order-none md:col-start-1 md:row-span-2 aspect-[4/5] overflow-hidden bg-ink"
        >
          <img
            src={images.vini}
            alt={founder.name}
            className="relative h-full w-full object-contain object-bottom p-6"
          />
        </div>

        <div ref={certsRef} className="reveal order-3 md:order-none md:col-start-2">
          <p
            className="mt-10 md:mt-0 text-3xl md:text-4xl text-white/90 italic"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            Certificados
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 md:gap-4">
            {certifications.map((cert, i) => (
              <div key={cert.number} className="cert-badge">
                <div
                  className="cert-badge__float relative overflow-hidden rounded-xl border border-white/15 bg-ink shadow-2xl p-4"
                  style={{ animationDelay: `${i * 0.35}s` }}
                >
                  <span
                    className="shine-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    style={{ animationDelay: `${1.4 + i * 0.6}s` }}
                  />
                  <SealIcon className="h-6 w-6" />
                  <p className="mt-3 text-xs font-medium text-white/90 leading-snug">{cert.area}</p>
                  <p className="text-[10px] text-white/35 mt-1">{cert.name} — placeholder</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
