'use client';

import Image from 'next/image';
import { TEXTS } from '@/constants/text';

export default function AboutTeam() {
  const { ABOUT_TEAM } = TEXTS;

  return (
    <section className="bg-secondary w-full py-5">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-3 text-base tracking-[4px] text-gray-500 uppercase">
          {ABOUT_TEAM.HEADINGS.SMALL_TITLE}
        </p>
        <h2 className="mb-5 text-5xl font-bold text-gray-900">
          {ABOUT_TEAM.HEADINGS.TITLE}
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-lg leading-relaxed text-gray-600">
          {ABOUT_TEAM.HEADINGS.PARAGRAPH}
        </p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {ABOUT_TEAM.MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="overflow-hidden border border-black shadow-md transition-all duration-500 hover:shadow-xl"
            >
              <div className="relative h-[420px] w-full overflow-hidden border-b border-black">
                <Image
                  src={member.IMAGE}
                  alt={member.NAME}
                  fill
                  className="transform object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="bg-white py-6 text-center">
                <h3 className="mb-1 text-2xl font-semibold text-gray-900">
                  {member.NAME}
                </h3>
                <p className="text-base tracking-wide text-gray-600 uppercase">
                  {member.ROLE}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
