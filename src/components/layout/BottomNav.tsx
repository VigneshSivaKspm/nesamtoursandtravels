import { NavLink } from 'react-router-dom'
import { Home, CalendarCheck, Plane, Tag, Menu } from 'lucide-react'
import { cn } from '../../lib/utils'

const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/book', label: 'Book', icon: CalendarCheck },
  { to: '/airport', label: 'Airport', icon: Plane },
  { to: '/offers', label: 'Offers', icon: Tag },
  { to: '/more', label: 'More', icon: Menu },
] as const

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-100 bg-white lg:hidden safe-bottom">
      <div className="mx-auto grid h-16 max-w-lg grid-cols-5 px-1">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={'end' in item ? item.end : undefined}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center gap-0.5 transition-colors',
                isActive ? 'text-brand-600' : 'text-navy-400',
              )
            }
          >
            <item.icon className="h-5 w-5" strokeWidth={1.75} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
