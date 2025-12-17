import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
// import QuoteSection from '@/components/sections/get-quote-section';
import GetStarted from '@/components/sections/get-started';
import Hero from '@/components/sections/hero';
import SectionOne from '@/components/sections/section-1';
import SectionTwo from '@/components/sections/section-2';
import ValuedCustomers from '@/components/sections/valued-customer';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <GetStarted />
      <SectionOne />
      <SectionTwo />
      <ValuedCustomers />
      {/* <QuoteSection /> */}
    </>
  );
};
