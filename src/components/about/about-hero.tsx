'use client';
import { ChevronRight } from 'lucide-react';
import { IMAGES } from '@/constants/images';

export default function AboutHero() {
  return (
    <section
      className="relative flex h-[70vh] w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.HERO.SLIDE1})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

      <div className="relative z-10 flex w-full items-center justify-between px-8 text-white">
        <h1 className="text-6xl font-extrabold md:text-7xl">About</h1>

        <div className="flex items-center gap-3 text-lg md:text-xl">
          <ChevronRight className="h-5 w-5 text-white" />
          <span className="font-semibold text-white">
            Electrician WordPress Kit
          </span>
        </div>
      </div>
    </section>
  );
}
