import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { POPULAR_TRIPS } from '../../data/content'
import { formatCurrency } from '../../lib/utils'
import { SectionHeading } from '../ui/SectionHeading'

export function PopularTrips() {
  return (
    <section id="offers" className="section-padding bg-white scroll-mt-20">
      <div className="section-container">
        <SectionHeading
          eyebrow="Offers"
          title="Popular Routes"
          description="Top booked destinations from Chennai at competitive fares."
          align="left"
        />

        <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:grid-cols-4">
          {POPULAR_TRIPS.map((trip) => (
            <Link
              key={trip.id}
              to="/book"
              className="app-card flex overflow-hidden transition-transform active:scale-[0.99] sm:flex-col"
            >
              <img
                src={trip.image}
                alt={`${trip.from} to ${trip.to}`}
                className="h-24 w-28 shrink-0 object-cover sm:h-36 sm:w-full"
              />
              <div className="flex flex-1 flex-col justify-center p-3 sm:p-4">
                <p className="flex items-center gap-1 text-[11px] text-navy-500">
                  <MapPin className="h-3 w-3" />
                  {trip.from} → {trip.to}
                </p>
                <p className="mt-1 font-bold text-navy-950">
                  {trip.from} to {trip.to}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-black text-brand-600">
                    {formatCurrency(trip.price)}
                  </span>
                  <ArrowRight className="h-4 w-4 text-navy-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
