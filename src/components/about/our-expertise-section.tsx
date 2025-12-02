'use client';
import Image from 'next/image';
import ExpertiseSlider from '@/components/about/experties-slider';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IMAGES } from '@/constants/images';

export default function OurExpertise() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24 lg:px-12 xl:px-16 2xl:px-24">
      <div className="grid w-full items-center gap-8 md:grid-cols-2 md:gap-14">
        <ScrollReveal>
          <div>
            <p className="mb-4 text-xs tracking-widest text-gray-600 uppercase sm:text-sm md:text-lg">
              Role of Electricians
            </p>
            <h2 className="mb-6 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
              Keeping Homes and
              {' '}
              <br />
              {' '}
              Businesses Safe
            </h2>
            <p className="mb-12 max-w-full text-base leading-relaxed text-gray-600 sm:text-lg">
              To be a trusted engineering partner, delivering cutting-edge, sustainable, and cost-effective energy solutions that drive industrial growth and national progress.
            </p>

            <div className="mb-12 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
              <ScrollReveal delay={0.1}>
                <div>
                  <Image
                    src={IMAGES.ABOUT.EXPERTICON1 || '/placeholder.svg'}
                    alt="icon"
                    width={80}
                    height={80}
                    className="mb-6 h-16 w-16 sm:h-20 sm:w-20"
                  />
                  <h4 className="mb-3 text-lg font-semibold sm:text-2xl">
                    Professional Installers
                  </h4>
                  <p className="text-base text-gray-600 sm:text-lg">
                    Highly trained and certified in all areas of electrical work.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <Image
                    src={IMAGES.ABOUT.EXPERTICON2 || '/placeholder.svg'}
                    alt="icon"
                    width={80}
                    height={80}
                    className="mb-6 h-16 w-16 sm:h-20 sm:w-20"
                  />
                  <h4 className="mb-3 text-lg font-semibold sm:text-2xl">
                    Maintenance & Repairs
                  </h4>
                  <p className="text-base text-gray-600 sm:text-lg">
                    Provide quality electrical services to all customers.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <Button size="lg">Prices</Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="relative h-[300px] w-full sm:h-[450px] md:h-[580px]">
            <ExpertiseSlider />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
