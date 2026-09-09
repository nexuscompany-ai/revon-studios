import { images } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import { GalleryStackCarousel, type GalleryImage } from './ui/gallery-stack-carousel'

const galleryImages: GalleryImage[] = images.gallery.map((src, i) => ({
  id: i,
  src,
}))

export function Gallery() {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section id="projetos" className="bg-paper py-28 md:py-40">
      <div ref={headingRef} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 mb-16 md:mb-20 text-center">
        <p className="text-xs tracking-[0.4em] text-graphite mb-4">GALERIA</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none">PROJETOS REVOM</h2>
        <p className="mt-4 text-graphite text-sm md:text-base font-light">Resultados que falam por si.</p>
      </div>

      <GalleryStackCarousel
        images={galleryImages}
        autoplayDelay={3200}
        className="mx-auto max-w-[420px] h-[440px] sm:h-[500px] md:h-[560px] px-6"
      />
    </section>
  )
}
