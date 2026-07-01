import { MapPin, Car, CreditCard } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const steps = [
  {
    step: '01',
    icon: MapPin,
    title: 'Enter Your Route',
    description:
      'Select pickup and drop locations, choose one-way or round trip, and pick your preferred travel date.',
  },
  {
    step: '02',
    icon: Car,
    title: 'Select Your Vehicle',
    description:
      'Browse hatchback, sedan, or SUV options with transparent per-km pricing and instant fare estimates.',
  },
  {
    step: '03',
    icon: CreditCard,
    title: 'Confirm & Ride',
    description:
      'Submit your booking, receive confirmation, and enjoy a GPS-tracked ride with professional drivers.',
  },
]

export function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Simple Process"
            title="Book in 3 Easy Steps"
            description="Our streamlined booking flow gets you from search to confirmed ride in under 2 minutes."
          />
        </AnimatedSection>

        <div className="relative grid gap-8 lg:grid-cols-3">
          <div className="absolute left-0 right-0 top-24 hidden h-0.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />

          {steps.map((item, i) => (
            <AnimatedSection key={item.step} delay={i * 0.12} className="relative">
              <div className="premium-card-hover group p-8 text-center lg:text-left">
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/25 transition-transform duration-500 group-hover:scale-110 lg:mx-0">
                  <item.icon className="h-7 w-7 text-navy-950" />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-navy-900 text-[10px] font-bold text-brand-400">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
