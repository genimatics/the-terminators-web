import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/constants/images';
import { getAllServices, getServiceBySlug } from '@/types/services';

// Props type
type ServicePageProps = {
  params: {
    slug: string;
  };
};

// Metadata
export function generateMetadata({ params }: ServicePageProps): Metadata {
  const { slug } = params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} | The Terminators`,
    description: service.details.description,
  };
}

// Pre-render all service pages
export function generateStaticParams() {
  const services = getAllServices();
  return services.map(service => ({
    slug: service.slug,
  }));
}

// Page component
export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  // console.log({params});

  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-900">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section
        className="relative py-20 text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${IMAGES.HERO.SLIDE1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{service.title}</h1>
            <p className="text-xl opacity-90">{service.details.description}</p>
            <div className="mt-6">
              <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                {service.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service details */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Service Details</h2>

              <div className="mb-10">
                <h3 className="mb-4 border-b pb-2 text-xl font-semibold text-gray-800">
                  Activities & Services
                </h3>
                <ul className="space-y-3">
                  {service.details.activities.map((activity, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="mt-1 mr-3 h-5 w-5 flex-shrink-0 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 border-b pb-2 text-xl font-semibold text-gray-800">
                  Details
                </h3>
                <p className="text-justify leading-relaxed text-gray-700">{service.details.overview}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Other Services</h3>
              <div className="space-y-4">
                {getAllServices()
                  .filter(s => s.id !== service.id)
                  .slice(0, 3)
                  .map(related => (
                    <Link
                      key={related.id}
                      href={`/services/${related.slug}`}
                      className="group flex items-center rounded-lg p-3 transition-colors hover:bg-gray-50"
                    >
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gray-200">
                        <Image
                          src={related.icon}
                          alt={related.title}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-primary">{related.title}</h4>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link
                href="/services"
                className="mt-4 block text-center font-medium text-primary hover:underline"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
