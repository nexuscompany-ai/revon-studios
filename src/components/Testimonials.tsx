import { business, testimonials } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-bone py-28 md:py-36 px-6">
      <div ref={ref} className="reveal mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl md:text-5xl leading-tight">QUEM CONFIA, RECOMENDA.</h2>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="font-display text-3xl">{business.googleRating.toFixed(1)}</span>
          <span className="text-ink text-xl tracking-widest">★★★★★</span>
          <span className="text-graphite text-sm font-light">
            {business.googleReviewCount} avaliações no Google
          </span>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="text-graphite text-sm md:text-base font-light leading-relaxed">
              <span className="font-display text-3xl block mb-3 text-ink/20">"</span>
              {t.quote}
            </blockquote>
          ))}
        </div>

        <a
          href={business.googleReviewsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-14 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-ink pb-1 hover:opacity-60 transition-opacity"
        >
          Ver avaliações no Google →
        </a>
      </div>
    </section>
  )
}
