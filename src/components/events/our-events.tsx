'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { eventsImages } from '@/constants/events-images';
import { useLightGallery } from '@/lib/lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';

export default function OurEvents() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useLightGallery(galleryRef, {
    selector: 'a.gallery-item',
    settings: {
      speed: 500,
      thumbnail: true,
      thumbWidth: '80' as any,
      thumbHeight: '80' as any,
      animateThumb: true,
      enableSwipe: true,
      enableDrag: true,
      counter: true,
      controls: true,
      share: false,
      fullScreen: true,
      zoom: true,
      exThumbImage: 'data-thumb',
      appendSubHtmlTo: '.lg-item',
    },
  });

  const getImageClass = (index: number) => {
    if (index % 7 === 0) {
      return 'col-span-2 row-span-2';
    }
    if (index % 5 === 0) {
      return 'col-span-2 row-span-1';
    }
    if (index % 3 === 0) {
      return 'col-span-1 row-span-2';
    }
    return 'col-span-1 row-span-1';
  };

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-foreground md:text-5xl">
            Our Events
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Explore our collection of events and activities
          </p>
        </div>

        <div
          ref={galleryRef}
          className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {eventsImages.map((image, index) => {
            const gridClass = getImageClass(index);

            return (
              <a
                key={image.id}
                href={image.full}
                className={`gallery-item group relative block overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 ${gridClass}`}
                data-src={image.full}
                data-thumb={image.thumb}
                // No caption as requested
                style={{
                  minHeight: '200px',
                  maxHeight: '400px',
                }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={image.thumb}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 4}
                    loading={index < 4 ? 'eager' : 'lazy'}
                  />

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="inline-block w-fit rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                      Event
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {eventsImages.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">No events found</p>
          </div>
        )}
      </div>
    </section>
  );
}
