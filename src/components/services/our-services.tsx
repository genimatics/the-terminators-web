'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/constants/images';
import { getAllServices } from '@/types/services';

export default function OurServices(): JSX.Element {
  const servicesToShow = getAllServices();

  return (
    <section className="w-full bg-white px-4 py-16 text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-6">
          {servicesToShow.map(service => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group block"
            >
              <div className="transition-all duration-300 hover:pl-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                    <Image
                      src={IMAGES.FOOTER.SERVICE_ICON}
                      alt="Service Icon"
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary md:text-2xl ">
                      {service.title}
                    </h3>

                    <div className="mt-2 ml-0">
                      <div className="text-sm font-medium text-primary transition-all duration-300 group-hover:translate-x-2 ">
                        Click for further details →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
