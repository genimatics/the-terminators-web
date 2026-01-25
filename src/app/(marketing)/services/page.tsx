import type { Metadata } from 'next';
import HeroSection from '@/common/hero-section';
import OurServices from '@/components/services/our-services';
import { IMAGES } from '@/constants/images';

export function generateMetadata(): Metadata {
  return {
    title: 'Our Services',
    description: 'Professional electrical services',
  };
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Over the past 2 decades, the firm has excelled in following"
        background={IMAGES.HERO.SLIDE1}
      />
      <OurServices />
    </>
  );
}
