import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  const [active, setActive] = useState(0)
  const item = TESTIMONIALS[active]

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Reviews"
          title="Loved by Travelers"
          align="left"
        />

        <div className="app-card p-5">
          <div className="mb-3 flex gap-1">
            {Array.from({ length: item.rating }).map((_, j) => (
              <Star key={j} className="h-4 w-4 fill-brand-500 text-brand-500" />
            ))}
          </div>
          <p className="text-sm leading-relaxed text-navy-700 sm:text-base">
            &ldquo;{item.text}&rdquo;
          </p>
          <p className="mt-4 text-sm font-bold text-navy-950">{item.author}</p>
          <p className="text-xs text-brand-600">{item.service}</p>

          <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-4">
            <button
              type="button"
              onClick={() => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${i === active ? 'w-6 bg-brand-500' : 'w-2 bg-navy-200'}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
