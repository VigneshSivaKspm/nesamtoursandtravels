import { VEHICLES } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { formatCurrency } from '../../lib/utils'
import { Users, Luggage } from 'lucide-react'

const fleetImages: Record<string, string> = {
  hatchback:
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
  sedan:
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
  xuv: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
}

export function FleetShowcase() {
  return (
    <section className="bg-navy-950 section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our Fleet"
            title="Choose Your Perfect Ride"
            description="From compact hatchbacks to spacious SUVs — every vehicle is maintained, insured, and driven by verified professionals."
            light
          />
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-3">
          {VEHICLES.map((v, i) => (
            <AnimatedSection key={v.id} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-2xl border border-white/8 bg-white/5 transition-all duration-500 hover:border-brand-500/30 hover:bg-white/8">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={fleetImages[v.id]}
                    alt={v.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="font-display text-2xl font-bold text-white">
                      {v.name}
                    </p>
                    <p className="text-sm text-navy-400">{v.models}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-navy-400">
                      <span className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-brand-400" />
                        {v.capacity} seats
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Luggage className="h-4 w-4 text-brand-400" />
                        AC
                      </span>
                    </div>
                    <p className="font-display text-lg font-bold text-brand-400">
                      {formatCurrency(v.baseFare)}/km
                    </p>
                  </div>
                  <a
                    href="#booking"
                    className="mt-4 block w-full rounded-xl bg-white/10 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:text-navy-950"
                  >
                    Book {v.name}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
