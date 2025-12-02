'use client';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';

export default function ClientHero() {
  return (
    <section
      className="relative flex h-[50vh] w-full items-center justify-center bg-cover bg-center sm:h-[60vh] md:h-[70vh]"
      style={{ backgroundImage: `url(${IMAGES.HERO.SLIDE1})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

      <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 px-4 text-white sm:flex-row sm:px-8">
        <ScrollReveal>
          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-6xl lg:text-7xl">Our Clients</h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex items-center gap-2 text-sm sm:gap-3 sm:text-lg md:text-xl">
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-semibold text-white">
              Electrician WordPress Kit
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
