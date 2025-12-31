'use client';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  background: string;
};

export default function HeroSection({
  title,
  subtitle,
  background,
}: HeroSectionProps) {
  return (
    <section
      className="
        relative
        h-[40vh]
        w-full
        bg-cover
        bg-center
        pt-16
        sm:h-[45vh]
        md:h-[55vh]
        md:pt-24
        lg:h-[60vh]
        lg:pt-28
      "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
        <ScrollReveal>
          <h1 className="text-center text-2xl font-extrabold sm:text-3xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-3 flex items-center gap-2 text-xs sm:text-base md:text-lg">
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-semibold">{subtitle}</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
