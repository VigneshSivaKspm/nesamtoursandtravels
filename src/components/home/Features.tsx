import {
  ShieldCheck,
  Car,
  Lock,
  Headphones,
  MapPin,
  IndianRupee,
} from 'lucide-react'
import { FEATURES } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

const iconMap = {
  ShieldCheck,
  Car,
  Lock,
  Headphones,
  MapPin,
  IndianRupee,
}

export function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Choose Nesam"
          description="Reliable drop taxi service across South India."
          align="left"
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <div key={feature.title} className="app-card flex gap-4 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500">
                  <Icon className="h-5 w-5 text-navy-950" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-950">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
