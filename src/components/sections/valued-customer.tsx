'use client';
import type { JSX } from 'react';
import Image from 'next/image';
import { useMemo } from 'react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { TEXTS } from '@/constants/text';

export default function ValuedCustomers(): JSX.Element {
  const { LEFT_IMAGES, BOTTOM_GRID, HEADINGS } = TEXTS.VALUED_CUSTOMERS;

  const mainImage = useMemo(() => LEFT_IMAGES[0], [LEFT_IMAGES]);

  return (
    <section className="w-full bg-white px-4 py-16 text-center md:px-10 lg:px-12 xl:px-16">
      <ScrollReveal>
        <div className="mb-10">
          <p className="text-sm tracking-wide text-gray-500 uppercase">{HEADINGS.SUBTITLE}</p>
          <h2 className="mt-2 text-4xl font-bold text-black md:text-5xl">
            {HEADINGS.TITLE}
            <span className="block px-2 text-black">{HEADINGS.HIGHLIGHT}</span>
          </h2>
          <p className="mt-4 text-sm text-gray-500 md:text-base">{HEADINGS.DESCRIPTION}</p>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
        <ScrollReveal>
          <div className="flex flex-col gap-6">
            {LEFT_IMAGES.map((img, i) => (
              <ScrollReveal key={img} delay={i * 0.1}>
                <div className="border border-black">
                  <Image
                    src={img}
                    alt={`Customer work ${i + 1}`}
                    width={800}
                    height={600}
                    className="h-[300px] w-full object-cover"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex h-full flex-col">
            <div className="mb-5 border border-black">
              <Image
                src={mainImage}
                alt="Major Electrical Project"
                width={800}
                height={600}
                className="h-[300px] w-full object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {BOTTOM_GRID.map((img, i) => (
                <ScrollReveal key={img} delay={i * 0.1}>
                  <div className="border border-black">
                    <Image
                      src={img}
                      alt={`Gallery ${i + 1}`}
                      width={400}
                      height={300}
                      className="h-[150px] w-full object-cover"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
