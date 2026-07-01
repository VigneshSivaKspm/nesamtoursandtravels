import { CANCELLATION_POLICY } from '../data/content'
import { PageHero } from '../components/ui/PageHero'

export function CancellationPage() {
  return (
    <>
      <PageHero title="Cancellation Policy" />

      <section className="py-20">
        <div className="section-container max-w-3xl">
          <p className="mb-10 text-lg leading-relaxed text-navy-600">
            {CANCELLATION_POLICY.intro}
          </p>

          <div className="space-y-8">
            {CANCELLATION_POLICY.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-navy-100 bg-white p-8"
              >
                <h2 className="font-display text-lg font-bold text-navy-900">
                  {section.title}
                </h2>
                <p className="mt-3 leading-relaxed text-navy-600">
                  {section.content}
                </p>
                {'list' in section && section.list && (
                  <ul className="mt-4 list-inside list-disc space-y-2 text-navy-600">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
