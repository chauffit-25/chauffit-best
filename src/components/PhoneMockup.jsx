import { motion } from 'framer-motion';

export default function PhoneMockup() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-burgundy-700/20 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-burgundy-600/10 rounded-full blur-[60px]" />
      </div>

      <motion.div
        className="relative mx-auto w-[280px] sm:w-[300px] md:w-[320px]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative bg-surface-900 rounded-[3rem] p-2 shadow-2xl shadow-black/50">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-surface-950 rounded-b-2xl z-20" />
          
          <div className="relative bg-surface-950 rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-surface-950 to-surface-900">
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between px-6 pt-12 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-burgundy-700 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M12 14c-6 0-8 3-8 5v1h16v-1c0-2-2-5-8-5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-surface-400">Good Morning</p>
                      <p className="text-xs font-medium text-white">Book Your Driver</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center border border-red-500/30">
                    <span className="text-[8px] font-bold text-red-400">SOS</span>
                  </div>
                </div>

                <div className="flex-1 px-4 space-y-3">
                  <div className="bg-surface-800/60 backdrop-blur-sm rounded-xl p-3 border border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 ring-2 ring-green-500/30" />
                      <div>
                        <p className="text-[9px] text-surface-400">PICKUP</p>
                        <p className="text-[11px] text-white font-medium">Connaught Place, Delhi</p>
                      </div>
                    </div>
                    <div className="ml-1.5 my-1 w-px h-4 bg-surface-600 border-l border-dashed border-surface-500" />
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-burgundy-500 ring-2 ring-burgundy-500/30" />
                      <div>
                        <p className="text-[9px] text-surface-400">DROP</p>
                        <p className="text-[11px] text-white font-medium">Cyber Hub, Gurgaon</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 bg-burgundy-700 text-white text-[10px] font-medium rounded-lg">
                      One Way
                    </button>
                    <button className="flex-1 py-2.5 bg-surface-800/60 text-surface-300 text-[10px] font-medium rounded-lg border border-white/[0.06]">
                      Hourly
                    </button>
                  </div>

                  <div className="relative h-32 bg-surface-800/40 rounded-xl overflow-hidden border border-white/[0.04]">
                    <div className="absolute inset-0 opacity-60">
                      <svg viewBox="0 0 200 150" className="w-full h-full">
                        <defs>
                          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#722F37" />
                            <stop offset="100%" stopColor="#BA8759" />
                          </linearGradient>
                        </defs>
                        <rect fill="#1a1a1f" width="200" height="150" />
                        <path d="M20 130 Q50 100 80 90 T120 70 T180 30" stroke="url(#routeGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                        <circle cx="20" cy="130" r="6" fill="#22c55e" />
                        <circle cx="180" cy="30" r="6" fill="#722F37" />
                        <rect x="40" y="60" width="30" height="20" rx="2" fill="#2a2a30" opacity="0.5" />
                        <rect x="90" y="100" width="25" height="15" rx="2" fill="#2a2a30" opacity="0.5" />
                        <rect x="130" y="50" width="35" height="18" rx="2" fill="#2a2a30" opacity="0.5" />
                      </svg>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                      <span className="text-[9px] text-surface-400">Live Tracking</span>
                      <span className="text-[9px] text-deer-500">~25 min</span>
                    </div>
                  </div>

                  <div className="bg-surface-800/40 rounded-xl p-3 border border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-surface-700 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 text-deer-500" fill="currentColor">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M12 14c-6 0-8 3-8 5v1h16v-1c0-2-2-5-8-5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[10px] text-white font-medium">Rajesh K.</p>
                          <p className="text-[8px] text-surface-400">5+ years exp.</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] text-surface-400">ARRIVING</p>
                        <p className="text-[10px] text-deer-500 font-medium">3 min</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-8 pt-3">
                  <button className="w-full py-3.5 bg-gradient-to-r from-burgundy-700 to-burgundy-800 text-white text-[11px] font-semibold rounded-xl shadow-lg shadow-burgundy-900/40">
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-[3rem] ring-1 ring-white/[0.08] pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}