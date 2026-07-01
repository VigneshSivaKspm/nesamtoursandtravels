import { Shield, Clock, Award, Headphones } from 'lucide-react'

const items = [
  { icon: Shield, text: 'Verified Drivers' },
  { icon: Clock, text: '24×7 Booking' },
  { icon: Award, text: 'Best Fares' },
  { icon: Headphones, text: 'Premium Support' },
]

export function TrustBar() {
  return (
    <section className="relative z-10 pb-4 pt-2 sm:-mt-6">
      <div className="section-container">
        <div className="premium-card divide-y divide-navy-100 overflow-hidden sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {items.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 px-4 py-4 sm:justify-center sm:px-5 sm:py-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100/50">
                <Icon className="h-5 w-5 text-brand-600" />
              </div>
              <span className="text-sm font-semibold text-navy-700">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
