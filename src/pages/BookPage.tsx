import { Shield, Clock, IndianRupee, Phone, CheckCircle2 } from 'lucide-react'
import { COMPANY } from '../data/content'
import { BookingWidget } from '../components/booking/BookingWidget'
import { Button } from '../components/ui/Button'

const perks = [
  { icon: IndianRupee, text: 'Transparent per-km pricing with GST included' },
  { icon: Shield, text: 'GPS-tracked rides with verified drivers' },
  { icon: Clock, text: '24×7 booking & customer support' },
  { icon: CheckCircle2, text: 'One-way, round trip & airport transfers' },
]

export function BookPage() {
  return (
    <div className="min-h-full bg-navy-50">
      {/* Page header */}
      <div className="border-b border-navy-100 bg-white">
        <div className="section-container py-5 sm:py-6 lg:py-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 sm:text-sm">
            Instant Booking
          </p>
          <h1 className="mt-1 text-2xl font-bold text-navy-950 sm:text-3xl">
            Where do you want to go today?
          </h1>
          <p className="mt-1.5 text-sm text-navy-500 sm:text-base">
            Fill in your trip details below to get a fare estimate and confirm your booking.
          </p>
        </div>
      </div>

      {/* Booking area */}
      <div className="section-container py-5 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-5xl lg:grid lg:grid-cols-5 lg:items-start lg:gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <BookingWidget compact />
          </div>

          {/* Sidebar — desktop */}
          <aside className="mt-6 space-y-4 lg:col-span-2 lg:mt-0">
            <div className="app-card p-5">
              <h2 className="font-bold text-navy-950">Why book with Nesam?</h2>
              <ul className="mt-4 space-y-3">
                {perks.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-navy-600">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/15">
                      <Icon className="h-4 w-4 text-brand-700" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="app-card bg-navy-950 p-5 text-white">
              <p className="text-sm text-navy-300">Need help booking?</p>
              <p className="mt-1 text-lg font-bold">Call us anytime</p>
              <a href={COMPANY.phoneHref} className="mt-3 block">
                <Button size="md" className="w-full">
                  <Phone className="h-4 w-4" />
                  {COMPANY.phone}
                </Button>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
