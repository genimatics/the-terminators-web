'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';

export default function SectionOne(): JSX.Element {
  const features = [
    'Navigating possibilities: your gateway to premium services',
    'Transforming challenges into opportunities and ideas into reality',
  ] as const;

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-12">
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.SECTION_ONE.BG}
          alt="Background"
          fill
          className="contain object-cover"
          priority
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              WIDE RANGE OF ELECTRICAL SERVICES
            </p>

            <h2 className="text-3xl leading-snug font-bold text-foreground sm:text-4xl md:text-5xl">
              Do you need an Electrician?
              <span className="block">Look no further!</span>
            </h2>

            <p className="mx-auto max-w-xl leading-relaxed text-gray-600 lg:mx-0">
              Our team of experienced electricians is highly trained, certified, and insured,
              providing you with the highest quality of service. Whether you need a new outlet
              installed or a complete rewire, Electricians has you covered.
            </p>

            <ul className="mx-auto max-w-md space-y-2 text-gray-700 lg:mx-0">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="font-bold text-primary">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="#" className="inline-block">
              <Button className="px-6 py-3">All Service</Button>
            </Link>
          </div>
        </ScrollReveal>

        <div className="relative flex flex-col items-center">
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[IMAGES.SECTION_ONE.WORK1, IMAGES.SECTION_ONE.WORK2, IMAGES.SECTION_ONE.WORK3].map(
              (imgSrc, idx) => (
                <div key={idx} className="group flex items-center justify-center overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt={`Electrician work ${idx + 1}`}
                    width={460}
                    height={idx === 0 ? 460 : 560}
                    className={`border border-black object-cover transition-all duration-300 group-hover:opacity-90
                      ${idx === 0 ? 'h-56 sm:h-64 md:h-72' : 'h-64 sm:h-72 md:h-80'} w-full`}
                  />
                </div>
              ),
            )}
          </div>

          <div className="group mt-6 w-3/4 overflow-hidden sm:w-2/3 md:w-2/4">
            <Image
              src={IMAGES.SECTION_ONE.WORK4}
              alt="Electrical service bottom"
              width={460}
              height={460}
              className="h-48 w-full border border-black object-cover shadow-md transition-all duration-300 group-hover:opacity-90 sm:h-56 md:h-56"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
