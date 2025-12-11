'use client';

import { ChevronRight, Facebook, Linkedin, Phone } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IMAGES } from '@/constants/images';
import servicesData from '@/constants/services.json';

import { TEXTS } from '@/constants/text';

type FooterListItem = string | { url: string; type: 'link' | 'self' | 'email'; text: string };

type FooterListProps = {
  title: string;
  items: readonly FooterListItem[];
  type?: 'info' | 'contacts';
};

function FooterListBlock({ title, items, type = 'contacts' }: FooterListProps) {
  const router = useRouter();

  const serviceSlugMap: Record<string, string> = {};
  servicesData.services.forEach((service) => {
    const serviceName = service.title.toLowerCase().trim();
    serviceSlugMap[serviceName] = service.slug;
  });

  const getServiceSlug = (serviceName: string): string => {
    const normalizedService = serviceName.toLowerCase().trim();

    if (serviceSlugMap[normalizedService]) {
      return serviceSlugMap[normalizedService];
    }

    if (normalizedService.includes('power generation')) {
      return 'power-generation';
    }
    if (normalizedService.includes('earthing') || normalizedService.includes('lps')) {
      return 'earthing-lps-safeties';
    }
    if (normalizedService.includes('industrial electrification')) {
      return 'industrial-electrification';
    }
    if (normalizedService.includes('cable services') || normalizedService.includes('cable')) {
      return 'cable-laying-jointing-termination';
    }
    if (normalizedService.includes('maintenance')) {
      return 'maintenance-services';
    }

    return 'services';
  };

  const handleServiceClick = (serviceName: string) => {
    const slug = getServiceSlug(serviceName);
    router.push(`/services/${slug}`);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
      <ul className="space-y-2 text-base text-gray-300 sm:space-y-3 sm:text-lg">
        {items.map((item, index) => {
          if (typeof item === 'string') {
            if (type === 'info') {
              return (
                <li key={index} className="flex items-center gap-2 sm:gap-3">
                  <ChevronRight className="h-4 w-4 flex-shrink-0 text-primary sm:h-5 sm:w-5" />
                  <button
                    onClick={() => handleServiceClick(item)}
                    className="cursor-pointer text-left transition hover:text-primary "
                  >
                    {item}
                  </button>
                </li>
              );
            }

            return (
              <li key={index} className="flex items-center gap-2 transition hover:text-primary sm:gap-3">
                <ChevronRight className="h-4 w-4 flex-shrink-0 text-primary sm:h-5 sm:w-5" />
                <span>{item}</span>
              </li>
            );
          }

          return (
            <li key={index} className="flex items-center gap-2 transition hover:text-primary sm:gap-3">
              <ChevronRight className="h-4 w-4 flex-shrink-0 text-primary sm:h-5 sm:w-5" />
              <a
                href={item.type === 'email' ? `mailto:${item.url}` : item.url}
                target={item.type === 'link' ? '_blank' : '_self'}
                rel={item.type === 'link' ? 'noopener noreferrer' : ''}
                className="transition"
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { FOOTER } = TEXTS;

  return (
    <footer
      className="bg-black text-white"
      style={{
        backgroundImage: `url(${IMAGES.FOOTER.FOOTER_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full px-4 pt-2 sm:px-6 sm:pt-4 md:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto w-full max-w-full space-y-10 sm:space-y-14">

          <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 lg:flex-row">
            <div className="w-full text-center lg:w-auto lg:text-left">
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                {FOOTER.HEADING}
                <span className="ml-2 inline-block bg-primary p-2 text-white">
                  {FOOTER.HIGHLIGHT}
                </span>
              </h2>
              <p className="mt-3 text-base text-gray-300 sm:text-lg">
                {FOOTER.DESCRIPTION}
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl font-semibold sm:text-2xl">{FOOTER.AGENCY.TITLE}</h3>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                {FOOTER.AGENCY.DESCRIPTION}
              </p>

              <div className="mt-5 flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 rounded-full bg-primary p-3 sm:p-4">
                  <Phone className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 sm:text-base">{FOOTER.AGENCY.CALL_US}</p>
                  <a
                    href={`tel:${FOOTER.AGENCY.PHONE.replace(/\D/g, '')}`}
                    className="text-base font-semibold text-white transition hover:text-primary sm:text-lg"
                  >
                    {FOOTER.AGENCY.PHONE}
                  </a>
                </div>
              </div>
            </div>

            <FooterListBlock
              title={FOOTER.INFO.TITLE}
              items={FOOTER.INFO.ITEMS}
              type="info"
            />

            <FooterListBlock
              title={FOOTER.CONTACTS.TITLE}
              items={FOOTER.CONTACTS.ITEMS}
              type="contacts"
            />

          </div>

          <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-800 py-2 sm:py-4 md:flex-row md:gap-8">

            <div className="w-full md:w-auto">
              <ul className="flex flex-wrap items-center justify-center gap-4 text-center text-base text-gray-300 sm:gap-6 sm:text-lg md:gap-8">
                {FOOTER.FOOTER_LINKS.map(link => (
                  <li key={link.text}>
                    <Link
                      href={link.path}
                      className="transition hover:text-primary"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center gap-4 sm:gap-6">
              <Link
                href="https://www.facebook.com/theterminators.pak/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition hover:text-primary"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/theterminator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition hover:text-primary"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
