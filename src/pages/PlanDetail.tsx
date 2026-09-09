import { Link, Navigate, useParams } from 'react-router-dom'
import { plans, waLink } from '../content/site'
import { CheckSeal } from '../components/CheckSeal'
import { WhatsAppButton } from '../components/WhatsAppButton'

export function PlanDetail() {
  const { slug } = useParams()
  const plan = plans.find((p) => p.slug === slug)

  if (!plan) return <Navigate to="/#planos" replace />

  return (
    <section className="bg-paper py-40 md:py-48 px-6">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs tracking-[0.4em] text-graphite mb-4">PLANO</p>
        <h1 className="font-display text-5xl md:text-7xl leading-none">{plan.name}</h1>
        <p className="mt-5 text-graphite text-base md:text-lg font-light leading-relaxed max-w-lg">
          {plan.summary}
        </p>

        <div className="mt-10 h-px w-16 bg-ink/20" />

        <p className="mt-10 font-display text-5xl md:text-6xl">{plan.price}</p>

        <div className="mt-12">
          <p className="text-xs tracking-[0.4em] text-graphite mb-6">O QUE ESTÁ INCLUSO</p>
          <ul className="space-y-4">
            {plan.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckSeal className="h-5 w-5 mt-0.5 shrink-0 text-ink" />
                <span className="text-sm md:text-base text-ink/80 font-light leading-relaxed">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <WhatsAppButton href={waLink(plan.name)}>Escolher {plan.name}</WhatsAppButton>
        </div>

        <div className="mt-24 pt-10 border-t border-ink/10 text-center">
          <Link
            to="/#planos"
            className="inline-flex items-center gap-2 rounded-full border border-ink px-8 py-4 text-xs tracking-[0.2em] font-medium uppercase transition-colors hover:bg-ink hover:text-white"
          >
            ← Voltar
          </Link>
        </div>
      </div>
    </section>
  )
}
