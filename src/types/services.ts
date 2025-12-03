import servicesData from '@/constants/services.json';

export type Service = {
  id: number;
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  category: string;
  details: {
    description: string;
    activities: string[];
    features: string[];
  };
};

export type ServicesData = {
  services: Service[];
  categories: string[];
};

export function getAllServices(): Service[] {
  return servicesData.services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.services.find(service => service.slug === slug);
}

export function getFeaturedServices(limit: number = 6): Service[] {
  return servicesData.services.slice(0, limit);
}

export function getServicesByCategory(category: string): Service[] {
  return servicesData.services.filter(service => service.category === category);
}
