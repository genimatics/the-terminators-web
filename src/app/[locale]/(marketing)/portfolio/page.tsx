import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/common/hero-section';
import OurPortfolio from '@/components/portfolio/our-portfolio';
import { IMAGES } from '@/constants/images';

type IPortfolioProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IPortfolioProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Gallery',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: IPortfolioProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection
        title="Our Portfolio"
        subtitle="Showcase of Our Work"
        background={IMAGES.HERO.SLIDE1}
      />
      <OurPortfolio />

    </>
  );
};
