import { MapPin, Car, CreditCard } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const steps = [
  {
    step: '1',
    icon: MapPin,
    title: 'Enter Route',
    description: 'Pick from, to, date and trip type.',
  },
  {
    step: '2',
    icon: Car,
    title: 'Select Vehicle',
    description: 'Hatchback, sedan or SUV with clear pricing.',
  },
  {
    step: '3',
    icon: CreditCard,
    title: 'Confirm & Ride',
    description: 'Get estimate, confirm booking, and travel.',
  },
]

export function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="How It Works"
          title="Book in 3 Easy Steps"
          align="left"
        />

        <div className="grid gap-3 sm:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="app-card p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500">
                <item.icon className="h-5 w-5 text-navy-950" />
              </div>
              <p className="text-xs font-bold text-brand-600">Step {item.step}</p>
              <h3 className="mt-1 font-bold text-navy-950">{item.title}</h3>
              <p className="mt-1 text-sm text-navy-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
