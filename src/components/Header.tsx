import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
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
      <div className="relative z-20 mx-auto max-w-[1440px] px-6 md:px-10 flex items-center justify-between">
        <Link to="/#hero" onClick={() => setOpen(false)}>
          <Logo light={!scrolled && !open} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-xs tracking-[0.2em] font-medium uppercase transition-colors hover:opacity-60 ${
                scrolled ? 'text-ink' : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsapp.nav}
          target="_blank"
          rel="noreferrer"
          className={`hidden md:inline-flex items-center gap-2 rounded-full border px-6 py-3 text-xs tracking-[0.2em] font-medium uppercase transition-all duration-300 ${
            scrolled
              ? 'border-ink text-ink hover:bg-ink hover:text-white'
              : 'border-white text-white hover:bg-white hover:text-ink'
          }`}
        >
          Solicitar Avaliação
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative h-8 w-8 flex flex-col items-center justify-center gap-[6px]"
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
        className={`md:hidden fixed inset-0 top-0 z-10 bg-paper transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-display tracking-widest text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsapp.nav}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full border border-ink px-8 py-4 text-xs tracking-[0.2em] uppercase"
          >
            Solicitar Avaliação
          </a>
        </div>
      </div>
    </header>
  )
}
