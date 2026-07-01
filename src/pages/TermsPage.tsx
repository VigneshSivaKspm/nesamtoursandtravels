import { TERMS_CONDITIONS } from '../data/content'
import { PageHero } from '../components/ui/PageHero'

export function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle={TERMS_CONDITIONS.intro}
      />

      <section className="py-20">
        <div className="section-container max-w-3xl">
          <div className="rounded-2xl border border-navy-100 bg-white p-8 sm:p-10">
            <ol className="space-y-4">
              {TERMS_CONDITIONS.items.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-navy-600 leading-relaxed"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
