import {
  ShieldCheck,
  Car,
  Lock,
  Headphones,
  MapPin,
  IndianRupee,
} from 'lucide-react'
import { FEATURES } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
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
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for Premium Travel"
            description="Every detail engineered for reliability, comfort, and transparency — the standard you'd expect from a world-class booking platform."
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            const isLarge = i === 0 || i === 3

            return (
              <AnimatedSection
                key={feature.title}
                delay={i * 0.08}
                className={isLarge ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <div className="group premium-card-hover relative h-full overflow-hidden p-8">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/5 transition-transform duration-700 group-hover:scale-150" />
                  <div className="relative">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 shadow-lg transition-all duration-500 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:shadow-brand-500/30">
                      <Icon className="h-6 w-6 text-brand-400 transition-colors group-hover:text-navy-950" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy-900">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
