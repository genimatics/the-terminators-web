'use client';

import type { Service } from '@/types/services';
import { useState } from 'react';
import Button from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import QuoteForm from '@/components/ui/quote-form';

type ClientWrapperProps = {
  service: Service;
};

export default function ClientWrapper({ service }: ClientWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="rounded-2xl bg-white p-8 text-muted">
        <h3 className="mb-4 text-xl font-bold">Get This Service</h3>
        <p className="mb-6 opacity-90">
          Interested in our
          {' '}
          {service.title.toLowerCase()}
          {' '}
          services?
          Contact us for a free consultation and quote.
        </p>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="block w-full rounded-lg bg-white py-3 text-center font-semibold text-primary transition-colors hover:bg-gray-100"
        >
          Request Quote
        </Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="lg"
      >
        <QuoteForm />
      </Modal>
    </>
  );
}
