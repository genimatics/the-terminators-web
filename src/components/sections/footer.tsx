'use client';

import { ChevronRight, Facebook, Phone, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { IMAGES } from '@/constants/images';

export default function Footer() {
  return (
    <footer className="bg-black px-6 pt-12 pb-4 text-[#f5f5f5] md:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl leading-tight font-bold">
              Inspiring
              <span className="bg-primary p-2 text-black">Success</span>
            </h2>
            <p className="mt-3 text-xl text-gray-300">
              Creating Connection, and Shaping Futures, where Every Experience Matters.
            </p>
          </div>

          <div className="flex w-full items-center gap-4 lg:w-auto">
            <input
              type="email"
              placeholder="Email"
              className="focus:border-primary flex-1 border-b border-gray-500 bg-transparent py-3 text-lg text-[#f5f5f5] placeholder-gray-400 focus:outline-none lg:w-80"
            />
            <Button className="bg-primary px-8 py-3 text-lg font-semibold text-black transition hover:opacity-90">
              Send
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Agency:</h3>
            <p className="text-lg leading-relaxed text-gray-300">
              With a commitment to excellence, we thrive in delivering exceptional
              solutions and building lasting partnerships. Our journey is defined by a
              relentless pursuit of growth.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <div className="bg-primary rounded-full p-4">
                <Phone className="h-6 w-6 text-black" />
              </div>
              <div>
                <p className="text-base text-gray-400">Call Us</p>
                <p className="text-lg font-semibold text-[#f5f5f5]">+1 233 587 36</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Info :</h3>
            <ul className="space-y-3 text-lg text-gray-300">
              {[
                'Shipping Times',
                'See all products',
                'Payment methods',
                'Returns and refunds',
                'Terms and conditions',
              ].map(item => (
                <li key={item} className="hover:text-primary flex items-center gap-3 transition">
                  <ChevronRight className="text-primary h-5 w-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Contacts :</h3>
            <ul className="space-y-4 text-lg text-gray-300">
              {[
                'Molly Mc Drive',
                'info@email.com',
                'Emily Burton',
                'quote@email.com',
                'U.S. of America',
              ].map(item => (
                <li key={item} className="hover:text-primary flex items-center gap-3 transition">
                  <ChevronRight className="text-primary h-5 w-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Recent Posts :</h3>

            <div className="flex items-start gap-5">
              <div className="h-20 w-20 overflow-hidden">
                <Image
                  src={IMAGES.SECTION_ONE.WORK2}
                  alt="Post thumbnail"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="hover:text-primary cursor-pointer text-lg font-semibold text-[#f5f5f5] transition">
                  Light Poles & Prevention
                </h4>
                <p className="text-base text-gray-400">
                  With recent advances in technology, light poles...
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="h-20 w-20 overflow-hidden">
                <Image
                  src={IMAGES.SECTION_ONE.WORK3}
                  alt="Post thumbnail"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="hover:text-primary cursor-pointer text-lg font-semibold text-[#f5f5f5] transition">
                  Prevention & Support
                </h4>
                <p className="text-base text-gray-400">
                  Electricians are essential to safety and...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Image
            src={IMAGES.FOOTER.LOGO}
            alt="Footer Logo"
            width={120}
            height={50}
            className="object-contain"
          />

          <ul className="flex flex-wrap items-center justify-center gap-8 text-lg text-gray-300">
            <li>Partnerships</li>
            <li>Customer Support</li>
            <li>Privacy Policy</li>
          </ul>

          <div className="flex justify-center gap-6">
            <Link href="#" className="text-primary transition hover:opacity-80">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-primary transition hover:opacity-80">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-primary transition hover:opacity-80">
              <Youtube className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
