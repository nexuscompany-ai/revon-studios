type LogoProps = {
  className?: string
  light?: boolean
}

/** Official Revom Studio Detail wordmark. On dark/transparent hero backgrounds
 * (light=true) it's rendered inverted so the black logo reads on black. */
export function Logo({ className = '', light = false }: LogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="Revom Studio Detail"
      className={`h-10 md:h-11 w-auto select-none transition-[filter] duration-300 ${
        light ? 'invert' : ''
      } ${className}`}
    />
  )
}
