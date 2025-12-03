import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/common/hero-section';
import ClientLogo from '@/components/clients/client-logo';
import { IMAGES } from '@/constants/images';

type IClientsProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IClientsProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Clients',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: IClientsProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection
        title="Our Clients"
        subtitle="Our Valued Clients"
        background={IMAGES.HERO.SLIDE1}
      />
      <ClientLogo />
    </>
  );
};
