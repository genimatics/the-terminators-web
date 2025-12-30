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
    title: 'National Tax Number Certificate',
    image: '/assets/terminator-images/registration/certificates/cef1.png',
    issuer: 'GOP',
    description: 'Comprehensive electrical safety standards and protocols',
  },
  {
    id: 2,
    title: 'FBR Registraion Certificate',
    image: '/assets/terminator-images/registration/certificates/cef2.png',
    issuer: 'FBR',
    description: 'Advanced electrical installation and maintenance expertise',
  },
  {
    id: 3,
    title: 'License From Pakistan Engineering Councle',
    image: '/assets/terminator-images/registration/certificates/cef3.png',
    issuer: 'Technical Institute',
    description: 'Expert-level wiring design and implementation',
  },
  // {
  //   id: 4,
  //   title: 'Quality Management Certificate',
  //   image: '/assets/terminator-images/registration/certificates/cef4.png',
  //   issuer: 'Green Energy Academy',
  //   description: 'Professional solar photovoltaic systems installation',
  // },
  {
    id: 4,
    title: 'KCCI Membership Certificate',
    image: '/assets/terminator-images/registration/certificates/cef4.png',
    issuer: 'KCCI',
    description: 'Efficient energy management and optimization techniques',
  },
  {
    id: 5,
    title: 'Bank Account Maintenance Certificate',
    image: '/assets/terminator-images/registration/certificates/cef5.png',
    issuer: 'faysalbank',
    description: 'Licensed for large-scale commercial projects',
  },
  {
    id: 6,
    title: 'Quality Management Certificate',
    image: '/assets/terminator-images/registration/certificates/cef6.png',
    issuer: 'Q-CERT',
    description: 'Sustainable and renewable energy system expertise',
  },
  {
    id: 7,
    title: 'Quality Management Certificate',
    image: '/assets/terminator-images/registration/certificates/cef7.png',
    issuer: 'Q-CERT',
    description: 'Fire protection and safety code compliance',
  },
  {
    id: 8,
    title: 'Quality Management Certificate',
    image: '/assets/terminator-images/registration/certificates/cef8.png',
    issuer: 'Q-CERT',
    description: 'IoT and smart home electrical systems integration',
  },

];
