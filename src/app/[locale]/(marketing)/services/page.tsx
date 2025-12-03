import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/common/hero-section';
// import ElectricalServices from '@/components/services/electrical-services';
import OurServices from '@/components/services/our-services';
import ServicesPromo from '@/components/services/services-promo';
import { IMAGES } from '@/constants/images';

type IServicesProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IServicesProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Services',
  });

  return {
    title: t('meta_title') || 'Our Services',
    description: t('meta_description') || 'Professional electrical services',
  };
}

export default async function ServicesPage(props: IServicesProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="See Our  Services"
        background={IMAGES.HERO.SLIDE1}
      />
      {/* <ElectricalServices /> */}
      <ServicesPromo />
      <OurServices />
    </>
  );
};
