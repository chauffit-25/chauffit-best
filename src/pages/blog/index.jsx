import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BLOG_ARTICLES } from '@/lib/constants';
import { ArrowRight } from '@/components/Icons';

const categoryColors = {
  Guide: 'bg-burgundy-900/40 text-burgundy-300 border-burgundy-700/30',
  Safety: 'bg-red-900/30 text-red-300 border-red-700/30',
  Lifestyle: 'bg-deer-900/30 text-deer-300 border-deer-700/30',
  Family: 'bg-blue-900/30 text-blue-300 border-blue-700/30',
  Careers: 'bg-green-900/30 text-green-300 border-green-700/30',
};

export default function BlogIndex() {
  const sortedArticles = [...BLOG_ARTICLES].sort((a, b) => a.priority - b.priority);

  return (
    <>
      <NextSeo
        title="Blog | Driver Hiring Tips & Career Opportunities"
        description="Expert tips on hiring drivers in Delhi NCR, road safety, productive commuting, and career opportunities with Chauffit. Read our latest articles."
        canonical="https://www.chauffit.in/blog"
        openGraph={{
          url: 'https://www.chauffit.in/blog',
          title: 'Chauffit Blog - Driver Hiring Tips & Career Opportunities',
          description: 'Expert tips on hiring drivers, road safety, and career opportunities in Delhi NCR.',
        }}
      />

      <div className="min-h-screen pt-28 pb-20">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy-900/40 border border-burgundy-700/30 text-burgundy-300 text-sm font-medium mb-6">
              Chauffit Blog
            </span>
            <h1 className="heading-xl text-white mb-6">
              Insights & <span className="gradient-text-burgundy">Tips</span>
            </h1>
            <p className="body-lg text-surface-300">
              Expert advice on hiring drivers, road safety, productive commuting, and career opportunities in Delhi NCR.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sortedArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/blog/${article.slug}`} className="group block h-full">
                  <div className="glass-card glass-card-hover h-full p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[article.category] || categoryColors.Guide}`}>
                        {article.category}
                      </span>
                      <span className="text-xs text-surface-500">{article.readTime}</span>
                    </div>

                    <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-burgundy-400 transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-sm text-surface-400 mb-4 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-surface-400 group-hover:text-burgundy-400 transition-colors">
                      <span>Read article</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}