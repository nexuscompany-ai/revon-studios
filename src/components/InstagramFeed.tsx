import { useRef } from 'react'
import { business, images } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function InstagramFeed() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useReveal<HTMLDivElement>()

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section className="bg-paper py-28 md:py-36">
      <div ref={headingRef} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="text-xs tracking-[0.4em] text-graphite mb-4">INSTAGRAM</p>
          <h2 className="font-display text-4xl md:text-6xl leading-none">A REVOM EM MOVIMENTO</h2>
          <p className="mt-4 text-graphite text-sm md:text-base font-light">{business.instagramHandle}</p>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            aria-label="Anterior"
            onClick={() => scrollByCard(-1)}
            className="h-12 w-12 rounded-full border border-ink/20 flex items-center justify-center transition-colors hover:bg-ink hover:text-white"
          >
            ←
          </button>
          <button
            aria-label="Próximo"
            onClick={() => scrollByCard(1)}
            className="h-12 w-12 rounded-full border border-ink/20 flex items-center justify-center transition-colors hover:bg-ink hover:text-white"
          >
            →
          </button>
        </div>
      </div>

      <div ref={trackRef} className="no-scrollbar flex gap-4 overflow-x-auto px-6 md:px-10 pb-2 snap-x snap-mandatory">
        {images.instagram.map((src, i) => (
          <a
            key={i}
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative flex-none w-[70vw] sm:w-[42vw] md:w-[22vw] aspect-square snap-start overflow-hidden bg-ink"
          >
            <img
              src={src}
              alt="Publicação Instagram Revom Studio Detail"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </a>
        ))}
        <div className="flex-none w-[6vw]" aria-hidden />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 mt-10">
        <a
          href={business.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-ink pb-1 hover:opacity-60 transition-opacity"
        >
          Ver no Instagram →
        </a>
      </div>
    </section>
  )
}
