import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { WhatsAppButton } from './WhatsAppButton'
import { nav, whatsapp } from '../content/site'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-paper/90 backdrop-blur-md border-b border-line py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 flex items-center justify-between">
        <a href="#hero" onClick={() => setOpen(false)}>
          <Logo light={!scrolled && !open} />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs tracking-[0.2em] font-medium uppercase transition-colors hover:opacity-60 ${
                scrolled ? 'text-ink' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton href={whatsapp.nav} size="sm">
            Solicitar Avaliação
          </WhatsAppButton>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-50 h-8 w-8 flex flex-col items-center justify-center gap-[6px]"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              open ? 'translate-y-[3.5px] rotate-45 bg-ink' : scrolled ? 'bg-ink' : 'bg-white'
            }`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              open ? '-translate-y-[3.5px] -rotate-45 bg-ink' : scrolled ? 'bg-ink' : 'bg-white'
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-paper transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-display tracking-widest text-ink"
            >
              {item.label}
            </a>
          ))}
          <WhatsAppButton href={whatsapp.nav} onClick={() => setOpen(false)} className="mt-6">
            Solicitar Avaliação
          </WhatsAppButton>
        </div>
      </div>
    </header>
  )
}
