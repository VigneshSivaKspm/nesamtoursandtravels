import { cn } from '../../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'brand' | 'dark'
  className?: string
}

const variants = {
  default: 'bg-navy-100 text-navy-700',
  brand: 'bg-brand-500 text-navy-950',
  dark: 'bg-navy-950 text-brand-500',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
