import { cn } from '../../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'brand' | 'dark' | 'success'
  className?: string
}

const variants = {
  default: 'bg-navy-100 text-navy-700',
  brand: 'border border-brand-500/30 bg-brand-500/10 text-brand-600',
  dark: 'border border-white/10 bg-white/5 text-brand-200',
  success: 'bg-accent-light text-emerald-700',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
