import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PrivacyPolicy from '@/components/privacy/privacy-policy';

type IPrivacyPolicyProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IPrivacyPolicyProps): Promise<Metadata> {
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

export default async function About(props: IPrivacyPolicyProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <PrivacyPolicy />
    </>
  );
};
