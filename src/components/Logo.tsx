type LogoProps = {
  className?: string
  light?: boolean
}

/** Wordmark placeholder based on the Revom identity — swap for the official logo asset when available. */
export function Logo({ className = '', light = false }: LogoProps) {
  const color = light ? 'text-white' : 'text-ink'
  return (
    <div className={`flex flex-col leading-none select-none ${color} ${className}`}>
      <span className="font-display text-xl md:text-2xl tracking-[0.15em]">REVOM</span>
      <span className="text-[9px] md:text-[10px] tracking-[0.5em] font-sans font-light mt-0.5 opacity-70">
        STUDIO DETAIL
      </span>
    </div>
  )
}
