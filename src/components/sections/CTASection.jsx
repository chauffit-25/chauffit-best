'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { APP_LINKS } from '@/lib/constants';
import { AppleIcon, PlayStoreIcon } from '../Icons';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-burgundy-950/20 to-burgundy-950/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full ambient-glow-burgundy opacity-40" />
      </div>

      <div className="container-max mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/20 via-transparent to-deer-900/10 pointer-events-none" />
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy-800/40 border border-burgundy-600/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-burgundy-500 animate-pulse" />
              <span className="text-sm font-medium text-burgundy-300">Available 24/7 in Delhi NCR</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="heading-xl text-white mb-6"
            >
              Ready to Experience{' '}
              <span className="gradient-text-burgundy">Chauffit?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="body-xl text-surface-300 max-w-2xl mx-auto mb-10"
            >
              Download the app now and book your first professional driver. Starting at just Rs.99 for one-way trips.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={APP_LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base min-w-[200px]"
              >
                <PlayStoreIcon className="w-5 h-5" />
                Google Play
              </a>
              <a
                href={APP_LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base min-w-[200px]"
              >
                <AppleIcon className="w-5 h-5" />
                App Store
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-surface-400"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-burgundy-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span>Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-deer-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Quick Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Live Tracking</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}