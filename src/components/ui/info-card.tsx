'use client';

import { Phone } from 'lucide-react';
import Image from 'next/image';

type InfoCardProps = {
  data: {
    ICON: string;
    TITLE: string;
    DESC?: string;
    PHONE?: string;
    BUTTON_TEXT?: string;
    HOURS?: ReadonlyArray<{ LABEL: string; VALUE: string }>;
    TYPE: 'CALL' | 'MISSION' | 'HOURS';
  };
};

export default function InfoCard({ data }: InfoCardProps) {
  return (
    <div className="flex h-full min-h-[360px] flex-col justify-between border bg-black p-6 sm:p-8">
      <div className="mb-6 flex flex-col items-start text-left">

        {data.ICON && (
          <Image
            src={data.ICON}
            alt={data.TITLE}
            width={65}
            height={65}
            className="mb-4 object-contain"
          />
        )}

        <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
          {data.TITLE}
        </h3>

        {data.DESC && (
          <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg">
            {data.DESC}
          </p>
        )}

        {data.TYPE === 'CALL' && (
          <div className="flex items-center gap-3">
            <Phone className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
            <p className="text-lg font-extrabold text-white sm:text-2xl">
              {data.PHONE}
            </p>
          </div>
        )}

        {data.TYPE === 'HOURS' && data.HOURS && (
          <ul className="w-full space-y-2 text-sm text-gray-300 sm:text-xs">
            {data.HOURS.map((h, i) => (
              <li
                key={i}
                className="flex justify-between border-b border-white/20 py-2"
              >
                <span className="font-semibold text-white">{h.LABEL}</span>
                <span className="font-medium text-white">{h.VALUE}</span>
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
}
