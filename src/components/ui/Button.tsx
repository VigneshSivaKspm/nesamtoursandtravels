import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variants: Record<Variant, string> = {
  primary: 'bg-brand-500 text-navy-950 hover:bg-brand-400 active:bg-brand-600',
  secondary: 'bg-navy-950 text-white hover:bg-navy-800',
  outline: 'border border-navy-200 bg-white text-navy-900 hover:border-navy-400',
  ghost: 'text-navy-600 hover:bg-navy-100',
}

const sizes: Record<Size, string> = {
  sm: 'min-h-10 px-4 py-2 text-sm rounded-xl',
  md: 'min-h-11 px-5 py-2.5 text-sm rounded-xl font-semibold',
  lg: 'min-h-12 px-6 py-3 text-base rounded-xl font-bold',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 transition-colors active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
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
