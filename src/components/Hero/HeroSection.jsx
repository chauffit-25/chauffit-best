'use client';

import { motion } from 'framer-motion';
import { APP_LINKS } from '@/lib/constants';
import { AppleIcon, PlayStoreIcon } from '../Icons';
import PhoneMockup from './PhoneMockup';
import FloatingCard from './FloatingCard';

const floatingCards = [
  {
    id: 'verified',
    title: 'Verified Driver',
    icon: 'shield-check',
    position: 'top-left',
    delay: 0.8,
  },
  {
    id: 'tracking',
    title: 'Live Route Tracking',
    icon: 'map-pin',
    position: 'top-right',
    delay: 1.0,
  },
  {
    id: 'sos',
    title: 'SOS Assistance',
    icon: 'alert-circle',
    position: 'bottom-left',
    delay: 1.2,
  },
  {
    id: 'flexible',
    title: 'One-Way & Hourly',
    icon: 'clock',
    position: 'bottom-right',
    delay: 1.4,
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main radial glow */}
        <div className="absolute top-0 right-0 w-[120%] h-[120%] -translate-y-[10%] translate-x-[15%]">
          <div className="w-full h-full bg-gradient-radial from-burgundy-800/15 via-burgundy-900/5 to-transparent" />
        </div>
        {/* Secondary ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]">
          <div className="w-full h-full ambient-glow-burgundy opacity-50" />
        </div>
        {/* Top light diffusion */}
        <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-burgundy-900/10 via-transparent to-transparent" />
      </div>

      <div className="relative container-max mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl lg:max-w-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy-900/30 border border-burgundy-700/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-burgundy-500 animate-pulse" />
              <span className="text-sm font-medium text-burgundy-300">Driver on Demand</span>
            </motion.div>

            <h1 className="heading-hero text-white">
              Professional{' '}
              <span className="gradient-text-burgundy">Drivers</span>
              <br />
              for{' '}
              <span className="gradient-text-deer">Your Vehicle</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 body-lg text-surface-300 max-w-xl"
            >
              Not a taxi. Not a cab. We provide verified, professionally trained drivers to operate 
              <span className="text-white font-medium"> your own car</span>. Starting at just Rs.99.
            </motion.p>

            {/* Pricing Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/50 border border-white/[0.06]">
                <span className="text-sm text-surface-400">One-way from</span>
                <span className="text-lg font-semibold text-white">Rs.99</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/50 border border-white/[0.06]">
                <span className="text-sm text-surface-400">Hourly from</span>
                <span className="text-lg font-semibold text-deer-400">Rs.199</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href={APP_LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <PlayStoreIcon className="w-5 h-5" />
                Download Now
              </a>
              <a
                href={APP_LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base"
              >
                <AppleIcon className="w-5 h-5" />
                App Store
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-burgundy-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span className="text-sm text-surface-400">Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-deer-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm text-surface-400">24/7 Available</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Device Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] device-glow animate-pulse-glow" />
            </div>

            {/* Phone with Floating Cards */}
            <div className="relative">
              <PhoneMockup />
              
              {/* Floating Cards */}
              {floatingCards.map((card) => (
                <FloatingCard
                  key={card.id}
                  title={card.title}
                  icon={card.icon}
                  position={card.position}
                  delay={card.delay}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent pointer-events-none" />
    </section>
  );
}