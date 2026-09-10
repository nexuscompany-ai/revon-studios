import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'

type WhatsAppButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'solid' | 'outline'
  size?: 'md' | 'sm'
}

/** Standard button for any CTA that opens WhatsApp — always in the site's
 * action color (--color-action, defined in index.css), with the real
 * WhatsApp icon. This is the single place that color is applied, so every
 * WhatsApp/conversion CTA on the site stays visually consistent. */
export function WhatsAppButton({
  children,
  variant = 'solid',
  size = 'md',
  className = '',
  target = '_blank',
  rel = 'noreferrer',
  ...props
}: WhatsAppButtonProps) {
  const sizing = size === 'sm' ? 'px-6 py-3 text-xs' : 'px-8 py-4 text-xs'

  const styles =
    variant === 'solid'
      ? 'bg-action text-white hover:brightness-110'
      : 'border-2 border-action text-action bg-transparent hover:bg-action/10'

  return (
    <a
      {...props}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-[0.2em] transition-all duration-300 ${sizing} ${styles} ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0" />
      {children}
    </a>
  )
}
