'use client';

import { motion } from 'framer-motion';

export default function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative"
    >
      {/* Phone Frame */}
      <div className="relative w-[280px] sm:w-[300px] lg:w-[320px] device-shadow rounded-[3rem] overflow-hidden">
        {/* Phone Body */}
        <div className="relative bg-gradient-to-b from-surface-800 to-surface-900 rounded-[3rem] p-[3px]">
          <div className="relative bg-surface-950 rounded-[2.8rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-surface-950 rounded-b-2xl z-20 flex items-center justify-center">
              <div className="w-[60px] h-[4px] bg-surface-800 rounded-full" />
            </div>

            {/* Screen Content */}
            <div className="relative aspect-[9/19.5] bg-gradient-to-b from-surface-900 via-surface-900 to-surface-950">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-12 px-6 flex items-end justify-between pb-1 z-10">
                <span className="text-[11px] font-medium text-white">9:41</span>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3C8.5 3 5.3 4.5 3 7l1.5 1.5C6.3 6.3 9 5 12 5s5.7 1.3 7.5 3.5L21 7c-2.3-2.5-5.5-4-9-4z" opacity="0.3"/>
                    <path d="M12 7c-2.5 0-4.8 1-6.5 2.6L7 11c1.4-1.2 3.2-2 5-2s3.6.8 5 2l1.5-1.4C16.8 8 14.5 7 12 7z" opacity="0.5"/>
                    <path d="M12 11c-1.5 0-2.9.6-4 1.5L9.5 14c.7-.6 1.5-1 2.5-1s1.8.4 2.5 1l1.5-1.5c-1.1-.9-2.5-1.5-4-1.5z" opacity="0.7"/>
                    <circle cx="12" cy="17" r="2"/>
                  </svg>
                  <svg className="w-6 h-4 text-white" viewBox="0 0 24 14">
                    <rect x="0" y="2" width="20" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <rect x="21" y="4" width="2" height="6" rx="1" fill="currentColor"/>
                    <rect x="2" y="4" width="14" height="6" rx="1" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* App Content */}
              <div className="absolute inset-0 pt-14 px-4 pb-4">
                {/* Map Area */}
                <div className="relative h-[55%] rounded-2xl overflow-hidden bg-surface-800/50">
                  {/* Simulated Map */}
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-800 via-surface-800/80 to-surface-700/50">
                    {/* Map Grid Lines */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(8)].map((_, i) => (
                        <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-surface-500" style={{ top: `${(i + 1) * 12}%` }} />
                      ))}
                      {[...Array(6)].map((_, i) => (
                        <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-surface-500" style={{ left: `${(i + 1) * 16}%` }} />
                      ))}
                    </div>
                    
                    {/* Route Line */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8B1538" />
                          <stop offset="100%" stopColor="#C9A227" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 20 80 Q 30 70 35 55 Q 40 40 55 35 Q 70 30 80 20"
                        fill="none"
                        stroke="url(#routeGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="4 2"
                      />
                    </svg>

                    {/* Pickup Pin */}
                    <div className="absolute bottom-[20%] left-[20%]">
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-burgundy-600 border-2 border-white shadow-lg" />
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-burgundy-600" />
                      </div>
                    </div>

                    {/* Drop Pin */}
                    <div className="absolute top-[20%] right-[20%]">
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-deer-500 border-2 border-white shadow-lg" />
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-deer-500" />
                      </div>
                    </div>

                    {/* Current Location Pulse */}
                    <div className="absolute bottom-[22%] left-[22%] w-8 h-8 -translate-x-1/2 -translate-y-1/2">
                      <div className="absolute inset-0 rounded-full bg-burgundy-500/30 animate-ping" />
                    </div>
                  </div>
                </div>

                {/* Bottom Card */}
                <div className="mt-3 rounded-2xl bg-surface-800/80 backdrop-blur-sm border border-white/[0.08] p-4">
                  {/* Toggle */}
                  <div className="flex gap-2 mb-4">
                    <button className="flex-1 py-2 px-3 rounded-xl bg-burgundy-700 text-white text-xs font-medium">
                      One Way
                    </button>
                    <button className="flex-1 py-2 px-3 rounded-xl bg-surface-700/50 text-surface-400 text-xs font-medium">
                      Hourly
                    </button>
                  </div>

                  {/* Location Inputs */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-700/50">
                      <div className="w-2.5 h-2.5 rounded-full bg-burgundy-500" />
                      <span className="text-xs text-surface-300">Connaught Place, Delhi</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-700/50">
                      <div className="w-2.5 h-2.5 rounded-full bg-deer-500" />
                      <span className="text-xs text-surface-300">Cyber Hub, Gurgaon</span>
                    </div>
                  </div>

                  {/* Book Button */}
                  <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-burgundy-700 to-burgundy-800 text-white text-sm font-semibold shadow-lg shadow-burgundy-900/40">
                    Book Driver - Rs.99
                  </button>
                </div>

                {/* SOS Button */}
                <div className="absolute top-16 right-5 w-10 h-10 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <span className="text-[10px] font-bold text-white">SOS</span>
                </div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute -left-[2px] top-[120px] w-[3px] h-8 bg-surface-700 rounded-l-sm" />
        <div className="absolute -left-[2px] top-[170px] w-[3px] h-14 bg-surface-700 rounded-l-sm" />
        <div className="absolute -left-[2px] top-[230px] w-[3px] h-14 bg-surface-700 rounded-l-sm" />
        <div className="absolute -right-[2px] top-[160px] w-[3px] h-16 bg-surface-700 rounded-r-sm" />
      </div>
    </motion.div>
  );
}