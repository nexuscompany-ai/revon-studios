import { images } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import { useScrollSurge } from '../hooks/useScrollSurge'

type Tile = {
  src: string
  className: string
}

const tiles: Tile[] = [
  { src: images.gallery[0], className: 'md:col-span-7 aspect-[4/5] md:aspect-[16/10]' },
  { src: images.gallery[1], className: 'md:col-span-5 aspect-[4/5]' },
  { src: images.gallery[2], className: 'md:col-span-4 aspect-[3/4]' },
  { src: images.gallery[3], className: 'md:col-span-8 aspect-[4/5] md:aspect-[21/9]' },
  { src: images.gallery[4], className: 'md:col-span-6 aspect-[4/5]' },
  { src: images.gallery[5], className: 'md:col-span-6 aspect-[4/5]' },
]

function GalleryTile({ tile }: { tile: Tile }) {
  return (
    <div
      data-surge
      className={`group relative overflow-hidden bg-ink will-change-transform ${tile.className}`}
    >
      <img
        src={tile.src}
        alt="Projeto Revom Studio Detail"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="text-white text-xs tracking-[0.3em] uppercase border-b border-white/70 pb-1">
          Ver Projeto →
        </span>
      </div>
    </div>
  )
}

export function Gallery() {
  const headingRef = useReveal<HTMLDivElement>()
  const gridRef = useScrollSurge<HTMLDivElement>()

  return (
    <section id="projetos" className="bg-paper py-28 md:py-36 overflow-hidden">
      <div ref={headingRef} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 mb-14 md:mb-20">
        <p className="text-xs tracking-[0.4em] text-graphite mb-4">GALERIA</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none">PROJETOS REVOM</h2>
        <p className="mt-4 text-graphite text-sm md:text-base font-light max-w-sm">
          Resultados que falam por si.
        </p>
      </div>

      <div
        ref={gridRef}
        className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4"
      >
        {tiles.map((tile, i) => (
          <GalleryTile key={i} tile={tile} />
        ))}
      </div>
    </section>
  )
}
