import { Link } from 'react-router-dom'
import { Gift } from 'lucide-react'

export function PromoBanner() {
  return (
    <Link
      to="/#offers"
      className="mt-4 flex items-center gap-3 rounded-2xl bg-brand-500 px-4 py-3.5 transition-opacity active:opacity-90"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-950/10">
        <Gift className="h-5 w-5 text-navy-950" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-navy-950">Lowest fare drop taxi in Chennai</p>
        <p className="text-xs text-navy-800/80">Book one-way & outstation · GPS tracked · 24×7</p>
      </div>
    </Link>
  )
}
