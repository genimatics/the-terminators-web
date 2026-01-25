// import QuoteSection from '@/components/sections/get-quote-section';
import GetStarted from '@/components/sections/get-started';
import Hero from '@/components/sections/hero';
// import NatureBusiness from '@/components/sections/Nature-bussines';
import SectionOne from '@/components/sections/section-1';



export default async function Index() {

  return (
    <>
      <Hero />
      <GetStarted />
      <SectionOne />
      {/* <NatureBusiness /> */}
      {/* <SectionTwo />
      <ValuedCustomers /> */}
      {/* <QuoteSection /> */}
    </>
  );
};
