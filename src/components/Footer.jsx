import Link from 'next/link';
import Logo from './Logo';
import { Instagram, Linkedin, Mail } from './Icons';
import { FOOTER_LINKS, SOCIAL_LINKS, CONTACT, APP_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface-950 border-t border-white/[0.04]" id="contact">
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative container-max mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Logo size="default" />
            <p className="mt-5 text-surface-400 text-[15px] leading-relaxed max-w-sm">
              Professional drivers on demand for your own vehicle. Safe, reliable, and affordable driver service starting at just Rs.99.
            </p>
            
            <div className="mt-8 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-surface-800/60 backdrop-blur-sm border border-white/[0.06] flex items-center justify-center text-surface-400 hover:text-white hover:bg-burgundy-800/40 hover:border-burgundy-700/40 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-surface-800/60 backdrop-blur-sm border border-white/[0.06] flex items-center justify-center text-surface-400 hover:text-white hover:bg-burgundy-800/40 hover:border-burgundy-700/40 transition-all duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="w-11 h-11 rounded-full bg-surface-800/60 backdrop-blur-sm border border-white/[0.06] flex items-center justify-center text-surface-400 hover:text-white hover:bg-burgundy-800/40 hover:border-burgundy-700/40 transition-all duration-300"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-6 text-sm text-surface-500">
              Contact: <a href={`mailto:${CONTACT.email}`} className="text-surface-300 hover:text-white transition-colors">{CONTACT.email}</a>
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-[15px] text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Careers
            </h4>
            <ul className="space-y-3.5">
              {FOOTER_LINKS.careers.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-[15px] text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-[15px] text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-surface-500">
              {currentYear} Chauffit. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href={APP_LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-surface-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .62.1.88.29L20.12 11.3c.76.46 1.01 1.45.55 2.21-.14.24-.33.43-.55.55L5.38 21.21c-.67.4-1.53.18-1.94-.49-.18-.3-.28-.64-.28-.99l.84-17.23L13 12l-9.16 5.23V20.5z"/>
                </svg>
                Google Play
              </a>
              <span className="text-surface-700">|</span>
              <a
                href={APP_LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-surface-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}