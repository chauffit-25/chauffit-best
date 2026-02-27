import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';

const defaultSEO = {
  titleTemplate: '%s | Chauffit',
  defaultTitle: 'Chauffit - Professional Driver On Demand in Delhi NCR | Starting Rs.99',
  description: 'Hire verified professional drivers to operate your own vehicle. One-way trips from Rs.99, hourly packages from Rs.199. Not a taxi. Your car. Your driver. Download now!',
  canonical: 'https://www.chauffit.in',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.chauffit.in',
    siteName: 'Chauffit',
    title: 'Chauffit - Professional Driver On Demand in Delhi NCR',
    description: 'Hire verified professional drivers to operate your own vehicle. Starting at Rs.99. Safe, reliable, on-demand driver service in Delhi NCR.',
    images: [
      {
        url: 'https://www.chauffit.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chauffit - Driver On Demand',
      },
    ],
  },
  twitter: {
    handle: '@chauffit',
    site: '@chauffit',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'theme-color',
      content: '#0a0a0c',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'msapplication-TileColor',
      content: '#8B1538',
    },
    {
      name: 'application-name',
      content: 'Chauffit',
    },
    {
      property: 'fb:app_id',
      content: '',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
  ],
};

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </>
  );
}