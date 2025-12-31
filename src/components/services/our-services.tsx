'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { getAllServices } from '@/types/services';

export default function OurServices(): JSX.Element {
  const servicesToShow = getAllServices();

  return (
    <section className="w-full bg-white px-4 py-16 text-black sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24 dark:bg-black dark:text-white">
      <ScrollReveal>
        <div className="mx-auto mb-12 w-full max-w-4xl text-center">
          <p className="text-sm tracking-wide text-gray-500 uppercase dark:text-gray-400">
            OUR SERVICES
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Complete Services in a
            <br />
            No Time
          </h2>

          <p className="mt-4 text-sm text-gray-500 md:text-base dark:text-gray-400">
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
            className="group block"
          >
            <ScrollReveal delay={i * 0.1}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-gray-50 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-900 dark:hover:shadow-black/40">

                {/* Icon */}
                <div className="mb-4 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="mx-auto h-full w-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-semibold md:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm whitespace-pre-line text-gray-600 md:text-base dark:text-gray-400">
                  {service.shortDesc}
                </p>

                {/* View More */}
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-black opacity-70 transition-all duration-300 group-hover:gap-2 group-hover:opacity-100 dark:text-white">
                  View More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </ScrollReveal>
          </Link>
        ))}
      </div>
    </section>
  );
}
