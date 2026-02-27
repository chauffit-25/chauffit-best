'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from '../Icons';

const packages = [
  {
    hours: 2,
    price: 199,
    features: ['Unlimited stops', 'Round trips included', 'Flexible routes'],
  },
  {
    hours: 4,
    price: 349,
    features: ['Unlimited stops', 'Round trips included', 'Extended coverage', 'Multi-destination trips'],
    popular: true,
  },
  {
    hours: 8,
    price: 599,
    features: ['Unlimited stops', 'Full day coverage', 'Maximum flexibility', 'Long-distance trips'],
  },
];

export default function HourlySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full ambient-glow-deer opacity-20" />
      </div>

      <div className="container-max mx-auto relative" ref={ref}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-deer-900/30 border border-deer-700/30 text-deer-400 text-sm font-medium mb-6"
          >
            Flexible Packages
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-white"
          >
            Hourly Packages from{' '}
            <span className="gradient-text-deer">Rs.199</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 body-lg text-surface-300"
          >
            Book a driver by the hour with unlimited stops and round trips. Perfect for shopping, meetings, or family outings.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.hours}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative ${pkg.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 rounded-full bg-deer-500 text-surface-950 text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`h-full rounded-3xl p-8 ${
                pkg.popular 
                  ? 'bg-gradient-to-b from-deer-900/30 via-surface-800/50 to-surface-900/50 border-2 border-deer-600/30' 
                  : 'glass-card'
              }`}>
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-white mb-1">
                    {pkg.hours}
                    <span className="text-2xl font-normal text-surface-400 ml-1">hrs</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1 mt-4">
                    <span className="text-sm text-surface-400">Rs.</span>
                    <span className={`text-4xl font-bold ${pkg.popular ? 'text-deer-400' : 'text-white'}`}>
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        pkg.popular ? 'bg-deer-500/20 text-deer-400' : 'bg-burgundy-500/20 text-burgundy-400'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-surface-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://play.google.com/store/apps/details?id=com.chauffit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3.5 rounded-xl text-center font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-deer-500 text-surface-950 hover:bg-deer-400 shadow-lg shadow-deer-900/30'
                      : 'bg-surface-700/50 text-white hover:bg-surface-600/50 border border-white/[0.08]'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-center text-surface-500 text-sm"
        >
          All hourly packages include unlimited stops and round trips within the booked duration.
        </motion.p>
      </div>
    </section>
  );
}