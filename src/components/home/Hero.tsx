import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Clock, Phone } from 'lucide-react'
import { COMPANY } from '../../data/content'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="bg-navy-50">
      {/* Banner */}
      <div className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] lg:min-h-[360px]">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&h=600&fit=crop&q=80"
          alt="Drop taxi service"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
        <div className="section-container relative flex min-h-[220px] flex-col justify-end py-8 sm:min-h-[280px] sm:py-10 lg:min-h-[360px] lg:justify-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-500 sm:text-xs">
            Nesam Tours & Travels
          </p>
          <h1 className="mt-2 max-w-lg text-[1.65rem] font-black leading-[1.15] text-white sm:text-3xl lg:text-5xl lg:leading-tight">
            One Way, <span className="text-brand-500">Endless Journeys.</span>
          </h1>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-100 sm:max-w-md sm:text-base">
            Premium drop taxi & outstation cab across South India — available 24×7.
          </p>
        </div>
      </div>

      {/* CTA card */}
      <div className="section-container relative z-10 -mt-6 pb-6 sm:-mt-8 sm:pb-8 lg:-mt-10 lg:pb-12">
        <div className="app-card mx-auto max-w-4xl overflow-hidden shadow-lg">
          <div className="flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-8">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-navy-500">Hello, Traveller 👋</p>
              <h2 className="mt-1 text-lg font-bold text-navy-950 sm:text-2xl">
                Ready to book your ride?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">
                Search routes, pick your vehicle, and get an instant fare estimate in seconds.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-navy-600 sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4 shrink-0 text-brand-600" />
                  Verified drivers
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 shrink-0 text-brand-600" />
                  24×7 support
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:min-w-[220px] lg:flex-col">
              <Link to="/book" className="w-full">
                <Button size="lg" className="h-12 w-full text-base">
                  Book Your Ride
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href={COMPANY.phoneHref} className="w-full">
                <Button variant="outline" size="lg" className="h-12 w-full text-base">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
