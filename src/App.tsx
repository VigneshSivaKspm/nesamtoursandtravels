import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { BookPage } from './pages/BookPage'
import { AirportPage } from './pages/AirportPage'
import { OffersPage } from './pages/OffersPage'
import { MorePage } from './pages/MorePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { FeedbackPage } from './pages/FeedbackPage'
import { AttachVehiclePage } from './pages/AttachVehiclePage'
import { PrivacyPage } from './pages/PrivacyPage'
import { CancellationPage } from './pages/CancellationPage'
import { TermsPage } from './pages/TermsPage'
import { LoginPage } from './pages/LoginPage'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'book', element: <BookPage /> },
      { path: 'airport', element: <AirportPage /> },
      { path: 'offers', element: <OffersPage /> },
      { path: 'more', element: <MorePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'feedback', element: <FeedbackPage /> },
      { path: 'attach-vehicle', element: <AttachVehiclePage /> },
      { path: 'privacy-policy', element: <PrivacyPage /> },
      { path: 'cancellation-policy', element: <CancellationPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
