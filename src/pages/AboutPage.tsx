import { Car, Shield, Clock, CreditCard } from 'lucide-react'
import { ABOUT_CONTENT, VEHICLE_FLEET } from '../data/content'
import { PageHero } from '../components/ui/PageHero'

const stats = [
  { label: '24×7 Service', icon: Clock },
  { label: 'Verified Drivers', icon: Shield },
  { label: 'GPS Tracked Fleet', icon: Car },
  { label: 'Card Payments', icon: CreditCard },
]

export function AboutPage() {
  return (
    <>
      <PageHero
        title={ABOUT_CONTENT.title}
        subtitle="One of South India's leading travel service providers, delivering excellence since years."
      />

      <section className="py-20">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="space-y-6 text-navy-600 leading-relaxed">
                {ABOUT_CONTENT.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop"
                alt="Nesam Tours fleet"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 grid grid-cols-2 gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-xl sm:-left-8">
                {stats.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl bg-navy-50 px-4 py-3"
                  >
                    <Icon className="h-5 w-5 text-brand-500" />
                    <span className="text-sm font-semibold text-navy-800">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900">
              Our Vehicle Fleet
            </h2>
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-5">
              {VEHICLE_FLEET.map((vehicle) => (
                <div
                  key={vehicle}
                  className="rounded-xl border border-navy-100 bg-white px-4 py-6 text-center transition-colors hover:border-brand-200 hover:bg-brand-50/30"
                >
                  <Car className="mx-auto mb-2 h-6 w-6 text-brand-500" />
                  <span className="text-sm font-semibold text-navy-800">
                    {vehicle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
