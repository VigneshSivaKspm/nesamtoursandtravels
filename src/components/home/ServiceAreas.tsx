import { MapPin, Plane, ArrowUpRight } from 'lucide-react'
import {
  LOCAL_TAXI_DESTINATIONS,
  AIRPORT_TAXI,
  SERVICE_CATEGORIES,
  VEHICLE_FLEET,
} from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

export function ServiceAreas() {
  return (
    <section className="border-y border-navy-100/80 bg-white section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Coverage"
            title="Every Route, Every Destination"
            description="From local city rides to long-distance outstation trips — comprehensive coverage across Tamil Nadu and South India."
          />
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-5" delay={0.1}>
            <ServiceBlock
              icon={MapPin}
              title="Local Taxi"
              count={LOCAL_TAXI_DESTINATIONS.length}
              items={LOCAL_TAXI_DESTINATIONS}
            />
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3" delay={0.15}>
            <ServiceBlock
              icon={Plane}
              title="Airport Taxi"
              count={AIRPORT_TAXI.length}
              items={AIRPORT_TAXI}
              compact
            />
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-4" delay={0.2}>
            <div className="premium-card h-full p-6">
              <h3 className="mb-5 font-display text-lg font-bold text-navy-900">
                Service Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {SERVICE_CATEGORIES.map((cat) => (
                  <a
                    key={cat}
                    href="#booking"
                    className="group inline-flex items-center gap-1 rounded-full bg-navy-900 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-brand-500 hover:text-navy-950"
                  >
                    {cat}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>

              <h3 className="mb-4 mt-8 font-display text-lg font-bold text-navy-900">
                Premium Fleet
              </h3>
              <div className="flex flex-wrap gap-2">
                {VEHICLE_FLEET.map((v) => (
                  <span
                    key={v}
                    className="rounded-lg border border-navy-100 bg-navy-50/50 px-3 py-1.5 text-xs font-medium text-navy-600"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function ServiceBlock({
  icon: Icon,
  title,
  count,
  items,
  compact,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  count: number
  items: readonly string[]
  compact?: boolean
}) {
  return (
    <div className="premium-card h-full p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-md shadow-brand-500/20">
            <Icon className="h-5 w-5 text-navy-950" />
          </div>
          <div>
            <h3 className="font-display font-bold text-navy-900">{title}</h3>
            <p className="text-xs text-navy-500">{count} destinations</p>
          </div>
        </div>
      </div>
      <div className={`flex flex-wrap gap-2 ${compact ? '' : 'max-h-64 overflow-y-auto pr-1'}`}>
        {items.map((item) => (
          <a
            key={item}
            href="#booking"
            className="rounded-full border border-navy-100 bg-navy-50/80 px-3 py-1.5 text-xs font-medium text-navy-600 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}
