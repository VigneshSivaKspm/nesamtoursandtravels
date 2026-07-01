import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Car } from 'lucide-react'
import { COMPANY, FOOTER_LINKS } from '../../data/content'

export function Footer() {
  return (
    <footer className="hidden border-t border-navy-100 bg-white pb-4 lg:block">
      <div className="section-container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500">
                <Car className="h-5 w-5 text-navy-950" />
              </div>
              <span className="font-bold text-navy-950">Nesam Tours</span>
            </div>
            <p className="text-sm text-navy-500">
              Premium drop taxi & outstation cab service across South India.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-navy-950">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-navy-500 hover:text-navy-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2">
            <h3 className="mb-3 text-sm font-bold text-navy-950">Contact</h3>
            <ul className="space-y-3 text-sm text-navy-600">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-600" />
                <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-600" />
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                {COMPANY.headOffice}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-100">
        <div className="section-container py-4 text-center text-xs text-navy-500">
          {COMPANY.copyright}
        </div>
      </div>
    </footer>
  )
}
