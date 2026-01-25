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
