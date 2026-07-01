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
        'mb-8 max-w-3xl sm:mb-10',
        align === 'center' ? 'mx-auto text-center' : '',
        className,
      )}
    >
      {eyebrow && (
        <Badge variant={light ? 'dark' : 'brand'} className="mb-3">
          {eyebrow}
        </Badge>
      )}
      <h2
        className={cn(
          'text-2xl font-bold tracking-tight sm:text-3xl',
          light ? 'text-white' : 'text-navy-950',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-2 text-sm leading-relaxed sm:mt-3 sm:text-base',
            light ? 'text-navy-300' : 'text-navy-500',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
