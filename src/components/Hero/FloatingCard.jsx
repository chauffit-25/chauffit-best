'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, AlertCircle, Clock } from '../Icons';

const icons = {
  'shield-check': ShieldCheck,
  'map-pin': MapPin,
  'alert-circle': AlertCircle,
  'clock': Clock,
};

const positions = {
  'top-left': 'absolute -left-16 sm:-left-20 lg:-left-24 top-[15%] sm:top-[12%]',
  'top-right': 'absolute -right-12 sm:-right-16 lg:-right-20 top-[8%] sm:top-[5%]',
  'bottom-left': 'absolute -left-12 sm:-left-16 lg:-left-20 bottom-[35%] sm:bottom-[32%]',
  'bottom-right': 'absolute -right-16 sm:-right-20 lg:-right-28 bottom-[25%] sm:bottom-[22%]',
};

const floatAnimations = {
  'top-left': { y: [0, -8, 0], x: [0, 3, 0] },
  'top-right': { y: [0, -10, 0], x: [0, -4, 0] },
  'bottom-left': { y: [0, -6, 0], x: [0, 4, 0] },
  'bottom-right': { y: [0, -12, 0], x: [0, -3, 0] },
};

const floatDurations = {
  'top-left': 5,
  'top-right': 6,
  'bottom-left': 7,
  'bottom-right': 5.5,
};

export default function FloatingCard({ title, icon, position, delay = 0 }) {
  const IconComponent = icons[icon] || ShieldCheck;
  const positionClass = positions[position] || positions['top-left'];
  const floatAnimation = floatAnimations[position] || floatAnimations['top-left'];
  const duration = floatDurations[position] || 5;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`${positionClass} z-10`}
    >
      <motion.div
        animate={floatAnimation}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="floating-glass p-3.5 sm:p-4 flex items-center gap-3 shadow-xl"
      >
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-burgundy-700/30 to-burgundy-800/20 border border-burgundy-600/20 flex items-center justify-center flex-shrink-0">
          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy-400" />
        </div>
        <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap pr-1">
          {title}
        </span>
      </motion.div>
    </motion.div>
  );
}