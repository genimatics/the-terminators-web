'use client';

import Image from 'next/image';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';

export default function AboutFormSection() {
  return (
    <section className="w-full bg-gray-100 py-5">
      <div className="mx-auto grid max-w-7xl items-stretch border border-gray-300 md:grid-cols-2">
        <ScrollReveal>
          <div className="relative h-[400px] w-full md:h-[450px]">
            <Image
              src={IMAGES.ABOUT.SLIDE1}
              alt="Electrician at work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="border border-black object-cover"
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex min-h-[400px] flex-col justify-center bg-black px-10 py-12 text-white md:min-h-[450px]">
            <form className="mx-auto w-full max-w-lg">
              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col">

                  <input
                    type="text"
                    placeholder="Name"
                    className="border-b border-gray-500 bg-transparent  py-2 text-white placeholder-gray-400 outline-none"
                  />
                </div>
                <div className="flex flex-col">

                  <input
                    type="email"
                    placeholder="Email"
                    className="border-b border-gray-500 bg-transparent  py-2 text-white placeholder-gray-400 outline-none"
                  />
                </div>
              </div>

              <div className="mb-10 flex flex-col">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="resize-none border-b border-gray-500  bg-transparent py-2 text-white placeholder-gray-400 outline-none"
                />
              </div>

              <Button
                type="submit"
                className="bg-primary w-full px-56 py-3 align-middle  font-semibold  text-black  transition-all duration-300"
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
