'use client';

import type { JSX } from 'react';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function QuoteForm(): JSX.Element {
  return (
    <div className="relative z-10 mx-auto max-w-5xl bg-white/95 p-6 shadow-xl backdrop-blur-sm md:p-10">
      <ScrollReveal delay={0.2}>
        <div className="mb-8 flex items-center justify-between sm:mb-10
                  lg:mx-auto lg:max-w-3xl"
        >

          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary text-xs font-bold text-white sm:h-12 sm:w-12 sm:text-lg">
              1
            </div>
            <p className="mt-1 text-xs font-semibold text-gray-800 sm:mt-2 sm:text-base">
              Personal Info
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="h-[2px] w-full bg-gray-300 lg:max-w-32"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-xs font-bold text-primary sm:h-12 sm:w-12 sm:text-lg">
              2
            </div>
            <p className="mt-1 text-xs font-semibold text-gray-800 sm:mt-2 sm:text-base">
              Service Requested
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="h-[2px] w-full bg-gray-300 lg:max-w-32"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-xs font-bold text-primary sm:h-12 sm:w-12 sm:text-lg">
              3
            </div>
            <p className="mt-1 text-xs font-semibold text-gray-800 sm:mt-2 sm:text-base">
              Contact Info
            </p>
          </div>
        </div>
      </ScrollReveal>

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
              <option>Pakistan</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
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

        <div className="flex w-full items-center justify-center">
          <Button
            type="submit"
            className="w-full py-3 text-base font-semibold text-black transition-all duration-300 sm:py-4 sm:text-lg"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
