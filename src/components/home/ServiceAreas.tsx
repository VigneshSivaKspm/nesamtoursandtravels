import { MapPin, Plane } from 'lucide-react'
import {
  LOCAL_TAXI_DESTINATIONS,
  AIRPORT_TAXI,
  SERVICE_CATEGORIES,
} from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { cn } from '../../lib/utils'

export function ServiceAreas() {
  return (
    <section id="airport" className="section-padding scroll-mt-20">
      <div className="section-container">
        <SectionHeading
          eyebrow="Airport & Local"
          title="Airport & Outstation Taxi"
          description="Airport transfers and local routes across Tamil Nadu."
          align="left"
        />

        <div className="app-card mb-4 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Plane className="h-5 w-5 text-brand-600" />
            <h3 className="font-bold text-navy-950">Airport Taxi</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {AIRPORT_TAXI.map((item) => (
              <a
                key={item}
                href="/book"
                className="chip chip-inactive text-xs active:bg-brand-500 active:text-navy-950"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="app-card p-4">
          <div className="mb-3 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-brand-600" />
            <h3 className="font-bold text-navy-950">Local Taxi</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {LOCAL_TAXI_DESTINATIONS.map((item) => (
              <a
                key={item}
                href="/book"
                className="rounded-full bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-700 active:bg-brand-500 active:text-navy-950"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat}
              href="/book"
              className={cn('chip chip-active text-xs')}
            >
              {cat}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
