'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';
import AnimatedHighlightText from '../ui/animated-highlight-text';

export default function SectionOne(): JSX.Element {
  const features = [
    'Complete power & electrical solutions for industrial units and substations.',
    '30+ years of trusted, quality-driven engineering and safety services',
  ] as const;

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-12">
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.SECTION_ONE.BG}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <div className="mx-auto max-w-xl space-y-6 text-left">
            <p className="text-sm tracking-wide text-gray-500 uppercase">
              WIDE RANGE OF ELECTRICAL SERVICES
            </p>

            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Do you need Electrical Services?
              <AnimatedHighlightText
                text="Look no further!"
                className="block"
              />
            </h2>

            <p
              className="
                text-justify
                text-left
                text-sm
                leading-relaxed
                text-gray-600
                md:text-base
              "
            >
              M/S THE TERMINATORS was established in January 2003 as a General Services Contractor. The firm now comprises a number of qualified and skilled Electrical, Telecommunication, and Mechanical Engineers and Technicians with several years of hand-on expertise in the entire spectrum of Equipment & Systems Installations, Repairs and Maintenance. The core specialty being Power Generation, Transmission, Automatic Load Transfer / Switching HT, LT Electrical & Telephone cable laying, Jointing (subsurface, Ducts pipes & Cable Trays), Testing & its connection and Termination on power & control panels, switch boards & utility Equipment is in residential & Commercial Buildings, Industries & Other Classified Areas.
              <br />
              <br />
              All efforts are made to undertake any job with utmost professional skills, meeting standard procedures and codes framed by the world’s renowned regulatory bodies, especially in classified and hazardous areas where strict safety rules must be followed for installation, testing, and operation of electrical and instrumentation systems.
            </p>

            <ul className="space-y-2 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="font-bold text-primary">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="w-fit">
              <Link href="services">
                <Button className="px-6 py-3">All Services</Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative flex w-full flex-col items-center">
          <div className="grid w-full grid-cols-2 gap-5 sm:hidden">
            {[
              IMAGES.SECTION_ONE.WORK1,
              IMAGES.SECTION_ONE.WORK2,
              IMAGES.SECTION_ONE.WORK3,
              IMAGES.SECTION_ONE.WORK4,
            ].map((imgSrc, idx) => (
              <div key={idx} className="overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={`Electrician work ${idx + 1}`}
                  width={460}
                  height={460}
                  className="h-56 w-full border border-black object-cover shadow-md"
                />
              </div>
            ))}
          </div>

          <div className="hidden w-full flex-col items-center sm:flex">
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {[
                IMAGES.SECTION_ONE.WORK1,
                IMAGES.SECTION_ONE.WORK2,
                IMAGES.SECTION_ONE.WORK3,
              ].map((imgSrc, idx) => (
                <div
                  key={idx}
                  className={`overflow-hidden ${
                    idx === 2 ? 'sm:col-span-2 md:col-auto' : ''
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={`Electrician work ${idx + 1}`}
                    width={460}
                    height={460}
                    className={`w-full border border-black object-cover shadow-md ${
                      idx === 0
                        ? 'h-56 sm:h-64 md:h-72'
                        : 'h-56 sm:h-72 md:h-80'
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 w-full overflow-hidden sm:w-5/6 md:w-2/4">
              <Image
                src={IMAGES.SECTION_ONE.WORK4}
                alt="Electrical service bottom"
                width={460}
                height={460}
                className="h-56 w-full border border-black object-cover shadow-md sm:h-72"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
