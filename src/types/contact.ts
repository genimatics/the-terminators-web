export type ContactFormData = {
  name: string;
  surname: string;
  email: string;
  country: string;
  city: string;
  address: string;
  zipCode: string;
  message: string;
  serviceType?: string;
  phone?: string;
};

export type ContactSubmission = ContactFormData & {
  id: string;
  submittedAt: Date;
  status: 'pending' | 'processed' | 'rejected';
};
