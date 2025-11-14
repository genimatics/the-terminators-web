'use client';

import type { JSX } from 'react';
import Button from '@/components/ui/button';

export default function QuoteSection(): JSX.Element {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat px-4 py-20"
      style={{
        backgroundImage:
          'url("/assets/terminator-images/home/hero-section-bg/hero-slide1.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

      {/* Heading Section */}
      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Get a Complete Quote
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-200 md:text-base">
          Your bridge to meaningful communication and personalized assistance,
          we're here to listen and assist you!
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl bg-white/95 p-8 shadow-xl backdrop-blur-sm md:p-10">
        <div className="mb-10 flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
          <div className="flex flex-col items-center">
            <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full border-2 border-black text-lg font-bold text-black">
              1
            </div>
            <p className="mt-2 text-base font-semibold text-gray-800">
              Personal Informations
            </p>
          </div>

          <div className="hidden h-[2px] w-30 bg-gray-300 sm:block"></div>

          <div className="flex flex-col items-center">
            <div className="border-primary text-primary flex h-12 w-12 items-center justify-center rounded-full border-2 text-lg font-bold">
              2
            </div>
            <p className="mt-2 text-base font-semibold text-gray-800">
              Service Requested
            </p>
          </div>

          <div className="hidden h-[2px] w-30 bg-gray-300 sm:block"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="border-primary text-primary flex h-12 w-12 items-center justify-center rounded-full border-2 text-lg font-bold">
              3
            </div>
            <p className="mt-2 text-base font-semibold text-gray-800">
              Contact Informations
            </p>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Name
                <span className="text-primary-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Insert your name"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="surname"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Surname
                <span className="text-primary">*</span>
              </label>
              <input
                id="surname"
                name="surname"
                type="text"
                placeholder="Insert your surname"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email
                <span className="text-primary">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Insert your email"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="country"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Your Country
              </label>
              <select
                id="country"
                name="country"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              >
                <option>Not Set</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Pakistan</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="city"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="Your City"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="address"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Insert your address"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="zipCode"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                placeholder="Type your Zip Code"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              rows={4}
              className="w-full resize-none border border-gray-300 px-3 py-2 focus:outline-none"
            >
            </textarea>
          </div>

          <div className="item-center flex w-full justify-center">
            <Button
              type="submit"
              className="w-full py-3 text-base font-semibold text-black transition-all duration-300 sm:py-4 sm:text-lg"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
