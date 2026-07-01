import { Phone, Sparkles } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { COMPANY } from '../../data/content'
import { Button } from '../ui/Button'

export function MobileActionBar() {
  const location = useLocation()
  const bookingHref = location.pathname === '/' ? '#booking' : '/#booking'

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-200/80 bg-white/95 p-3 backdrop-blur-xl safe-bottom lg:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a href={COMPANY.phoneHref} className="flex-1">
          <Button
            variant="outline"
            size="md"
            className="h-12 w-full border-navy-200 text-navy-800"
          >
            <Phone className="h-4 w-4" />
            Call
          </Button>
        </a>
        <a href={bookingHref} className="flex-[1.4]">
          <Button size="md" className="h-12 w-full">
            <Sparkles className="h-4 w-4" />
            Book Now
          </Button>
        </a>
      </div>
    </div>
  )
}
