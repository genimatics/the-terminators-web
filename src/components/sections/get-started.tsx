'use client';

import Image from 'next/image';
import { IMAGES } from '@/constants/images';

export default function GetStarted() {
  const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  return (
    <section className="bg-background text-foreground w-full px-3 py-5 md:px-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-primary flex items-center justify-center  p-10 shadow-md">
            <div className="flex items-center gap-8">
              <div className="relative h-24 w-24 flex-shrink-0">
                <Image
                  src={IMAGES.GET_STARTED.ICON}
                  alt="Electric Icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="max-w-md">
                <h2 className="mb-2 text-3xl leading-snug font-extrabold md:text-4xl">
                  Don't wait! Contact us today
                  {' '}
                  <br />
                  {' '}
                  and let us help it's
                  quick and easy.
                </h2>
                <p className="text-muted-foreground text-sm tracking-widest uppercase">
                  Job done right away
                </p>
              </div>
            </div>
          </div>

          <div
            className="group relative h-64 cursor-pointer overflow-hidden  sm:h-72 md:h-80 lg:h-96"
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
              <div className="bg-primary rounded-full p-4 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                ▶
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {IMAGES.GET_STARTED.GALLERY.map((src, idx) => (
            <div
              key={idx}
              className="relative h-40 overflow-hidden  sm:h-48 md:h-56"
            >
              <Image
                src={src}
                alt={`Worker ${idx + 1}`}
                fill
                className="object-cover transition-all duration-500 hover:brightness-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
