'use client';

import type { ReactNode } from 'react';
import { X } from 'lucide-react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const Modal = ({ isOpen, onClose, children, size = 'md' }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const sizeClasses = {
    sm: 'max-w-mg',
    md: 'max-w-3xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className={`${sizeClasses[size]} max-h-[85vh] w-full`}>
        <div className="flex items-center justify-end rounded-t-lg border-b bg-white/95 px-4 py-3">
          <button
            onClick={onClose}
            className="cursor-pointer rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[calc(85vh-60px)] overflow-y-auto [&::-webkit-scrollbar]:hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
