'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IMAGES } from '@/constants/images';

export default function ServicesPromo() {
  const slides = [
    IMAGES.SECTION_ONE.WORK1,
    IMAGES.SECTION_ONE.WORK2,
    IMAGES.SECTION_ONE.WORK3,
    IMAGES.SECTION_ONE.WORK4,
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) {
      return;
    }

    const slideWidth = slider.scrollWidth / slides.length;
    let scrollAmount = 0;
    let index = 0;

    const interval = setInterval(() => {
      scrollAmount += slideWidth;
      index++;

      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
        index = 0;
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });

      setActiveIndex(index);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) {
      return;
    }

    const slideWidth = slider.scrollWidth / slides.length;
    const newScroll = slideWidth * index;

    slider.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    });

    setActiveIndex(index);
  };

  return (
    <section className="bg-secondary w-full py-16">
      <div className="mx-auto max-w-[95%] text-center">
        <p className="text-muted mb-1 text-sm tracking-[1.5px] uppercase">
          Also Request Customized Services
        </p>
        <h2 className="mb-2 text-4xl  leading-tight font-extrabold text-black ">
          Check Electrical
          <br />
          <span className="">Needs Now</span>
        </h2>
        <p className="text-muted mx-auto mb-10 max-w-2xl text-sm md:text-base">
          Success in business comes not just from what you do, but from the
          passion and dedication you put into it.
        </p>

        <div
          ref={sliderRef}
          className="no-scrollbar flex cursor-grab gap-4 overflow-x-auto scroll-smooth px-2 active:cursor-grabbing"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {slides.map((img, i) => (
            <div
              key={i}
              className="w-[30%] flex-shrink-0 overflow-hidden  border border-black"
            >
              <Image
                src={img}
                alt={`Slide ${i + 1}`}
                width={380}
                height={280}
                className="h-[250px] w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleDotClick(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? 'scale-110 bg-yellow-500'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
