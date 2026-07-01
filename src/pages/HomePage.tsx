import { Link } from 'react-router-dom'
import { ArrowRight, Plane } from 'lucide-react'
import { Hero } from '../components/home/Hero'
import { TrustBar } from '../components/home/TrustBar'
import { HowItWorks } from '../components/home/HowItWorks'
import { Features } from '../components/home/Features'
import { FleetShowcase } from '../components/home/FleetShowcase'
import { Testimonials } from '../components/home/Testimonials'
import { CTA } from '../components/home/CTA'
import { POPULAR_TRIPS } from '../data/content'
import { formatCurrency } from '../lib/utils'
import { Button } from '../components/ui/Button'

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <FleetShowcase />

      {/* Offers teaser */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Offers</p>
              <h2 className="mt-1 text-xl font-bold text-navy-950 sm:text-2xl">Popular Routes</h2>
            </div>
            <Link to="/offers" className="text-sm font-semibold text-brand-600">
              View all →
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
            {POPULAR_TRIPS.map((trip) => (
              <Link
                key={trip.id}
                to="/book"
                className="app-card w-64 shrink-0 snap-start overflow-hidden"
              >
                <img src={trip.image} alt="" className="h-32 w-full object-cover" />
                <div className="p-3">
                  <p className="text-sm font-bold text-navy-950">{trip.from} → {trip.to}</p>
                  <p className="mt-1 text-lg font-black text-brand-600">{formatCurrency(trip.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Airport teaser */}
      <section className="section-container pb-12">
        <div className="app-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500">
              <Plane className="h-5 w-5 text-navy-950" />
            </div>
            <div>
              <h2 className="font-bold text-navy-950">Airport & Local Taxi</h2>
              <p className="mt-0.5 text-sm text-navy-500">
                Chennai, Coimbatore, Madurai, Trichy & more airport transfers.
              </p>
            </div>
          </div>
          <Link to="/airport">
            <Button variant="outline" className="w-full sm:w-auto">
              Explore Routes
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  )
}
