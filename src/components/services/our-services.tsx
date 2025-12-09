'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { getAllServices } from '@/types/services';

export default function OurServices(): JSX.Element {
  const servicesToShow = getAllServices();

  return (
    <section className="w-full bg-white px-4 py-16 text-black sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24">
      <ScrollReveal>
        <div className="mx-auto mb-12 w-full max-w-4xl text-center">
          <p className="text-sm tracking-wide text-gray-500 uppercase">
            OUR SERVICES
          </p>
          <h2 className="mt-3 text-4xl font-bold text-black md:text-5xl">
            Complete Services in a
            <br />
            No Time
          </h2>
          <p className="mt-4 text-sm text-gray-500 md:text-base">
            Explore our comprehensive range of exceptional services and unwavering
            <br />
            commitment to excellence
          </p>
        </div>
      </ScrollReveal>

      <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicesToShow.map((service, i) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="block transition-transform"
          >
            <ScrollReveal delay={i * 0.1}>
              <div className="flex h-full flex-col items-center rounded-2xl  p-6 text-center transition-all duration-300">
                <div className="mb-4 h-16 w-16">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="mx-auto h-full w-full object-contain"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold md:text-2xl">{service.title}</h3>
                <p className="text-sm whitespace-pre-line text-gray-600 md:text-base">
                  {service.shortDesc}
                </p>

              </div>
            </ScrollReveal>
          </Link>
        ))}
      </div>

    </section>
  );
}
