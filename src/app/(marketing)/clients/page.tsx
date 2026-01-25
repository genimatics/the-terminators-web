import HeroSection from '@/common/hero-section';
import ClientLogo from '@/components/clients/client-logo';
import { IMAGES } from '@/constants/images';

export default async function About() {
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
