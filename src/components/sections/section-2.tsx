'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/button';
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
    <section className="w-full bg-white px-4 py-10 text-black md:px-10">
      <div className="relative mx-auto mb-12 max-w-7xl">
        <a
          href={currentSlide.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={currentSlide.img}
            alt={`Slide ${current + 1}`}
            width={1600}
            height={800}
            className="h-[500px] w-full object-cover md:h-[650px]"
          />
        </a>

        <div className="absolute bottom-8 left-1/2 max-w-2xl -translate-x-1/2 px-6 py-4 text-center text-white">
          <h2 className="mb-3 text-3xl font-bold md:text-5xl">
            {headings.MAIN}
          </h2>
          <p className="text-base text-gray-200 md:text-lg">{headings.SUB}</p>
        </div>

        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white hover:bg-black/50"
          aria-label="Previous Slide"
        >
          ❮
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white hover:bg-black/50"
          aria-label="Next Slide"
        >
          ❯
        </button>
      </div>

      <div className="mx-auto mb-12 grid max-w-7xl gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-1 text-3xl font-bold md:text-5xl">
            {headings.TITLE.split(' ')[0]}
            {' '}
            <span className="block">
              {headings.TITLE.split(' ').slice(1).join(' ')}
            </span>
          </h3>
          <h4 className="md:text-md mt-10 text-base font-medium text-gray-600">
            {headings.SUBTITLE}
          </h4>
        </div>

        <div className="space-y-3 text-base leading-relaxed text-gray-700 md:text-lg">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {serviceBoxes.map((box: ServiceBox, i) => (
          <div
            key={i}
            className="flex flex-col items-start rounded-2xl p-6 text-left transition-all duration-300 hover:bg-[#f8f8f8]"
          >
            <div className="mb-4 h-16 w-16">
              <Image
                src={box.icon}
                alt={box.title}
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold md:text-2xl">
              {box.title}
            </h3>
            <p className="text-sm text-gray-600 md:text-base">{box.desc}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 flex h-[170px] w-full overflow-hidden border-2 border-black md:flex-row">
        <div className="relative w-[25%] border-r-4 border-black">
          <Image
            src={ctaBanner.IMAGE}
            alt="Electrician Banner"
            width={400}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col justify-center bg-[#0a0a0a] px-8 py-6 text-white md:w-[75%]">
          <h3 className="mb-2 text-3xl font-bold md:text-4xl">
            {ctaBanner.TITLE}
          </h3>

          <div className="flex items-start gap-6">
            <p className="flex-1 text-lg text-gray-300 md:text-xl">
              {ctaBanner.DESC}
            </p>
            <Button className="relative -top-2 ml-4 px-8 py-3 text-base font-semibold md:text-lg">
              {ctaBanner.BUTTON_TEXT}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
