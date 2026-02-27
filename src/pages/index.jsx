import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { HeroSection } from '@/components/Hero';
import {
  AboutSection,
  HowToBookSection,
  ScenariosSection,
  SafetySection,
  HourlySection,
  CTASection,
} from '@/components/sections';
import { localBusinessSchema, createFAQSchema } from '@/lib/schema';
import { FAQ_ITEMS } from '@/lib/constants';

export default function Home() {
  const faqSchema = createFAQSchema(FAQ_ITEMS);

  return (
    <>
      <NextSeo
        title="Chauffit - Professional Driver On Demand in Delhi NCR | Starting Rs.99"
        description="Hire verified professional drivers to operate your own vehicle. One-way trips from Rs.99, hourly packages from Rs.199. Not a taxi. Your car. Your driver. Download the app now!"
        canonical="https://www.chauffit.in"
        openGraph={{
          url: 'https://www.chauffit.in',
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
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <HeroSection />
      <AboutSection />
      <HowToBookSection />
      <ScenariosSection />
      <SafetySection />
      <HourlySection />
      <CTASection />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}