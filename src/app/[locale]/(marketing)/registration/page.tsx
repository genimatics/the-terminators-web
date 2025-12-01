import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import RegistrationCertificates from '@/components/registration/reg-lisence';
import RegistrationHero from '@/components/registration/registration-hero';

type IResgistrationProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IResgistrationProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Registration',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: IResgistrationProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <RegistrationHero />
      <RegistrationCertificates />
    </>
  );
};
