'use client';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  type = 'button',
}) => {
  return (
    <div className="group relative inline-block">
      <div className="absolute top-[8px] left-[8px] z-0 h-full w-full  bg-black transition-transform duration-300 ease-out group-hover:scale-95"></div>

      <button
        type={type}
        onClick={onClick}
        className={`bg-primary relative z-10 px-8 py-3 font-semibold text-black  transition-transform duration-300 ease-out group-hover:scale-95 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
