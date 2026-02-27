import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, AlertCircle, Clock } from './Icons';

const cards = [
  {
    icon: ShieldCheck,
    label: 'Verified Driver',
    position: 'top-16 -left-8 sm:-left-16',
    delay: 0.2,
  },
  {
    icon: MapPin,
    label: 'Live Route Tracking',
    position: 'top-1/3 -right-4 sm:-right-12',
    delay: 0.4,
  },
  {
    icon: AlertCircle,
    label: 'SOS Assistance',
    position: 'bottom-1/3 -left-4 sm:-left-12',
    delay: 0.6,
  },
  {
    icon: Clock,
    label: 'One-Way & Hourly',
    position: 'bottom-24 -right-8 sm:-right-16',
    delay: 0.8,
  },
];

export default function FloatingCards() {
  return (
    <>
      {cards.map((card, index) => (
        <motion.div
          key={card.label}
          className={`absolute ${card.position} z-10`}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: card.delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            className="floating-card"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.05, y: -4 }}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-burgundy-700/30 to-burgundy-800/30 flex items-center justify-center border border-burgundy-600/20">
              <card.icon className="w-4 h-4 text-burgundy-400" />
            </div>
            <span className="text-sm font-medium text-white whitespace-nowrap">
              {card.label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}