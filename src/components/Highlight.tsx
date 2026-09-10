import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type HighlightProps = {
  children: ReactNode
}

/** Wraps text with a yellow highlighter-marker sweep, animated in once the
 * text scrolls into view — like drawing over the essential phrase by hand. */
export function Highlight({ children }: HighlightProps) {
  const ref = useReveal<HTMLSpanElement>({ threshold: 0.6 })

  return (
    <span ref={ref} className="highlight-mark relative inline-block whitespace-nowrap px-1">
      <span className="highlight-mark__sweep absolute inset-y-[6%] inset-x-0 origin-left scale-x-0 rounded-[0.2em] bg-[#ffcc03]/80" />
      <span className="relative">{children}</span>
    </span>
  )
}
