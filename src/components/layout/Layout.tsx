import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { BottomNav } from './BottomNav'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-navy-50">
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
      <ScrollRestoration />
    </div>
  )
}
