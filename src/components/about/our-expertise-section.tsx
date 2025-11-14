'use client';
import Image from 'next/image';
import ExpertiseSlider from '@/components/about/experties-slider';
import Button from '@/components/ui/button';
import { IMAGES } from '@/constants/images';

export default function OurExpertise() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 md:grid-cols-2 md:gap-14">
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
          <p className="mb-12 max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
            We are a full-service electrical contractor dedicated to providing
            quality electrical services to both residential and commercial
            customers. Our team of experienced electricians are highly trained
            and certified.
          </p>

          <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
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
          </div>

          <Button size="lg">Prices</Button>
        </div>

        <div className="relative h-[300px] w-full sm:h-[450px] md:h-[580px]">
          <ExpertiseSlider />
        </div>
      </div>
    </section>
  );
}
