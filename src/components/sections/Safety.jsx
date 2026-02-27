import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SAFETY_FEATURES } from '@/lib/constants';
import { getSafetyIcon } from '../Icons';

export default function Safety() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="safety" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-deer-900/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-max mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-deer-400 uppercase tracking-wider mb-4 block">
              Safety & Trust
            </span>
            <h2 className="heading-lg text-white mb-6">
              Your Safety is Our{' '}
              <span className="gradient-text-deer">Top Priority</span>
            </h2>
            <p className="body-lg mb-8">
              Every Chauffit driver undergoes rigorous verification and training. 
              We've built multiple layers of safety features to ensure you always 
              feel secure during your journey.
            </p>

            <div className="space-y-4">
              {SAFETY_FEATURES.map((feature, index) => {
                const IconComponent = getSafetyIcon(feature.icon);
                
                return (
                  <motion.div
                    key={feature.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-surface-800/30 border border-white/[0.04] hover:border-white/[0.08] transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-deer-600/20 flex items-center justify-center flex-shrink-0 border border-deer-500/20">
                      <IconComponent className="w-5 h-5 text-deer-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-surface-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-panel p-8 md:p-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Background Verified</p>
                    <p className="text-sm text-surface-400">Police verification completed</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Document Verified</p>
                    <p className="text-sm text-surface-400">License & ID validated</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-burgundy-500/10 border border-burgundy-500/20">
                  <div className="w-12 h-12 rounded-full bg-burgundy-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-burgundy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Professional Training</p>
                    <p className="text-sm text-surface-400">Completed safety course</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-deer-500/10 border border-deer-500/20">
                  <div className="w-12 h-12 rounded-full bg-deer-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-deer-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Real-time Tracking</p>
                    <p className="text-sm text-surface-400">GPS location always on</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
                <p className="text-surface-400 text-sm">
                  One-tap SOS available 24/7 during your ride
                </p>
              </div>
            </div>

            <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-deer-600/10 via-transparent to-burgundy-600/10 rounded-3xl blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}