import { useRef, useState } from 'react'
import { services, whatsapp } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function Services() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)
  const headingRef = useReveal<HTMLDivElement>()

  const [dragging, setDragging] = useState(false)

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-card]')
    const amount = (card?.offsetWidth ?? 400) + 24
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current
    if (!track) return
    isDown.current = true
    setDragging(true)
    startX.current = e.clientX
    scrollStart.current = track.scrollLeft
    track.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDown.current || !trackRef.current) return
    const delta = e.clientX - startX.current
    trackRef.current.scrollLeft = scrollStart.current - delta
  }

  const endDrag = () => {
    isDown.current = false
    setDragging(false)
  }

  return (
    <section id="servicos" className="bg-bone py-28 md:py-36">
      <div ref={headingRef} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
        <div>
          <p className="text-xs tracking-[0.4em] text-graphite mb-4">SERVIÇOS</p>
          <h2 className="font-display text-4xl md:text-6xl leading-none">NOSSAS SOLUÇÕES</h2>
          <p className="mt-4 text-graphite text-sm md:text-base font-light max-w-sm">
            Cuidado técnico para veículos que merecem mais.
          </p>
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

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className={`no-scrollbar flex gap-6 overflow-x-auto px-6 md:px-10 pb-4 snap-x snap-mandatory ${
          dragging ? 'cursor-grabbing select-none' : 'cursor-grab'
        }`}
      >
        {services.map((service) => (
          <a
            key={service.number}
            data-card
            href={whatsapp.services}
            target="_blank"
            rel="noreferrer"
            className="group relative flex-none w-[82vw] sm:w-[60vw] md:w-[42vw] lg:w-[34vw] aspect-[3/4] snap-start overflow-hidden bg-ink"
          >
            <img
              src={service.image}
              alt={service.name}
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/0 transition-opacity duration-500 group-hover:from-black/90" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
              <span className="text-xs tracking-[0.3em] text-white/60">{service.number}</span>
              <h3 className="font-display text-2xl md:text-3xl mt-2 transition-transform duration-500 group-hover:-translate-y-1">
                {service.name}
              </h3>
              <p className="mt-3 text-sm font-light text-white/75 max-w-[85%]">{service.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase">
                Conhecer
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </a>
        ))}
        <div className="flex-none w-[6vw]" aria-hidden />
      </div>
    </section>
  )
}
