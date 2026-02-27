import Link from 'next/link';

export default function Logo({ className = '', size = 'default' }) {
  const sizes = {
    small: 'h-9',
    default: 'h-11',
    large: 'h-14',
  };

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      <div className={`${sizes[size]} aspect-square relative`}>
        <svg
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-lg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a91d4a" />
              <stop offset="50%" stopColor="#8B1538" />
              <stop offset="100%" stopColor="#6a1029" />
            </linearGradient>
            <linearGradient id="logoStroke" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c92a5b" />
              <stop offset="100%" stopColor="#8B1538" />
            </linearGradient>
            <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#8B1538" floodOpacity="0.4"/>
            </filter>
          </defs>
          <circle
            cx="30"
            cy="30"
            r="28"
            fill="url(#logoGradient)"
            stroke="url(#logoStroke)"
            strokeWidth="1"
            filter="url(#logoShadow)"
          />
          <g transform="translate(15, 12)">
            <ellipse cx="15" cy="6" rx="5.5" ry="5.5" fill="white" opacity="0.95" />
            <path
              d="M15 13c-7.5 0-11 3.5-11 7.5v2c0 1 0.5 1.8 1.8 2.3l0.4 7.5c0.15 0.9 0.9 1.4 1.8 1.4h14c0.9 0 1.65-0.5 1.8-1.4l0.4-7.5c1.3-0.5 1.8-1.3 1.8-2.3v-2c0-4-3.5-7.5-11-7.5z"
              fill="white"
              opacity="0.95"
            />
            <circle cx="11" cy="6" r="1.2" fill="white" opacity="0.4" />
            <circle cx="19" cy="6" r="1.2" fill="white" opacity="0.4" />
            <rect x="7" y="20" width="16" height="1.5" rx="0.75" fill="rgba(139,21,56,0.2)" />
            <rect x="9" y="23" width="12" height="1" rx="0.5" fill="rgba(139,21,56,0.15)" />
          </g>
        </svg>
      </div>
      <span className="text-[22px] font-semibold tracking-[-0.01em] text-white group-hover:text-burgundy-400 transition-colors duration-300">
        Chauffit
      </span>
    </Link>
  );
}