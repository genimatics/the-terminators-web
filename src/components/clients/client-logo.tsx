'use client';

import Image from 'next/image';
import { CLIENTS } from '@/constants/clients';

export default function ClientLogo() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background via-background to-background py-20 sm:py-28 md:py-36">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-16 text-center md:mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Join thousands of companies using our electrical solutions
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {CLIENTS.map(client => (
            <div
              key={client.id}
              className="group relative flex h-24 w-28 items-center justify-center rounded-lg border border-black/20 bg-gradient-to-br from-primary/10 to-accent/10 p-4 transition-all duration-300 hover:scale-110 hover:shadow-lg sm:h-28 sm:w-32 md:h-32 md:w-36"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={60}
                className="h-auto w-full object-contain  opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                priority={client.id <= 4}
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-0">
                <span className="text-center text-lg font-bold text-primary md:text-xl">
                  {client.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center md:mt-20">
          <p className="text-sm text-muted-foreground sm:text-base">
            And 30+ more companies trust us with their electrical projects
          </p>
        </div>
      </div>
    </section>
  );
}
