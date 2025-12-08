'use client';

import type { JSX } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { TEXTS } from '@/constants/text';
import { getFeaturedServices } from '@/types/services';

export default function SectionTwo(): JSX.Element {
  const {
    SLIDES: slides,
    HEADINGS: headings,
    PARAGRAPHS: paragraphs,
    CTA_BANNER: ctaBanner,
  } = TEXTS.SECTION_TWO;

  const serviceBoxes = getFeaturedServices(6);

  const totalSlides = slides.length;
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = useCallback(
    () => setCurrent(prev => (prev + 1) % totalSlides),
    [totalSlides],
  );

  const prevSlide = useCallback(
    () => setCurrent(prev => (prev - 1 + totalSlides) % totalSlides),
    [totalSlides],
  );

  const currentSlide = useMemo(
    () => slides[current] ?? slides[0],
    [current, slides],
  );

  const titleParts = useMemo(() => {
    const parts = headings.TITLE.split(' ');
    return {
      first: parts[0],
      rest: parts.slice(1).join(' '),
    };
  }, [headings.TITLE]);

  return (
    <section className="w-full bg-white px-4 text-black sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24">
      <ScrollReveal>
        <div className="relative mb-10 w-full">
          <a
            href={currentSlide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <div className="relative">
              <Image
                src={currentSlide.img}
                alt={`Slide ${current + 1}`}
                width={1600}
                height={800}
                className="h-[300px] w-full border border-black object-cover blur-[2px] sm:h-[400px] md:h-[500px] lg:h-[650px]"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </a>

          <div
            className="
              absolute top-1/2 left-1/2 w-[90%]
              -translate-x-1/2 -translate-y-1/2 px-10 py-2 text-center text-white

              sm:top-auto sm:bottom-4 sm:left-1/2 sm:w-[90%] sm:max-w-2xl
              sm:-translate-x-1/2 sm:-translate-y-0 sm:px-6
            "
          >
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
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 sm:right-4 sm:p-3"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </ScrollReveal>

      <div className="mb-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <ScrollReveal>
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              {titleParts.first}
              <span className="block">{titleParts.rest}</span>
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

      <div className="mb-10 grid w-full gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {serviceBoxes.map((box, i) => (
          <ScrollReveal key={box.id} delay={i * 0.1}>
            <Link href={`/services/${box.slug}`}>
              <div
                className="
                  flex flex-col
                  items-center rounded-2xl
                  p-4 text-center
                  transition-all duration-300 sm:items-start sm:p-6 sm:text-left
                "
              >
                <div className="mx-auto mb-3 h-12 w-12 sm:mx-0 sm:h-16 sm:w-16">
                  <Image
                    src={box.icon}
                    alt={box.title}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>

                <h3 className="mb-2 text-lg font-semibold hover:text-primary sm:text-xl md:text-2xl">
                  {box.title}
                </h3>

                <p className="line-clamp-3 text-xs whitespace-pre-line text-gray-600 sm:text-sm md:text-base">
                  {box.shortDesc}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mb-10 text-center">
          <Link href="/services">
            <Button className="hover:bg-primary-dark bg-primary px-8 py-3 text-lg font-semibold text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </ScrollReveal>

      <div className="flex w-full flex-col overflow-hidden border-2 border-black md:h-[170px] md:flex-row">
        <div className="relative w-full border-b-2 border-black md:w-[25%] md:border-r-4 md:border-b-0">
          <Image
            src={ctaBanner.IMAGE}
            alt="CTA Banner"
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

            <Link href="/services">
              <Button className=" hover:bg-primary-dark bg-primary px-6 py-2 text-base sm:px-8 sm:py-3  sm:text-lg ">
                {ctaBanner.BUTTON_TEXT}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
