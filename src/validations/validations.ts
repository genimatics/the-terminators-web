import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  surname: z.string().min(2, 'Surname must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  country: z.string().min(2, 'Country is required'),
  city: z.string().min(2, 'City is required'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  zipCode: z.string().min(3, 'Zip code is required'),
  message: z.string().min(10, 'Message must be at least 5 characters'),
  serviceType: z.string().optional(),
  phone: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
