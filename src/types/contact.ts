export type ContactFormData = {
  name: string;
  surname: string;
  email: string;
  country: string;
  city: string;
  address: string;
  zipCode: string;
  message: string;

  service: string;
  extraService: string;
  additionalInfo?: string;

  bestContact: string;
  phone: string;
  contactEmail: string;
};

export type ContactSubmission = ContactFormData & {
  id: string;
  submittedAt: Date;
  status: 'pending' | 'processed' | 'rejected';
  currentStep?: 'personal' | 'service' | 'contact';
};
