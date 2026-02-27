import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HOW_IT_WORKS } from '@/lib/constants';

export default function HowToBook() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-to-book" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-deer-900/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-max mx-auto" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-deer-400 uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="heading-lg text-white mb-6">
            Book a Driver in{' '}
            <span className="gradient-text-deer">3 Simple Steps</span>
          </h2>
          <p className="body-lg">
            Getting a professional driver for your vehicle is quick and effortless. 
            Here's how it works.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-700/50 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {HOW_IT_WORKS.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="glass-card p-8 text-center relative group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-burgundy-600 to-burgundy-800 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-burgundy-900/40 border border-burgundy-500/30"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-surface-400 leading-relaxed">{step.description}</p>
                  </div>

                  {index < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-6 w-12 h-px items-center justify-center -translate-y-1/2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-surface-600">
                        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 glass-panel p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-medium">Average Wait</p>
                <p className="text-surface-400 text-sm">Under 10 minutes</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-surface-700/50" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-burgundy-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-burgundy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-medium">100% Verified</p>
                <p className="text-surface-400 text-sm">Background checked drivers</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-surface-700/50" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-deer-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-deer-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-medium">Easy Payment</p>
                <p className="text-surface-400 text-sm">Cash, UPI, Cards accepted</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}