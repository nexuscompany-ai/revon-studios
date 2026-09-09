import { useEffect, useState } from 'react'
import { business, testimonials } from '../content/site'
import { useReveal } from '../hooks/useReveal'

const AUTOPLAY_MS = 4500

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="text-star text-lg tracking-[0.15em]" aria-hidden>
      {'★'.repeat(count)}
    </span>
  )
}

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>()
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-bone py-24 md:py-36 px-6">
      <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-5xl leading-tight">QUEM CONFIA, RECOMENDA.</h2>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="font-display text-3xl">{business.googleRating.toFixed(1)}</span>
          <Stars />
          <span className="text-graphite text-sm font-light">
            {business.googleReviewCount} avaliações no Google
          </span>
        </div>

        <div className="relative mt-10 md:mt-16 h-40 sm:h-32 md:h-28 overflow-hidden">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? 'translateX(0)' : i < active ? 'translateX(-24px)' : 'translateX(24px)',
                pointerEvents: i === active ? 'auto' : 'none',
              }}
              aria-hidden={i !== active}
            >
              <Stars />
              <p className="text-graphite text-sm md:text-lg font-light leading-relaxed max-w-md">
                "{t.quote}"
              </p>
            </blockquote>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Ver avaliação ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-6 bg-ink' : 'w-1.5 bg-ink/20'
              }`}
            />
          ))}
        </div>

        <a
          href={business.googleReviewsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-ink pb-1 hover:opacity-60 transition-opacity"
        >
          Ver avaliações no Google →
        </a>
      </div>
    </section>
  )
}
