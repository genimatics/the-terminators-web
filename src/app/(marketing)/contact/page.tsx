import HeroSection from '@/common/hero-section';
import Contact from '@/components/contact/contact';
import { IMAGES } from '@/constants/images';

export default async function ContactPage() {

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Contact us for any inquiries"
        background={IMAGES.HERO.SLIDE1}
      />
      <Contact />
    </>
  );
};
