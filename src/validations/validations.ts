import { z } from 'zod';

export const personalInfoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  surname: z.string().min(2, 'Surname must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  country: z.string().min(2, 'Country is required'),
  city: z.string().min(2, 'City is required'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  zipCode: z.string().min(3, 'Zip code is required'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

export const serviceInfoSchema = z.object({
  service: z.string().min(1, 'Service is required').refine(val => val !== 'Not Set', {
    message: 'Service is required',
  }),
  extraService: z.string().refine(val => val !== 'Not Set', {
    message: 'Extra Service is required',
  }),
  additionalInfo: z.string().optional(),
});

export const contactInfoSchema = z.object({
  bestContact: z.string().refine(val => val !== 'Not Set', {
    message: 'Best contact method is required',
  }),
  phone: z.string().min(5, 'Phone number must be at least 5 characters'),
  contactEmail: z.string().email('Please enter a valid email address'),
});

export const contactFormSchema = personalInfoSchema
  .merge(serviceInfoSchema)
  .merge(contactInfoSchema);

export type PersonalInfoInput = z.infer<typeof personalInfoSchema>;
export type ServiceInfoInput = z.infer<typeof serviceInfoSchema>;
export type ContactInfoInput = z.infer<typeof contactInfoSchema>;
export type ContactFormInput = z.infer<typeof contactFormSchema>;
