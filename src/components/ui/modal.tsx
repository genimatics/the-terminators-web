'use client';

import type { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const Modal = ({ isOpen, onClose, children, size = 'md' }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const sizeClasses = {
    sm: 'max-w-lg',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-8xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className={`w-full ${sizeClasses[size]} rounded-xl bg-white shadow-2xl`}>
        <div className="flex items-center justify-end border-b p-2">
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
