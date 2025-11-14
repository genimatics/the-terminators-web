'use client';
import Image from 'next/image';
import ExpertiseSlider from '@/components/about/experties-slider';
import Button from '@/components/ui/button';
import { IMAGES } from '@/constants/images';

export default function OurExpertise() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-lg tracking-widest text-gray-600 uppercase">
            Role of Electricians
          </p>
          <h2 className="mb-6 text-5xl leading-tight font-bold">
            Keeping Homes and
            {' '}
            <br />
            {' '}
            Businesses Safe
          </h2>
          <p className="mb-12 max-w-md text-lg leading-relaxed text-gray-600">
            We are a full-service electrical contractor dedicated to providing
            quality electrical services to both residential and commercial
            customers. Our team of experienced electricians are highly trained
            and certified.
          </p>

          <div className="mb-12 grid grid-cols-2 gap-10">
            <div>
              <Image
                src={IMAGES.ABOUT.EXPERTICON1}
                alt="icon"
                width={80}
                height={80}
                className="mb-6"
              />
              <h4 className="mb-3 text-2xl font-semibold">
                Professional Installers
              </h4>
              <p className="text-lg text-gray-600">
                Highly trained and certified in all areas of electrical work.
              </p>
            </div>

            <div>
              <Image
                src={IMAGES.ABOUT.EXPERTICON2}
                alt="icon"
                width={80}
                height={80}
                className="mb-6"
              />
              <h4 className="mb-3 text-2xl font-semibold">
                Maintenance & Repairs
              </h4>
              <p className="text-lg text-gray-600">
                Provide quality electrical services to all customers.
              </p>
            </div>
          </div>

          <Button size="lg">Prices</Button>
        </div>

        <div className="relative h-[580px] w-full">
          <ExpertiseSlider />
        </div>
      </div>
    </section>
  );
}
