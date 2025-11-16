import type { Metadata } from 'next';
import { Search } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { routing } from '@/libs/I18nRouting';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFoundPage() {
  const homeUrl = '/';

  return (
    <html lang={routing.defaultLocale}>
      <body>

        <section className="flex min-h-screen w-full flex-col items-center justify-center bg-black px-4 text-center text-white">
          <h1 className="text-[100px] leading-none font-extrabold md:text-[140px]">
            404
          </h1>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            Oops! Page Not Found
          </h2>
          <p className="mt-2 text-gray-400">
            The page you were looking for couldn't be found
          </p>

          <div className="mt-8 flex w-full max-w-md overflow-hidden border border-white bg-white">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 text-black outline-none"
            />
            <button
              type="button"
              className="bg-primary flex items-center justify-center px-5 text-black "
            >
              <Search size={20} />
            </button>
          </div>

          <div className="mt-8">
            <Link href={homeUrl}>
              <Button className="bg-primary px-8 py-3 text-base font-semibold text-black ">
                Back to Home
              </Button>
            </Link>
          </div>
        </section>
      </body>
    </html>
  );
}
