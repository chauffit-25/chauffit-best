'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SAFETY_FEATURES } from '@/lib/constants';
import { getSafetyIcon } from '../Icons';

export default function SafetySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="safety" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-burgundy-700/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-950/10 via-transparent to-transparent" />
      </div>

      <div className="container-max mx-auto relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full bg-burgundy-900/40 border border-burgundy-700/30 text-burgundy-300 text-sm font-medium mb-6"
            >
              Safety & Trust
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-lg text-white"
            >
              Your Safety is{' '}
              <span className="gradient-text-burgundy">Our Priority</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 body-lg text-surface-300"
            >
              Every Chauffit driver is thoroughly vetted, professionally trained, and committed to providing a safe, reliable experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/50 border border-white/[0.06]">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-surface-300">Background Verified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/50 border border-white/[0.06]">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-surface-300">24/7 Support</span>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {SAFETY_FEATURES.map((feature, index) => {
              const IconComponent = getSafetyIcon(feature.icon);

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-burgundy-700/30 to-burgundy-800/20 border border-burgundy-600/20 flex items-center justify-center text-burgundy-400 mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-surface-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SOS Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass-panel p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />
          
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-900/40 flex-shrink-0">
              <span className="text-xl font-bold text-white">SOS</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white mb-2">Emergency SOS Button</h3>
              <p className="text-surface-300 max-w-2xl">
                One-tap emergency assistance available throughout your journey. Instantly alerts our safety team and shares your live location with your emergency contacts.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}