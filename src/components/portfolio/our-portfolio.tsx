'use client';

import type { PortfolioItem } from '@/constants/portfolio-items';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { portfolioCategories, portfolioItems } from '@/constants/portfolio-items';

export default function OurPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const [isClient] = useState(typeof window !== 'undefined');

  const filteredItems = useCallback(() => {
    return selectedCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === selectedCategory);
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
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl">
              Our Portfolio
            </h2>
            <p className="text-sm text-gray-600 md:text-base">
              Explore our completed projects and success stories
            </p>
          </div>
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-lg text-gray-500">Loading portfolio...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm tracking-wide text-gray-500 uppercase">
            OUR WORK
          </p>
          <h2 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Project Portfolio
          </h2>
          <p className="text-sm text-gray-600 md:text-base">
            Showcasing our expertise through completed projects
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {portfolioCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.value)}
              className={`cursor-pointer rounded-lg px-6 py-2.5 font-medium transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'bg-primary text-white shadow-md'
                  : 'border border-gray-300 bg-white text-gray-700 hover:border-primary hover:bg-primary hover:text-white'
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
          className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          role="region"
          aria-label="Portfolio projects"
          style={{
            minHeight: '0',
            overflow: 'hidden',
          }}
        >
          {filteredItems().map((item: PortfolioItem, index: number) => {
            const { size } = getImageDimensions(index);

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl ${size}`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  minHeight: '200px',
                  maxHeight: '400px',
                  height: '100%',
                }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={item.thumb}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 4}
                    loading={index < 4 ? 'eager' : 'lazy'}
                  />

                  {/* Category Badge - shows on hover */}
                  <div
                    className={`absolute top-3 left-3 transition-all duration-300 ${
                      hoveredId === item.id ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                    }`}
                  >
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems().length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">No projects found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
}
