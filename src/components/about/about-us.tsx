import React from 'react';
import { IMAGES } from '@/constants/images';

const ABOUT_DESCRIPTION = `
M/s THE TERMINATORS is a leading engineering and contracting firm, serving its valued clients for over three decades in the fields of power generation, electrical distribution, and energy management. Established on the principles of technical excellence, innovation, and client trust, the company has built a reputation for delivering world-class engineering solutions across industries.

With extensive expertise in substations, powerhouses, and industrial units, THE TERMINATORS offers end-to-end solutions ranging from design, installation, and commissioning to testing, maintenance, and safety assurance. Our services cover the entire electrical infrastructure including MV/LV panels, generators, switchgear, cabling and terminations, earthing systems, illumination, lightning protection, and customized safety solutions.

Built on a legacy of trust, quality, and innovation, THE TERMINATORS continues to empower industries with reliable solutions that ensure long-term operational efficiency, safety, and sustainability.
`;

const AboutUs: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{ backgroundImage: `url('${IMAGES.ABOUT.BG1}')` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div
        className="
          /* navbar offset */
          relative
          z-10  mx-auto max-w-5xl px-4 pt-28
          pb-16
          sm:px-6 sm:pt-32 sm:pb-20
          lg:pt-36 lg:pb-24
        "
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          About Us
        </h1>

        <p className="text-justify text-sm leading-relaxed text-white sm:text-base lg:text-lg">
          {ABOUT_DESCRIPTION}
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
