export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Chauffit',
  description: 'Professional drivers on demand for your vehicle in Delhi NCR. Book verified drivers starting at Rs.99.',
  url: 'https://www.chauffit.in',
  telephone: '+91-XXXXXXXXXX',
  email: 'chauffit@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi NCR',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.6139',
    longitude: '77.2090',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '28.6139',
      longitude: '77.2090',
    },
    geoRadius: '50000',
  },
  priceRange: 'Rs.99 - Rs.999',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.instagram.com/chauffit',
    'https://www.linkedin.com/company/chauffit/',
  ],
});

export const generateJobPostingSchema = (jobType) => {
  const isDriver = jobType === 'driver';
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: isDriver ? 'Professional Driver' : 'Delivery Biker',
    description: isDriver
      ? 'Earn up to Rs.40,000+ per month as a professional driver with Chauffit. Flexible hours, daily payouts.'
      : 'Earn up to Rs.25,000+ per month as a delivery biker with Chauffit. Flexible schedule, quick payouts.',
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
        addressLocality: 'Delhi NCR',
        addressRegion: 'Delhi',
        addressCountry: 'IN',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: {
        '@type': 'QuantitativeValue',
        value: isDriver ? 40000 : 25000,
        unitText: 'MONTH',
      },
    },
    qualifications: isDriver
      ? 'Valid driving license, minimum 2 years driving experience'
      : 'Valid two-wheeler license, own bike preferred',
    responsibilities: isDriver
      ? 'Drive customer vehicles safely, maintain punctuality, provide professional service'
      : 'Deliver packages on time, maintain communication, ensure safe handling',
  };
};

export const generateFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateArticleSchema = (article) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  image: article.image || 'https://www.chauffit.in/og-image.jpg',
  author: {
    '@type': 'Organization',
    name: 'Chauffit',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Chauffit',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.chauffit.in/logo.png',
    },
  },
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://www.chauffit.in/blog/${article.slug}`,
  },
});

export const generateBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});