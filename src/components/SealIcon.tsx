export function SealIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M9 14l-2.5 6 3.2-1.1L11 21l1-4.4" fill="#2563EB" opacity="0.45" />
      <path d="M15 14l2.5 6-3.2-1.1L13 21l-1-4.4" fill="#2563EB" opacity="0.45" />
      <circle cx="12" cy="9" r="7" fill="#2563EB" />
      <path
        d="M9 9.3l1.8 1.8L15 7"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
