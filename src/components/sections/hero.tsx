'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/button';
import { IMAGES } from '@/constants/images';

const images = [
  IMAGES.HERO.SLIDE1,
  IMAGES.HERO.SLIDE2,
  IMAGES.HERO.SLIDE3,
];

const changingWords = ['Services', 'Quality'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % changingWords.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex h-[125vh] w-full items-center justify-center overflow-hidden text-center">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-4xl px-6 text-white">
        <h1 className="mb-8 flex justify-center gap-4 text-6xl leading-tight font-extrabold sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="text-white">Top</span>
          <span
            key={index}
            className="animate-fadeIn inline-block text-white transition-all duration-1000 ease-in-out"
          >
            {changingWords[index]}
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg opacity-90 sm:text-xl md:text-2xl lg:text-3xl">
          Lighting Up Your Life – Professional Electricians!
        </p>

        <div className="flex justify-center">
          <Button className="px-10  text-lg md:text-xl">More Info</Button>
        </div>
      </div>

      <div className="absolute bottom-10 w-full px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center text-white sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="mb-3 w-full border-t border-white/50" />
            <p className="text-base font-semibold md:text-lg">quote@mail.com</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-3 w-full border-t border-white/50" />
            <p className="text-base font-semibold md:text-lg">+1 374 739 378</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-3 w-full border-t border-white/50" />
            <p className="text-base font-semibold md:text-lg">42 Oak Street – Miami</p>
          </div>
        </div>
      </div>
    </section>
  );
}
