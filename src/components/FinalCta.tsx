import { images, whatsapp } from '../content/site'
import { useReveal } from '../hooks/useReveal'

export function FinalCta() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="relative bg-ink py-36 md:py-48 px-6 overflow-hidden">
      <img
        src={images.finalCtaBg}
        alt="Detalhe automotivo Revom Studio Detail"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/60" />

      <div ref={ref} className="reveal relative z-10 mx-auto max-w-2xl text-center text-white">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
          SEU PRÓXIMO PROJETO
          <br />
          COMEÇA AQUI.
        </h2>
        <p className="mt-6 text-white/70 text-sm md:text-base font-light">
          Solicite uma avaliação e descubra a solução ideal para o seu veículo.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsapp.finalCta}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white text-ink px-9 py-4 text-xs tracking-[0.2em] font-medium uppercase transition-opacity hover:opacity-85"
          >
            Solicitar Avaliação
          </a>
          <a
            href={whatsapp.finalCta}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/40 text-white px-9 py-4 text-xs tracking-[0.2em] font-medium uppercase transition-colors hover:border-white"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
