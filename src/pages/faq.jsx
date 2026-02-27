import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from '@/components/Icons';
import { FAQ_ITEMS } from '@/lib/constants';
import { createFAQSchema, createBreadcrumbSchema } from '@/lib/schema';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-burgundy-300 transition-colors">
          {item.question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-800/60 flex items-center justify-center text-surface-400 group-hover:text-white group-hover:bg-surface-700/60 transition-all">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-surface-400 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = createFAQSchema(FAQ_ITEMS);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://www.chauffit.in' },
    { name: 'FAQ', url: 'https://www.chauffit.in/faq' },
  ]);

  return (
    <>
      <NextSeo
        title="Frequently Asked Questions | Chauffit"
        description="Find answers to common questions about Chauffit's driver on demand service. Learn about pricing, booking, safety, and more."
        canonical="https://www.chauffit.in/faq"
        openGraph={{
          url: 'https://www.chauffit.in/faq',
          title: 'FAQ - Frequently Asked Questions | Chauffit',
          description: 'Find answers to common questions about Chauffit driver on demand service.',
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <div className="min-h-screen pt-24 pb-16">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-burgundy-400 uppercase tracking-wider mb-4 block">
              FAQ
            </span>
            <h1 className="heading-lg text-white mb-6">
              Frequently Asked{' '}
              <span className="gradient-text-burgundy">Questions</span>
            </h1>
            <p className="body-lg">
              Have questions about Chauffit? Find answers to the most common queries below.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-panel p-6 md:p-8">
              {FAQ_ITEMS.map((item, index) => (
                <FAQItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-surface-400 mb-4">Still have questions?</p>
            <a
              href="mailto:chauffit@gmail.com"
              className="btn-secondary inline-flex"
            >
              Contact Us
            </a>
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