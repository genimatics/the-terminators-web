'use client';

import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { TEXTS } from '@/constants/text';

export default function OurExpertise() {
  const DATA = TEXTS.OUR_EXPERTISE;

  return (
    <section className="w-full bg-white px-4 py-6 sm:px-6 sm:py-10 md:px-8 md:py-16 lg:px-12 xl:px-16 2xl:px-24">
      <div className="mx-auto max-w-4xl">

        <ScrollReveal>
          <div className="mb-16 text-center md:mb-24">
            <p className="mb-4 text-xs tracking-widest text-gray-600 uppercase sm:text-sm md:text-lg">
              {DATA.VISION.SMALL}
            </p>

            <h2 className="mb-6 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
              {DATA.VISION.TITLE}
            </h2>

            <div className="mx-auto max-w-3xl">
              <p className="text-xl leading-relaxed text-gray-700 sm:text-2xl">
                {DATA.VISION.DESC}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center md:mb-24">

            <p className="mb-2 text-xs tracking-widest text-gray-600 uppercase sm:text-sm md:text-lg">
              {DATA.STRENGTHS.SMALL}
            </p>

            <h2 className="mb-8 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
              {DATA.STRENGTHS.TITLE}
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {DATA.STRENGTHS.CARDS.map((card, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-6 text-center transition-shadow duration-300"
                >
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    {card.icon.includes('/')
                      ? (
                          <img
                            src={card.icon}
                            alt={card.title}
                            className="h-14 w-14 scale-120 object-contain"
                          />
                        )
                      : (
                          <span className="text-xl font-bold">{card.icon}</span>
                        )}
                  </div>

                  <h4 className="mb-2 text-xl font-semibold text-gray-800">
                    {card.title}
                  </h4>

                  <p className="text-[15px] text-gray-600">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 mb-12">
              <Button size="md">{DATA.STRENGTHS.BUTTON}</Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-center">

            <p className="mb-4 text-xs tracking-widest text-gray-600 uppercase sm:text-sm md:text-lg">
              {DATA.MISSION.SMALL}
            </p>

            <h2 className="mb-6 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
              {DATA.MISSION.TITLE}
            </h2>

            <div className="mx-auto max-w-3xl">
              <p className="leaing-relaxed text-xl text-gray-700 sm:text-2xl">
                {DATA.MISSION.DESC}
              </p>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
