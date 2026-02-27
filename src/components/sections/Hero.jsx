import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup';
import FloatingCards from '../FloatingCards';
import { AppleIcon, PlayStoreIcon, ArrowRight } from '../Icons';
import { APP_LINKS } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface-950 via-surface-950/95 to-surface-950" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-burgundy-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-deer-900/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy-900/20 border border-burgundy-700/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-burgundy-500 animate-pulse" />
              <span className="text-sm text-burgundy-300 font-medium">Now Available in Delhi NCR</span>
            </motion.div>

            <h1 className="heading-xl text-white mb-6">
              Professional{' '}
              <span className="gradient-text-burgundy">Driver</span>
              <br />
              <span className="text-surface-300">On Demand</span>
            </h1>

            <p className="body-lg max-w-xl mx-auto lg:mx-0 mb-8">
              Hire verified professional drivers to operate{' '}
              <span className="text-white font-medium">your own vehicle</span>. 
              Starting at just <span className="text-deer-400 font-semibold">₹99</span> for one-way trips. 
              Not a taxi. Your car. Your driver.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href={APP_LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <PlayStoreIcon className="w-5 h-5" />
                Download for Android
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <a
                href={APP_LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                <AppleIcon className="w-5 h-5" />
                Download for iOS
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-surface-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                One-way from ₹99
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-deer-500" />
                Hourly from ₹199
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <PhoneMockup />
              <FloatingCards />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent pointer-events-none" />
    </section>
  );
}