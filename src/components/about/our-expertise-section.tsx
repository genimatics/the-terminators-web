'use client';

import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function OurExpertise() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24 lg:px-12 xl:px-16 2xl:px-24">
      <div className="mx-auto max-w-4xl">
        {/* Vision Section */}
        <ScrollReveal>
          <div className="mb-16 text-center md:mb-24">
            <p className="mb-4 text-xs tracking-widest text-gray-600 uppercase sm:text-sm md:text-lg">
              Our Vision
            </p>
            <h2 className="mb-6 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
              Leading Engineering Excellence
            </h2>
            <div className="mx-auto max-w-3xl">
              <p className="text-xl leading-relaxed text-gray-700 sm:text-2xl">
                To be a trusted engineering partner, delivering cutting-edge, sustainable, and cost-effective energy solutions that drive industrial growth and national progress.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Strengths Section */}
        <ScrollReveal delay={0.2}>
          <div className="mb-16 text-center md:mb-24">
            <p className="mb-4 text-xs tracking-widest text-gray-600 uppercase sm:text-sm md:text-lg">
              Our Strengths
            </p>
            <h2 className="mb-12 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
              Why Choose Us
            </h2>

            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-2xl   p-6 transition-shadow duration-300 ">
                <div className="mb-4">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <span className="text-xl font-bold">30+</span>
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-gray-800">
                    Years of Experience
                  </h4>
                  <p className="text-gray-600">
                    Over three decades of expertise in electrical and energy engineering
                  </p>
                </div>
              </div>

              <div className="rounded-2xl  p-6 transition-shadow duration-300 ">
                <div className="mb-4">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <span className="text-xl font-bold">✓</span>
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-gray-800">
                    Certified Excellence
                  </h4>
                  <p className="text-gray-600">
                    Registered with PEC, KCCI, and ISO 9001:2015, ISO 14001:2015, ISO 45001:2018
                  </p>
                </div>
              </div>

              <div className="rounded-2xl   p-6 transition-shadow duration-300">
                <div className="mb-4">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <span className="text-xl font-bold">💡</span>
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-gray-800">
                    Innovative Solutions
                  </h4>
                  <p className="text-gray-600">
                    Proven track record of delivering innovative, reliable, and safe solutions
                  </p>
                </div>
              </div>

              <div className="rounded-2xl   p-6 transition-shadow duration-300 ">
                <div className="mb-4">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <span className="text-xl font-bold">🤝</span>
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-gray-800">
                    Client Commitment
                  </h4>
                  <p className="text-gray-600">
                    Strong dedication to client satisfaction, sustainability, and operational efficiency
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg">View Our Services</Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <p className="mb-4 text-xs tracking-widest text-gray-600 uppercase sm:text-sm md:text-lg">
              Our Mission
            </p>
            <h2 className="mb-6 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
              Our Commitment
            </h2>
            <div className="mx-auto max-w-3xl">
              <p className="text-xl leading-relaxed text-gray-700 sm:text-2xl">
                To provide world-class engineering, contracting, and maintenance services, powered by innovation, integrity, and technical excellence.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
