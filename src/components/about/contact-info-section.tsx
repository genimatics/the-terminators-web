'use client';
import InfoCard from '@/components/ui/info-card';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { TEXTS } from '@/constants/text';

export default function AboutContactInfoSection() {
  return (
    <section className="relative w-full bg-white px-4 py-5 text-black sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24">
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10">

        {TEXTS.ABOUT_CONTACT_INFO.CARDS.map((card, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <InfoCard data={card} />
          </ScrollReveal>
        ))}

      </div>
    </section>
  );
}
