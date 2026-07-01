import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react'
import { COMPANY } from '../data/content'
import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { AnimatedSection } from '../components/ui/AnimatedSection'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        badge="Get In Touch"
        title="Contact Us"
        subtitle="Reach our team for bookings, enquiries, and support — we're available 24×7 across South India."
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="space-y-4 lg:col-span-2">
              {[
                {
                  icon: Phone,
                  title: 'Call Us',
                  content: COMPANY.phone,
                  href: COMPANY.phoneHref,
                  highlight: true,
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  content: COMPANY.email,
                  href: `mailto:${COMPANY.email}`,
                },
                {
                  icon: MapPin,
                  title: 'Head Office',
                  content: COMPANY.headOffice,
                },
                {
                  icon: MapPin,
                  title: 'Branch Office',
                  content: COMPANY.branchOffice,
                },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.08}>
                  <ContactCard {...item} />
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="lg:col-span-3" delay={0.2}>
              <div className="premium-card overflow-hidden">
                <div className="border-b border-navy-100 bg-navy-50/50 px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15">
                      <MessageSquare className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-navy-900">
                        Send an Enquiry
                      </h2>
                      <p className="text-sm text-navy-500">
                        We typically respond within 2 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center py-16 text-center"
                    >
                      <CheckCircle2 className="mb-4 h-16 w-16 text-emerald-500" />
                      <h3 className="font-display text-2xl font-bold text-navy-900">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-navy-500">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          className="input-premium"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          required
                          className="input-premium"
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="input-premium"
                      />
                      <input
                        type="text"
                        placeholder="Subject"
                        className="input-premium"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="input-premium resize-none"
                      />
                      <Button type="submit" size="lg" className="w-full sm:w-auto">
                        <Send className="h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactCard({
  icon: Icon,
  title,
  content,
  href,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  content: string
  href?: string
  highlight?: boolean
}) {
  const inner = (
    <div
      className={`premium-card-hover flex gap-4 p-6 ${
        highlight ? 'border-brand-200/60 bg-brand-50/30' : ''
      }`}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
          highlight
            ? 'bg-gradient-to-br from-brand-400 to-brand-600 shadow-md shadow-brand-500/20'
            : 'bg-navy-100'
        }`}
      >
        <Icon
          className={`h-5 w-5 ${highlight ? 'text-navy-950' : 'text-brand-600'}`}
        />
      </div>
      <div>
        <h3 className="font-display font-bold text-navy-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-navy-600">{content}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {inner}
      </a>
    )
  }
  return inner
}
