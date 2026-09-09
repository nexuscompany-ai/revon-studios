import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { business, nav } from '../content/site'

export function Footer() {
  return (
    <footer className="bg-paper py-16 px-6 md:px-10">
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Logo />
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] text-graphite mb-4">NAVEGAÇÃO</p>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-sm text-ink/70 hover:text-ink transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] text-graphite mb-4">CONTATO</p>
          <p className="text-sm text-ink/70">{business.phoneDisplay}</p>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-ink/70 hover:text-ink transition-colors block mt-1"
          >
            {business.instagramHandle}
          </a>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] text-graphite mb-4">LOCALIZAÇÃO</p>
          <p className="text-sm text-ink/70">
            {business.city} — {business.state}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] mt-14 pt-8 border-t border-line">
        <p className="text-[11px] text-graphite tracking-wide">© 2026 REVOM STUDIO DETAIL</p>
      </div>
    </footer>
  )
}
