import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Contact from '@/components/contact/contact';
import QuoteSection from '@/components/sections/get-quote-section';

type IContactProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IContactProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Contact',
  });

  return {
    title: t('meta_title') || 'Contact Us',
    description: t('meta_description') || 'Get in touch with us',
  };
}

export default async function ContactPage(props: IContactProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <Contact />
      <QuoteSection />
    </>
  );
};
