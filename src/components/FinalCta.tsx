import { images, whatsapp } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import { WhatsAppButton } from './WhatsAppButton'

export function FinalCta() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="relative bg-ink py-16 md:py-24 px-6 overflow-hidden">
      <img
        src={images.finalCtaBg}
        alt="Detalhe automotivo Revom Studio Detail"
        className="absolute inset-0 h-full w-full object-cover opacity-70 md:opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/30 md:from-black/65 md:via-black/20 md:to-black/35" />

      <div ref={ref} className="reveal relative z-10 mx-auto max-w-2xl text-center text-white">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
          SEU PRÓXIMO PROJETO
          <br />
          COMEÇA AQUI.
        </h2>
        <p className="mt-6 text-white/70 text-sm md:text-base font-light">
          Solicite uma avaliação e descubra a solução ideal para o seu veículo.
        </p>

        <div className="mt-12 flex items-center justify-center">
          <WhatsAppButton href={whatsapp.finalCta}>Solicitar Avaliação</WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
