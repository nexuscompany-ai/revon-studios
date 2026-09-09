type SectionFadeProps = {
  /** Direction of the blend: 'to-dark' fades white into black, 'to-light' fades black into white. */
  direction: 'to-dark' | 'to-light'
}

const WHITE = '#ffffff'
const BLACK = '#0a0a0a'

/** Gradient seam placed between a black and a white section so the color
 * change reads as a slow, soft blend instead of a hard line. Uses extra
 * stops (not just from/to) so the transition eases in and out instead of
 * ramping linearly. */
export function SectionFade({ direction }: SectionFadeProps) {
  const [start, end] = direction === 'to-dark' ? [WHITE, BLACK] : [BLACK, WHITE]

  return (
    <div
      aria-hidden
      className="h-24 md:h-40 w-full"
      style={{
        background: `linear-gradient(to bottom, ${start} 0%, ${start} 15%, ${end} 85%, ${end} 100%)`,
      }}
    />
  )
}
