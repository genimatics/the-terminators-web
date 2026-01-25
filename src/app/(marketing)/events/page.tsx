import HeroSection from '@/common/hero-section';
import OurEvents from '@/components/events/our-events';
import { IMAGES } from '@/constants/images';


export default async function Events() {

  return (
    <>
      <HeroSection
        title="Our Events"
        subtitle="Collection of Events & Activities"
        background={IMAGES.HERO.SLIDE1}
      />
      <OurEvents />
    </>
  );
}
