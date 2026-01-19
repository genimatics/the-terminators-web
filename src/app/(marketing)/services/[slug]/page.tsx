import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/constants/images';
import { getAllServices, getServiceBySlug } from '@/types/services';

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | The Terminators`,
    description: service.details.description,
  };
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map(service => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (service === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-900">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative py-20 text-white"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${IMAGES.HERO.SLIDE1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
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
                  {service.details.activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="mt-1 mr-3 h-5 w-5 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className="mb-10">
                <h3 className="mb-4 border-b pb-2 text-xl font-semibold text-gray-800">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {service.details.features.map((feature, index) => (
                    <div key={index} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <div className="flex items-center">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                          <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-800">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              <div>
                <h3 className="mb-4 border-b pb-2 text-xl font-semibold text-gray-800">
                  Details
                </h3>
                <p className="text-justify leading-relaxed text-gray-700">
                  {service.details.overview}
                  {' '}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* <ClientWrapper service={service} /> */}

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Other Services
              </h3>
              <div className="space-y-4">
                {getAllServices()
                  .filter(s => s.id !== service.id)
                  .slice(0, 3)
                  .map(relatedService => (
                    <Link
                      key={relatedService.id}
                      href={`/services/${relatedService.slug}`}
                      className="group flex items-center rounded-lg p-3 transition-colors hover:bg-gray-50"
                    >
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gray-200">
                        <Image
                          src={relatedService.icon}
                          alt={relatedService.title}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-primary">
                          {relatedService.title}
                        </h4>
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

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Quick Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-700">+92 21 34830727</span>
                </div>
                <div className="flex items-center">
                  <svg className="mr-3 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-700">admin@theterminators.biz.pk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
