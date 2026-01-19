'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';

export default function GetStarted() {
  return (
    <section className="w-full bg-background px-3 py-5 text-foreground md:px-5">
      <div className="max-w-8xl mx-auto flex flex-col gap-8">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          <div
            className="
              flex min-h-[420px] items-center justify-center
              bg-primary p-6 shadow-md
              sm:min-h-[480px] sm:p-10
              lg:min-h-[480px]
              xl:min-h-[550px]
            "
          >
            <div
              className="
                mx-auto flex w-full max-w-2xl
                flex-row items-center gap-8
                text-left
              "
            >
              <ScrollReveal>
                <div className="relative h-20 w-20 flex-shrink-0 sm:h-28 sm:w-28 md:h-32 md:w-32">
                  <Image
                    src={IMAGES.GET_STARTED.ICON}
                    alt="Electric Icon"
                    fill
                    className="object-contain invert"
                    priority
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="flex flex-col text-white">
                  <h2
                    className="
                      mb-4 text-lg leading-tight
                      font-extrabold
                      sm:text-2xl
                      md:text-3xl
                      lg:text-4xl
                    "
                  >
                    Need help?
                    <br />
                    Contact
                    <br />
                    The Terminators!
                    <br />
                    Fast, safe
                    <br />
                    and reliable.
                  </h2>

                  <p className="mt-1 text-xs tracking-[0.25em] text-white/80 uppercase sm:text-sm">
                    Job done right away
                  </p>

                  <Link href="/contact" className="mt-6">
                    <button
                      className="
                        w-fit cursor-pointer rounded-sm bg-white
                        px-6 py-3
                        text-sm font-semibold
                        text-primary
                        transition-all
                        hover:bg-white/90 hover:shadow-md
                      "
                    >
                      Contact Us
                    </button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div
            className="
              group relative h-80 overflow-hidden
              sm:h-96 md:h-[420px]
              lg:h-[480px] xl:h-[550px]
            "
            role="button"
            tabIndex={0}
          >
            <Image
              src={IMAGES.GET_STARTED.MAIN}
              alt="Electrician main image"
              fill
              className="object-cover transition-all duration-500 group-hover:brightness-90"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {IMAGES.GET_STARTED.GALLERY.map((src, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="relative h-32 overflow-hidden sm:h-40 md:h-48 lg:h-56">
                <Image
                  src={src}
                  alt={`Worker ${idx + 1}`}
                  fill
                  className="object-cover transition-all duration-500 hover:brightness-90"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
