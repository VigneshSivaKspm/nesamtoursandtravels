import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { TopBar } from './TopBar'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileActionBar } from './MobileActionBar'

export function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex-1 pb-20 lg:pb-0"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <MobileActionBar />
      <ScrollRestoration />
    </div>
  )
}
