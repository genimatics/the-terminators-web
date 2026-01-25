import HeroSection from '@/common/hero-section';
import OurPortfolio from '@/components/portfolio/our-portfolio';
import { IMAGES } from '@/constants/images';

export default async function About() {
  return (
    <>
      <HeroSection
        title="Our Portfolio"
        subtitle="Showcase of Our Work"
        background={IMAGES.HERO.SLIDE1}
      />
      <OurPortfolio />

    </>
  );
};
