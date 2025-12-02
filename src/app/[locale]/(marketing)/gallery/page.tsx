import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import GalleryHero from '@/components/galley/gallery-hero';
import OurGallery from '@/components/galley/our-gallery';

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
      <GalleryHero />
      <OurGallery />
    </>
  );
};
