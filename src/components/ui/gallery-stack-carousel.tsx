import * as React from "react"
import { motion, type PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

interface GalleryImage {
  id: number | string
  src: string
  alt?: string
}

interface GalleryStackCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  images: GalleryImage[]
  autoplayDelay?: number
  showDots?: boolean
}

/**
 * Image-only variant of a draggable card-stack carousel (adapted from a
 * testimonial carousel pattern): no text, advances on its own on a timer,
 * and still supports a manual drag-to-advance for anyone who wants to skip.
 */
const GalleryStackCarousel = React.forwardRef<
  HTMLDivElement,
  GalleryStackCarouselProps
>(({ className, images, autoplayDelay = 3200, showDots = true, ...props }, ref) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [exitX, setExitX] = React.useState(0)

  // A ref (not state) tracks the drag gate so a stray touch that starts a
  // drag but never cleanly ends it (e.g. the page scroll takes over on
  // mobile) can't leave autoplay permanently paused.
  const isDraggingRef = React.useRef(false)

  const advance = React.useCallback((direction: number) => {
    setExitX(direction)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
      setExitX(0)
    }, 200)
  }, [images.length])

  const handleDragStart = () => {
    isDraggingRef.current = true
  }

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    isDraggingRef.current = false
    if (Math.abs(info.offset.x) > 100) {
      advance(info.offset.x)
    }
  }

  // Safety net: any pointer released or cancelled anywhere clears the drag
  // gate, so autoplay can never get stuck off after an interrupted gesture.
  React.useEffect(() => {
    const release = () => {
      isDraggingRef.current = false
    }
    window.addEventListener("pointerup", release)
    window.addEventListener("pointercancel", release)
    return () => {
      window.removeEventListener("pointerup", release)
      window.removeEventListener("pointercancel", release)
    }
  }, [])

  React.useEffect(() => {
    if (images.length <= 1) return
    const timer = setTimeout(() => {
      if (!isDraggingRef.current) advance(-120)
    }, autoplayDelay)
    return () => clearTimeout(timer)
  }, [currentIndex, autoplayDelay, advance, images.length])

  return (
    <div
      ref={ref}
      className={cn("w-full flex items-center justify-center", className)}
      {...props}
    >
      <div className="relative w-full h-full">
        {images.map((image, index) => {
          const isCurrentCard = index === currentIndex
          const isPrevCard = index === (currentIndex + 1) % images.length
          const isNextCard = index === (currentIndex + 2) % images.length

          if (!isCurrentCard && !isPrevCard && !isNextCard) return null

          return (
            <motion.div
              key={image.id}
              className="absolute inset-0 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing bg-ink shadow-2xl"
              style={{ zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1 }}
              drag={isCurrentCard ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragStart={isCurrentCard ? handleDragStart : undefined}
              onDragEnd={isCurrentCard ? handleDragEnd : undefined}
              initial={{
                scale: 0.94,
                opacity: 0,
                y: isCurrentCard ? 0 : isPrevCard ? 10 : 20,
                rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
              }}
              animate={{
                scale: isCurrentCard ? 1 : 0.94,
                opacity: isCurrentCard ? 1 : isPrevCard ? 0.55 : 0.28,
                x: isCurrentCard ? exitX : 0,
                y: isCurrentCard ? 0 : isPrevCard ? 10 : 20,
                rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={image.src}
                alt={image.alt ?? "Projeto Revom Studio Detail"}
                draggable={false}
                className="h-full w-full object-cover"
              />
            </motion.div>
          )
        })}

        {showDots && (
          <div className="absolute -bottom-9 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((image, index) => (
              <span
                key={image.id}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === currentIndex ? "w-6 bg-ink" : "w-1.5 bg-ink/20",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
})
GalleryStackCarousel.displayName = "GalleryStackCarousel"

export { GalleryStackCarousel, type GalleryImage }
