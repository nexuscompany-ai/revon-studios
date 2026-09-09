import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'

type WhatsAppButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'solid' | 'outline'
  size?: 'md' | 'sm'
}

const WHATSAPP_GREEN = '#25D366'

/** Standard button for any CTA that opens WhatsApp — always in WhatsApp green, with the WhatsApp icon. */
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
      ? 'text-white hover:brightness-110'
      : 'border-2 bg-transparent hover:bg-[var(--wa-green)]/10'

  return (
    <a
      {...props}
      target={target}
      rel={rel}
      style={{
        ['--wa-green' as string]: WHATSAPP_GREEN,
        backgroundColor: variant === 'solid' ? WHATSAPP_GREEN : undefined,
        borderColor: variant === 'outline' ? WHATSAPP_GREEN : undefined,
        color: variant === 'outline' ? WHATSAPP_GREEN : undefined,
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-[0.2em] transition-all duration-300 ${sizing} ${styles} ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0" />
      {children}
    </a>
  )
}
