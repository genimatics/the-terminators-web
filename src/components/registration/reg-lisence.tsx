'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { CERTIFICATES } from '@/constants/certificates';
import { LIGHTGALLERY_CONFIG, useLightGallery } from '@/lib/lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

export default function RegistrationCertificates() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useLightGallery(galleryRef, {
    selector: 'a.gallery-item',
    settings: {
      speed: LIGHTGALLERY_CONFIG.SPEED,
      thumbnail: true,
      thumbWidth: LIGHTGALLERY_CONFIG.THUMBNAIL_WIDTH as any,
      thumbHeight: LIGHTGALLERY_CONFIG.THUMBNAIL_HEIGHT as any,
      animateThumb: false,
      thumbMargin: LIGHTGALLERY_CONFIG.THUMBNAIL_MARGIN,
      toggleThumb: true,
      counter: false,
      controls: true,
      share: false,
      download: false,
      fullScreen: true,
      zoom: true,
      enableSwipe: true,
      enableDrag: true,
    },
  });

  return (
    <section className="relative w-full bg-background py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-center gap-4 text-center md:mb-16">
          <h2 className="text-heading text-4xl font-bold md:text-5xl">Professional Certifications</h2>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Our team holds multiple industry-recognized certifications ensuring the highest standards of service and
            expertise.
          </p>
        </div>

        <div ref={galleryRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map(cert => (
            <a
              key={cert.id}
              href={cert.image}
              className="gallery-item group cursor-pointer"
              data-src={cert.image}
              data-sub-html={`<h4 class="text-lg font-semibold text-white">${cert.title}</h4><p class="text-sm text-gray-300">Issued by: ${cert.issuer}</p>`}
            >
              <div className="relative h-72 w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl">
                <Image
                  src={cert.image || '/placeholder.svg'}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={cert.id === 1}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 transition-opacity duration-500" />

                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 py-5 transition-all duration-500 group-hover:from-black">
                  <h3 className="line-clamp-2 text-sm font-bold text-white sm:text-base">{cert.title}</h3>
                </div>

                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 bg-clip-border opacity-0 transition-all duration-500 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
