import { useState } from 'react'
import { Star, Send, CheckCircle2 } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'

export function FeedbackPage() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        title="Feedback"
        subtitle="Your feedback helps us improve our taxi services for every traveler."
      />

      <section className="py-20">
        <div className="section-container max-w-2xl">
          {submitted ? (
            <div className="flex flex-col items-center rounded-2xl border border-navy-100 bg-white py-16 text-center shadow-lg">
              <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Thank You!
              </h2>
              <p className="mt-2 text-navy-500">
                Your feedback has been submitted successfully.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-navy-100 bg-white p-8 shadow-lg sm:p-10"
            >
              <div className="mb-8 text-center">
                <p className="mb-3 text-sm font-medium text-navy-600">
                  Rate your experience
                </p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= (hover || rating)
                            ? 'fill-brand-400 text-brand-400'
                            : 'text-navy-200'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <input type="text" placeholder="Your Name" required className="form-input" />
                <input type="email" placeholder="Email Address" required className="form-input" />
                <input type="text" placeholder="Trip Route (e.g. Chennai to Ooty)" className="form-input" />
                <textarea
                  placeholder="Share your experience..."
                  rows={6}
                  required
                  className="form-input resize-none"
                />
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-5 w-5" />
                  Submit Feedback
                </Button>
              </div>
            </form>
          )}
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
