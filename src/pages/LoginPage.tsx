import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogIn, User, Lock } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <PageHero
        title={isLogin ? 'Login' : 'Register'}
        subtitle="Access your bookings and manage your travel with Nesam Tours & Travels."
      />

      <section className="py-20">
        <div className="section-container max-w-md">
          <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-xl">
            <div className="mb-6 flex rounded-xl bg-navy-50 p-1">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  isLogin
                    ? 'bg-white text-navy-900 shadow-sm'
                    : 'text-navy-500'
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  !isLogin
                    ? 'bg-white text-navy-900 shadow-sm'
                    : 'text-navy-500'
                }`}
              >
                Register
              </button>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="form-input pl-11"
                  />
                </div>
              )}
              <div className="relative">
                <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="form-input pl-11"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="form-input pl-11"
                />
              </div>
              {!isLogin && (
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="form-input pl-11"
                  />
                </div>
              )}

              <Button type="submit" size="lg" className="w-full">
                <LogIn className="h-5 w-5" />
                {isLogin ? 'Login' : 'Create Account'}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-navy-500">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="font-semibold text-brand-600 hover:underline"
              >
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>

            <p className="mt-4 text-center text-sm text-navy-400">
              Or{' '}
              <Link to="/contact" className="text-brand-600 hover:underline">
                contact us
              </Link>{' '}
              to book over phone
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--color-navy-200);
          padding: 0.875rem 1rem;
          font-size: 0.875rem;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-brand-500);
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
        }
      `}</style>
    </>
  )
}
