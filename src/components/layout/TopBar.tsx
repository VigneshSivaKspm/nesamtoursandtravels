import { Phone, Globe, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../../data/content'

export function TopBar() {
  return (
    <div className="hidden border-b border-white/5 bg-navy-950 text-xs text-navy-400 md:block">
      <div className="section-container flex items-center justify-between py-2.5">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Globe className="h-3.5 w-3.5 text-brand-400" />
            Online Cab Booking — South India
          </span>
          <span className="flex items-center gap-2">
            <Shield className="h-3.5 w-3.5 text-emerald-400" />
            GPS Tracked · Verified Drivers
          </span>
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 font-medium text-navy-300 transition-colors hover:text-brand-400"
          >
            <Phone className="h-3.5 w-3.5 text-brand-400" />
            {COMPANY.phone}
          </a>
        </div>
        <Link
          to="/login"
          className="font-semibold text-brand-400 transition-colors hover:text-brand-300"
        >
          Login / Register →
        </Link>
      </div>
    </div>
  )
}
