import { IMAGES } from '@/constants/images';
import { TEXTS } from '@/constants/text';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-12 text-foreground">
      <div
        className="bg-primary px-4 py-14 text-primary-foreground backdrop-blur-2xl sm:py-18 lg:py-22"
        style={{ backgroundImage: `url(${IMAGES.HERO.SLIDE1})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{TEXTS.PRIVACYHEADER.TITLE}</h1>
            <p className="text-lg font-medium opacity-90 sm:text-xl">{TEXTS.PRIVACYHEADER.SUBTITLE}</p>
            {/* <p className="mx-auto max-w-2xl text-base opacity-85 sm:text-lg">{TEXTS.PRIVACYHEADER.DESCRIPTION}</p> */}
          </div>
        </div>
      </div>

      <main className="px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <section className="mb-12 sm:mb-16">
            <div className="rounded-lg border border-border bg-secondary/50 p-6 backdrop-blur-sm sm:p-8">
              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                <span className="font-semibold text-primary">M/S THE TERMINATORS </span>

                is committed to maintaining the highest standards in all our operations. Our policies reflect our
                dedication to quality, safety, ethical business practices, and respect for human rights.
              </p>
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <div className="mb-8">
              <div className="inline-block">
                <h2 className="relative pb-3 text-3xl font-bold text-foreground sm:text-4xl">
                  {TEXTS.QHSE_POLICY.TITLE}
                  <div className="absolute bottom-0 left-0 h-1 w-24 rounded-full bg-primary"></div>
                </h2>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {TEXTS.QHSE_POLICY.POINTS.map((point, index) => (
                <div key={index} className="group flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 transition-colors duration-200 group-hover:bg-primary/30">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <p className="pt-0.5 text-base leading-relaxed text-foreground sm:text-lg">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <div className="mb-8">
              <div className="inline-block">
                <h2 className="relative pb-3 text-3xl font-bold text-foreground sm:text-4xl">
                  {TEXTS.ETHICAL_POLICY.TITLE}
                  <div className="absolute bottom-0 left-0 h-1 w-24 rounded-full bg-primary"></div>
                </h2>
              </div>
            </div>

            <div className="space-y-4 rounded-lg border border-border bg-card p-6 sm:space-y-6 sm:p-8">
              <p className="text-base leading-relaxed font-medium text-foreground sm:text-lg">
                {TEXTS.ETHICAL_POLICY.CONTENT}
              </p>
              <p className="text-base leading-relaxed text-foreground sm:text-lg">{TEXTS.ETHICAL_POLICY.SUB_CONTENT}</p>
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <div className="mb-8">
              <div className="inline-block">
                <h2 className="relative pb-3 text-3xl font-bold text-foreground sm:text-4xl">
                  {TEXTS.HUMAN_RIGHTS_POLICY.TITLE}
                  <div className="absolute bottom-0 left-0 h-1 w-24 rounded-full bg-primary"></div>
                </h2>
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                {TEXTS.HUMAN_RIGHTS_POLICY.CONTENT}
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {TEXTS.HUMAN_RIGHTS_POLICY.POINTS.map((point, index) => (
                <div key={index} className="group flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-primary transition-transform duration-200 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="pt-0.5 text-base leading-relaxed text-foreground sm:text-lg">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="overflow-hidden rounded-xl bg-primary text-primary-foreground shadow-lg">
            <div className="p-6 sm:p-8 lg:p-10">
              <h3 className="mb-3 text-2xl font-bold sm:text-3xl">{TEXTS.CONTACT_INFO.TITLE}</h3>
              <p className="mb-8 max-w-2xl text-base opacity-90 sm:text-lg">{TEXTS.CONTACT_INFO.DESCRIPTION}</p>

              <div className="space-y-4 sm:space-y-5">
                <div className="group flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 rounded-lg bg-primary-foreground/20 p-2 transition-colors duration-200 group-hover:bg-primary-foreground/30">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium opacity-75 sm:text-sm">Email</p>
                    <p className="text-base font-medium sm:text-lg">
                      {' '}
                      <a
                        href={`mailto:${TEXTS.CONTACT_INFO.EMAIL}`}
                      >
                        {TEXTS.CONTACT_INFO.EMAIL}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 rounded-lg bg-primary-foreground/20 p-2 transition-colors duration-200 group-hover:bg-primary-foreground/30">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium opacity-75 sm:text-sm">Phone</p>
                    <p className="text-base font-medium sm:text-lg">
                      {' '}
                      <a
                        href={`tel:${TEXTS.CONTACT_INFO.PHONE}`}
                      >
                        {TEXTS.CONTACT_INFO.PHONE}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 rounded-lg bg-primary-foreground/20 p-2 transition-colors duration-200 group-hover:bg-primary-foreground/30">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium opacity-75 sm:text-sm">Contact Person</p>
                    <p className="text-base font-medium sm:text-lg">{TEXTS.CONTACT_INFO.CONTACT_PERSON}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-12 space-y-2 border-t border-border pt-8 text-center sm:mt-16 sm:pt-10">
            <p className="text-sm text-muted-foreground">
              Last Updated:
              {' '}
              <span className="font-medium">
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">M/S THE TERMINATORS</span>
              {' '}
              © 2003 -
              {' '}
              {new Date().getFullYear()}
              . All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
