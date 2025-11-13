'use client';
import type { JSX } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { TEXTS } from '@/constants/text';

type Testimonial = (typeof TEXTS)['VALUED_CUSTOMERS']['TESTIMONIALS'][number];

export default function ValuedCustomers(): JSX.Element {
  const { TESTIMONIALS, LEFT_IMAGES, BOTTOM_GRID, HEADINGS }
    = TEXTS.VALUED_CUSTOMERS;

  const [index, setIndex] = useState(0);

  const prev = (): void =>
    setIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

  const next = (): void =>
    setIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

  const current: Testimonial = TESTIMONIALS[index] ?? TESTIMONIALS[0];

  return (
    <section className="w-full bg-white px-4 py-16 text-center md:px-10">
      <div className="mb-10">
        <p className="text-sm tracking-wide text-gray-500 uppercase">
          {HEADINGS.SUBTITLE}
        </p>
        <h2 className="mt-2 text-4xl font-bold text-black md:text-5xl">
          {HEADINGS.TITLE}
          <span className="block px-2 text-black">{HEADINGS.HIGHLIGHT}</span>
        </h2>
        <p className="mt-4 text-sm text-gray-500 md:text-base">
          {HEADINGS.DESCRIPTION}
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
        <div className="flex flex-col gap-6">
          {LEFT_IMAGES.map((img, i) => (
            <div key={i} className="border border-black">
              <Image
                src={img}
                alt={`Customer work ${i + 1}`}
                width={800}
                height={600}
                className="h-[300px] w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex h-[636px] flex-col items-center justify-between">
          <div className="text-muted relative flex w-full flex-1 flex-col justify-center p-6 text-xl font-bold">
            <p className="leading-relaxed text-gray-700">{current.text}</p>

            <div className="mt-6 flex flex-col items-center justify-center">
              <Image
                src={current.avatar}
                alt={current.name}
                width={60}
                height={60}
                className="mb-2 rounded-full border border-gray-400 object-cover"
              />
              <h4 className="font-semibold text-black">{current.name}</h4>
              <span className="text-sm text-gray-500">{current.location}</span>
            </div>

            <button
              type="button"
              onClick={prev}
              className="absolute top-1/2 left-3 -translate-y-1/2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute top-1/2 right-3 -translate-y-1/2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>

          <div className="mt-6 grid w-full grid-cols-2 gap-4">
            {BOTTOM_GRID.map((img, i) => (
              <div key={i} className="border border-black">
                <Image
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  width={400}
                  height={300}
                  className="h-[150px] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
