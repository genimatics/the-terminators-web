'use client';

import type { GalleryImage } from '@/constants/gallery-images';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { galleryImages } from '@/constants/gallery-images';
import { useLightGallery } from '@/lib/lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';

export default function OurGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isClient] = useState(typeof window !== 'undefined');

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

  const getImageDimensions = useCallback((index: number) => {
    if (index % 7 === 0) {
      return { size: 'col-span-2 row-span-2' };
    }
    if (index % 5 === 0) {
      return { size: 'col-span-2 row-span-1' };
    }
    if (index % 3 === 0) {
      return { size: 'col-span-1 row-span-2' };
    }
    return { size: 'col-span-1 row-span-1' };
  }, []);

  const handleMouseEnter = useCallback((id: string) => {
    setHoveredId(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
  }, []);

  if (!isClient) {
    return (
      <section className="w-full bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-4xl font-bold text-foreground md:text-5xl">
              Our Gallery
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Explore our collection of events, exhibitions, and special moments
            </p>
          </div>
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-lg text-muted-foreground">Loading gallery...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-foreground md:text-5xl">
            Our Gallery
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Explore our collection of events, exhibitions, and special moments
          </p>
        </div>

        <div
          ref={galleryRef}
          className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          role="region"
          aria-label="Gallery images"
        >
          {galleryImages.map((image: GalleryImage, index: number) => {
            const { size } = getImageDimensions(index);

            return (
              <a
                key={image.id}
                href={image.src}
                className={`gallery-item group relative block overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 ${size}`}
                data-src={image.src}
                data-thumb={image.thumb}
                data-sub-html={`<h4>${image.title}</h4>`}
                onMouseEnter={() => handleMouseEnter(image.id)}
                onMouseLeave={handleMouseLeave}
                aria-label={image.title}
                style={{
                  minHeight: '200px',
                  maxHeight: '400px',
                  height: '100%',
                }}
              >
                <div className="relative h-full w-full">
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
                  </div>

                  <div
                    className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 transition-all duration-300 ${hoveredId === image.id ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  >
                    <span className="inline-block w-fit rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                      {image.category === 'event' && 'Event'}
                      {image.category === 'exhibition' && 'Exhibition'}
                      {image.category === 'general' && 'Gallery'}
                    </span>
                    <p className="mt-2 font-medium text-white">{image.title}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
