'use client';

import type { JSX } from 'react';
import QuoteForm from '@/components/ui/quote-form';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';

export default function QuoteSection(): JSX.Element {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat px-4 py-20"
      style={{
        backgroundImage: `url(${IMAGES.QUOTE_SECTION.QUOTE_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

      <ScrollReveal>
        <div className="relative z-10 mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Get a Complete Quote
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-200 md:text-base">
            Your bridge to meaningful communication and personalized assistance,
            we're here to listen and assist you!
          </p>
        </div>
      </ScrollReveal>

      <QuoteForm />
    </section>
  );
}
