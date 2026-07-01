import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Tag, Gift } from 'lucide-react'
import { POPULAR_TRIPS } from '../data/content'
import { formatCurrency } from '../lib/utils'
import { Button } from '../components/ui/Button'

export function OffersPage() {
  return (
    <div className="min-h-full bg-navy-50">
      <div className="border-b border-navy-100 bg-white">
        <div className="section-container py-5 sm:py-6 lg:py-8">
          <div className="flex items-center gap-2 text-brand-600">
            <Tag className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-wider sm:text-sm">
              Offers & Routes
            </span>
          </div>
          <h1 className="mt-2 text-2xl font-bold text-navy-950 sm:text-3xl">
            Popular Trips & Offers
          </h1>
          <p className="mt-1.5 text-sm text-navy-500 sm:text-base">
            Top booked routes from Chennai at competitive fixed fares.
          </p>
        </div>
      </div>

      {/* Promo banner */}
      <div className="section-container pt-5 sm:pt-6">
        <div className="flex items-center gap-3 rounded-2xl bg-brand-500 px-4 py-4 sm:px-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950/10">
            <Gift className="h-5 w-5 text-navy-950" />
          </div>
          <div>
            <p className="font-bold text-navy-950">Lowest fare drop taxi in Chennai</p>
            <p className="text-sm text-navy-900/80">GPS tracked · Verified drivers · 24×7 booking</p>
          </div>
        </div>
      </div>

      <div className="section-container py-5 sm:py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {POPULAR_TRIPS.map((trip) => (
            <Link
              key={trip.id}
              to="/book"
              className="app-card group overflow-hidden transition-transform active:scale-[0.99]"
            >
              <div className="relative h-40 overflow-hidden sm:h-44">
                <img
                  src={trip.image}
                  alt={`${trip.from} to ${trip.to}`}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                <span className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-medium text-white">
                  <MapPin className="h-3 w-3" />
                  {trip.from} → {trip.to}
                </span>
              </div>
              <div className="p-4">
                <h2 className="font-bold text-navy-950">
                  {trip.from} to {trip.to} Taxi
                </h2>
                <p className="mt-0.5 text-xs text-navy-500">Nesam Tours & Travels</p>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-navy-400">From</p>
                    <p className="text-xl font-black text-brand-600">
                      {formatCurrency(trip.price)}
                    </p>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-950 text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/book">
            <Button size="lg">
              Book Any Route
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
