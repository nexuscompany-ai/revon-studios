type SectionSeamProps = {
  /** Cor de chegada: 'to-dark' encerra em preto, 'to-light' encerra em branco. */
  direction: 'to-dark' | 'to-light'
  /** Recorte geométrico usado na costura entre as seções. */
  variant: 'moon' | 'diagonal'
}

const WHITE = '#ffffff'
const BLACK = '#0a0a0a'

/** Costura sólida entre uma seção preta e uma branca — sem gradiente. Dois
 * recortes alternam pelo site: uma meia-lua (elipse) e um corte diagonal,
 * escolhidos ponto a ponto para dar variedade sem virar um padrão repetitivo. */
export function SectionSeam({ direction, variant }: SectionSeamProps) {
  const [start, end] = direction === 'to-dark' ? [WHITE, BLACK] : [BLACK, WHITE]

  return (
    <div aria-hidden className="relative h-12 sm:h-16 md:h-24 w-full overflow-hidden" style={{ background: end }}>
      {variant === 'moon' ? (
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ background: start, width: '130%', height: '200%', top: '-100%', borderRadius: '50%' }}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: start, clipPath: 'polygon(0 0, 100% 0, 100% 38%, 0 100%)' }}
        />
      )}
    </div>
  )
}
