import { certifications, founder, images } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import { SealIcon } from './SealIcon'

export function Founder() {
  const imgRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()
  const certsRef = useReveal<HTMLDivElement>()

  return (
    <section id="vini" className="bg-ink text-white py-14 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 flex flex-col md:flex-row md:items-center gap-12 md:gap-20">
        {/* No mobile: nome primeiro, depois os certificados, depois a foto
            do Vini por último. No desktop: foto à esquerda, nome e
            certificados empilhados à direita, os dois blocos centralizados
            um em relação ao outro. */}
        <div
          ref={imgRef}
          className="reveal relative order-3 md:order-1 md:w-[42%] aspect-[4/5] overflow-hidden bg-ink mt-10 md:mt-0"
        >
          <img
            src={images.vini}
            alt={founder.name}
            className="relative h-full w-full object-contain object-bottom p-6"
          />
        </div>

        <div className="order-1 md:order-2 md:flex-1">
          <div ref={textRef} className="reveal">
            <p className="text-xs tracking-[0.4em] text-white/50 mb-4">POR TRÁS DA REVOM</p>
            <h2 className="font-display text-4xl md:text-6xl leading-none uppercase">{founder.name}</h2>
            <p className="mt-3 text-white/60 text-base md:text-lg font-light">{founder.role}</p>
          </div>

          <div ref={certsRef} className="reveal mt-10">
            <p
              className="text-3xl md:text-4xl text-white/90 italic"
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
                    <p className="mt-3 text-sm font-medium text-white/90 leading-snug">{cert.area}</p>
                    <p className="text-xs text-white/35 mt-1">{cert.name} — placeholder</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
