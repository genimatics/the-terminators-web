'use client';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/button';
import { IMAGES } from '@/constants/images';

export default function ExpertiseSlider() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative h-full w-full cursor-pointer overflow-hidden shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={IMAGES.ABOUT.SLIDE1}
        alt="slide"
        fill
        className={`object-cover transition-all duration-700 ease-in-out
          ${hovered ? 'opacity-0 blur-[2px]' : 'blur-0 opacity-100'}
        `}
      />

      <Image
        src={IMAGES.ABOUT.SLIDE2}
        alt="slide"
        fill
        className={`object-cover transition-all duration-700 ease-in-out
          ${hovered ? 'blur-0 opacity-100' : 'opacity-0 blur-[2px]'}
        `}
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center
        bg-black/40 text-center text-white transition-all duration-700 ease-in-out
        ${hovered ? 'opacity-0 blur-[2px]' : 'blur-0 opacity-100'}
        `}
      >
        <h3 className="mb-4 px-4 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Our Strengths
        </h3>
        <p className="mb-6 max-w-md px-4 text-sm sm:text-base md:text-lg">
          Over 30 years of expertise in electrical and energy engineering
        </p>
        <Button size="lg">Read More</Button>
      </div>

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center
        bg-black/40 text-center text-white transition-all duration-700 ease-in-out
        ${hovered ? 'blur-0 opacity-100' : 'opacity-0 blur-[2px]'}
        `}
      >
        <h3 className="mb-4 px-4 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Always Improving
        </h3>
        <p className="max-w-md px-4 text-sm sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}
