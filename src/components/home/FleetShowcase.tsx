import { Link } from 'react-router-dom'
import { Users } from 'lucide-react'
import { VEHICLES } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { formatCurrency } from '../../lib/utils'

const fleetImages: Record<string, string> = {
  hatchback:
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
  sedan:
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
  xuv: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
}

export function FleetShowcase() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Fleet"
          title="Choose Your Ride"
          description="All vehicles are AC, maintained, and driver-verified."
          align="left"
        />

        <div className="space-y-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0">
          {VEHICLES.map((v) => (
            <div key={v.id} className="app-card overflow-hidden">
              <img src={fleetImages[v.id]} alt={v.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-navy-950">{v.name}</p>
                    <p className="text-xs text-navy-500">{v.models}</p>
                  </div>
                  <span className="text-sm font-black text-brand-600">
                    {formatCurrency(v.baseFare)}/km
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-1 text-xs text-navy-500">
                  <Users className="h-3.5 w-3.5" />
                  {v.capacity} seats · AC
                </p>
                <Link
                  to="/book"
                  className="mt-3 block rounded-xl bg-brand-500 py-2.5 text-center text-sm font-bold text-navy-950"
                >
                  Book {v.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
