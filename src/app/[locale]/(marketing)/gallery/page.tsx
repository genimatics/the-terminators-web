import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/common/hero-section';
import OurGallery from '@/components/gallery/our-gallery';
import { IMAGES } from '@/constants/images';

type IGalleryProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IGalleryProps): Promise<Metadata> {
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

export default async function About(props: IGalleryProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection
        title="Our Gallery"
        subtitle="Glimpses of Our Projects"
        background={IMAGES.HERO.SLIDE1}
      />
      <OurGallery />
    </>
  );
};
