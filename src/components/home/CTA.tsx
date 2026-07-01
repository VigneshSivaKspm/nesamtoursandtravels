import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { COMPANY } from '../../data/content'
import { Button } from '../ui/Button'

export function CTA() {
  return (
    <section className="section-container section-padding">
      <div className="rounded-2xl bg-navy-950 px-6 py-10 text-center sm:px-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to <span className="text-brand-500">Book?</span>
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-navy-400">
          Instant fare estimates and 24×7 support across South India.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link to="/book">
            <Button size="lg" className="w-full sm:w-auto">
              Get Estimate
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a href={COMPANY.phoneHref}>
            <Button variant="outline" size="lg" className="w-full border-navy-700 bg-transparent text-white sm:w-auto">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
