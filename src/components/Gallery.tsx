import { images } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import { GalleryStackCarousel, type GalleryImage } from './ui/gallery-stack-carousel'

const galleryImages: GalleryImage[] = images.gallery.map((item, i) => ({
  id: i,
  src: item.src,
  alt: item.caption,
}))

export function Gallery() {
  const headingRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section id="projetos" className="bg-paper py-14 md:py-20">
      <div ref={headingRef} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 mb-16 md:mb-20 text-center">
        <p className="text-xs tracking-[0.4em] text-graphite mb-4">GALERIA</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none">PROJETOS REVOM</h2>
        <p className="mt-4 text-graphite text-base md:text-lg font-light">Resultados que falam por si.</p>
      </div>

      {/* Mobile: pilha de cards arrastável, uma imagem por vez. */}
      <GalleryStackCarousel
        images={galleryImages}
        autoplayDelay={3200}
        className="md:hidden mx-auto max-w-[420px] h-[440px] sm:h-[500px] px-6"
      />

      {/* Desktop: grade com todas as imagens visíveis e legenda de cada veículo. */}
      <div
        ref={gridRef}
        className="reveal hidden md:grid mx-auto max-w-[1440px] px-10 grid-cols-4 gap-6"
      >
        {images.gallery.map((item) => (
          <figure key={item.src} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink">
            <img
              src={item.src}
              alt={item.caption}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
            <figcaption className="absolute inset-x-0 bottom-0 px-5 py-4 text-sm tracking-[0.08em] uppercase text-white">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
