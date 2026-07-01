import { Phone, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../../data/content'
import { Button } from '../ui/Button'
import { AnimatedSection } from '../ui/AnimatedSection'

export function CTA() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-16 sm:px-16 sm:py-20">
            <div className="absolute inset-0 mesh-gradient opacity-50" />
            <div className="absolute inset-0 grid-pattern" />
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-500/20 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-300">
                <Sparkles className="h-4 w-4" />
                Start Your Journey Today
              </div>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready for a Premium
                <span className="text-gradient"> Ride Experience?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-navy-400">
                Instant fare estimates, GPS-tracked vehicles, and 24×7 support.
                Book your drop taxi or outstation cab in under 2 minutes.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a href="#booking">
                  <Button size="lg">
                    Get Instant Estimate
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
                <a href={COMPANY.phoneHref}>
                  <Button variant="glass" size="lg">
                    <Phone className="h-5 w-5" />
                    {COMPANY.phone}
                  </Button>
                </a>
                <Link to="/about">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-navy-400 hover:bg-white/5 hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
