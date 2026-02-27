import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { SCENARIOS } from '@/lib/constants';
import { getScenarioIcon, ArrowRight } from '../Icons';

export default function Scenarios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="scenarios" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-burgundy-900/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-max mx-auto" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-burgundy-400 uppercase tracking-wider mb-4 block">
            Everyday Scenarios
          </span>
          <h2 className="heading-lg text-white mb-6">
            When Do You Need{' '}
            <span className="gradient-text-burgundy">Chauffit?</span>
          </h2>
          <p className="body-lg">
            From daily commutes to special occasions, Chauffit fits seamlessly into your lifestyle. 
            Here are some scenarios where our service makes perfect sense.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCENARIOS.map((scenario, index) => {
            const IconComponent = getScenarioIcon(scenario.icon);
            
            return (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${scenario.blogSlug}`} className="block h-full">
                  <div className="glass-card p-6 h-full group hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-burgundy-700/30 to-burgundy-800/30 flex items-center justify-center mb-5 border border-burgundy-600/20 group-hover:border-burgundy-500/30 group-hover:from-burgundy-600/40 group-hover:to-burgundy-700/40 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-burgundy-400 group-hover:text-burgundy-300 transition-colors" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-burgundy-200 transition-colors">
                      {scenario.title}
                    </h3>
                    
                    <p className="text-surface-400 text-sm leading-relaxed mb-4">
                      {scenario.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-medium text-burgundy-400 group-hover:text-burgundy-300 transition-colors">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-surface-400 mb-6">
            Discover more ways Chauffit can simplify your life
          </p>
          <Link href="/blog" className="btn-secondary inline-flex">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}