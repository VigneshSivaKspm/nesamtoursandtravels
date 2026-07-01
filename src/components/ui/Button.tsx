import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variants: Record<Variant, string> = {
  primary:
    'btn-shine bg-gradient-to-r from-brand-400 to-brand-500 text-navy-950 shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:from-brand-300 hover:to-brand-400',
  secondary:
    'bg-navy-900 text-white shadow-lg shadow-navy-900/20 hover:bg-navy-800 hover:shadow-xl',
  outline:
    'border border-navy-200/80 bg-white/50 text-navy-800 backdrop-blur-sm hover:border-brand-400 hover:bg-brand-50/50 hover:text-brand-700',
  ghost: 'text-navy-600 hover:bg-navy-100/80 hover:text-navy-900',
  glass:
    'border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20',
}

const sizes: Record<Size, string> = {
  sm: 'min-h-10 px-4 py-2.5 text-sm rounded-xl',
  md: 'min-h-11 px-6 py-3 text-sm rounded-xl',
  lg: 'min-h-12 px-8 py-4 text-base rounded-2xl',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
)

Button.displayName = 'Button'
