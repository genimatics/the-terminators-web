'use client';

import Image from 'next/image';
import Map from '@/components/contact/map';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { TEXTS } from '@/constants/text';

export default function Contact() {
  const { CONTACT_BOX } = TEXTS;

  const renderCardContent = (card: any) => {
    if (card.EMAIL && !card.PHONE1 && !card.WEBSITE) {
      return (
        <a
          href={`mailto:${card.EMAIL}`}
          className="text-base font-bold text-black transition-colors hover:text-primary"
        >
          {card.EMAIL}
        </a>
      );
    }

    if (card.PHONE1 && card.PHONE2) {
      return (
        <div className="space-y-2">
          <a
            href={`tel:${card.PHONE1}`}
            className="block text-base font-bold text-black transition-colors hover:text-primary"
          >
            {card.PHONE1}
          </a>
          <a
            href={`tel:${card.PHONE2}`}
            className="block text-base font-bold text-black transition-colors hover:text-primary"
          >
            {card.PHONE2}
          </a>
        </div>
      );
    }

    if (card.WEBSITE) {
      return null;
    }

    return null;
  };

  return (
    <>
      <section className="w-full bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mb-14 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {CONTACT_BOX.CARDS.map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="cursor-pointer rounded-lg bg-white p-6 text-center transition-shadow duration-300 sm:p-8">
                  <Image
                    src={card.ICON}
                    alt={card.HEADING}
                    width={70}
                    height={70}
                    className="mx-auto mb-5"
                  />

                  <h3 className="mb-3 text-2xl font-bold text-black sm:text-3xl">
                    {card.HEADING}
                  </h3>

                  <p className="mb-4 text-sm text-gray-600 sm:text-base">
                    {card.PARAGRAPH}
                  </p>

                  {renderCardContent(card)}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <Map />
        </ScrollReveal>
      </section>
    </>
  );
}
