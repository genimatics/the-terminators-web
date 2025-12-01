export type Certificate = {
  id: number;
  title: string;
  image: string;
  issuer: string;
  description: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: 'Electrical Safety Certification',
    image: '/assets/terminator-images/registration/certificates/cef1.png',
    issuer: 'NECA',
    description: 'Comprehensive electrical safety standards and protocols',
  },
  {
    id: 2,
    title: 'Master Electrician License',
    image: '/assets/terminator-images/registration/certificates/cef2.png',
    issuer: 'State Board',
    description: 'Advanced electrical installation and maintenance expertise',
  },
  {
    id: 3,
    title: 'Advanced Wiring Certification',
    image: '/assets/terminator-images/registration/certificates/cef3.png',
    issuer: 'Technical Institute',
    description: 'Expert-level wiring design and implementation',
  },
  {
    id: 4,
    title: 'Solar Installation Expert',
    image: '/assets/terminator-images/registration/certificates/cef4.png',
    issuer: 'Green Energy Academy',
    description: 'Professional solar photovoltaic systems installation',
  },
  {
    id: 5,
    title: 'Energy Management Professional',
    image: '/assets/terminator-images/registration/certificates/cef5.png',
    issuer: 'EASA',
    description: 'Efficient energy management and optimization techniques',
  },
  {
    id: 6,
    title: 'Commercial Electrical License',
    image: '/assets/terminator-images/registration/certificates/cef6.png',
    issuer: 'Licensing Board',
    description: 'Licensed for large-scale commercial projects',
  },
  {
    id: 7,
    title: 'Renewable Energy Certification',
    image: '/assets/terminator-images/registration/certificates/cef7.png',
    issuer: 'Green Tech Institute',
    description: 'Sustainable and renewable energy system expertise',
  },
  {
    id: 8,
    title: 'Fire Safety Compliance',
    image: '/assets/terminator-images/registration/certificates/cef8.png',
    issuer: 'Safety Council',
    description: 'Fire protection and safety code compliance',
  },
  {
    id: 9,
    title: 'Smart Home Installation',
    image: '/assets/terminator-images/registration/certificates/cef9.png',
    issuer: 'Smart Tech Certification',
    description: 'IoT and smart home electrical systems integration',
  },

];
