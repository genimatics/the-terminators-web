'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { IMAGES } from '@/constants/images';

export default function SectionOne() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-1 py-16 md:px-4 lg:px-6">
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.SECTION_ONE.BG}
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm tracking-widest text-gray-500 uppercase">
            WIDE RANGE OF ELECTRICAL SERVICES
          </p>

          <h2 className="text-foreground text-4xl leading-tight font-bold md:text-5xl">
            Do you need an Electrician?
            {' '}
            <span className="text-primary">Look no further!</span>
          </h2>

          <p className="max-w-xl leading-relaxed text-gray-600">
            Our team of experienced electricians is highly trained, certified, and insured,
            providing you with the highest quality of service. Whether you need a new outlet
            installed or a complete rewire, Electricians has you covered.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✔</span>
              Navigating possibilities: your gateway to premium services
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✔</span>
              Transforming challenges into opportunities and ideas into reality
            </li>
          </ul>

          <Link href="#" className="inline-block">
            <Button className="px-6 py-3">All Service</Button>
          </Link>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="grid w-full grid-cols-3 items-center gap-5">
            <div className="group flex items-center justify-center overflow-hidden">
              <Image
                src={IMAGES.SECTION_ONE.WORK1}
                alt="Electrician work"
                width={460}
                height={460}
                className="h-72 w-full border border-black object-cover transition-all duration-300 group-hover:opacity-90"
              />
            </div>

            <div className="group overflow-hidden">
              <Image
                src={IMAGES.SECTION_ONE.WORK2}
                alt="Electrician main work"
                width={460}
                height={560}
                className="h-80 w-full border border-black object-cover transition-all duration-300 group-hover:opacity-90"
              />
            </div>

            <div className="group overflow-hidden">
              <Image
                src={IMAGES.SECTION_ONE.WORK3}
                alt="Electrical tools"
                width={460}
                height={560}
                className="h-80 w-full border border-black object-cover transition-all duration-300 group-hover:opacity-90"
              />
            </div>
          </div>

          <div className="group mt-8 w-2/4 overflow-hidden">
            <Image
              src={IMAGES.SECTION_ONE.WORK4}
              alt="Electrical service bottom"
              width={460}
              height={460}
              className="h-56 w-full border border-black object-cover shadow-md transition-all duration-300 group-hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
