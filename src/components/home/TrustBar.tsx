import { Shield, Clock, Award, Headphones } from 'lucide-react'

const items = [
  { icon: Shield, text: 'Verified Drivers' },
  { icon: Clock, text: '24×7 Booking' },
  { icon: Award, text: 'Best Fares' },
  { icon: Headphones, text: 'Live Support' },
]

export function TrustBar() {
  return (
    <section className="section-container pb-6">
      <div className="app-card grid grid-cols-2 divide-x divide-navy-100 sm:grid-cols-4">
        {items.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-2.5 px-3 py-4 sm:justify-center sm:px-4"
          >
            <Icon className="h-5 w-5 shrink-0 text-brand-600" strokeWidth={1.75} />
            <span className="text-xs font-semibold text-navy-800 sm:text-sm">{text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
