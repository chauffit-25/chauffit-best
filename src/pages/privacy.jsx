import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from '@/components/Icons';

export default function PrivacyPolicy() {
  return (
    <>
      <NextSeo
        title="Privacy Policy"
        description="Chauffit's privacy policy explains how we collect, use, and protect your personal information when you use our driver on demand service."
        canonical="https://www.chauffit.in/privacy"
      />

      <div className="min-h-screen pt-28 pb-20">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-surface-400 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-surface-300">Privacy Policy</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="heading-lg text-white mb-8">Privacy Policy</h1>
            <p className="text-surface-400 mb-8">Last updated: February 2026</p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                <p className="text-surface-300 leading-relaxed">
                  We collect information you provide directly, including your name, phone number, email address, 
                  and location data when you use our services. We also collect information about your rides, 
                  payment information, and device information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-surface-300 leading-relaxed">
                  We use your information to provide and improve our services, process payments, communicate 
                  with you, ensure safety and security, and comply with legal obligations. Your location data 
                  is used to connect you with nearby drivers and provide accurate ETAs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
                <p className="text-surface-300 leading-relaxed">
                  We share your information with drivers to facilitate rides, with payment processors to 
                  complete transactions, and with law enforcement when required by law. We do not sell your 
                  personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                <p className="text-surface-300 leading-relaxed">
                  We implement industry-standard security measures to protect your data, including encryption, 
                  secure servers, and access controls. However, no method of transmission over the internet is 
                  100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
                <p className="text-surface-300 leading-relaxed">
                  You have the right to access, update, or delete your personal information. You can manage 
                  your data through the app settings or by contacting us at chauffit@gmail.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
                <p className="text-surface-300 leading-relaxed">
                  If you have questions about this privacy policy, please contact us at{' '}
                  <a href="mailto:chauffit@gmail.com" className="text-burgundy-400 hover:text-burgundy-300">
                    chauffit@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}