import { useEffect, useRef } from 'react'

type Options = {
  threshold?: number
  rootMargin?: string
}

/** Adds `is-visible` to the ref'd element the first time it enters the viewport. */
export function useReveal<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T | null>(null)
  const { threshold = 0.15, rootMargin = '0px' } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
