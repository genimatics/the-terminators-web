'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';

export default function NatureBusiness() {
  return (
    <section className="w-full bg-background px-4 py-12 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">

        <ScrollReveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-extrabold tracking-wide text-foreground sm:text-3xl md:text-4xl">
              NATURE OF BUSINESS
            </h2>

            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Electrical Engineering, Installations and Associated Construction,
              Testing & Commissioning Services
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex justify-center">
            <div
              className="
                relative w-full max-w-5xl
                rounded-xl border border-border
                bg-white p-4 shadow-lg
                sm:p-6
              "
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src={IMAGES.NATURE_BUSINESS.DIAGRAM}
                  alt="Nature of Business Diagram"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
