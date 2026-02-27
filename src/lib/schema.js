export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.chauffit.in/#organization',
  name: 'Chauffit',
  description: 'Professional driver on demand service in Delhi NCR. Hire verified drivers to operate your own vehicle starting at ₹99.',
  url: 'https://www.chauffit.in',
  logo: 'https://www.chauffit.in/logo.png',
  image: 'https://www.chauffit.in/og-image.jpg',
  telephone: '+91-9876543210',
  email: 'chauffit@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi NCR',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.6139',
    longitude: '77.2090',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Delhi',
    },
    {
      '@type': 'City',
      name: 'Gurgaon',
    },
    {
      '@type': 'City',
      name: 'Noida',
    },
    {
      '@type': 'City',
      name: 'Faridabad',
    },
    {
      '@type': 'City',
      name: 'Ghaziabad',
    },
  ],
  priceRange: '₹99 - ₹999',
  openingHours: 'Mo-Su 00:00-23:59',
  sameAs: [
    'https://www.instagram.com/chauffit',
    'https://www.linkedin.com/company/chauffit/',
  ],
};

export const createJobPostingSchema = (type = 'driver') => {
  const isDriver = type === 'driver';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: isDriver ? 'Professional Driver Partner' : 'Delivery Biker Partner',
    description: isDriver 
      ? 'Join Chauffit as a driver partner and earn up to ₹40,000 per month. Drive customer vehicles with flexible hours.'
      : 'Join Chauffit as a biker partner and earn up to ₹25,000 per month with flexible hours.',
    datePosted: new Date().toISOString().split('T')[0],
    validThrough: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    employmentType: 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Chauffit',
      sameAs: 'https://www.chauffit.in',
      logo: 'https://www.chauffit.in/logo.png',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delhi',
        addressRegion: 'Delhi NCR',
        addressCountry: 'IN',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: {
        '@type': 'QuantitativeValue',
        minValue: isDriver ? 25000 : 15000,
        maxValue: isDriver ? 40000 : 25000,
        unitText: 'MONTH',
      },
    },
    responsibilities: isDriver
      ? 'Drive customer vehicles safely. Maintain professional conduct. Follow traffic rules.'
      : 'Deliver packages efficiently. Maintain punctuality. Ensure safe handling of deliveries.',
    qualifications: isDriver
      ? 'Valid driving license. Minimum 2 years driving experience. Clean driving record.'
      : 'Valid two-wheeler license. Knowledge of local areas. Smartphone with data.',
  };
};

export const createFAQSchema = (faqItems) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const createArticleSchema = (article, url) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.metaDescription,
  url: url,
  datePublished: '2026-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  author: {
    '@type': 'Organization',
    name: 'Chauffit',
    url: 'https://www.chauffit.in',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Chauffit',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.chauffit.in/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url,
  },
});

export const createBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});