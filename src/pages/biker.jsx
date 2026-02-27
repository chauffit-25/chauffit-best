import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from '@/components/Icons';
import { createJobPostingSchema, createBreadcrumbSchema } from '@/lib/schema';
import { APP_LINKS } from '@/lib/constants';

const benefits = [
  'Earn up to ₹25,000+ per month',
  'Flexible working hours',
  'Weekly payouts to your bank',
  'Use your own two-wheeler',
  'Incentives on high deliveries',
  'Training and support provided',
];

const requirements = [
  'Valid two-wheeler license',
  'Own bike/scooter with valid RC',
  'Age between 18-45 years',
  'Smartphone with internet',
  'Knowledge of local areas',
  'Aadhar card for verification',
];

const hindiContent = {
  title: 'चौफ़िट के साथ बाइकर बनें',
  subtitle: '₹25,000+ प्रति माह तक कमाएं',
  description: 'चौफ़िट डिलीवरी टीम में शामिल हों और लचीले घंटों के साथ अच्छी कमाई करें। अपनी बाइक का उपयोग करें और अपने क्षेत्र में डिलीवरी करें।',
  benefits: [
    '₹25,000+ प्रति माह तक कमाएं',
    'लचीले कार्य घंटे',
    'साप्ताहिक बैंक भुगतान',
    'अपने दोपहिया वाहन का उपयोग करें',
    'उच्च डिलीवरी पर प्रोत्साहन',
    'प्रशिक्षण और सहायता प्रदान',
  ],
  requirements: [
    'वैध दोपहिया लाइसेंस',
    'वैध RC के साथ खुद की बाइक/स्कूटर',
    '18-45 वर्ष की आयु',
    'इंटरनेट के साथ स्मार्टफोन',
    'स्थानीय क्षेत्रों का ज्ञान',
    'सत्यापन के लिए आधार कार्ड',
  ],
  cta: 'अभी आवेदन करें',
  disclaimer: '* कमाई स्थान, कार्य घंटों और डिलीवरी संख्या के आधार पर भिन्न हो सकती है।',
};

export default function BikerPage() {
  const [isHindi, setIsHindi] = useState(false);

  const jobPostingSchema = createJobPostingSchema('biker');
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://www.chauffit.in' },
    { name: 'Become a Biker', url: 'https://www.chauffit.in/biker' },
  ]);

  return (
    <>
      <NextSeo
        title="Become a Biker Partner | Earn ₹25,000+/Month | Chauffit"
        description="Join Chauffit as a biker partner and earn up to ₹25,000 per month. Flexible hours, weekly payouts, use your own bike. Apply now!"
        canonical="https://www.chauffit.in/biker"
        openGraph={{
          url: 'https://www.chauffit.in/biker',
          title: 'Become a Biker Partner - Earn ₹25,000+/Month | Chauffit',
          description: 'Join Chauffit as a biker partner. Flexible hours, great earnings, use your own bike.',
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <div className="min-h-screen pt-24 pb-16">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsHindi(!isHindi)}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-surface-800/60 border border-white/[0.08] text-surface-300 hover:text-white hover:bg-surface-700/60 transition-all"
            >
              {isHindi ? 'English' : 'हिंदी'}
            </button>
          </div>

          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deer-900/30 border border-deer-700/40 mb-6">
              <span className="w-2 h-2 rounded-full bg-deer-500 animate-pulse" />
              <span className="text-sm text-deer-300 font-medium">Now Hiring in Delhi NCR</span>
            </span>

            <h1 className="heading-xl text-white mb-6">
              {isHindi ? hindiContent.title : 'Become a Biker with'}{' '}
              <span className="gradient-text-deer">Chauffit</span>
            </h1>

            <p className="text-2xl sm:text-3xl font-semibold gradient-text-burgundy mb-6">
              {isHindi ? hindiContent.subtitle : 'Earn up to ₹25,000+ per month'}
            </p>

            <p className="body-lg">
              {isHindi 
                ? hindiContent.description 
                : 'Join the Chauffit delivery team and earn great money with flexible hours. Use your own bike and deliver in your area.'}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              className="glass-panel p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold text-white mb-6">
                {isHindi ? 'लाभ' : 'Benefits'}
              </h2>
              <div className="space-y-4">
                {(isHindi ? hindiContent.benefits : benefits).map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-deer-600/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-deer-400" />
                    </div>
                    <span className="text-surface-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-panel p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-white mb-6">
                {isHindi ? 'आवश्यकताएं' : 'Requirements'}
              </h2>
              <div className="space-y-4">
                {(isHindi ? hindiContent.requirements : requirements).map((req, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-burgundy-600/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-burgundy-400" />
                    </div>
                    <span className="text-surface-300">{req}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="glass-panel p-10 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isHindi ? 'आज ही शुरू करें' : 'Start Earning Today'}
            </h2>
            <p className="text-surface-400 mb-8">
              {isHindi 
                ? 'चौफ़िट ऐप डाउनलोड करें और बाइकर के रूप में पंजीकरण करें।'
                : 'Download the Chauffit app and register as a biker partner.'}
            </p>

            <a
              href={APP_LINKS.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-deer inline-flex text-lg px-8 py-4"
            >
              {isHindi ? hindiContent.cta : 'Apply Now'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>

            <p className="mt-6 text-sm text-surface-500">
              {isHindi 
                ? hindiContent.disclaimer
                : '* Earnings may vary based on location, working hours, and number of deliveries.'}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}