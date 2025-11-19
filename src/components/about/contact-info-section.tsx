'use client';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';

export default function AboutContactInfoSection() {
  return (
    <section className="relative w-full bg-white px-4 py-5 text-black sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24">
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10">
        <ScrollReveal>
          <div className="min-h-[360px] border bg-black p-6 sm:p-8">
            <div className="mb-6 flex flex-col items-start text-left">
              <Image
                src={IMAGES.ABOUT.ICON1 || '/placeholder.svg'}
                alt="call icon"
                width={65}
                height={65}
                className="mb-4 object-contain"
              />
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Give us a call</h3>
              <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg">
                Full-service electrical company, our highly trained electricians are
                knowledgeable and efficient.
              </p>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
                <p className="text-xl font-extrabold text-white sm:text-3xl">
                  +1 735 293 385
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="min-h-[360px] bg-black p-6 sm:p-8">
            <div className="mb-6 flex flex-col items-start text-left">
              <Image
                src={IMAGES.ABOUT.ICON2 || '/placeholder.svg'}
                alt="expert icon"
                width={65}
                height={65}
                className="mb-4 object-contain"
              />
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Our Expert</h3>
              <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg">
                We can handle any job, no matter how big or small. We look forward
                to hearing from you!
              </p>
              <Button className="px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base">More Info</Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="min-h-[360px] border bg-black p-6 sm:p-8">
            <div className="mb-6 flex flex-col items-start text-left">
              <Image
                src={IMAGES.ABOUT.ICON3 || '/placeholder.svg'}
                alt="hours icon"
                width={65}
                height={65}
                className="mb-4 object-contain"
              />
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Working Hours</h3>
              <div className="w-full space-y-4 text-gray-300">
                <div className="flex justify-between border-b border-white/20 pt-10 pb-4">
                  <span className="text-base sm:text-lg">Working days</span>
                  <span className="text-base font-medium text-white sm:text-lg">09 am – 06 pm</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-4">
                  <span className="text-base sm:text-lg">Holiday days</span>
                  <span className="text-base font-medium text-white sm:text-lg">09 am – 01 pm</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
