import { useReveal } from '../hooks/useReveal'

/** Seção de história/origem da Revom — texto puro por enquanto (sem barra de
 * estatísticas: números como "anos de experiência" ou "carros atendidos"
 * entram aqui só quando o cliente confirmar os valores reais). */
export function History() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-ink py-16 md:py-24 px-6">
      <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.4em] text-white/40 mb-4">SOBRE A REVOM</p>
        <h2
          className="italic leading-[1.05] text-[9vw] sm:text-5xl md:text-6xl"
          style={{ color: '#ffcc03', fontFamily: 'var(--font-accent)' }}
        >
          Nascemos da paixão pelo detalhe.
        </h2>
        <p className="mt-8 text-white/60 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
          A Revom Studio Detail nasceu em Itapevi, da convicção de que cada carro merece ser tratado como
          uma obra de arte. Do sonho à realidade, crescemos guiados por um único compromisso: cuidar de
          cada detalhe com a técnica e a precisão que o seu veículo merece.
        </p>
        <p className="mt-6 text-white/60 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
          Trabalhamos apenas com produtos e técnicas de ponta — porque o detalhe não é apenas estética.
          É preservação, é cuidado, é respeito pelo que o seu carro representa.
        </p>
      </div>
    </section>
  )
}
