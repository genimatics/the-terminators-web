'use client';

import type { JSX } from 'react';
import type { ContactFormInput } from '@/validations/validations';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import ThankYouCard from '@/components/ui/thankyou-card';
import { contactFormSchema } from '@/validations/validations';

type FormStep = 1 | 2 | 3;

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
    service: 'Not Set',
    extraService: 'Not Set',
    additionalInfo: '',
    bestContact: 'Not Set',
    phone: '',
    contactEmail: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submissionData, setSubmissionData] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [formContainerRef, setFormContainerRef] = useState<HTMLDivElement | null>(null);

  const formRef = (node: HTMLDivElement) => {
    if (node !== null) {
      setFormContainerRef(node);
    }
  };

  useEffect(() => {
    if (formContainerRef) {
      formContainerRef.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [currentStep]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormInput]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateCurrentStep = (): boolean => {
    const stepErrors: Partial<Record<keyof ContactFormInput, string>> = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        stepErrors.name = 'Name is required';
      }
      if (!formData.surname.trim()) {
        stepErrors.surname = 'Surname is required';
      }
      if (!formData.email.trim()) {
        stepErrors.email = 'Email is required';
      } else if (!/^\S[^\s@]*@\S[^\s.]*\.\S+$/.test(formData.email)) {
        stepErrors.email = 'Email is invalid';
      }
      if (!formData.country.trim()) {
        stepErrors.country = 'Country is required';
      }
      if (!formData.city.trim()) {
        stepErrors.city = 'City is required';
      }
      if (!formData.address.trim()) {
        stepErrors.address = 'Address is required';
      }
      if (!formData.zipCode.trim()) {
        stepErrors.zipCode = 'Zip Code is required';
      }
      if (!formData.message.trim()) {
        stepErrors.message = 'Message is required';
      }
    }

    if (currentStep === 2) {
      if (formData.service === 'Not Set') {
        stepErrors.service = 'Service is required';
      }
      if (formData.extraService === 'Not Set') {
        stepErrors.extraService = 'Extra Service is required';
      }
    }

    if (currentStep === 3) {
      if (formData.bestContact === 'Not Set') {
        stepErrors.bestContact = 'Best Contact is required';
      }
      if (!formData.phone.trim()) {
        stepErrors.phone = 'Phone is required';
      }
      if (!formData.contactEmail.trim()) {
        stepErrors.contactEmail = 'Email is required';
      } else if (!/^\S[^\s@]*@\S[^\s.]*\.\S+$/.test(formData.contactEmail)) {
        stepErrors.contactEmail = 'Email is invalid';
      }
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep() && currentStep < 3) {
      setCurrentStep(prev => (prev + 1) as FormStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => (prev - 1) as FormStep);
      setTimeout(() => {
        if (formContainerRef) {
          formContainerRef.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateCurrentStep() || currentStep !== 3) {
      return;
    }

    setIsSubmitting(true);

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
          service: 'Not Set',
          extraService: 'Not Set',
          additionalInfo: '',
          bestContact: 'Not Set',
          phone: '',
          contactEmail: '',
        });
        setCurrentStep(1);
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

  const getStepIndicatorStyle = (step: FormStep) => {
    if (step === currentStep) {
      return 'border-2 border-white bg-primary text-white';
    } else if (step < currentStep) {
      return 'border-2 border-primary bg-primary text-white';
    } else {
      return 'border-2 border-primary text-primary';
    }
  };

  const getStepTextStyle = (step: FormStep) => {
    if (step <= currentStep) {
      return 'text-gray-800';
    } else {
      return 'text-gray-500';
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
    <div ref={formRef} className="relative z-10 mx-auto max-w-5xl bg-white/95 p-6 shadow-xl backdrop-blur-sm md:p-10">
      <ScrollReveal delay={0.2}>
        <div className="mb-8 flex items-center justify-between sm:mb-10 lg:mx-auto lg:max-w-3xl">
          <div className="flex flex-col items-center">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold sm:h-12 sm:w-12 sm:text-lg ${getStepIndicatorStyle(1)}`}>
              1
            </div>
            <p className={`mt-1 text-xs font-semibold sm:mt-2 sm:text-base ${getStepTextStyle(1)}`}>
              Personal Info
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="h-[2px] w-full bg-gray-300 lg:max-w-32"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold sm:h-12 sm:w-12 sm:text-lg ${getStepIndicatorStyle(2)}`}>
              2
            </div>
            <p className={`mt-1 text-xs font-semibold sm:mt-2 sm:text-base ${getStepTextStyle(2)}`}>
              Service Requested
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="h-[2px] w-full bg-gray-300 lg:max-w-32"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold sm:h-12 sm:w-12 sm:text-lg ${getStepIndicatorStyle(3)}`}>
              3
            </div>
            <p className={`mt-1 text-xs font-semibold sm:mt-2 sm:text-base ${getStepTextStyle(3)}`}>
              Contact Info
            </p>
          </div>
        </div>
      </ScrollReveal>

      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                  Name
                  {' '}
                  <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="surname" className="mb-1 block text-sm font-medium text-gray-700">
                  Surname
                  {' '}
                  <span className="text-primary">*</span>
                </label>
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Enter your surname"
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
                />
                {errors.surname && <p className="mt-1 text-sm text-red-600">{errors.surname}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                  {' '}
                  <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="country" className="mb-1 block text-sm font-medium text-gray-700">
                  Your Country
                  {' '}
                  <span className="text-primary">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
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
                <label htmlFor="city" className="mb-1 block text-sm font-medium text-gray-700">
                  City
                  {' '}
                  <span className="text-primary">*</span>
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your City"
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
                />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">
                  Address
                  {' '}
                  <span className="text-primary">*</span>
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
                />
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
              </div>

              <div>
                <label htmlFor="zipCode" className="mb-1 block text-sm font-medium text-gray-700">
                  Zip Code
                  {' '}
                  <span className="text-primary">*</span>
                </label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Enter Zip Code"
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
                />
                {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                Message
                {' '}
                <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows={4}
                className="w-full resize-none border border-gray-300 px-3 py-2 focus:outline-none"
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div>
              <label htmlFor="service" className="mb-1 block text-sm font-medium text-gray-700">
                Service
                {' '}
                <span className="text-primary">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              >
                <option value="Not Set">Not Set</option>
                <option value="Power Generation">Power Generation</option>
                <option value="Industrial Electrification">Industrial Electrification</option>
                <option value="Maintenance Services">Maintenance Services</option>
                <option value="Indoor & Outdoor Lighting">Indoor & Outdoor Lighting</option>
                <option value="Earthing, LPS & Safeties">Earthing, LPS & Safeties</option>
              </select>
              {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
            </div>

            <div>
              <label htmlFor="extraService" className="mb-1 block text-sm font-medium text-gray-700">
                Extra Service
                {' '}
                <span className="text-primary">*</span>
              </label>
              <select
                id="extraService"
                name="extraService"
                value={formData.extraService}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              >
                <option value="Not Set">Not Set</option>
                <option value="Solar Power Systems
"
                >
                  Solar Power Systems
                </option>
                <option value="LT Panels, PFI Panels, Motor Control Centers
"
                >
                  LT Panels, PFI Panels, Motor Control Centers
                </option>
                <option value="Customized Test Benches and Panels
"
                >
                  Customized Test Benches and Panels
                </option>
                <option value="Annual Maintenance Contracts
"
                >
                  Annual Maintenance Contracts
                </option>
              </select>
              {errors.extraService && <p className="mt-1 text-sm text-red-600">{errors.extraService}</p>}
            </div>

            <div>
              <label htmlFor="additionalInfo" className="mb-1 block text-sm font-medium text-gray-700">
                Additional Informations
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Write your Informations"
                rows={4}
                className="w-full resize-none border border-gray-300 px-3 py-2 focus:outline-none"
              />
              {errors.additionalInfo && <p className="mt-1 text-sm text-red-600">{errors.additionalInfo}</p>}
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <div>
              <label htmlFor="bestContact" className="mb-1 block text-sm font-medium text-gray-700">
                Best Contact
                {' '}
                <span className="text-primary">*</span>
              </label>
              <select
                id="bestContact"
                name="bestContact"
                value={formData.bestContact}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              >
                <option value="Not Set">Not Set</option>
                <option value="Phone">Phone</option>
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Any">Any</option>
              </select>
              {errors.bestContact && <p className="mt-1 text-sm text-red-600">{errors.bestContact}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                Phone
                {' '}
                <span className="text-primary">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Insert your phone"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="contactEmail" className="mb-1 block text-sm font-medium text-gray-700">
                Email
                {' '}
                <span className="text-primary">*</span>
              </label>
              <input
                id="contactEmail"
                name="contactEmail"
                type="email"
                value={formData.contactEmail}
                onChange={handleChange}
                placeholder="Leave your email"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              />
              {errors.contactEmail && <p className="mt-1 text-sm text-red-600">{errors.contactEmail}</p>}
            </div>
          </>
        )}

        <div className="flex w-full items-center justify-between">
          {currentStep > 1 && (
            <Button
              type="button"
              onClick={prevStep}
              className="w-1/3 py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 sm:py-4 sm:text-lg"
            >
              Previous
            </Button>
          )}

          {currentStep < 3
            ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className={`${currentStep > 1 ? 'w-2/3' : 'w-full'} py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 sm:py-4 sm:text-lg`}
                >
                  Next
                </Button>
              )
            : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${currentStep > 1 ? 'w-2/3' : 'w-full'} py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 sm:py-4 sm:text-lg`}
                >
                  {isSubmitting ? 'Submitting...' : 'Send'}
                </Button>
              )}
        </div>
      </form>
    </div>
  );
}
