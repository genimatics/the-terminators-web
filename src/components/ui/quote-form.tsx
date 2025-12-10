'use client';

import type { JSX } from 'react';
import type { ContactFormInput } from '@/validations/validations';
import { useState } from 'react';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import ThankYouCard from '@/components/ui/thankyou-card';
import { contactFormSchema } from '@/validations/validations';

export default function QuoteForm(): JSX.Element {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    surname: '',
    email: '',
    country: 'Pakistan',
    city: '',
    address: '',
    zipCode: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submissionData, setSubmissionData] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormInput]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactFormSchema.parse(formData);

      const response = await fetch('/api/contact/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionData(result.data);
        setShowThankYou(true);
        setFormData({
          name: '',
          surname: '',
          email: '',
          country: 'Pakistan',
          city: '',
          address: '',
          zipCode: '',
          message: '',
        });
      } else {
        if (result.errors) {
          const newErrors: any = {};
          result.errors.forEach((error: any) => {
            newErrors[error.path[0]] = error.message;
          });
          setErrors(newErrors);
        }
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      if (error.errors) {
        const newErrors: any = {};
        error.errors.forEach((err: any) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return (
      <div className="relative z-10 mx-auto max-w-5xl bg-white/95 p-6 shadow-xl backdrop-blur-sm md:p-10">
        <ThankYouCard
          submissionId={submissionData?.id}
          customerName={`${submissionData?.name} ${submissionData?.surname}`}
          email={submissionData?.email}
          onClose={() => setShowThankYou(false)}
        />
      </div>
    );
  }

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

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Name
              <span className="text-primary">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-3 py-2  focus:outline-none"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
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
              value={formData.surname}
              onChange={handleChange}
              placeholder="Enter your surname"
              className="w-full border border-gray-300 px-3 py-2  focus:outline-none"
            />
            {errors.surname && <p className="mt-1 text-sm text-red-600">{errors.surname}</p>}
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
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-3 py-2  focus:outline-none"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="country"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Your Country
              <span className="text-primary">*</span>
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2  focus:outline-none"
            >
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="UAE">UAE</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
            </select>
            {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
          </div>

          <div>
            <label
              htmlFor="city"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              City
              <span className="text-primary">*</span>
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              placeholder="Your City"
              className="w-full border border-gray-300 px-3 py-2  focus:outline-none"
            />
            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
          </div>
        </div>

        {/* Address Information */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="address"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Address
              <span className="text-primary">*</span>
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full border border-gray-300 px-3 py-2  focus:outline-none"
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
          </div>

          <div>
            <label
              htmlFor="zipCode"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Zip Code
              <span className="text-primary">*</span>
            </label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Enter Zip Code"
              className="w-full border border-gray-300 px-3 py-2  focus:outline-none"
            />
            {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Message
            <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message "
            rows={4}
            className="w-full resize-none border border-gray-300 px-3 py-2  focus:outline-none"
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        <div className="flex w-full items-center justify-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 sm:py-4 sm:text-lg"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </form>
    </div>
  );
}
