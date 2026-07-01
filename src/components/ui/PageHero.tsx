import { Badge } from './Badge'

interface PageHeroProps {
  title: string
  subtitle?: string
  badge?: string
}

export function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="border-b border-navy-100 bg-white pt-6 pb-8 sm:pt-8 sm:pb-10">
      <div className="section-container">
        {badge && <Badge variant="brand" className="mb-3">{badge}</Badge>}
        <h1 className="text-2xl font-bold text-navy-950 sm:text-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm text-navy-500 sm:text-base">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
