'use client';

import { Check } from 'lucide-react';

type ThankYouCardProps = {
  submissionId?: string | number;
  customerName: string;
  email: string;
  onClose?: () => void;
};

export default function ThankYouCard({
  submissionId,
  customerName,
  email,
  onClose,
}: ThankYouCardProps) {
  return (
    <div className="p-8 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <Check className="h-8 w-8 text-green-600" />
      </div>

      <h3 className="mb-2 text-xl font-semibold text-gray-900">
        Thank You!
      </h3>

      <p className="mb-6 text-gray-600">
        Your quote request has been submitted successfully.
        {submissionId && (
          <span className="mt-2 block text-sm">
            Reference ID:
            {' '}
            {submissionId}
          </span>
        )}
      </p>
      <div className="mb-6 rounded-lg bg-gray-50 p-4 text-left">
        <p className="font-medium">
          Customer:
          {customerName}
        </p>
        <p className="text-sm text-gray-600">
          Email:
          {email}
        </p>
      </div>

      <button
        onClick={onClose}
        className="w-full rounded-md bg-primary px-4 py-2 text-white "
      >
        OK
      </button>
    </div>
  );
}
