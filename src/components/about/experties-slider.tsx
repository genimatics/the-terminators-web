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
        className={`object-cover transition-opacity duration-500 ease-in-out ${
          hovered ? 'opacity-0' : 'opacity-100'
        }`}
      />

      <Image
        src={IMAGES.ABOUT.SLIDE2}
        alt="slide"
        fill
        className={`object-cover transition-opacity duration-500 ease-in-out ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`absolute inset-0 flex transform flex-col items-center justify-center bg-black/40 text-center text-white transition-all duration-500 ease-in-out ${
          hovered ? '-translate-x-10 opacity-0' : 'translate-x-0 opacity-100'
        }`}
      >
        <h3 className="mb-4 text-4xl font-semibold">Lorem ipsum dolor</h3>
        <p className="mb-6 max-w-md text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Button size="lg">Read More</Button>
      </div>

      <div
        className={`absolute inset-0 flex transform flex-col items-center justify-center bg-black/40 text-center text-white transition-all duration-500 ease-in-out ${
          hovered ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}
      >
        <h3 className="mb-4 text-4xl font-semibold">Always Improving</h3>
        <p className="max-w-md text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}
