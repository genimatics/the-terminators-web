'use client';

import Image from 'next/image';
import { IoPlay } from 'react-icons/io5';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';

export default function GetStarted() {
  const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  return (
    <section className="bg-background text-foreground w-full px-3 py-5 md:px-5">
      <div className="max-w-8xl mx-auto flex flex-col gap-8">

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">

          <div className="bg-primary flex h-80 items-center justify-center p-6 shadow-md sm:h-96
                          sm:p-10 md:h-[420px] md:justify-start lg:h-[480px] xl:h-[550px]"
          >

            <div className="ml-24 flex w-full flex-col items-center gap-4 sm:flex-row sm:gap-8 md:items-center">
              <ScrollReveal>
                <div className="relative h-24 w-24 flex-shrink-0 sm:h-26 sm:w-26">
                  <Image
                    src={IMAGES.GET_STARTED.ICON}
                    alt="Electric Icon"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="max-w-full text-center sm:max-w-md md:text-left">
                  <h2 className="mb-4 text-2xl leading-tight font-extrabold sm:text-3xl md:text-4xl">
                    Don't wait !
                    <br />
                    contact us
                    <br />
                    today and
                    <br />
                    let us help !
                    <br />
                    it's quick
                    <br />
                    and easy.
                  </h2>

                  <p className="mt-4 text-xs tracking-[0.25em] text-black/80 uppercase sm:text-sm md:text-sm">
                    Job done right away
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div
            className="group relative h-80 cursor-pointer
                       overflow-hidden sm:h-96 md:h-[420px] lg:h-[480px] xl:h-[550px]"
            onClick={() => window.open(videoUrl, '_blank')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.open(videoUrl, '_blank');
              }
            }}
            role="button"
            tabIndex={0}
          >
            <Image
              src={IMAGES.GET_STARTED.MAIN}
              alt="Electrician main image"
              fill
              className="object-cover transition-all duration-500 group-hover:brightness-90"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary rounded-full p-6 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                <IoPlay size={32} color="black" />
              </div>
            </div>
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
