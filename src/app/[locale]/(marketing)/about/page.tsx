import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/common/hero-section';
// import AboutFormSection from '@/components/about/about-contact-form';
import AboutTeam from '@/components/about/about-team';

import OurExpertise from '@/components/about/our-expertise-section';
import { IMAGES } from '@/constants/images';

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
      <HeroSection
        title="About"
        subtitle="Passion Behind Our Work"
        background={IMAGES.HERO.SLIDE1}
      />

      <OurExpertise />
      <AboutTeam />
      {/* <AboutContactInfoSection />
      <AboutFormSection /> */}

    </>
  );
};
