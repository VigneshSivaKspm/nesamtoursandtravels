import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Star, Users, MapPin, Clock } from 'lucide-react'
import { COMPANY } from '../../data/content'
import { BookingWidget } from '../booking/BookingWidget'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

const highlights = [
  'One-way Drop Taxi',
  'Round Trip Packages',
  'Airport Transfers',
  'Outstation Cab Service',
]

const floatingStats = [
  { icon: Star, label: '4.9', sub: 'Rating' },
  { icon: Users, label: '50K+', sub: 'Trips' },
  { icon: MapPin, label: '100+', sub: 'Routes' },
  { icon: Clock, label: '24×7', sub: 'Support' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 lg:min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop&q=80"
          alt=""
          className="h-full w-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/98 to-navy-950" />
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <div className="section-container relative flex flex-col gap-8 pb-12 pt-6 sm:gap-10 sm:pb-16 sm:pt-8 lg:grid lg:min-h-screen lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12 lg:pb-20 lg:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <BookingWidget />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <Badge variant="dark" className="mb-4 gap-2 text-[11px] sm:mb-6 sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Drop Taxi Chennai — Live Booking
          </Badge>

          <h1 className="font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[3.25rem] xl:text-5xl">
            Premium{' '}
            <span className="text-gradient">Drop Taxi</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Experience in Chennai
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-navy-400 sm:mt-6 sm:text-lg">
            Outstation taxi, one-way cab & airport transfers across Tamil Nadu.
            Transparent fares, GPS-tracked rides, professional drivers — 24×7.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3">
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="flex items-center gap-2 text-sm text-navy-300"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-400" />
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 hidden flex-col gap-3 sm:mt-8 sm:flex sm:flex-row sm:flex-wrap">
            <a href="#booking" className="w-full sm:w-auto">
              <Button size="lg" className="h-12 w-full sm:w-auto">
                Book Your Ride
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href={COMPANY.phoneHref} className="w-full sm:w-auto">
              <Button variant="glass" size="lg" className="h-12 w-full sm:w-auto">
                Call {COMPANY.phone}
              </Button>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-4 gap-2 sm:mt-10 sm:gap-3 lg:mt-12">
            {floatingStats.map((stat, i) => (
              <motion.div
                key={stat.sub}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08 }}
                className="rounded-xl border border-white/8 bg-white/5 p-3 text-center backdrop-blur-sm sm:rounded-2xl sm:p-4 sm:text-left"
              >
                <stat.icon className="mx-auto mb-1.5 h-4 w-4 text-brand-400 sm:mx-0 sm:mb-2" />
                <p className="font-display text-sm font-bold text-white sm:text-base">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-[10px] text-navy-500 sm:text-[11px]">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
