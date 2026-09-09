import { useEffect, useRef } from 'react'

/**
 * Ties each `[data-surge]` child's opacity/transform/blur continuously to its
 * scroll position, so items "surge" into place as the user scrolls (or swipes on
 * mobile) instead of firing a single one-shot reveal.
 */
export function useScrollSurge<T extends HTMLElement>() {
  const containerRef = useRef<T | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = Array.from(container.querySelectorAll<HTMLElement>('[data-surge]'))
    let ticking = false

    const update = () => {
      const vh = window.innerHeight
      items.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const raw = (vh - rect.top) / (vh * 0.72)
        const progress = Math.min(Math.max(raw, 0), 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        el.style.opacity = String(eased)
        el.style.transform = `translateY(${(1 - eased) * 72}px) scale(${0.94 + eased * 0.06})`
        el.style.filter = `blur(${(1 - eased) * 5}px)`
      })
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return containerRef
}
