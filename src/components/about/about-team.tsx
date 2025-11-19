'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { TEXTS } from '@/constants/text';

export default function AboutTeam() {
  const { ABOUT_TEAM } = TEXTS;

  return (
    <section className="w-full bg-secondary px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-12 xl:px-16 2xl:px-24">
      {/* Heading */}
      <div className="w-full text-center">
        <ScrollReveal>
          <p className="mb-3 text-xs tracking-[4px] text-gray-500 uppercase sm:text-base">
            {ABOUT_TEAM.HEADINGS.SMALL_TITLE}
          </p>
          <h2 className="mb-5 text-2xl font-bold text-gray-900 sm:text-3xl md:text-5xl">
            {ABOUT_TEAM.HEADINGS.TITLE}
          </h2>
          <p className="mx-auto mb-8 w-full max-w-full text-sm leading-relaxed text-gray-600 sm:mb-12 sm:text-base md:mb-14 md:text-lg">
            {ABOUT_TEAM.HEADINGS.PARAGRAPH}
          </p>
        </ScrollReveal>
      </div>

      {/* Team Grid */}
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10">
        {ABOUT_TEAM.MEMBERS.map((member, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <div className="overflow-hidden border border-black shadow-md transition-all duration-500 hover:shadow-xl">
              <div className="relative h-[250px] w-full overflow-hidden border-b border-black sm:h-[320px] md:h-[420px]">
                <Image
                  src={member.IMAGE || '/placeholder.svg'}
                  alt={member.NAME}
                  fill
                  className="transform object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="bg-white py-4 text-center sm:py-6">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
                  {member.NAME}
                </h3>
                <p className="text-xs tracking-wide text-gray-600 uppercase sm:text-sm md:text-base">
                  {member.ROLE}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
