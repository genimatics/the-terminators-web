'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';
import RotatingText from '../RotatingText';

const images = [IMAGES.HERO.SLIDE1, IMAGES.HERO.SLIDE2, IMAGES.HERO.SLIDE3];
const changingWords = ['Power', 'Innovation', 'Reliability', 'Expertise', 'Safety', 'Solutions'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden py-20 text-center">

      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${i === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 sm:px-6">
        <div className="w-full pt-24 sm:pt-28">
          <ScrollReveal>
            <div className="mb-8 sm:mb-12">
              <h1 className="mb-6 flex flex-wrap items-center justify-center gap-2 text-4xl leading-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
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

              <p className="hero-paragraph mx-auto mb-10 max-w-2xl px-2 text-base text-white opacity-90 sm:mb-12 sm:text-lg md:text-xl lg:text-2xl">
                Providing Electrical Engineering, Installations and Associated Mechanical and Civil Services for Industries, Offices, Homes and Classified Installations.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link href="/about">
              <Button
                disabled={false}
                className="px-8 py-3 text-sm sm:px-10 sm:py-4 sm:text-base md:text-lg lg:px-12 lg:py-5 lg:text-xl"
              >
                More Info
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* <div className="relative z-10 w-full px-4 pt-6 pb-8">
        <ScrollReveal delay={0.2}>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 text-center text-white sm:grid-cols-3 sm:gap-6">
            <div className="flex flex-col items-center">
              <div className="mb-2 w-full border-t border-white/40" />
              <a href="mailto:z_siddiki@hotmail.com" target="blank" rel="noopener noreferrer" className="hero-footer text-sm font-semibold transition-colors hover:text-primary sm:text-base md:text-lg lg:text-xl">
                z_siddiki@hotmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-2 w-full border-t border-white/40" />
              <a
                href="tel:+922134830726"
                className="hero-footer text-sm font-semibold transition-colors hover:text-primary sm:text-base md:text-lg lg:text-xl"
              >
                +92 21 34830726-7
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-2 w-full border-t border-white/40" />
              <a href="https://maps.app.goo.gl/JVfVtrMVasWURRy97" target="_blank" rel="noopener noreferrer" className="hero-footer text-sm font-semibold transition-colors hover:text-primary sm:text-base md:text-lg lg:text-xl">
                Block 13-A, Main University Road
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div> */}
    </section>
  );
}
