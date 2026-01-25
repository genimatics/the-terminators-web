import AboutTeam from '@/components/about/about-team';
import AboutUs from '@/components/about/about-us';
import CorporateInformation from '@/components/about/CorporateInformation';
import OurExpertise from '@/components/about/our-expertise-section';

export default async function About() {
  return (
    <>
      <AboutUs />
      <CorporateInformation />
      <OurExpertise />
      <AboutTeam />
    </>
  );
};
