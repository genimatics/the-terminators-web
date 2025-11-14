'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import { TEXTS } from '@/constants/text';

type SectionTwoText = typeof TEXTS.SECTION_TWO;
type ServiceBox = SectionTwoText['SERVICE_BOXES'][number];

export default function OurServices(): JSX.Element {
  const {
    SERVICE_BOXES: serviceBoxes,
    HEADINGS: headings,
  } = TEXTS.SECTION_TWO;

  return (
    <section className="w-full bg-white px-4 py-16 text-black md:px-10">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
          OUR SERVICES
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">
          {headings.TITLE}
        </h2>
        <p className="mt-4 text-base text-gray-600 md:text-lg">
          {headings.SUBTITLE}
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {serviceBoxes.map((box: ServiceBox, i) => (
          <div
            key={i}
            className="flex flex-col items-center rounded-2xl p-6 text-center transition-all duration-300 "
          >
            <div className="mb-4 h-16 w-16">
              <Image
                src={box.icon}
                alt={box.title}
                width={64}
                height={64}
                className="mx-auto h-full w-full object-contain"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold md:text-2xl">
              {box.title}
            </h3>
            <p className="text-sm text-gray-600 md:text-base">{box.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
