import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/common/hero-section';
import OurEvents from '@/components/events/our-events';
import { IMAGES } from '@/constants/images';

type IEventsProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IEventsProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Events',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Events(props: IEventsProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection
        title="Our Events"
        subtitle="Collection of Events & Activities"
        background={IMAGES.HERO.SLIDE1}
      />
      <OurEvents />
    </>
  );
}
