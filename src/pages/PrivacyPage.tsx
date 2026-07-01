import { COMPANY, PRIVACY_POLICY } from '../data/content'
import { PageHero } from '../components/ui/PageHero'

export function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />

      <section className="py-20">
        <div className="section-container max-w-3xl">
          <p className="mb-10 text-lg leading-relaxed text-navy-600">
            {PRIVACY_POLICY.intro} For any clarifications, you may write to{' '}
            <a
              href={`mailto:${COMPANY.supportEmail}`}
              className="font-medium text-brand-600 hover:underline"
            >
              {COMPANY.supportEmail}
            </a>
          </p>

          <div className="space-y-8">
            {PRIVACY_POLICY.sections.map((section) => (
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
