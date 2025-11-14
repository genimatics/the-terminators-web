'use client';

import Image from 'next/image';
import Map from '@/components/contact/map';
import Button from '@/components/ui/button';
import { IMAGES } from '@/constants/images';
import { TEXTS } from '@/constants/text';

export default function Contact() {
  const { CONTACT_BOX } = TEXTS;

  return (
    <>
      <Map />

      <section className="w-full bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mb-14 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {CONTACT_BOX.CARDS.map((card, i) => (
              <div
                key={i}
                className="rounded-lg bg-white p-6 text-center transition-shadow  duration-300 sm:p-8"
              >
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
                <p className="text-muted mb-2 text-lg sm:mb-4 sm:text-xl">{card.PARAGRAPH}</p>
                <p className="text-base font-bold text-black">{card.EMAIL}</p>
                <p className="text-muted text-base font-semibold sm:text-lg">
                  {card.PHONE}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-10 px-4 sm:px-0">
            <h2 className="mb-2 text-3xl leading-snug font-extrabold text-black sm:text-4xl">
              Write to us for a fast
              <span className="block">Feedback</span>
            </h2>
            <p className="text-muted sm:text-md text-sm tracking-widest">
              {CONTACT_BOX.FOOTER1.PARAGRAPH}
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl items-stretch border border-gray-200 md:grid-cols-2">
            <div className="relative h-64 w-full sm:h-80 md:h-auto">
              <Image
                src={IMAGES.ABOUT.SLIDE1}
                alt="Electrician at work"
                fill
                className="border border-black object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-black px-6 py-12 text-white sm:px-12 sm:py-16">
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
                  type="submit"
                  className="w-full px-4 py-3 text-lg font-semibold text-black transition-all duration-300 sm:px-6 sm:py-4"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
