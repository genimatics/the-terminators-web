'use client';

import Image from 'next/image';
import Map from '@/components/contact/map';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { TEXTS } from '@/constants/text';

export default function Contact() {
  const { CONTACT_BOX } = TEXTS;

  return (
    <>
      <ScrollReveal>
        <Map />
      </ScrollReveal>

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
                  <p className="mb-2 text-sm text-gray-600 sm:mb-4 sm:text-base">{card.PARAGRAPH}</p>
                  <a
                    href={`mailto:${card.EMAIL}`}
                    className="text-base font-bold text-black transition-colors hover:text-primary"
                  >
                    {card.EMAIL}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/*
          <ScrollReveal delay={0.3}>
            <div className="mb-10 px-4 sm:px-0">
              <h2 className="mb-2 text-4xl font-bold text-black md:text-5xl">
                Write to us for a fast
                <span className="block">Feedback</span>
              </h2>
              <p className="mt-3 text-sm text-gray-500 md:text-base">
                {CONTACT_BOX.FOOTER1.PARAGRAPH}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-7xl items-stretch border border-gray-200 md:grid-cols-2">
            <ScrollReveal delay={0.4}>
              <div className="relative h-full min-h-[500px] w-full md:min-h-[550px]">
                <Image
                  src={IMAGES.ABOUT.SLIDE1}
                  alt="Electrician at work"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="border border-black object-cover"
                  priority
                />

                <div className="absolute inset-0 border-1 border-black bg-black/60"></div>

                <div className="absolute top-1/4 left-1/4 max-w-[90%] -translate-x-1/5 -translate-y-1/5 px-4 pt-12 text-center">
                  <h2 className="text-3xl leading-tight font-bold text-white sm:text-4xl">
                    Get in Touch With Our Experts
                  </h2>
                  <p className="mt-2 text-sm leading-snug text-white/80 sm:text-base">
                    Have a project or question? Reach out and our skilled electricians
                    will respond promptly.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex min-h-[500px] flex-col justify-center bg-black px-6 py-12 text-white sm:px-12 sm:py-16 md:min-h-[550px]">
                <form className="mx-auto w-full max-w-xl space-y-6 sm:space-y-8">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border-b border-gray-500 bg-transparent py-2 text-base text-white placeholder-gray-400 outline-none sm:py-3 sm:text-lg"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    className="w-full border-b border-gray-500 bg-transparent py-2 text-base text-white placeholder-gray-400 outline-none sm:py-3 sm:text-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-b border-gray-500 bg-transparent py-2 text-base text-white placeholder-gray-400 outline-none sm:py-3 sm:text-lg"
                  />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full resize-none border-b border-gray-500 bg-transparent py-2 text-base text-white placeholder-gray-400 outline-none sm:py-3 sm:text-lg"
                  />
                  <Button
                    disabled={false}
                    type="submit"
                    className="w-full px-4 py-3 text-lg font-semibold text-black transition-all duration-300 sm:px-6 sm:py-4"
                  >
                    Send
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
          */}
        </div>
      </section>
    </>
  );
}
