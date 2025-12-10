'use client';

import type { GalleryImage } from '@/constants/gallery-images';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { categories, galleryImages } from '@/constants/gallery-images';

export default function OurGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const [isClient] = useState(typeof window !== 'undefined');

  const filteredImages = useCallback(() => {
    return selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

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

  const handleCategoryChange = useCallback((value: string) => {
    setSelectedCategory(value);
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

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.value)}
              className={`cursor-pointer rounded-lg px-6 py-2.5 font-medium transition-all duration-300 ${selectedCategory === cat.value
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'border border-border bg-card text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
              }`}
              type="button"
              aria-label={`Filter by ${cat.label}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          ref={containerRef}
          className="gallery-grid-masonry grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          role="region"
          aria-label="Gallery images"
          style={{
            minHeight: '0',
            overflow: 'hidden',
          }}
        >
          {filteredImages().map((image: GalleryImage, index: number) => {
            const { size } = getImageDimensions(index);

            return (
              <div
                key={image.id}
                className={`gallery-card group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 ${size}`}
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
                      alt={image.alt}
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
              </div>
            );
          })}
        </div>

        {filteredImages().length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">No images found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
}
