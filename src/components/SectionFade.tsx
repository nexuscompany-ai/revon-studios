type SectionFadeProps = {
  /** Direction of the blend: 'to-dark' fades white into black, 'to-light' fades black into white. */
  direction: 'to-dark' | 'to-light'
}

/** Thin gradient seam placed between a black and a white section so the color
 * change reads as a soft blend instead of a hard line. */
export function SectionFade({ direction }: SectionFadeProps) {
  return (
    <div
      aria-hidden
      className={`h-16 md:h-24 w-full ${
        direction === 'to-dark' ? 'bg-gradient-to-b from-paper to-ink' : 'bg-gradient-to-b from-ink to-paper'
      }`}
    />
  )
}
