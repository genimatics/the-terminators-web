'use client';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/button';
import { IMAGES } from '@/constants/images';

export default function AboutContactInfoSection() {
  return (
    <section className="relative w-full bg-white px-6 py-5 text-black md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
        <div className="min-h-[360px] border bg-black p-8">
          <div className="mb-6 flex flex-col items-start text-left">
            <Image
              src={IMAGES.ABOUT.ICON1}
              alt="call icon"
              width={65}
              height={65}
              className="mb-4 object-contain"
            />
            <h3 className="mb-4 text-3xl font-bold text-white">Give us a call</h3>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Full-service electrical company, our highly trained electricians are
              knowledgeable and efficient.
            </p>
            <div className="flex items-center gap-3">
              <Phone className="text-primary h-7 w-7" />
              <p className="text-3xl font-extrabold text-white">
                +1 735 293 385
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-[360px] bg-black p-8">
          <div className="mb-6 flex flex-col items-start text-left">
            <Image
              src={IMAGES.ABOUT.ICON2}
              alt="expert icon"
              width={65}
              height={65}
              className="mb-4 object-contain"
            />
            <h3 className="mb-4 text-3xl font-bold text-white">Our Expert</h3>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              We can handle any job, no matter how big or small. We look forward
              to hearing from you!
            </p>
            <Button className="px-8 py-3 text-base">More Info</Button>
          </div>
        </div>

        <div className="min-h-[360px] border bg-black p-8">
          <div className="mb-6 flex flex-col items-start text-left">
            <Image
              src={IMAGES.ABOUT.ICON3}
              alt="hours icon"
              width={65}
              height={65}
              className="mb-4 object-contain"
            />
            <h3 className="mb-4 text-3xl font-bold text-white">Working Hours</h3>
            <div className="w-full space-y-4 text-gray-300">
              <div className="flex justify-between border-b border-white/20 pt-10 pb-4">
                <span className="text-lg">Working days</span>
                <span className="text-lg font-medium text-white">09 am – 06 pm</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-4">
                <span className="text-lg">Holiday days</span>
                <span className="text-lg font-medium text-white">09 am – 01 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
