import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { images } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function Gallery() {
  const headingRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = () => setOpenIndex(null)
  const step = (delta: number) =>
    setOpenIndex((i) => (i === null ? i : (i + delta + images.gallery.length) % images.gallery.length))

  useEffect(() => {
    if (openIndex === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [openIndex])

  return (
    <section id="projetos" className="bg-ink py-14 md:py-20">
      <div ref={headingRef} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 mb-10 md:mb-14 text-center">
        <p className="text-xs tracking-[0.4em] text-white/40 mb-4">GALERIA</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none text-white">FEITO NOS DETALHES.</h2>
        <p className="mt-4 text-white/50 text-base md:text-lg font-light">Resultados que falam por si.</p>
      </div>

      <div
        ref={gridRef}
        className="reveal mx-auto max-w-[1440px] md:px-10 grid grid-cols-1 md:grid-cols-3 gap-px"
      >
        {images.gallery.map((item, i) => {
          return (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Ampliar foto: ${item.caption}`}
              className={`gallery-tile group relative overflow-hidden bg-ink text-left cursor-zoom-in h-[82vh] sm:h-[78vh] md:h-auto md:aspect-[4/5] ${
                i === 3 ? 'md:hidden' : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between opacity-0 translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="text-[11px] tracking-[0.12em] uppercase text-white/90">{item.caption}</span>
                <span className="text-[10px] tracking-[0.1em] text-white/50">{String(i + 1).padStart(2, '0')}</span>
              </div>
            </button>
          )
        })}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 py-10 md:p-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-5 top-5 md:right-8 md:top-8 text-white/70 hover:text-white transition-colors"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            {images.gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    step(-1)
                  }}
                  aria-label="Foto anterior"
                  className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    step(1)
                  }}
                  aria-label="Próxima foto"
                  className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </>
            )}

            <motion.img
              key={openIndex}
              src={images.gallery[openIndex].src}
              alt={images.gallery[openIndex].caption}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full object-contain"
            />

            <p
              className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.1em] uppercase text-white/50"
              onClick={(e) => e.stopPropagation()}
            >
              {images.gallery[openIndex].caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
