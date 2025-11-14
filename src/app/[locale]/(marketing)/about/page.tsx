import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import AboutFormSection from '@/components/about/about-contact-form';
import AboutHero from '@/components/about/about-hero';
import AboutTeam from '@/components/about/about-team';
import AboutContactInfoSection from '@/components/about/contact-info-section';
import OurExpertise from '@/components/about/our-expertise-section';
import QuoteSection from '@/components/sections/get-quote-section';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IAboutProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <AboutHero />
      <OurExpertise />
      <AboutTeam />
      <AboutContactInfoSection />
      <AboutFormSection />
      <QuoteSection />
    </>
  );
};
