import { Link } from 'react-router-dom'
import { Plane, MapPin, ArrowRight } from 'lucide-react'
import {
  AIRPORT_TAXI,
  LOCAL_TAXI_DESTINATIONS,
  SERVICE_CATEGORIES,
} from '../data/content'
import { Button } from '../components/ui/Button'

export function AirportPage() {
  return (
    <div className="min-h-full bg-navy-50">
      <div className="border-b border-navy-100 bg-white">
        <div className="section-container py-5 sm:py-6 lg:py-8">
          <div className="flex items-center gap-2 text-brand-600">
            <Plane className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-wider sm:text-sm">
              Airport & Local
            </span>
          </div>
          <h1 className="mt-2 text-2xl font-bold text-navy-950 sm:text-3xl">
            Airport & Outstation Taxi
          </h1>
          <p className="mt-1.5 text-sm text-navy-500 sm:text-base">
            Airport pickups, drop-offs, and local routes across Tamil Nadu & South India.
          </p>
          <Link to="/book" className="mt-4 inline-block">
            <Button size="md">
              Book Airport Taxi
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="section-container space-y-4 py-6 sm:py-8">
        <div className="app-card p-5">
          <div className="mb-4 flex items-center gap-2">
            <Plane className="h-5 w-5 text-brand-600" />
            <h2 className="font-bold text-navy-950">Airport Taxi Services</h2>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {AIRPORT_TAXI.map((item) => (
              <Link
                key={item}
                to="/book"
                className="flex items-center justify-between rounded-xl border border-navy-100 bg-navy-50/50 px-4 py-3.5 text-sm font-medium text-navy-800 transition-colors hover:border-brand-400 hover:bg-brand-50"
              >
                {item}
                <ArrowRight className="h-4 w-4 text-navy-400" />
              </Link>
            ))}
          </div>
        </div>

        <div className="app-card p-5">
          <div className="mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-brand-600" />
            <h2 className="font-bold text-navy-950">Local Taxi Destinations</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {LOCAL_TAXI_DESTINATIONS.map((item) => (
              <Link
                key={item}
                to="/book"
                className="rounded-full bg-navy-50 px-3.5 py-2 text-xs font-medium text-navy-700 ring-1 ring-navy-100 transition-colors hover:bg-brand-500 hover:text-navy-950 hover:ring-brand-500 sm:text-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="app-card p-5">
          <h2 className="mb-3 font-bold text-navy-950">Service Categories</h2>
          <div className="flex flex-wrap gap-2">
            {SERVICE_CATEGORIES.map((cat) => (
              <Link
                key={cat}
                to="/book"
                className="chip chip-active text-sm"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
