import type { Metadata } from 'next';
import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import Footer from '@/components/sections/footer';
import Navbar from '@/components/sections/navbar';
import ScrollToTop from '@/components/ui/scroll-to-top';
import '@/styles/global.css';

export const metadata: Metadata = {
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    { rel: 'icon', url: '/favicon.ico' },
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />

        <title>The Terminators | Electrical, LT/HT Panels & Power Solutions in Pakistan</title>

        <meta
          name="description"
          content="The Terminators provides reliable electrical services, LT & HT panels, cable laying, termination, and industrial power solutions across Pakistan."
        />

        <meta
          name="keywords"
          content="The Terminators, electrical services Pakistan, LT panels, HT panels, cable laying, cable termination, power solutions, industrial electrical services"
        />

        <meta name="author" content="The Terminators" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="The Terminators – Electrical & Power Solutions" />
        <meta
          property="og:description"
          content="Experts in LT/HT panels, cable laying & termination, and industrial electrical solutions across Pakistan."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theterminators.biz.pk" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Terminators – Electrical Solutions" />
        <meta
          name="twitter:description"
          content="Professional electrical and power solutions for industrial and commercial projects."
        />
        <meta name="twitter:image" content="https://theterminators.biz.pk/og-image.png" />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <PostHogProvider>
          <Navbar />
          <main>{children}</main>
          <ScrollToTop />
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
