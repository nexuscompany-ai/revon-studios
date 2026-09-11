import { motion } from 'framer-motion'
import { certifications, founder, images } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import { SealIcon } from './SealIcon'

const bioLine = 'Cada detalhe tratado com técnica, precisão e cuidado.'

/** Card único (adaptado de um padrão de "animated testimonials"): foto com
 * entrada em leve rotação/escala e texto com efeito de blur palavra a
 * palavra, disparados ao entrar na viewport — sem ciclar entre cards e sem
 * setas de navegação, já que é uma única pessoa (Vinícius). */
export function Founder() {
  const certsRef = useReveal<HTMLDivElement>()

  return (
    <section id="vini" className="bg-ink text-white py-14 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative aspect-[4/5] w-full max-w-xs sm:max-w-sm mx-auto md:max-w-none overflow-hidden rounded-3xl"
          >
            <img
              src={images.vini}
              alt={founder.name}
              className="h-full w-full object-cover object-center"
              draggable={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="text-center md:text-left"
          >
            <p className="text-xs tracking-[0.4em] text-white/50 mb-4">POR TRÁS DA REVOM</p>
            <h2 className="font-display text-4xl md:text-6xl leading-none uppercase" style={{ color: '#ffcc03' }}>
              {founder.name}
            </h2>
            <p className="mt-3 text-white/60 text-base md:text-lg font-light">{founder.role}</p>

            <p className="mt-8 text-lg text-white/70">
              {bioLine.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                  whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.03 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </p>
          </motion.div>
        </div>

        <div ref={certsRef} className="reveal mt-16 text-center">
          <p
            className="text-3xl md:text-4xl text-white/90 italic"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            Certificados
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto">
            {certifications.map((cert, i) => (
              <div key={cert.number} className="cert-badge">
                <div
                  className="cert-badge__float relative overflow-hidden rounded-xl border border-white/15 bg-ink shadow-2xl p-4 text-left"
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
    </section>
  )
}
