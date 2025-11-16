'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { TEXTS } from '@/constants/text';

type SectionTwoText = typeof TEXTS.SECTION_TWO;
type Slide = SectionTwoText['SLIDES'][number];
type ServiceBox = SectionTwoText['SERVICE_BOXES'][number];

export default function SectionTwo(): JSX.Element {
  const {
    SLIDES: slides,
    SERVICE_BOXES: serviceBoxes,
    HEADINGS: headings,
    PARAGRAPHS: paragraphs,
    CTA_BANNER: ctaBanner,
  } = TEXTS.SECTION_TWO;

  const [current, setCurrent] = useState<number>(0);

  const nextSlide = (): void =>
    setCurrent(prev => (prev + 1) % slides.length);

  const prevSlide = (): void =>
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);

  const currentSlide: Slide = slides[current] ?? slides[0];

  return (
    <section className="w-full bg-white px-4 py-10 text-black sm:px-6 md:px-10">
      <div className="relative mx-auto mb-10 max-w-7xl">
        <a
          href={currentSlide.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src={currentSlide.img}
            alt={`Slide ${current + 1}`}
            width={1600}
            height={800}
            className="h-[300px] w-full  object-cover sm:h-[400px] md:h-[500px] lg:h-[650px]"
          />
        </a>

        <div className="absolute bottom-4 left-1/2 max-w-[90%] -translate-x-1/2 px-4 py-2 text-center text-white sm:max-w-2xl sm:px-6">
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            {headings.MAIN}
          </h2>
          <p className="text-sm text-gray-200 sm:text-base md:text-lg">
            {headings.SUB}
          </p>
        </div>

        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 sm:left-4 sm:p-3"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 sm:right-4 sm:p-3"
          aria-label="Next Slide"
        >
          ❯
        </button>
      </div>

      <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
        <ScrollReveal>
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              {headings.TITLE.split(' ')[0]}
              {' '}
              <span className="block">{headings.TITLE.split(' ').slice(1).join(' ')}</span>
            </h3>
            <h4 className="md:text-md mt-4 text-base font-medium text-gray-600 sm:text-lg">
              {headings.SUBTITLE}
            </h4>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-3 text-sm text-gray-700 sm:text-base md:text-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceBoxes.map((box: ServiceBox, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="flex flex-col items-start rounded-2xl p-4 transition-all duration-300 hover:bg-[#f8f8f8] sm:p-6">
              <div className="mb-3 h-12 w-12 sm:h-16 sm:w-16">
                <Image
                  src={box.icon}
                  alt={box.title}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mb-1 text-lg font-semibold sm:text-xl md:text-2xl">
                {box.title}
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm md:text-base">{box.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="mx-auto mt-10 flex h-auto flex-col overflow-hidden border-2 border-black md:h-[170px] md:flex-row">
        <div className="relative w-full border-b-2 border-black md:w-[25%] md:border-r-4 md:border-b-0">
          <Image
            src={ctaBanner.IMAGE}
            alt="Electrician Banner"
            width={400}
            height={300}
            className="h-48 w-full object-cover sm:h-56 md:h-full"
          />
        </div>

        <div className="flex w-full flex-col justify-center bg-[#0a0a0a] px-6 py-6 text-white md:w-[75%]">
          <h3 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            {ctaBanner.TITLE}
          </h3>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <p className="flex-1 text-base text-gray-300 sm:text-lg md:text-xl">
              {ctaBanner.DESC}
            </p>
            <Button className="px-6 py-2 text-base sm:px-8 sm:py-3 sm:text-lg">
              {ctaBanner.BUTTON_TEXT}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
