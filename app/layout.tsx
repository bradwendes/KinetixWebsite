import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, DM_Sans } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const bebas = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://teamkinetix.co.uk'),
  title: { default: 'Team Kinetix | Professional Parkour Performance UK', template: '%s | Team Kinetix' },
  description: 'Professional parkour, freerunning and acrobatic performance, event support and movement consultancy for events and productions across the UK.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Team Kinetix — Performance Without Limits', description: 'Professional movement performance, event support and consultancy for live events and productions.', type: 'website', url: '/' },
  twitter: { card: 'summary', title: 'Team Kinetix — Performance Without Limits', description: 'Professional movement performance, event support and consultancy.' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#100d14',
  colorScheme: 'dark light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${dmSans.variable} ${bebas.variable} antialiased`}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': ['Organization','ProfessionalService'], name: 'Team Kinetix', url: 'https://teamkinetix.co.uk', email: 'info@teamkinetix.co.uk', telephone: '+44 1376 337315', areaServed: 'United Kingdom', description: 'Professional parkour, freerunning and acrobatic performance, event support and movement consultancy.' }).replace(/</g, '\\u003c') }} />
      </body>
    </html>
  );
}
