import { cn } from '../../lib/utils'
import { Badge } from './Badge'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 max-w-3xl sm:mb-14',
        align === 'center' ? 'mx-auto text-center' : '',
        className,
      )}
    >
      {eyebrow && (
        <Badge variant={light ? 'dark' : 'brand'} className="mb-3 sm:mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2
        className={cn(
          'font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl xl:text-[2.75rem] xl:leading-[1.15]',
          light ? 'text-white' : 'text-navy-900',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3 text-base leading-relaxed sm:mt-5 sm:text-lg',
            light ? 'text-navy-400' : 'text-navy-500',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
