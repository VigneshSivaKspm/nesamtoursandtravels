import { useState } from 'react'
import { Car, Send, CheckCircle2 } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'

export function AttachVehiclePage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        title="Attach Vehicle"
        subtitle="Partner with Nesam Tours & Travels — register your vehicle and join our growing fleet network."
      />

      <section className="py-20">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Why Partner With Us?
              </h2>
              <ul className="mt-6 space-y-4 text-navy-600">
                {[
                  'Steady booking flow from online and phone enquiries',
                  'Transparent payment terms with regular trip assignments',
                  'GPS-enabled operations and professional support team',
                  'Coverage across Tamil Nadu and South India routes',
                  '24×7 operations with dedicated fleet management',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Car className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-lg">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
                  <h3 className="font-display text-xl font-bold text-navy-900">
                    Application Received!
                  </h3>
                  <p className="mt-2 text-navy-500">
                    Our team will review your details and contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    Vehicle Registration Form
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <input type="text" placeholder="Owner Name" required className="form-input" />
                    <input type="tel" placeholder="Phone Number" required className="form-input" />
                  </div>
                  <input type="email" placeholder="Email Address" required className="form-input" />
                  <input type="text" placeholder="Vehicle Number" required className="form-input" />
                  <select required className="form-input">
                    <option value="">Vehicle Type</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV / XUV</option>
                    <option value="tempo">Tempo Traveler</option>
                  </select>
                  <input type="text" placeholder="Vehicle Model (e.g. Innova, Etios)" required className="form-input" />
                  <input type="text" placeholder="City / Operating Area" required className="form-input" />
                  <textarea
                    placeholder="Additional Details"
                    rows={4}
                    className="form-input resize-none"
                  />
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-5 w-5" />
                    Submit Application
                  </Button>
                </form>
              )}
            </div>
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
