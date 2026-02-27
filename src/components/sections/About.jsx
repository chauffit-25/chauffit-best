import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Car, Clock, ShieldCheck } from '../Icons';

const features = [
  {
    icon: Car,
    title: 'Your Vehicle, Our Driver',
    description: 'We provide professional drivers to operate YOUR car. Not a taxi service.',
  },
  {
    icon: Clock,
    title: 'Flexible Booking Options',
    description: 'Choose one-way trips from ₹99 or hourly packages starting at ₹199.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Professionals',
    description: 'Every driver is background-checked, trained, and professionally verified.',
  },
];

const highlights = [
  'No hidden charges',
  'Unlimited stops on hourly',
  'Round trips included',
  'Live tracking always',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-burgundy-900/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-max mx-auto" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-burgundy-400 uppercase tracking-wider mb-4 block">
            About Chauffit
          </span>
          <h2 className="heading-lg text-white mb-6">
            Not a Taxi.{' '}
            <span className="gradient-text-burgundy">Your Car.</span>{' '}
            <span className="text-surface-300">Your Driver.</span>
          </h2>
          <p className="body-lg">
            Chauffit is a driver-on-demand platform that provides professionally trained and verified 
            drivers to operate your own vehicle. Whether it's a daily commute, a night out, or a 
            long road trip — we've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-card p-6 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-burgundy-700/30 to-burgundy-800/30 flex items-center justify-center mb-4 border border-burgundy-600/20 group-hover:border-burgundy-500/30 transition-colors">
                <feature.icon className="w-6 h-6 text-burgundy-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-surface-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-panel p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md text-white mb-4">
                Simple Pricing.{' '}
                <span className="gradient-text-deer">Zero Surprises.</span>
              </h3>
              <p className="body-md mb-6">
                One-way trips start at just ₹99. Hourly packages from ₹199 give you unlimited 
                stops and round trips within your booked hours.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-deer-600/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-deer-400" />
                    </div>
                    <span className="text-sm text-surface-300">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center">
                  <span className="text-3xl font-bold gradient-text-burgundy">₹99</span>
                  <p className="text-sm text-surface-400 mt-1">One-way trips</p>
                  <p className="text-xs text-surface-500 mt-2">Starting price</p>
                </div>
                <div className="glass-card p-6 text-center">
                  <span className="text-3xl font-bold gradient-text-deer">₹199</span>
                  <p className="text-sm text-surface-400 mt-1">Hourly booking</p>
                  <p className="text-xs text-surface-500 mt-2">Per hour</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}