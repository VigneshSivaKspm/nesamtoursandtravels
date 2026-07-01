import { Hero } from '../components/home/Hero'
import { TrustBar } from '../components/home/TrustBar'
import { HowItWorks } from '../components/home/HowItWorks'
import { Features } from '../components/home/Features'
import { FleetShowcase } from '../components/home/FleetShowcase'
import { PopularTrips } from '../components/home/PopularTrips'
import { Testimonials } from '../components/home/Testimonials'
import { ServiceAreas } from '../components/home/ServiceAreas'
import { CTA } from '../components/home/CTA'

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <FleetShowcase />
      <PopularTrips />
      <Testimonials />
      <ServiceAreas />
      <CTA />
    </>
  )
}
