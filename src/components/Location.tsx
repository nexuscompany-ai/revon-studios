import { business, whatsapp } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function Location() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="localizacao" className="bg-bone py-28 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.4em] text-graphite mb-4">LOCALIZAÇÃO</p>
          <h2 className="font-display text-4xl md:text-6xl leading-none">VISITE A REVOM</h2>

          <div className="mt-8 h-px w-16 bg-ink/20" />

          <p className="mt-8 text-sm md:text-base font-light leading-relaxed text-ink/80">
            {business.address.street}
            <br />
            {business.address.neighborhood} — {business.address.cityState}
            <br />
            {business.address.zip}
          </p>

          <p className="mt-5 text-sm md:text-base font-light text-ink/80">{business.phoneDisplay}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-8 py-4 text-xs tracking-[0.2em] font-medium uppercase transition-colors hover:bg-ink hover:text-white"
            >
              Como Chegar
            </a>
            <a
              href={whatsapp.location}
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-[0.2em] font-medium uppercase border-b border-ink pb-1 hover:opacity-60 transition-opacity"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-ink/5 border border-line">
          <iframe
            title="Localização Revom Studio Detail"
            src={business.mapsEmbedUrl}
            className="h-full w-full grayscale contrast-125"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
