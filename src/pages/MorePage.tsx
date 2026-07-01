import { NavLink } from 'react-router-dom'
import {
  User,
  Car,
  MessageSquare,
  Phone,
  FileText,
  LogIn,
  Shield,
  ChevronRight,
  Home,
  CalendarCheck,
  Plane,
  Tag,
} from 'lucide-react'
import { NAV_LINKS, FOOTER_LINKS, COMPANY } from '../data/content'

const QUICK_LINKS = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/book', label: 'Book a Ride', icon: CalendarCheck },
  { to: '/airport', label: 'Airport Taxi', icon: Plane },
  { to: '/offers', label: 'Offers & Routes', icon: Tag },
]

export function MorePage() {
  return (
    <div className="min-h-full bg-navy-50 pb-6">
      {/* Profile header — like reference design */}
      <div className="bg-brand-500 px-4 pb-8 pt-6 sm:px-6">
        <div className="section-container !px-0">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-950/10">
              <User className="h-8 w-8 text-navy-950" />
            </div>
            <div>
              <p className="text-sm font-medium text-navy-900/70">Welcome to</p>
              <h1 className="text-xl font-black text-navy-950 sm:text-2xl">
                Nesam Tours & Travels
              </h1>
              <p className="text-sm text-navy-900/70">{COMPANY.phone}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container -mt-4 space-y-4">
        {/* Quick links */}
        <div className="app-card divide-y divide-navy-100 overflow-hidden">
          <p className="px-4 pt-4 text-xs font-bold uppercase tracking-wider text-navy-400">
            Quick Access
          </p>
          {QUICK_LINKS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="flex min-h-14 items-center gap-3 px-4 transition-colors active:bg-navy-50"
            >
              <Icon className="h-5 w-5 text-brand-600" strokeWidth={1.75} />
              <span className="flex-1 text-sm font-medium text-navy-900">{label}</span>
              <ChevronRight className="h-4 w-4 text-navy-300" />
            </NavLink>
          ))}
        </div>

        {/* Main nav */}
        <div className="app-card divide-y divide-navy-100 overflow-hidden">
          <p className="px-4 pt-4 text-xs font-bold uppercase tracking-wider text-navy-400">
            Services
          </p>
          {NAV_LINKS.map(({ href, label }) => (
            <NavLink
              key={href}
              to={href}
              className="flex min-h-14 items-center gap-3 px-4 transition-colors active:bg-navy-50"
            >
              <MenuIcon label={label} />
              <span className="flex-1 text-sm font-medium text-navy-900">{label}</span>
              <ChevronRight className="h-4 w-4 text-navy-300" />
            </NavLink>
          ))}
        </div>

        {/* Policies */}
        <div className="app-card divide-y divide-navy-100 overflow-hidden">
          <p className="px-4 pt-4 text-xs font-bold uppercase tracking-wider text-navy-400">
            Policies & Info
          </p>
          {FOOTER_LINKS.filter((l) => !NAV_LINKS.some((n) => n.href === l.href)).map(
            ({ href, label }) => (
              <NavLink
                key={href}
                to={href}
                className="flex min-h-14 items-center gap-3 px-4 transition-colors active:bg-navy-50"
              >
                <FileText className="h-5 w-5 text-navy-400" />
                <span className="flex-1 text-sm font-medium text-navy-900">{label}</span>
                <ChevronRight className="h-4 w-4 text-navy-300" />
              </NavLink>
            ),
          )}
        </div>

        {/* Account */}
        <div className="app-card divide-y divide-navy-100 overflow-hidden">
          <NavLink
            to="/login"
            className="flex min-h-14 items-center gap-3 px-4 transition-colors active:bg-navy-50"
          >
            <LogIn className="h-5 w-5 text-navy-400" />
            <span className="flex-1 text-sm font-medium text-navy-900">Login / Register</span>
            <ChevronRight className="h-4 w-4 text-navy-300" />
          </NavLink>
          <a
            href={COMPANY.phoneHref}
            className="flex min-h-14 items-center gap-3 bg-brand-500/10 px-4"
          >
            <Phone className="h-5 w-5 text-brand-700" />
            <span className="flex-1 text-sm font-bold text-navy-950">{COMPANY.phone}</span>
            <ChevronRight className="h-4 w-4 text-brand-600" />
          </a>
        </div>
      </div>
    </div>
  )
}

function MenuIcon({ label }: { label: string }) {
  const icons: Record<string, typeof User> = {
    'About Us': User,
    'Attach Vehicle': Car,
    Feedback: MessageSquare,
    'Contact Us': Phone,
  }
  const Icon = icons[label] ?? Shield
  return <Icon className="h-5 w-5 text-navy-400" strokeWidth={1.75} />
}
