import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react'
import { COMPANY } from '../data/content'
import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const cards = [
    { icon: Phone, title: 'Call Us', content: COMPANY.phone, href: COMPANY.phoneHref, highlight: true },
    { icon: Mail, title: 'Email Us', content: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPin, title: 'Head Office', content: COMPANY.headOffice },
    { icon: MapPin, title: 'Branch Office', content: COMPANY.branchOffice },
  ]

  return (
    <>
      <PageHero badge="Get In Touch" title="Contact Us" subtitle="Available 24×7 for bookings and support." />

      <section className="section-padding">
        <div className="section-container grid gap-6 lg:grid-cols-5">
          <div className="space-y-3 lg:col-span-2">
            {cards.map((item) => (
              <ContactCard key={item.title} {...item} />
            ))}
          </div>

          <div className="app-card overflow-hidden lg:col-span-3">
            <div className="border-b border-navy-100 bg-navy-50 px-5 py-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-brand-600" />
                <div>
                  <h2 className="font-bold text-navy-950">Send an Enquiry</h2>
                  <p className="text-xs text-navy-500">We respond within 2 hours</p>
                </div>
              </div>
            </div>

            <div className="p-5">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 className="mb-3 h-12 w-12 text-brand-600" />
                  <h3 className="text-xl font-bold text-navy-950">Message Sent!</h3>
                  <p className="mt-1 text-sm text-navy-500">We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input type="text" placeholder="Your Name" required className="input-field" />
                    <input type="tel" placeholder="Phone Number" required className="input-field" />
                  </div>
                  <input type="email" placeholder="Email Address" required className="input-field" />
                  <input type="text" placeholder="Subject" className="input-field" />
                  <textarea placeholder="Your Message" rows={5} required className="input-field resize-none" />
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
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
    <div className={`app-card flex gap-3 p-4 ${highlight ? 'ring-2 ring-brand-500/30' : ''}`}>
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${highlight ? 'bg-brand-500' : 'bg-navy-100'}`}>
        <Icon className={`h-5 w-5 ${highlight ? 'text-navy-950' : 'text-navy-700'}`} />
      </div>
      <div>
        <h3 className="font-bold text-navy-950">{title}</h3>
        <p className="mt-0.5 text-sm text-navy-600">{content}</p>
      </div>
    </div>
  )

  if (href) return <a href={href}>{inner}</a>
  return inner
}
