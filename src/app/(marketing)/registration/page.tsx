import HeroSection from '@/common/hero-section';
import RegistrationCertificates from '@/components/registration/reg-lisence';
import { IMAGES } from '@/constants/images';

export default async function About() {
  return (
    <>
      <HeroSection
        title="Registration"
        subtitle="Our Achievements & Credentials"
        background={IMAGES.HERO.SLIDE1}
      />
      <RegistrationCertificates />
    </>
  );
};
