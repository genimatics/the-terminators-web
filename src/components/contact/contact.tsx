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
          <div className="mb-14 grid gap-8 md:grid-cols-3">
            {CONTACT_BOX.CARDS.map((card, i) => (
              <div
                key={i}
                className="rounded-lg bg-white p-8 text-center"
              >
                <Image
                  src={card.ICON}
                  alt={card.HEADING}
                  width={70}
                  height={70}
                  className="mx-auto mb-5"
                />
                <h3 className="mb-3 text-3xl font-bold text-black">
                  {card.HEADING}
                </h3>
                <p className="text-muted mb-4 text-xl ">{card.PARAGRAPH}</p>
                <p className="text-base font-bold text-black">{card.EMAIL}</p>
                <p className="text-muted text-lg font-semibold ">
                  {card.PHONE}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <h2 className="mb-2 text-3xl leading-snug font-bold text-black">
              {CONTACT_BOX.FOOTER.TITLE}
            </h2>
            <p className="text-muted text-lg ">{CONTACT_BOX.FOOTER.PARAGRAPH}</p>
          </div>

          <div className="border- mx-auto grid max-w-7xl items-stretch border md:grid-cols-2">
            <div className="relative h-[550px] w-full md:h-auto">
              <Image
                src={IMAGES.ABOUT.SLIDE1}
                alt="Electrician at work"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-black px-12 py-16 text-white">
              <form className="mx-auto w-full max-w-xl space-y-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-gray-500 bg-transparent py-3 text-lg text-white placeholder-gray-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full border-b border-gray-500 bg-transparent py-3 text-lg text-white placeholder-gray-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-gray-500 bg-transparent py-3 text-lg text-white placeholder-gray-400 outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full resize-none border-b border-gray-500 bg-transparent py-3 text-lg text-white placeholder-gray-400 outline-none"
                />
                <Button
                  type="submit"
                  className="w-full  px-60 py-4 text-lg font-semibold text-black transition-all duration-300 "
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
