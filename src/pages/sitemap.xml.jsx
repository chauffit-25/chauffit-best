import { BLOG_ARTICLES } from '@/lib/constants';

const BASE_URL = 'https://www.chauffit.in';

function generateSiteMap() {
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/driver', priority: '0.8', changefreq: 'monthly' },
    { url: '/biker', priority: '0.8', changefreq: 'monthly' },
    { url: '/faq', priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  ];

  const blogPages = BLOG_ARTICLES.map((article) => ({
    url: `/blog/${article.slug}`,
    priority: article.priority <= 3 ? '0.9' : '0.7',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...blogPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

function SiteMap() {
  // getServerSideProps handles the response
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;