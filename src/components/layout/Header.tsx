import { Link, NavLink } from 'react-router-dom'
import { Car, Phone } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '../../data/content'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

const MAIN_NAV = [
  { href: '/book', label: 'Book' },
  { href: '/airport', label: 'Airport' },
  { href: '/offers', label: 'Offers' },
  ...NAV_LINKS,
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white safe-top">
      <div className="section-container flex h-14 items-center justify-between lg:h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500">
            <Car className="h-5 w-5 text-navy-950" strokeWidth={2.5} />
          </div>
          <div className="leading-none">
            <span className="font-display text-base font-black tracking-tight text-navy-950 lg:text-lg">
              NESAM
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-navy-500">
              Tours & Travels
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {MAIN_NAV.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-brand-500/15 text-navy-950'
                    : 'text-navy-600 hover:text-navy-950',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-navy-800"
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
          <Link to="/book">
            <Button size="sm">Book Now</Button>
          </Link>
        </div>

        <Link to="/book" className="lg:hidden">
          <Button size="sm">Book</Button>
        </Link>
      </div>
    </header>
  )
}
