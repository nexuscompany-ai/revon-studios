import { business, images } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import { InstagramIcon } from './InstagramIcon'

export function InstagramFeed() {
  const headingRef = useReveal<HTMLDivElement>()
  const imageRef = useReveal<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="bg-paper py-28 md:py-36 overflow-hidden">
      <div ref={headingRef} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 text-center">
        <a
          href={business.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2 text-sm font-medium tracking-wide hover:bg-ink hover:text-white transition-colors"
        >
          <InstagramIcon className="h-4 w-4" />
          {business.instagramHandle}
        </a>

        <p className="mt-8 text-xs tracking-[0.4em] text-graphite">INSTAGRAM</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-none">A REVOM EM MOVIMENTO</h2>
      </div>

      <div ref={imageRef} className="reveal mx-auto mt-14 md:mt-16 max-w-[360px] md:max-w-[440px]">
        <img
          src={images.instagramShowcase}
          alt={`Perfil ${business.instagramHandle} no Instagram`}
          className="w-full h-auto"
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 mt-10 text-center">
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
