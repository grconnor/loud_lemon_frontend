import Script from 'next/script';
import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: {
    default: 'LoudLemon Studio | Modern Web & Brand Design',
    template: '%s | LoudLemon Studio',
  },
  description:
    'Professional web design and brand development services. We create modern, responsive websites and compelling brand identities for businesses.',
  keywords: [
    'web design',
    'brand development',
    'web development',
    'responsive design',
    'digital agency',
  ],
  authors: [{ name: 'LoudLemon Studio' }],
  openGraph: {
    title: 'LoudLemon Studio | Modern Web & Brand Design',
    description:
      'Professional web design and brand development services. We create modern, responsive websites and compelling brand identities for businesses.',
    url: 'https://loudlemonstudio.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="main-content">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <Script
          type="text/javascript"
          src="https://embed.tawk.to/698d8903b9fcfa1c3266254d/1jh8dudke"
          async
        />
      </body>
    </html>
  );
}
