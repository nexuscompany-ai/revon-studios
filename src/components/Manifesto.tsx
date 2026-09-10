import { useReveal } from '../hooks/useReveal'
import { Highlight } from './Highlight'

export function Manifesto() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-paper py-16 md:py-24 px-6">
      <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-10 h-px w-16 bg-ink/30" />
        <h2 className="font-display text-ink leading-[0.95] text-[12vw] sm:text-6xl md:text-7xl">
          Detalhe não é excesso.
          <br />É <Highlight>precisão</Highlight>.
        </h2>
        <p className="mt-10 text-graphite text-sm md:text-base font-light max-w-md mx-auto leading-relaxed">
          Tratamentos desenvolvidos para cuidar, recuperar e proteger cada detalhe do seu veículo.
        </p>
      </div>
    </section>
  )
}
