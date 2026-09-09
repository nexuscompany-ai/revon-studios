import { Link } from 'react-router-dom'
import { plans, waLink } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import { CheckSeal } from './CheckSeal'
import { WhatsAppButton } from './WhatsAppButton'

function PlanCard({ plan, index }: { plan: (typeof plans)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal flex flex-col rounded-2xl border border-ink/10 bg-bone p-8 md:p-10"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <p className="text-xs tracking-[0.4em] text-graphite mb-3">PLANO</p>
      <h3 className="font-display text-3xl md:text-4xl leading-none">{plan.name}</h3>
      <p className="mt-3 text-graphite text-sm font-light leading-relaxed">{plan.summary}</p>

      <p className="mt-8 font-display text-4xl md:text-5xl">{plan.price}</p>

      <ul className="mt-8 flex-1 space-y-3">
        {plan.benefits.slice(0, 5).map((benefit) => (
          <li key={benefit} className="flex items-start gap-3">
            <CheckSeal className="h-4 w-4 mt-0.5 shrink-0 text-ink" />
            <span className="text-sm text-ink/75 font-light leading-snug">{benefit}</span>
          </li>
        ))}
        {plan.benefits.length > 5 && (
          <li className="text-xs text-graphite pl-7">+ {plan.benefits.length - 5} itens inclusos</li>
        )}
      </ul>

      <div className="mt-10 flex flex-col gap-3">
        <WhatsAppButton href={waLink(plan.name)} className="w-full">
          Escolher Plano
        </WhatsAppButton>
        <Link
          to={`/planos/${plan.slug}`}
          className="text-center text-xs tracking-[0.2em] uppercase border-b border-ink/30 pb-1 self-center hover:opacity-60 transition-opacity"
        >
          Ver mais detalhes →
        </Link>
      </div>
    </div>
  )
}

export function Plans() {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section id="planos" className="bg-paper py-28 md:py-36">
      <div ref={headingRef} className="reveal mx-auto max-w-[1440px] px-6 md:px-10 text-center mb-16 md:mb-20">
        <p className="text-xs tracking-[0.4em] text-graphite mb-4">PLANOS</p>
        <h2 className="font-display text-4xl md:text-6xl leading-none">TRATAMENTO TÉCNICO</h2>
        <p className="mt-4 text-graphite text-sm md:text-base font-light max-w-md mx-auto">
          Escolha o nível de cuidado ideal para o seu veículo.
        </p>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <PlanCard key={plan.slug} plan={plan} index={i} />
        ))}
      </div>
    </section>
  )
}
