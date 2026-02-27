'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Your Car, Our Driver',
    description: 'Unlike cabs, we send a professional driver to operate your personal vehicle.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    title: 'Verified & Trained',
    description: 'Every driver undergoes background checks and professional training.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Booking',
    description: 'One-way trips or hourly packages with unlimited stops.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full ambient-glow-burgundy opacity-30" />
      </div>

      <div className="container-max mx-auto relative" ref={ref}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy-900/40 border border-burgundy-700/30 text-burgundy-300 text-sm font-medium mb-6">
              About Chauffit
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-white"
          >
            Not a Cab Service.{' '}
            <span className="gradient-text-burgundy">Driver on Demand.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 body-lg text-surface-300"
          >
            Chauffit provides professionally trained, verified drivers who come to you and operate 
            your own vehicle. Travel in your car's comfort while someone else handles the driving.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-card glass-card-hover p-8 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-burgundy-700/30 to-burgundy-800/20 border border-burgundy-600/20 flex items-center justify-center text-burgundy-400 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-surface-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-panel p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-sm text-white mb-4">
                The Smarter Way to Travel
              </h3>
              <p className="body-md text-surface-300 mb-6">
                Why squeeze into a cab when you can relax in your own car? Chauffit lets you enjoy 
                the comfort of your vehicle while a professional handles the traffic, parking, and 
                navigation.
              </p>
              <ul className="space-y-3">
                {['No surge pricing on your own car', 'Familiar comfort of your vehicle', 'Perfect for families & luggage'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-surface-300">
                    <svg className="w-5 h-5 text-burgundy-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-surface-800 to-surface-900 border border-white/[0.06] overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text-burgundy">Rs.99</div>
                  <p className="mt-2 text-surface-400">Starting price for one-way trips</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}