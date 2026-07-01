import { motion } from 'framer-motion'
import { Badge } from './Badge'

interface PageHeroProps {
  title: string
  subtitle?: string
  badge?: string
}

export function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-[120px]" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {badge && (
            <Badge variant="dark" className="mb-4">
              {badge}
            </Badge>
          )}
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy-400 sm:mt-5 sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
    </section>
  )
}
