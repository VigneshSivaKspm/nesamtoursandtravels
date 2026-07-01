import { ArrowRight, MapPin, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { POPULAR_TRIPS } from '../../data/content'
import { formatCurrency } from '../../lib/utils'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'

export function PopularTrips() {
  return (
    <section className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-50/30 to-transparent" />

      <div className="section-container relative">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Popular Routes"
            title="Top Booked Destinations"
            description="Hand-picked routes from Chennai with competitive fixed fares and premium vehicle options."
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR_TRIPS.map((trip, i) => (
            <AnimatedSection key={trip.id} delay={i * 0.08}>
              <a
                href="#booking"
                className="group premium-card-hover block overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={`${trip.from} to ${trip.to}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                  <Badge
                    variant="brand"
                    className="absolute left-4 top-4 border-white/20 bg-white/10 text-white backdrop-blur-md"
                  >
                    <Sparkles className="h-3 w-3" />
                    Popular
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="flex items-center gap-1.5 text-xs font-medium text-brand-200">
                      <MapPin className="h-3 w-3" />
                      {trip.from} → {trip.to}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    {trip.from} to {trip.to}
                  </h3>
                  <p className="mt-1 text-xs text-navy-500">
                    Nesam Tours & Travels Pvt Ltd
                  </p>
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-navy-400">
                        Starting from
                      </p>
                      <p className="font-display text-2xl font-bold text-brand-600">
                        {formatCurrency(trip.price)}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-white transition-all group-hover:bg-brand-500 group-hover:text-navy-950">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center" delay={0.3}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-800 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
          >
            Explore All Routes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
