import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { generateLocalBusinessSchema } from '@/lib/seo';

export const metadata = {
  metadataBase: new URL('https://www.chauffit.in'),
  title: {
    default: 'Chauffit | Professional Drivers On Demand | Starting Rs.99',
    template: '%s | Chauffit',
  },
  description: 'Book verified professional drivers to operate your own vehicle. One-way trips starting at Rs.99, hourly packages from Rs.199. Driver on demand in Delhi NCR.',
  keywords: ['driver on demand', 'hire driver', 'professional driver', 'book driver', 'Delhi NCR driver', 'chauffeur service', 'personal driver'],
  authors: [{ name: 'Chauffit' }],
  creator: 'Chauffit',
  publisher: 'Chauffit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.chauffit.in',
    siteName: 'Chauffit',
    title: 'Chauffit | Professional Drivers On Demand',
    description: 'Book verified professional drivers to operate your own vehicle. Starting at just Rs.99.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chauffit - Driver on Demand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chauffit | Professional Drivers On Demand',
    description: 'Book verified professional drivers to operate your own vehicle. Starting at just Rs.99.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.chauffit.in',
  },
};

export default function RootLayout({ children }) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f0f12" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen bg-surface-950 text-surface-50 antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}