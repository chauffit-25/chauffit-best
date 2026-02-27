import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Clock } from '../Icons';

const hourlyBenefits = [
  'Unlimited stops during booked hours',
  'Round trips included in package',
  'No extra charge for waiting time',
  'Extend booking anytime via app',
];

const packages = [
  { hours: 2, price: 199, popular: false },
  { hours: 4, price: 349, popular: true },
  { hours: 8, price: 599, popular: false },
];

export default function HourlyFlexibility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-burgundy-900/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-max mx-auto" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-burgundy-400 uppercase tracking-wider mb-4 block">
            Hourly Packages
          </span>
          <h2 className="heading-lg text-white mb-6">
            Flexible Hourly Hire{' '}
            <span className="gradient-text-burgundy">Starting ₹199</span>
          </h2>
          <p className="body-lg">
            Need a driver for multiple errands, a day out, or a road trip? 
            Our hourly packages give you complete flexibility with unlimited stops and round trips.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-panel p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-burgundy-600 to-burgundy-800 flex items-center justify-center shadow-lg shadow-burgundy-900/30">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Hourly Booking</h3>
                  <p className="text-surface-400">Maximum flexibility, minimum hassle</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {hourlyBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-burgundy-600/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-burgundy-400" />
                    </div>
                    <span className="text-surface-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-deer-600/10 border border-deer-500/20">
                <p className="text-deer-300 text-sm">
                  <span className="font-semibold">Pro Tip:</span> Book 4+ hours for the best value on day trips and multiple errands.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.hours}
                  className={`glass-card p-6 relative group hover:-translate-y-1 transition-all duration-300 ${
                    pkg.popular ? 'border-burgundy-500/40 ring-1 ring-burgundy-500/20' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white text-xs font-medium rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        pkg.popular 
                          ? 'bg-gradient-to-br from-burgundy-600/30 to-burgundy-800/30 border border-burgundy-500/30'
                          : 'bg-surface-700/50 border border-white/[0.06]'
                      }`}>
                        <span className="text-lg font-bold text-white">{pkg.hours}h</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">{pkg.hours} Hour Package</p>
                        <p className="text-sm text-surface-400">
                          Unlimited stops & round trips
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${pkg.popular ? 'gradient-text-burgundy' : 'text-white'}`}>
                        ₹{pkg.price}
                      </p>
                      <p className="text-xs text-surface-500">
                        ₹{Math.round(pkg.price / pkg.hours)}/hr
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="mt-6 text-center text-sm text-surface-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              * Prices may vary based on location and time
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}