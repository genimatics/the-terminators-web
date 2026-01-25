import HeroSection from '@/common/hero-section';
import OurGallery from '@/components/gallery/our-gallery';
import { IMAGES } from '@/constants/images';




export default async function About() {
  return (
    <>
      <HeroSection
        title="Our Gallery"
        subtitle="Glimpses of Our Projects"
        background={IMAGES.HERO.SLIDE1}
      />
      <OurGallery />
    </>
  );
};
