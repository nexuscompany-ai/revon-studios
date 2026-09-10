import { useEffect, useRef, useState } from 'react'
import { images, whatsapp, business } from '../content/site'
import { WhatsAppButton } from './WhatsAppButton'

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const heroHeight = heroRef.current?.offsetHeight ?? 1
  const progress = Math.min(scrollY / heroHeight, 1)

  return (
    <section id="hero" ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `scale(${1.08 + progress * 0.08}) translateY(${progress * 40}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        <img
          src={images.heroPoster}
          alt="Ambiente do studio Revom"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/8 to-black/25 md:from-black/60 md:via-black/15 md:to-black/35" />
      </div>

      <div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ opacity: 1 - progress * 1.6, transform: `translateY(${progress * 60}px)` }}
      >
        <p className="animate-fade-up text-[11px] md:text-xs tracking-[0.5em] text-white/60 mb-6" style={{ animationDelay: '0.1s' }}>
          {business.city.toUpperCase()} — {business.state}
        </p>

        <h1 className="animate-fade-up font-display text-white leading-[0.85] text-[18vw] sm:text-[15vw] md:text-[9vw] lg:text-[7.5rem]" style={{ animationDelay: '0.25s' }}>
          REVOM
        </h1>
        <h2
          className="animate-fade-up font-display text-white/90 leading-none text-[6vw] sm:text-[5vw] md:text-[2.6vw] lg:text-[2rem] tracking-[0.3em] mt-1 md:mt-2"
          style={{ animationDelay: '0.4s' }}
        >
          STUDIO DETAIL
        </h2>

        <p className="animate-fade-up mt-8 max-w-md text-base md:text-lg text-white/80 font-light" style={{ animationDelay: '0.55s' }}>
          Tratamento detalhado técnico &amp; proteção.
        </p>
        <p className="animate-fade-up mt-2 max-w-sm text-sm md:text-base text-white/50 font-light hidden sm:block" style={{ animationDelay: '0.65s' }}>
          Precisão em cada detalhe. Proteção em cada acabamento.
        </p>

        <div className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center gap-4" style={{ animationDelay: '0.8s' }}>
          <WhatsAppButton href={whatsapp.hero}>Solicitar Avaliação</WhatsAppButton>
          <a
            href="#servicos"
            className="rounded-full border border-white/40 text-white px-8 py-4 text-xs tracking-[0.2em] font-medium uppercase transition-colors hover:border-white"
          >
            Conhecer Serviços
          </a>
        </div>
      </div>
    </section>
  )
}
