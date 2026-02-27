export const APP_LINKS = {
  playStore: 'https://play.google.com/store/apps/details?id=com.chauffit.app',
  appStore: 'https://apps.apple.com/app/chauffit',
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/chauffit?igsh=dmUxZjQxMnhlMXYy&utm_source=qr',
  linkedin: 'https://www.linkedin.com/company/chauffit/',
};

export const CONTACT = {
  email: 'chauffit@gmail.com',
};

export const NAV_ITEMS = [
  { label: 'About Us', href: '/#about' },
  { label: 'How to Book', href: '/#how-to-book' },
  { label: 'Everyday Scenarios', href: '/#scenarios' },
  { label: 'Safety', href: '/#safety' },
  { label: 'Contact Us', href: '/#contact' },
];

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/#contact' },
  ],
  careers: [
    { label: 'Become a Driver', href: '/driver' },
    { label: 'Become a Biker', href: '/biker' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export const HERO_FLOATING_CARDS = [
  {
    id: 'verified',
    title: 'Verified Driver',
    icon: 'shield-check',
    position: 'top-left',
  },
  {
    id: 'tracking',
    title: 'Live Route Tracking',
    icon: 'map-pin',
    position: 'top-right',
  },
  {
    id: 'sos',
    title: 'SOS Assistance',
    icon: 'alert-circle',
    position: 'bottom-left',
  },
  {
    id: 'flexible',
    title: 'One-Way & Hourly',
    icon: 'clock',
    position: 'bottom-right',
  },
];

export const SCENARIOS = [
  {
    id: 'after-office',
    title: 'Office Commute',
    subtitle: 'Turn travel time into productive time',
    description: 'Transform your daily commute into a productive work session. Take calls, prepare for meetings, or simply relax while our driver handles the traffic.',
    icon: 'briefcase',
    blogSlug: 'increase-productivity-during-commute-hire-driver-delhi-ncr',
    gradient: 'burgundy',
  },
  {
    id: 'night-out',
    title: 'Night Out',
    subtitle: 'Party safe, get home safe',
    description: 'Enjoy your evening without worrying about driving back. Book a driver to take you and your car home safely after drinks or late-night events.',
    icon: 'moon',
    blogSlug: 'why-you-should-never-drink-and-drive-book-driver-delhi-ncr',
    gradient: 'deer',
  },
  {
    id: 'family-travel',
    title: 'Family Travel',
    subtitle: 'Focus on family, not the road',
    description: 'Make family trips memorable by being present with your loved ones. Let a professional driver handle the journey while you create memories.',
    icon: 'users',
    blogSlug: 'spend-more-time-with-family-professional-driver-handle-driving',
    gradient: 'burgundy',
  },
  {
    id: 'after-work',
    title: 'After Work Relaxation',
    subtitle: 'Decompress on your way home',
    description: 'End your workday peacefully. Instead of battling rush hour stress, sit back and unwind while our verified driver navigates the traffic.',
    icon: 'coffee',
    blogSlug: 'relax-after-work-let-driver-handle-traffic-delhi-ncr',
    gradient: 'deer',
  },
];

export const SAFETY_FEATURES = [
  {
    title: 'Verified Drivers',
    description: 'Every driver undergoes thorough background verification, document checks, and professional training.',
    icon: 'shield-check',
  },
  {
    title: 'Live Route Tracking',
    description: 'Track your ride in real-time. Share trip details with family for complete peace of mind.',
    icon: 'map-pin',
  },
  {
    title: 'SOS Assistance',
    description: 'One-tap emergency assistance available throughout your journey, 24 hours a day.',
    icon: 'alert-circle',
  },
  {
    title: 'Professional Training',
    description: 'All drivers are professionally trained for safe, courteous, and reliable service.',
    icon: 'award',
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Book Your Driver',
    description: 'Open the app, enter your pickup location, and choose between one-way trip or hourly package.',
  },
  {
    step: 2,
    title: 'Driver Arrives',
    description: 'A verified professional driver arrives at your location within minutes, ready to drive.',
  },
  {
    step: 3,
    title: 'Enjoy Your Ride',
    description: 'Sit back, relax, or be productive while your driver safely operates your vehicle.',
  },
];

export const HOURLY_PACKAGES = [
  {
    hours: 2,
    price: 199,
    features: ['Unlimited stops', 'Round trips included', 'Flexible routes'],
  },
  {
    hours: 4,
    price: 349,
    features: ['Unlimited stops', 'Round trips included', 'Extended coverage'],
    popular: true,
  },
  {
    hours: 8,
    price: 599,
    features: ['Unlimited stops', 'Full day coverage', 'Maximum flexibility'],
  },
];

export const BLOG_ARTICLES = [
  {
    slug: 'hire-driver-on-demand-delhi-ncr-complete-guide-2026',
    title: 'Hire a Driver On Demand in Delhi NCR: Complete Guide (2026)',
    metaTitle: 'Hire Driver On Demand Delhi NCR 2026 | Chauffit Complete Guide',
    metaDescription: 'Complete guide to hiring a professional driver on demand in Delhi NCR. Starting at Rs.99. Book verified drivers for your own vehicle with Chauffit.',
    excerpt: 'Everything you need to know about hiring a professional driver on demand in Delhi NCR. From booking to pricing, we cover it all.',
    category: 'Guide',
    readTime: '8 min read',
    priority: 1,
    image: '/blog/hire-driver-guide.jpg',
  },
  {
    slug: 'why-you-should-never-drink-and-drive-book-driver-delhi-ncr',
    title: 'Why You Should Never Drink and Drive — Book a Driver Instead in Delhi NCR',
    metaTitle: 'Never Drink and Drive Delhi NCR | Book Driver Instead | Chauffit',
    metaDescription: 'Stay safe after parties and celebrations. Book a professional driver to operate your vehicle in Delhi NCR. Available 24/7 starting at Rs.99.',
    excerpt: 'Learn why booking a driver after drinking is the smartest choice, and how Chauffit makes it easy and affordable.',
    category: 'Safety',
    readTime: '6 min read',
    priority: 2,
    image: '/blog/never-drink-drive.jpg',
  },
  {
    slug: 'driver-jobs-delhi-ncr-flexible-income-opportunity',
    title: 'Driver Jobs in Delhi NCR — Flexible Income Opportunity',
    metaTitle: 'Driver Jobs Delhi NCR | Flexible Income | Chauffit Careers',
    metaDescription: 'Looking for driver jobs in Delhi NCR? Join Chauffit for flexible hours and earn up to Rs.40,000/month. No vehicle required.',
    excerpt: 'Discover flexible driver job opportunities with Chauffit in Delhi NCR.',
    category: 'Careers',
    readTime: '5 min read',
    priority: 3,
    image: '/blog/driver-jobs.jpg',
  },
  {
    slug: 'increase-productivity-during-commute-hire-driver-delhi-ncr',
    title: 'Increase Productivity During Your Commute — Hire a Driver in Delhi NCR',
    metaTitle: 'Productive Commute Delhi NCR | Hire Driver | Chauffit',
    metaDescription: 'Turn your daily commute into productive time. Hire a professional driver in Delhi NCR and work, prepare, or relax during your journey.',
    excerpt: 'Transform your daily commute from wasted time to productive hours with a professional driver.',
    category: 'Lifestyle',
    readTime: '5 min read',
    priority: 4,
    image: '/blog/productive-commute.jpg',
  },
  {
    slug: 'spend-more-time-with-family-professional-driver-handle-driving',
    title: 'Spend More Time with Family — Let a Professional Driver Handle the Driving',
    metaTitle: 'Family Time During Travel | Professional Driver | Chauffit',
    metaDescription: 'Enjoy quality family time on road trips. Let a professional driver handle the driving while you bond with your loved ones.',
    excerpt: 'Make family road trips about family, not about the stress of driving.',
    category: 'Family',
    readTime: '5 min read',
    priority: 5,
    image: '/blog/family-time.jpg',
  },
  {
    slug: 'relax-after-work-let-driver-handle-traffic-delhi-ncr',
    title: 'Relax After Work — Let a Driver Handle the Traffic in Delhi NCR',
    metaTitle: 'Stress-Free Commute After Work Delhi NCR | Chauffit Driver',
    metaDescription: 'End your workday stress-free. Hire a driver to handle Delhi NCR traffic while you unwind on your way home.',
    excerpt: 'Decompress after a long day instead of battling traffic stress.',
    category: 'Lifestyle',
    readTime: '4 min read',
    priority: 6,
    image: '/blog/relax-after-work.jpg',
  },
  {
    slug: 'earn-up-to-40000-per-month-driver-chauffit',
    title: 'No Car? No Problem. Earn Up to Rs.40,000 Per Month as a Driver with Chauffit',
    metaTitle: 'Earn Rs.40,000/Month as Driver | Chauffit Driver Partner',
    metaDescription: 'Join Chauffit as a driver partner. Earn up to Rs.40,000 per month with flexible hours. No vehicle required. Apply now!',
    excerpt: 'Start earning as a professional driver with Chauffit. Flexible hours, great earnings.',
    category: 'Careers',
    readTime: '4 min read',
    priority: 7,
    image: '/blog/earn-driver.jpg',
  },
  {
    slug: 'earn-up-to-25000-per-month-biker-chauffit',
    title: 'Earn Up to Rs.25,000 Per Month as a Biker with Chauffit',
    metaTitle: 'Earn Rs.25,000/Month as Biker | Chauffit Delivery Partner',
    metaDescription: 'Join Chauffit as a biker partner. Earn up to Rs.25,000 per month with flexible hours. Apply now and start earning!',
    excerpt: 'Become a Chauffit biker partner and earn on your own schedule.',
    category: 'Careers',
    readTime: '4 min read',
    priority: 8,
    image: '/blog/earn-biker.jpg',
  },
  {
    slug: 'complete-guide-hiring-driver-delhi-ncr-2026',
    title: 'Complete Guide to Hiring a Driver in Delhi NCR (2026)',
    metaTitle: 'Complete Driver Hiring Guide Delhi NCR 2026 | Chauffit',
    metaDescription: 'Your comprehensive guide to hiring drivers in Delhi NCR. Compare options, understand pricing, and learn why Chauffit is the top choice.',
    excerpt: 'A comprehensive comparison and guide to all driver hiring options in Delhi NCR.',
    category: 'Guide',
    readTime: '10 min read',
    priority: 9,
    image: '/blog/complete-guide.jpg',
  },
  {
    slug: 'safe-alternative-driving-at-night-delhi-ncr',
    title: 'Safe Alternative to Driving at Night in Delhi NCR',
    metaTitle: 'Safe Night Driving Alternative Delhi NCR | Chauffit',
    metaDescription: 'Avoid the risks of night driving in Delhi NCR. Book a professional driver for safe late-night travel. Available 24/7.',
    excerpt: 'Stay safe during late-night travel with a professional driver.',
    category: 'Safety',
    readTime: '5 min read',
    priority: 10,
    image: '/blog/night-driving.jpg',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What is Chauffit and how is it different from cab services?',
    answer: 'Chauffit is a Driver On Demand platform that provides professionally trained and verified drivers to operate YOUR own vehicle. Unlike taxi or cab services like Uber or Ola where you ride in someone else\'s car, we send a professional driver to you who drives YOUR personal car safely to your destination.',
  },
  {
    question: 'How much does it cost to book a driver?',
    answer: 'One-way trips start at just Rs.99. Hourly bookings start at Rs.199, which include unlimited stops and round trips within your booked hours. Our pricing is transparent with no hidden charges.',
  },
  {
    question: 'How do I book a driver?',
    answer: 'Download the Chauffit app, enter your pickup location, choose between one-way or hourly booking, and confirm. A verified driver will arrive at your location within minutes.',
  },
  {
    question: 'Are all drivers verified and trained?',
    answer: 'Yes, every Chauffit driver undergoes thorough background verification, document checks, driving skill assessments, and professional training before they can accept rides on our platform.',
  },
  {
    question: 'Is there an SOS feature for emergencies?',
    answer: 'Yes, the Chauffit app includes a prominent one-tap SOS button for emergency assistance throughout your journey. It alerts our safety team and shares your live location with your emergency contacts.',
  },
  {
    question: 'Can I track my ride in real-time?',
    answer: 'Yes, live route tracking is available in the app. You can also share your trip details with family members for added safety and peace of mind.',
  },
  {
    question: 'What areas does Chauffit serve?',
    answer: 'Chauffit currently operates across Delhi NCR, covering Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. We are continuously expanding to new areas.',
  },
  {
    question: 'How do hourly bookings work?',
    answer: 'Book a driver by the hour starting at Rs.199. During your booked hours, you can make unlimited stops, round trips, and travel anywhere within the service area. Perfect for shopping trips, multiple meetings, or family outings.',
  },
];