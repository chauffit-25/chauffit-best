import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from '@/components/Icons';

export default function TermsOfService() {
  return (
    <>
      <NextSeo
        title="Terms of Service"
        description="Terms and conditions for using Chauffit's driver on demand service. Read our service agreement before using the app."
        canonical="https://www.chauffit.in/terms"
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
            <span className="text-surface-300">Terms of Service</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="heading-lg text-white mb-8">Terms of Service</h1>
            <p className="text-surface-400 mb-8">Last updated: February 2026</p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-surface-300 leading-relaxed">
                  By accessing or using Chauffit's services, you agree to be bound by these terms. If you do 
                  not agree to these terms, you may not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Service Description</h2>
                <p className="text-surface-300 leading-relaxed">
                  Chauffit is a driver on demand platform that connects users with professional drivers who 
                  operate the user's personal vehicle. We are not a transportation company and do not provide 
                  transportation services directly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
                <p className="text-surface-300 leading-relaxed">
                  Users must provide accurate information, maintain valid vehicle documentation, ensure their 
                  vehicle is safe and roadworthy, and treat drivers with respect. Users are responsible for 
                  any violations of traffic laws during the ride.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Pricing and Payment</h2>
                <p className="text-surface-300 leading-relaxed">
                  Pricing is displayed in the app before booking. Users agree to pay the fare shown plus any 
                  applicable tolls or parking charges. Payment is processed through the app using the selected 
                  payment method.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Cancellation Policy</h2>
                <p className="text-surface-300 leading-relaxed">
                  Users may cancel a booking before driver arrival. Cancellation fees may apply if the driver 
                  has already started traveling to the pickup location. Repeated cancellations may result in 
                  account restrictions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
                <p className="text-surface-300 leading-relaxed">
                  Chauffit's liability is limited to the fare paid for the specific ride. We are not liable 
                  for indirect, incidental, or consequential damages arising from the use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Contact</h2>
                <p className="text-surface-300 leading-relaxed">
                  For questions about these terms, contact us at{' '}
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