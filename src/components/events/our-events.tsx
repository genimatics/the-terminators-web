'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { eventsImages } from '@/constants/events-images';
import { useLightGallery } from '@/lib/lightgallery';
import SocialFollow from '../ui/social-follow';
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
      thumbWidth: 80 as any,
      thumbHeight: 80 as any,
      animateThumb: false,
      enableSwipe: true,
      enableDrag: true,
      counter: false,
      controls: true,
      share: false,
      fullScreen: true,
      zoom: true,
    },
  });

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          ref={galleryRef}
          className="flex flex-wrap justify-center gap-6"
        >
          {eventsImages.map((image, index) => (
            <div
              key={image.id}
              className="w-full sm:w-[calc(33.333%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(33.333%-2rem)]"
            >
              <a
                href={image.full}
                className="gallery-item group relative block overflow-hidden rounded-lg border border-border bg-card transition-all duration-300"
                data-src={image.full}
                data-thumb={image.thumb}
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={image.thumb || '/placeholder.svg'}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 3}
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />

                  {/* <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="inline-block w-fit rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                      Event
                    </span>
                  </div> */}
                </div>
              </a>
            </div>
          ))}
        </div>

        {eventsImages.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">No events found</p>
          </div>
        )}

        <SocialFollow />

      </div>
    </section>
  );
}
