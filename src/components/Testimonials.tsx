import { business, testimonials } from '../content/site'
import { useReveal } from '../hooks/useReveal'

function Stars() {
  return (
    <span className="text-star text-sm tracking-[0.15em]" aria-hidden>
      {'★★★★★'}
    </span>
  )
}

/** Generic silhouette avatar — testimonials are real Google reviews, but no reviewer photos
 * were provided, so we use a neutral placeholder icon instead of a fabricated face. */
function Avatar() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="4" fill="currentColor" />
        <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="currentColor" />
      </svg>
    </span>
  )
}

// Repeated so the marquee track can loop seamlessly (shifts by exactly 1/3 of its width).
const track = [...testimonials, ...testimonials, ...testimonials]

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-paper py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="reveal mx-auto max-w-3xl text-center px-6">
        <h2 className="font-display text-3xl md:text-5xl leading-tight">QUEM CONFIA, RECOMENDA.</h2>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="font-display text-3xl">{business.googleRating.toFixed(1)}</span>
          <Stars />
          <span className="text-graphite text-sm font-light">
            {business.googleReviewCount} avaliações no Google
          </span>
        </div>
      </div>

      <div className="group relative mt-12 md:mt-16 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 px-4 group-hover:[animation-play-state:paused]">
          {track.map((t, i) => (
            <div
              key={i}
              className="flex w-72 sm:w-80 shrink-0 flex-col gap-3 rounded-2xl border border-ink/10 bg-paper px-6 py-5 text-left"
            >
              <div className="flex items-center gap-3">
                <Avatar />
                <div>
                  <Stars />
                  <p className="text-[11px] tracking-[0.15em] text-graphite uppercase mt-0.5">
                    Cliente Revom
                  </p>
                </div>
              </div>
              <p className="text-graphite text-sm font-light leading-relaxed line-clamp-3">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href={business.googleReviewsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-ink pb-1 hover:opacity-60 transition-opacity"
        >
          Ver avaliações no Google →
        </a>
      </div>
    </section>
  )
}
