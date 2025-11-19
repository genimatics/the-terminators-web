'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';
import RotatingText from '../RotatingText';

const images = [IMAGES.HERO.SLIDE1, IMAGES.HERO.SLIDE2, IMAGES.HERO.SLIDE3];
const changingWords = ['Services', 'Quality'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden text-center">

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

      <div className="relative z-10 flex flex-grow flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-0">

        <ScrollReveal>
          <h1
            className="mb-3 flex flex-wrap items-center justify-center gap-1
            text-3xl leading-tight font-extrabold
            text-white sm:text-4xl
            md:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span>Top</span>

            <RotatingText
              texts={changingWords}
              mainClassName="px-2 sm:px-3 md:px-4 rounded-lg overflow-hidden"
              staggerFrom="last"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-120%', opacity: 0 }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </h1>

          <p className="
            mx-auto mb-4 max-w-xs px-2
            text-xs leading-relaxed text-white
            opacity-90 sm:text-sm
            md:text-base lg:text-lg xl:text-xl"
          >
            Lighting Up Your Life – Professional Electricians!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Button
            className="
              px-8 py-3 text-sm
              sm:px-10 sm:py-4 sm:text-base
              md:text-lg
              lg:px-12 lg:py-5 lg:text-xl
            "
          >
            More Info
          </Button>
        </ScrollReveal>

      </div>

      <div className="relative z-10 w-full px-4 pt-0 pb-6">

        <ScrollReveal delay={0.2}>
          <div className="
            mx-auto grid max-w-5xl grid-cols-1
            gap-3 text-center text-white
            sm:grid-cols-3 sm:gap-6
          "
          >

            <div className="flex flex-col items-center">
              <div className="mb-1 w-full border-t border-white/40" />
              <p className="truncate
                text-xs font-semibold sm:text-sm
                md:text-base lg:text-lg xl:text-xl"
              >
                quote@mail.com
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-1 w-full border-t border-white/40" />
              <p className="
                text-xs font-semibold sm:text-sm
                md:text-base lg:text-lg xl:text-xl"
              >
                +1 374 739 378
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-1 w-full border-t border-white/40" />
              <p className="truncate
                text-xs font-semibold sm:text-sm
                md:text-base lg:text-lg xl:text-xl"
              >
                42 Oak Street – Miami
              </p>
            </div>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}
