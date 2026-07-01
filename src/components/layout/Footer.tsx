import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Car, Send, ArrowUpRight } from 'lucide-react'
import { COMPANY, FOOTER_LINKS, LOCAL_TAXI_DESTINATIONS } from '../../data/content'
import { Button } from '../ui/Button'

export function Footer() {
  return (
    <footer className="relative bg-navy-950 text-navy-400">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="section-container py-12 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/20">
                <Car className="h-6 w-6 text-navy-950" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">
                  Nesam Tours
                </span>
                <span className="block text-xs uppercase tracking-widest text-navy-500">
                  & Travels Pvt Ltd
                </span>
              </div>
            </div>
            <p className="mb-8 max-w-sm text-sm leading-relaxed">
              South India&apos;s premium drop taxi and outstation cab service.
              Transparent pricing, GPS-tracked rides, and 24×7 professional
              support.
            </p>
            <div className="flex gap-3">
              <SocialLink href={COMPANY.social.facebook} label="Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialLink>
              <SocialLink href={COMPANY.social.instagram} label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-1 text-sm transition-colors hover:text-brand-400"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>
            <ul className="space-y-5 text-sm">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-start gap-3 transition-colors hover:text-brand-400"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Phone className="h-4 w-4 text-brand-400" />
                  </span>
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-brand-400"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Mail className="h-4 w-4 text-brand-400" />
                  </span>
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="h-4 w-4 text-brand-400" />
                </span>
                <div>
                  <p className="font-medium text-white">Head Office</p>
                  <p className="mt-1 leading-relaxed">{COMPANY.headOffice}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 pl-12">
                <div>
                  <p className="font-medium text-white">Branch Office</p>
                  <p className="mt-1 leading-relaxed">{COMPANY.branchOffice}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
              Book Now
            </h3>
            <p className="mb-5 text-sm leading-relaxed">
              Get an instant fare estimate and confirm your ride in minutes.
            </p>
            <div className="space-y-3">
              <a href="/#booking">
                <Button variant="primary" size="md" className="w-full">
                  Get Fare Estimate
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="md"
                  className="w-full border-white/10 text-white hover:border-brand-400 hover:bg-brand-500/10"
                >
                  <Send className="h-4 w-4" />
                  Send Enquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/5 bg-white/3 p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-navy-500">
            Popular Routes
          </p>
          <div className="flex flex-wrap gap-2">
            {LOCAL_TAXI_DESTINATIONS.slice(0, 15).map((dest) => (
              <a
                key={dest}
                href="/#booking"
                className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs transition-colors hover:border-brand-500/30 hover:text-brand-300"
              >
                {dest}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-8 text-sm sm:flex-row">
          <p>{COMPANY.copyright}</p>
          <p className="text-navy-600">
            Crafted for premium travel across South India
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-navy-400 transition-all hover:border-brand-500/30 hover:bg-brand-500 hover:text-navy-950"
    >
      {children}
    </a>
  )
}
