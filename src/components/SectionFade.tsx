type SectionFadeProps = {
  /** Direction of the blend: 'to-dark' fades white into black, 'to-light' fades black into white. */
  direction: 'to-dark' | 'to-light'
}

const WHITE = '#ffffff'
const BLACK = '#0a0a0a'

/** Gradient seam placed between a black and a white section so the color
 * change reads as a slow, soft blend instead of a hard line. A single
 * linear ramp across a tall band keeps the per-pixel change gentle. */
export function SectionFade({ direction }: SectionFadeProps) {
  const [start, end] = direction === 'to-dark' ? [WHITE, BLACK] : [BLACK, WHITE]

  return (
    <div
      aria-hidden
      className="h-10 sm:h-14 md:h-20 w-full"
      style={{ background: `linear-gradient(to bottom, ${start}, ${end})` }}
    />
  )
}
