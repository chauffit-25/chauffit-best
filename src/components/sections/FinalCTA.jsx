import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AppleIcon, PlayStoreIcon, ArrowRight } from '../Icons';
import { APP_LINKS } from '@/lib/constants';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-burgundy-950/20 to-surface-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-burgundy-800/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-max mx-auto" ref={ref}>
        <motion.div
          className="glass-panel p-10 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-burgundy-500/50 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy-900/30 border border-burgundy-700/40 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-burgundy-300 font-medium">Available 24/7 in Delhi NCR</span>
            </span>
          </motion.div>

          <motion.h2
            className="heading-lg text-white mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to Experience{' '}
            <span className="gradient-text-burgundy">Stress-Free</span>{' '}
            Travel?
          </motion.h2>

          <motion.p
            className="body-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Download the Chauffit app now and book your first professional driver. 
            One-way trips from just ₹99. Your car. Your driver. Your way.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href={APP_LINKS.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-lg px-8 py-4"
            >
              <PlayStoreIcon className="w-6 h-6" />
              Download for Android
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
            <a
              href={APP_LINKS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto text-lg px-8 py-4"
            >
              <AppleIcon className="w-6 h-6" />
              Download for iOS
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-surface-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free to download
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No subscription fees
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Pay per ride
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-burgundy-500/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}