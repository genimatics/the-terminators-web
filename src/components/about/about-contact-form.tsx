'use client';

import Image from 'next/image';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';

export default function AboutFormSection() {
  return (
    <section className="w-full bg-gray-100 px-4 py-5 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24">
      <div className="grid w-full grid-cols-1 items-stretch border border-gray-300 md:grid-cols-2">
        <ScrollReveal>
          <div className="relative h-[400px] w-full overflow-hidden md:h-[450px]">
            <Image
              src={IMAGES.ABOUT.SLIDE1}
              alt="Electrician at work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 border-1 border-black bg-black/60"></div>

            <div className="absolute top-1/4 left-1/4 max-w-[90%] -translate-x-1/5 -translate-y-1/5  px-4 pt-12 text-center">
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

        <ScrollReveal delay={0.2}>
          <div className="flex min-h-[400px] flex-col justify-center bg-black px-6 py-12 sm:px-8 md:min-h-[450px] md:px-10">
            <form className="mx-auto w-full max-w-lg">
              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-b border-gray-500 bg-transparent py-2 text-white placeholder-gray-400 outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-b border-gray-500 bg-transparent py-2 text-white placeholder-gray-400 outline-none"
                  />
                </div>
              </div>

              <div className="mb-10 flex flex-col">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="resize-none border-b border-gray-500 bg-transparent py-2 text-white placeholder-gray-400 outline-none"
                />
              </div>

              <Button
                disabled={false}
                type="submit"
                className="w-full bg-primary px-6 py-3 text-base font-semibold transition-all duration-300 sm:px-8 sm:py-3 sm:text-lg"
              >
                Send
              </Button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
