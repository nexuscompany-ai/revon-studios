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
          className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg transition-transform hover:scale-105"
          style={{
            background: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
          }}
        >
          <InstagramIcon className="h-4 w-4" />
          {business.instagramHandle}
        </a>

        <p className="mt-8 text-xs tracking-[0.4em] text-graphite">INSTAGRAM</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-none">A REVOM EM MOVIMENTO</h2>
      </div>

      <div ref={imageRef} className="ig-reveal mt-6 md:mt-8 w-full md:max-w-[440px] md:mx-auto">
        <img
          src={images.instagramShowcase}
          alt={`Perfil ${business.instagramHandle} no Instagram`}
          className="w-full h-auto block"
        />
      </div>
    </section>
  )
}
