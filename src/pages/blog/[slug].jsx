import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BLOG_ARTICLES, APP_LINKS } from '@/lib/constants';
import { createArticleSchema, createBreadcrumbSchema } from '@/lib/schema';
import { ArrowRight, ChevronRight, Download } from '@/components/Icons';

const blogContent = {
  'hire-driver-on-demand-delhi-ncr-complete-guide-2026': {
    intro: 'Looking for a reliable way to hire a professional driver in Delhi NCR? This comprehensive guide covers everything you need to know about on-demand driver services, pricing, and why Chauffit is the smart choice for 2026.',
    sections: [
      {
        title: 'What is Driver on Demand?',
        content: 'Driver on Demand is a service where professional drivers come to your location to operate YOUR vehicle. Unlike traditional cab services, you travel in the comfort of your own car while a verified, trained driver handles the driving. This is perfect for situations where you need to reach somewhere but cannot or prefer not to drive yourself.',
      },
      {
        title: 'Why Choose Chauffit?',
        content: 'Chauffit stands out with verified and trained drivers, transparent pricing starting at just Rs.99, flexible booking options including one-way and hourly packages, 24/7 availability across Delhi NCR, live tracking and SOS features, and a user-friendly mobile app for quick bookings.',
      },
      {
        title: 'How Pricing Works',
        content: 'One-way trips start at Rs.99, making it affordable for short distances. For longer journeys or multiple stops, hourly packages starting at Rs.199 offer unlimited stops and round trips within your booked hours. This transparent pricing ensures you always know what you are paying.',
      },
      {
        title: 'Booking Your First Driver',
        content: 'Getting started is simple: Download the Chauffit app from Google Play or App Store, enter your pickup location and destination, choose between one-way or hourly booking, confirm and wait for your driver to arrive. The entire process takes less than a minute.',
      },
    ],
  },
  'why-you-should-never-drink-and-drive-book-driver-delhi-ncr': {
    intro: 'Drunk driving remains one of the leading causes of road accidents in India. This article explains the dangers and presents a safer, smarter alternative for getting home after a night out in Delhi NCR.',
    sections: [
      {
        title: 'The Real Dangers of Drunk Driving',
        content: 'Alcohol impairs judgment, slows reaction time, and reduces coordination. Even small amounts can significantly affect your ability to drive safely. In Delhi NCR, drunk driving accidents have claimed thousands of lives and caused countless injuries.',
      },
      {
        title: 'Legal Consequences',
        content: 'Drunk driving in India can result in imprisonment, heavy fines, license suspension, and a permanent mark on your record. The legal blood alcohol limit is 0.03%, which can be reached with just one drink for many people.',
      },
      {
        title: 'The Smart Alternative',
        content: 'With Chauffit, you do not have to choose between enjoying your evening and getting home safely. Book a professional driver who will take you AND your car home. No need to leave your vehicle behind or take a cab.',
      },
      {
        title: 'How It Works After a Party',
        content: 'Open the Chauffit app when you are ready to leave, book a driver to your location, the driver arrives and takes over your vehicle, you sit back and relax while being driven home safely. Available 24/7, even at 3 AM.',
      },
    ],
  },
  'driver-jobs-delhi-ncr-flexible-income-opportunity': {
    intro: 'Looking for flexible earning opportunities in Delhi NCR? Discover how you can earn up to Rs.40,000 per month as a professional driver with Chauffit, even without owning a vehicle.',
    sections: [
      {
        title: 'Why Drive with Chauffit?',
        content: 'Chauffit offers a unique opportunity: you drive customer vehicles, meaning you do not need to own or maintain a car. Earn competitive income with flexible hours that fit your schedule. Weekly payouts ensure you have regular access to your earnings.',
      },
      {
        title: 'Earning Potential',
        content: 'Active drivers on Chauffit earn between Rs.25,000 to Rs.40,000+ per month depending on hours worked and location. Additional incentives and bonuses can boost your earnings further during peak demand periods.',
      },
      {
        title: 'Requirements to Join',
        content: 'To become a Chauffit driver, you need a valid LMV driving license, minimum 2 years of driving experience, age between 21-55 years, a smartphone with internet, and Aadhar and PAN cards for verification.',
      },
      {
        title: 'How to Apply',
        content: 'Getting started is easy: Download the Chauffit app, select the driver registration option, submit your documents for verification, complete the onboarding process, and start accepting rides and earning.',
      },
    ],
  },
  'increase-productivity-during-commute-hire-driver-delhi-ncr': {
    intro: 'Your daily commute does not have to be wasted time. Learn how hiring a driver can transform your travel time into productive work hours, helping you get more done every day.',
    sections: [
      {
        title: 'The Hidden Cost of Driving',
        content: 'The average Delhi NCR professional spends 1-2 hours daily commuting. That is 250-500 hours per year spent just driving. Imagine what you could accomplish if you could use that time productively instead of navigating traffic.',
      },
      {
        title: 'Work While You Travel',
        content: 'With a Chauffit driver handling your vehicle, you can take calls, respond to emails, prepare for meetings, review documents, or even conduct video conferences. Your car becomes a mobile office.',
      },
      {
        title: 'Mental Benefits',
        content: 'Beyond productivity, not having to drive reduces stress and mental fatigue. Arrive at work fresh and ready to perform. Leave work and actually decompress instead of battling traffic. Your mental health will thank you.',
      },
      {
        title: 'Cost vs Value',
        content: 'Consider the value of your time. If your hourly rate is Rs.500 and you save 2 hours daily by working during commute, that is Rs.1,000 in value. Chauffit hourly packages start at just Rs.199, making it a worthwhile investment.',
      },
    ],
  },
  'spend-more-time-with-family-professional-driver-handle-driving': {
    intro: 'Family road trips should be about creating memories together, not stressing over driving. Discover how a professional driver can transform your family travel experience.',
    sections: [
      {
        title: 'The Problem with Family Road Trips',
        content: 'When you are driving, you cannot fully engage with your family. You miss conversations, cannot help with restless kids, and arrive exhausted from hours of focused driving. The journey becomes a chore instead of part of the adventure.',
      },
      {
        title: 'Be Present with Your Family',
        content: 'With a Chauffit driver, you can sit with your family, play games, have conversations, help with the kids, take photos, and actually enjoy the journey. The road trip becomes quality family time.',
      },
      {
        title: 'Safety First',
        content: 'Professional drivers are trained and experienced in handling long journeys. They know how to manage fatigue, handle different road conditions, and ensure passenger safety. Your family travels in safer hands.',
      },
      {
        title: 'Perfect for All Occasions',
        content: 'Whether it is a weekend getaway, visiting relatives, a pilgrimage, or a vacation, having a driver means you can focus on what matters most: spending quality time with your loved ones.',
      },
    ],
  },
  'relax-after-work-let-driver-handle-traffic-delhi-ncr': {
    intro: 'After a demanding workday, the last thing you need is to battle Delhi NCR traffic. Learn how hiring a driver for your commute can help you decompress and arrive home refreshed.',
    sections: [
      {
        title: 'The Evening Commute Struggle',
        content: 'Rush hour traffic in Delhi NCR is notoriously stressful. After 8+ hours of work, adding another hour or more of intense driving only adds to your fatigue and stress levels. This daily grind takes a toll on your health and wellbeing.',
      },
      {
        title: 'Transform Your Commute',
        content: 'With a Chauffit driver, your evening commute becomes relaxation time. Listen to music, catch up on podcasts, meditate, take a power nap, or simply watch the world go by. Let someone else handle the traffic.',
      },
      {
        title: 'Better Work-Life Balance',
        content: 'When you do not have to drive, the transition from work to home becomes smoother. You can mentally switch off from work mode and be present when you walk through your door. Your family will notice the difference.',
      },
      {
        title: 'Affordable Daily Option',
        content: 'With one-way trips starting at Rs.99, using Chauffit for your evening commute is more affordable than you might think. Consider it an investment in your mental health and family relationships.',
      },
    ],
  },
  'earn-up-to-40000-per-month-driver-chauffit': {
    intro: 'Want to earn a good income with flexible hours? Learn how Chauffit driver partners are earning up to Rs.40,000 or more per month, even without owning a vehicle.',
    sections: [
      {
        title: 'The Chauffit Opportunity',
        content: 'Unlike traditional driving jobs, Chauffit lets you earn without vehicle ownership. You drive customer vehicles, eliminating the need for EMIs, fuel costs, and maintenance expenses. All earnings go directly into your pocket.',
      },
      {
        title: 'Flexible Schedule',
        content: 'You choose when to work. Morning, evening, weekends, or whenever suits you. This flexibility makes it perfect as a primary income source or a side gig alongside other commitments.',
      },
      {
        title: 'Earnings Breakdown',
        content: 'Top earners on Chauffit make Rs.40,000+ monthly. This includes base earnings from trips plus incentives, bonuses during peak hours, and tips from satisfied customers. Weekly payouts ensure regular income.',
      },
      {
        title: 'Getting Started',
        content: 'Requirements are straightforward: valid driving license, 2+ years experience, smartphone with internet. Download the app, complete verification, and start earning within days.',
      },
    ],
  },
  'earn-up-to-25000-per-month-biker-chauffit': {
    intro: 'Own a two-wheeler? Turn it into an earning machine with Chauffit. Discover how bikers are earning up to Rs.25,000 per month with flexible delivery opportunities.',
    sections: [
      {
        title: 'Biker Partner Opportunity',
        content: 'Chauffit is expanding its delivery network and looking for biker partners. Use your own two-wheeler to complete deliveries in your area and earn competitive income with the flexibility to choose your hours.',
      },
      {
        title: 'Why Partner with Chauffit?',
        content: 'Competitive per-delivery rates, incentives for high performers, weekly payouts to your bank, training and support provided, and the freedom to work when you want. Your bike, your schedule, your earnings.',
      },
      {
        title: 'Requirements',
        content: 'Valid two-wheeler license, own bike or scooter with valid RC, age 18-45 years, smartphone with internet, and knowledge of local areas. Simple verification process to get started.',
      },
      {
        title: 'Maximize Your Earnings',
        content: 'Work during peak hours for higher rates, maintain good ratings for premium deliveries, complete incentive targets for bonuses. Active bikers consistently earn Rs.20,000-25,000 monthly.',
      },
    ],
  },
  'complete-guide-hiring-driver-delhi-ncr-2026': {
    intro: 'A comprehensive comparison of all driver hiring options available in Delhi NCR for 2026. From traditional agencies to modern apps, find the best solution for your needs.',
    sections: [
      {
        title: 'Traditional Driver Agencies',
        content: 'Monthly salary-based drivers from agencies typically cost Rs.15,000-25,000 per month plus food and accommodation. While reliable, this option involves long-term commitment and management hassles.',
      },
      {
        title: 'On-Demand Apps Like Chauffit',
        content: 'Pay only when you need a driver. Starting at Rs.99 for one-way trips, on-demand services offer flexibility without commitment. Ideal for occasional needs or specific situations like parties, travel, or busy days.',
      },
      {
        title: 'Comparing Costs',
        content: 'If you need a driver less than 15-20 times per month, on-demand services are more economical. For daily use, calculate your monthly cost with app pricing versus full-time hire to determine the best value.',
      },
      {
        title: 'Why Chauffit Stands Out',
        content: 'Verified drivers with background checks, transparent pricing with no hidden costs, flexible one-way and hourly options, live tracking and safety features, and 24/7 availability across Delhi NCR.',
      },
    ],
  },
  'safe-alternative-driving-at-night-delhi-ncr': {
    intro: 'Night driving in Delhi NCR comes with unique challenges and risks. Discover the safer alternative that lets you travel at night without the stress and danger of driving yourself.',
    sections: [
      {
        title: 'Risks of Night Driving',
        content: 'Reduced visibility, fatigue, drunk drivers on the road, and poorly lit stretches make night driving dangerous. Statistics show that accident rates increase significantly after dark, especially in metropolitan areas.',
      },
      {
        title: 'When You Need to Travel at Night',
        content: 'Late flights, night shifts, social events, medical emergencies. There are many situations where night travel is unavoidable. The question is how to do it safely.',
      },
      {
        title: 'The Chauffit Solution',
        content: 'Book a professional driver who is trained and rested for night driving. They handle the challenging conditions while you travel safely in your own vehicle. Available 24/7, even at 2 AM.',
      },
      {
        title: 'Peace of Mind Features',
        content: 'Live GPS tracking, SOS button for emergencies, share trip details with family, verified drivers with background checks. Chauffit ensures your night travel is as safe as possible.',
      },
    ],
  },
};

export default function BlogArticle({ article }) {
  if (!article) {
    return <div>Article not found</div>;
  }

  const content = blogContent[article.slug] || {
    intro: article.excerpt,
    sections: [],
  };

  const articleSchema = createArticleSchema(article, `https://www.chauffit.in/blog/${article.slug}`);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://www.chauffit.in' },
    { name: 'Blog', url: 'https://www.chauffit.in/blog' },
    { name: article.title, url: `https://www.chauffit.in/blog/${article.slug}` },
  ]);

  const relatedArticles = BLOG_ARTICLES.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  ).slice(0, 3);

  return (
    <>
      <NextSeo
        title={article.metaTitle}
        description={article.metaDescription}
        canonical={`https://www.chauffit.in/blog/${article.slug}`}
        openGraph={{
          url: `https://www.chauffit.in/blog/${article.slug}`,
          title: article.metaTitle,
          description: article.metaDescription,
          type: 'article',
          article: {
            publishedTime: '2026-01-01',
            modifiedTime: new Date().toISOString(),
            authors: ['Chauffit'],
            tags: [article.category, 'Driver', 'Delhi NCR'],
          },
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <article className="min-h-screen pt-28 pb-20">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-surface-400 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-surface-300 truncate max-w-[200px]">{article.title}</span>
          </motion.nav>

          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-burgundy-900/40 text-burgundy-300 border border-burgundy-700/30">
                  {article.category}
                </span>
                <span className="text-sm text-surface-500">{article.readTime}</span>
              </div>

              <h1 className="heading-lg text-white mb-6">{article.title}</h1>
              
              <p className="body-xl text-surface-300">{content.intro}</p>
            </motion.header>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              {content.sections.map((section, index) => (
                <section key={index} className="mb-10">
                  <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
                  <p className="text-surface-300 leading-relaxed">{section.content}</p>
                </section>
              ))}
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel p-8 md:p-10 my-12 text-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to Try Chauffit?
              </h3>
              <p className="text-surface-300 mb-6 max-w-lg mx-auto">
                Download the app now and book your first professional driver. Starting at just Rs.99.
              </p>
              <a
                href={APP_LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <Download className="w-5 h-5" />
                Download Now
              </a>
            </motion.div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-16"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Related Articles</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="glass-card glass-card-hover p-5 group"
                    >
                      <span className="text-xs text-burgundy-400 font-medium">{related.category}</span>
                      <h4 className="text-base font-medium text-white mt-2 group-hover:text-burgundy-400 transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <div className="flex items-center gap-1 mt-3 text-sm text-surface-400 group-hover:text-burgundy-400 transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = BLOG_ARTICLES.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = BLOG_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
}