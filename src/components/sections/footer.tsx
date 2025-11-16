'use client';

import { ChevronRight, Facebook, Phone, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';
import { TEXTS } from '@/constants/text';

export default function Footer() {
  return (
    <footer className="bg-black px-4 pt-8 pb-4 text-white sm:px-6 sm:pt-12 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-12 sm:space-y-16">

        {/* Section 1 */}
        <ScrollReveal>
          <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 lg:flex-row">
            <div className="w-full text-center lg:w-auto lg:text-left">
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                {TEXTS.FOOTER.HEADING}
                <span className="bg-primary ml-2 inline-block p-2 text-black">
                  {TEXTS.FOOTER.HIGHLIGHT}
                </span>
              </h2>
              <p className="mt-3 text-base text-gray-300 sm:text-lg">
                {TEXTS.FOOTER.DESCRIPTION}
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:w-auto">
              <input
                type="email"
                placeholder={TEXTS.FOOTER.PLACEHOLDER}
                className="focus:border-primary w-full flex-1 border-b border-gray-500 bg-transparent py-3 text-base text-white placeholder-gray-400 focus:outline-none sm:w-auto sm:text-lg lg:w-80"
              />
              <Button className="bg-primary w-full px-6 py-3 text-base font-semibold text-black transition hover:opacity-90 sm:w-auto sm:px-8 sm:text-lg">
                {TEXTS.FOOTER.BUTTON_TEXT}
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Section 2 - Grid */}
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Box 1 */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl font-semibold sm:text-2xl">{TEXTS.FOOTER.AGENCY.TITLE}</h3>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                {TEXTS.FOOTER.AGENCY.DESCRIPTION}
              </p>

              <div className="mt-5 flex items-center gap-3 sm:gap-4">
                <div className="bg-primary flex-shrink-0 rounded-full p-3 sm:p-4">
                  <Phone className="h-5 w-5 text-black sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 sm:text-base">{TEXTS.FOOTER.AGENCY.CALL_US}</p>
                  <p className="text-base font-semibold text-white sm:text-lg">{TEXTS.FOOTER.AGENCY.PHONE}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Box 2 */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl font-semibold sm:text-2xl">{TEXTS.FOOTER.INFO.TITLE}</h3>
              <ul className="space-y-2 text-base text-gray-300 sm:space-y-3 sm:text-lg">
                {TEXTS.FOOTER.INFO.ITEMS.map(item => (
                  <li key={item} className="hover:text-primary flex items-center gap-2 transition sm:gap-3">
                    <ChevronRight className="text-primary h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Box 3 */}
          <ScrollReveal delay={0.3}>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl font-semibold sm:text-2xl">{TEXTS.FOOTER.CONTACTS.TITLE}</h3>
              <ul className="space-y-2 text-base text-gray-300 sm:space-y-4 sm:text-lg">
                {TEXTS.FOOTER.CONTACTS.ITEMS.map(item => (
                  <li key={item} className="hover:text-primary flex items-center gap-2 transition sm:gap-3">
                    <ChevronRight className="text-primary h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Recent Posts */}
          <ScrollReveal delay={0.4}>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl font-semibold sm:text-2xl">{TEXTS.FOOTER.RECENT_POSTS.TITLE}</h3>

              {TEXTS.FOOTER.RECENT_POSTS.POSTS.slice(0, 2).map((post, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-5">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden sm:h-20 sm:w-20">
                    <Image
                      src={(i === 0 ? IMAGES.SECTION_ONE.WORK2 : IMAGES.SECTION_ONE.WORK3) || '/placeholder.svg'}
                      alt="Post thumbnail"
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="hover:text-primary cursor-pointer text-base font-semibold text-white transition sm:text-lg">
                      {post.TITLE}
                    </h4>
                    <p className="text-sm text-gray-400 sm:text-base">{post.DESCRIPTION}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>

        {/* Bottom Bar */}
        <ScrollReveal delay={0.5}>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-800 py-8 sm:py-12 md:flex-row md:gap-8">

            <Image
              src={IMAGES.FOOTER.LOGO || '/placeholder.svg'}
              alt="Footer Logo"
              width={120}
              height={50}
              className="h-8 w-auto object-contain sm:h-10"
            />

            <ul className="flex flex-wrap items-center justify-center gap-4 text-center text-base text-gray-300 sm:gap-6 sm:text-lg md:gap-8">
              {TEXTS.FOOTER.FOOTER_LINKS.map(link => (
                <li key={link}>{link}</li>
              ))}
            </ul>

            <div className="flex justify-center gap-4 sm:gap-6">
              <Link href="#" className="text-primary transition hover:opacity-80">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link href="#" className="text-primary transition hover:opacity-80">
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link href="#" className="text-primary transition hover:opacity-80">
                <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
}
