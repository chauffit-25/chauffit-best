'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { SCENARIOS } from '@/lib/constants';
import { getScenarioIcon, ArrowRight } from '../Icons';

export default function ScenariosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="scenarios" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full ambient-glow-burgundy opacity-20" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full ambient-glow-deer opacity-15" />
      </div>

      <div className="container-max mx-auto relative" ref={ref}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-burgundy-900/40 border border-burgundy-700/30 text-burgundy-300 text-sm font-medium mb-6"
          >
            Everyday Scenarios
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-white"
          >
            When Do You Need{' '}
            <span className="gradient-text-burgundy">Chauffit?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 body-lg text-surface-300"
          >
            From daily commutes to special occasions, there's always a perfect time for a professional driver.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {SCENARIOS.map((scenario, index) => {
            const IconComponent = getScenarioIcon(scenario.icon);
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={`/blog/${scenario.blogSlug}`}
                  className="group block h-full"
                >
                  <div className={`glass-card glass-card-hover h-full p-8 relative overflow-hidden`}>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isEven 
                        ? 'bg-gradient-to-br from-burgundy-900/20 via-transparent to-transparent' 
                        : 'bg-gradient-to-br from-deer-900/15 via-transparent to-transparent'
                    }`} />

                    <div className="relative">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                        isEven
                          ? 'bg-gradient-to-br from-burgundy-700/30 to-burgundy-800/20 border border-burgundy-600/20 text-burgundy-400'
                          : 'bg-gradient-to-br from-deer-700/20 to-deer-800/10 border border-deer-600/20 text-deer-400'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-burgundy-300 transition-colors">
                        {scenario.title}
                      </h3>
                      <p className={`text-sm font-medium mb-4 ${isEven ? 'text-burgundy-400' : 'text-deer-400'}`}>
                        {scenario.subtitle}
                      </p>
                      <p className="text-surface-400 leading-relaxed mb-6">
                        {scenario.description}
                      </p>

                      <div className="flex items-center gap-2 text-sm font-medium text-surface-300 group-hover:text-white transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}