import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const APP_STORE_URL = 'https://apps.apple.com/app/chauffit';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.chauffit.app';

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/chauffit?igsh=dmUxZjQxMnhlMXYy&utm_source=qr',
  linkedin: 'https://www.linkedin.com/company/chauffit/',
};

export const CONTACT_EMAIL = 'chauffit@gmail.com';

export const SITE_CONFIG = {
  name: 'Chauffit',
  description: 'Professional drivers on demand for your vehicle. Book verified drivers starting at just Rs.99. One-way trips, hourly packages, and more.',
  url: 'https://www.chauffit.in',
  ogImage: 'https://www.chauffit.in/og-image.jpg',
};