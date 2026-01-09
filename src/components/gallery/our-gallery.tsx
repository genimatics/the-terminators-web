'use client';

import type { GalleryImage } from '@/constants/gallery-images';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { galleryImages } from '@/constants/gallery-images';
import { preloadImages } from '@/lib/image-optimization';
import { useLightGallery } from '@/lib/lightgallery';
import SocialFollow from '../ui/social-follow';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';

export default function OurGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);

    if (isClient) {
      const firstImages = galleryImages.slice(0, 16).map(img => img.src);
      preloadImages(firstImages);
    }
  }, [isClient]);

  useLightGallery(galleryRef, {
    selector: 'a.gallery-item',
    settings: {
      speed: 300,
      thumbnail: true,
      thumbWidth: 80,
      thumbHeight: 80 as any,
      animateThumb: false,
      enableSwipe: true,
      enableDrag: true,
      counter: false,
      controls: true,
      share: false,
      fullScreen: true,
      zoom: true,
      download: false,
      actualSize: true,
      showZoomInOutIcons: true,
    },
  });

  if (!isClient) {
    return (
      <section className="w-full bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-4xl font-bold text-foreground">Our Gallery</h2>
          </div>
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-lg text-muted-foreground">Loading gallery...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-background py-16">
      <div className="container mx-auto px-4">
        <div
          ref={galleryRef}
          className="flex flex-wrap justify-center gap-6"
        >
          {galleryImages.map((image: GalleryImage, index: number) => (
            <div
              key={`${image.id}-${index}`}
              className="w-full sm:w-[calc(33.333%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(33.333%-2rem)]"
            >
              <a
                href={image.src}
                className="gallery-item group relative block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg"
                data-src={image.src}
                data-thumb={image.thumb}
                data-sub-html={`<h4 class="text-lg font-semibold mb-1">${image.title}</h4><p class="text-sm text-gray-600">${image.alt}</p>`}
                aria-label={`View ${image.title}`}
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={image.thumb || image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={index < 3}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    quality={90}
                  />
                </div>

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {image.title}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <SocialFollow />

      </div>
    </section>
  );
}
