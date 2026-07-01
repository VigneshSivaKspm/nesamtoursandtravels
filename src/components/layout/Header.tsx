import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Car, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, COMPANY } from '../../data/content'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'
import { useScrolled } from '../../hooks/useScrolled'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useLockBodyScroll(mobileOpen)

  const closeMenu = () => setMobileOpen(false)

  const headerBg = scrolled || !isHome || mobileOpen
    ? 'border-navy-200/60 bg-white/95 shadow-[0_4px_24px_rgba(15,23,42,0.08)] backdrop-blur-2xl'
    : 'max-lg:border-white/10 max-lg:bg-navy-950/90 max-lg:backdrop-blur-xl lg:border-white/5 lg:bg-transparent'

  const textPrimary = scrolled || !isHome || mobileOpen ? 'text-navy-900' : 'text-white'
  const textSecondary = scrolled || !isHome || mobileOpen ? 'text-navy-500' : 'text-navy-400'
  const navText = scrolled || !isHome || mobileOpen ? 'text-navy-600' : 'text-navy-300'

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-all duration-300 safe-top',
          headerBg,
          !scrolled && isHome && 'lg:absolute lg:left-0 lg:right-0 lg:top-[37px] lg:border-white/5 lg:bg-transparent lg:shadow-none',
        )}
      >
        <div className="section-container flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={closeMenu}>
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/30 sm:h-11 sm:w-11 sm:rounded-2xl">
              <Car className="h-5 w-5 text-navy-950" />
            </div>
            <div className="min-w-0 leading-tight">
              <span className={cn('font-display text-base font-bold tracking-tight sm:text-lg', textPrimary)}>
                Nesam
              </span>
              <span className={cn('block truncate text-[10px] font-medium uppercase tracking-widest sm:text-[11px]', textSecondary)}>
                Tours & Travels
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-xl px-4 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? scrolled || !isHome ? 'text-brand-700' : 'text-brand-300'
                      : scrolled || !isHome ? 'text-navy-600 hover:text-navy-900' : `${navText} hover:text-white`,
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={COMPANY.phoneHref}
              className={cn(
                'flex items-center gap-2 text-sm font-semibold transition-colors',
                scrolled || !isHome ? 'text-navy-700 hover:text-brand-600' : 'text-navy-200 hover:text-white',
              )}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/15">
                <Phone className="h-3.5 w-3.5 text-brand-400" />
              </span>
              {COMPANY.phone}
            </a>
            <a href={isHome ? '#booking' : '/#booking'}>
              <Button size="sm" className="gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Book Now
              </Button>
            </a>
          </div>

          <button
            type="button"
            className={cn('touch-target flex items-center justify-center rounded-xl lg:hidden', textPrimary)}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden safe-top safe-bottom"
            >
              <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
                <span className="font-display font-bold text-navy-900">Menu</span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="touch-target flex items-center justify-center rounded-xl text-navy-600"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-4">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      cn(
                        'mb-1 flex min-h-12 items-center rounded-xl px-4 text-base font-medium',
                        isActive ? 'bg-brand-50 text-brand-700' : 'text-navy-700 active:bg-navy-50',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <div className="space-y-3 border-t border-navy-100 p-4">
                <a href={COMPANY.phoneHref} onClick={closeMenu}>
                  <Button variant="outline" className="h-12 w-full">
                    <Phone className="h-4 w-4" />
                    {COMPANY.phone}
                  </Button>
                </a>
                <a href={isHome ? '#booking' : '/#booking'} onClick={closeMenu}>
                  <Button className="h-12 w-full">
                    <Sparkles className="h-4 w-4" />
                    Book Your Ride
                  </Button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
