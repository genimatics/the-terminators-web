'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { TEXTS } from '@/constants/text';

export default function AboutTeam() {
  const { ABOUT_TEAM } = TEXTS;
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -330, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 330, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-secondary px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-12 xl:px-16 2xl:px-24">

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

      <div className="relative w-full">

        <div
          ref={scrollRef}
          className="no-scrollbar flex w-full gap-6 overflow-x-scroll scroll-smooth pr-6
            sm:gap-8 md:gap-10 md:pr-10"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >

          {ABOUT_TEAM.MEMBERS.map((member, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="min-w-[280px] overflow-hidden border border-black shadow-md transition-all duration-500 hover:shadow-xl sm:min-w-[320px] md:min-w-[360px]">
                <div className="relative h-[250px] w-full overflow-hidden border-b border-black sm:h-[320px] md:h-[420px]">
                  <Image
                    src={member.IMAGE || '/placeholder.svg'}
                    alt={member.NAME}
                    fill
                    className="transform object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="bg-white py-4  text-center sm:py-6">
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

        <div className="mt-6 flex w-full items-center justify-center gap-6">
          <button
            onClick={scrollLeft}
            className="cursor-pointer border border-black p-2 transition hover:bg-gray-200"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={scrollRight}
            className="cursor-pointer border border-black p-2 transition hover:bg-gray-200"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>

    </section>
  );
}
