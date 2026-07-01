import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const avatars = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop',
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () =>
    setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1))
  const next = () =>
    setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1))

  const item = TESTIMONIALS[active]

  return (
    <section className="relative overflow-hidden bg-navy-950 section-padding">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="section-container relative">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by Travelers"
            description="Real stories from customers who experienced our premium drop taxi and outstation services."
            light
          />
        </AnimatedSection>

        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl border border-white/8 bg-white/5 p-6 backdrop-blur-sm sm:rounded-3xl sm:p-12"
            >
              <Quote className="mb-6 h-10 w-10 text-brand-500/30" />
              <div className="mb-6 flex gap-1">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-brand-400 text-brand-400"
                  />
                ))}
              </div>
              <p className="text-base leading-relaxed text-navy-200 sm:text-lg lg:text-xl">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/8 pt-8">
                <img
                  src={avatars[active]}
                  alt={item.author}
                  className="h-14 w-14 rounded-2xl object-cover ring-2 ring-brand-500/30"
                />
                <div>
                  <p className="font-display font-bold text-white">
                    {item.author}
                  </p>
                  <p className="text-sm text-brand-400">{item.service}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-brand-500/50 hover:bg-brand-500/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'w-8 bg-brand-500' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-brand-500/50 hover:bg-brand-500/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
