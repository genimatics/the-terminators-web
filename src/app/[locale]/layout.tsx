import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import { DemoBadge } from '@/components/DemoBadge';
import Footer from '@/components/sections/footer';
import QuoteSection from '@/components/sections/get-quote-section';
import GetStarted from '@/components/sections/get-started';
import Hero from '@/components/sections/hero';
import Navbar from '@/components/sections/navbar';
import SectionOne from '@/components/sections/section-1';
import SectionTwo from '@/components/sections/section-2';
import ValuedCustomers from '@/components/sections/valued-customer';

import { routing } from '@/libs/I18nRouting';
import '@/styles/global.css';

export const metadata: Metadata = {
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    { rel: 'icon', url: '/favicon.ico' },
  ],
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <PostHogProvider>
            <Navbar />
            <Hero />
            <GetStarted />
            <SectionOne />
            <SectionTwo />
            <ValuedCustomers />
            <QuoteSection />
            <Footer />

            {/* Children content (for nested pages) */}
            <main>{children}</main>

            {/* Demo Badge for analytics/testing */}
            <DemoBadge />
          </PostHogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
