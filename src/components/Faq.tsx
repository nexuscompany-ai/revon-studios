import { useState } from 'react'
import { faqs } from '../content/site'
import { useReveal } from '../hooks/useReveal'

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-ink/10">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg md:text-xl leading-tight">{question}</span>
        <span
          className={`relative h-5 w-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink" />
          <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-ink" />
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-base md:text-lg text-graphite font-light leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-paper py-14 md:py-16 px-6">
      <div ref={ref} className="reveal mx-auto max-w-3xl">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-xs tracking-[0.4em] text-graphite mb-4">DÚVIDAS</p>
          <h2 className="font-display text-4xl md:text-6xl leading-none">PERGUNTAS FREQUENTES</h2>
        </div>

        <div>
          {faqs.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
