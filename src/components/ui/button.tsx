'use client';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  type = 'button',
  size = 'md',
}) => {
  const shadowOffset
    = size === 'sm' ? 2 : size === 'lg' ? 6 : 4;

  const padding
    = size === 'sm'
      ? 'px-4 py-2 text-sm'
      : size === 'lg'
        ? 'px-10 py-4 text-lg'
        : 'px-8 py-3';

  return (
    <div className={`group relative inline-block ${className.includes('w-full') ? 'w-full' : ''}`}>
      <div
        className="absolute z-0  bg-black transition-transform duration-300 ease-out group-hover:scale-95 "
        style={{
          top: `${shadowOffset}px`,
          left: `${shadowOffset}px`,
          width: '100%',
          height: '100%',
        }}
      >
      </div>

      <button
        type={type}
        onClick={onClick}
        className={`bg-primary relative z-10 font-semibold text-black transition-transform duration-300 ease-out ${padding} w-full group-hover:scale-95`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
