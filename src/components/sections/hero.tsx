'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/button';
import { IMAGES } from '@/constants/images';

const images = [IMAGES.HERO.SLIDE1, IMAGES.HERO.SLIDE2, IMAGES.HERO.SLIDE3];
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
    <section className="relative flex min-h-[90vh] w-full flex-col justify-between overflow-hidden text-center sm:min-h-[100vh]">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-start px-4 pt-24 sm:px-6 sm:pt-32 md:pt-36">
        <h1 className="mb-4 flex flex-wrap justify-center gap-3 text-4xl leading-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span>Top</span>
          <span
            key={index}
            className="animate-fadeIn inline-block text-white transition-all duration-1000"
          >
            {changingWords[index]}
          </span>
        </h1>

        <p className="mx-auto mb-6 max-w-xl text-base text-white opacity-90 sm:text-lg md:text-xl lg:text-2xl">
          Lighting Up Your Life – Professional Electricians!
        </p>

        <Button className="px-8 py-3 text-base sm:text-lg md:text-xl">
          More Info
        </Button>
      </div>

      <div className="relative mt-auto w-full px-6 pb-6 sm:pb-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 text-center text-white sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="mb-2 w-full border-t border-white/40" />
            <p className="text-sm font-semibold sm:text-base md:text-lg">quote@mail.com</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-2 w-full border-t border-white/40" />
            <p className="text-sm font-semibold sm:text-base md:text-lg">+1 374 739 378</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-2 w-full border-t border-white/40" />
            <p className="text-sm font-semibold sm:text-base md:text-lg">42 Oak Street – Miami</p>
          </div>
        </div>
      </div>
    </section>
  );
}
