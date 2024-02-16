import BlogFeatured from '@/components/BlogFeatured';
import BlogList from '@/components/BlogList';
import CaseStudiesList from '@/components/CaseStudiesList';
import Faq from '@/components/Faq';
import GettingStarted from '@/components/GettingStarted';
import Hero from '@/components/Hero';
import LogoCloud from '@/components/LogoCloud';
import NewsletterSignup from '@/components/NewsletterSignup';
import Pricing from '@/components/Pricing';
import PrimaryFeatures from '@/components/PrimaryFeatures';
import SecondaryFeatures from '@/components/SecondaryFeatures';
import Values from '@/components/Values';
import client from '@/lib/reachout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ReachOut Starter Kit',
  description: 'Next.js starter kit for content and marketing websites',
};

export default async function Home() {
  const articles = await client.readItems('Sample_content', {
    fields: ['*'],
    sort: ['-publishedDate'],
    limit: 5,
    filter: {
      status: {
        _eq: 'published',
      },
      tag: {
        _neq: 'Featured',
      },
    },
  });

  const featuredArticles = await client.readItems('Sample_content', {
    fields: ['*'],
    sort: ['-publishedDate'],
    limit: 2,
    filter: {
      status: {
        _eq: 'published',
      },
      tag: {
        _eq: 'Featured',
      },
    },
  });

  const caseStudies = await client.readItems('Sample_case_studies', {
    fields: ['*'],
    sort: ['-publishedDate'],
    limit: 2,
    filter: {
      status: {
        _eq: 'published',
      },
    },
  });

  return (
    <div className="bg-white">
      <main className="isolate">
        <Hero />
        <LogoCloud />
        <BlogFeatured articles={featuredArticles ?? []} />
        <BlogList articles={articles ?? []} />
        <Values />
        <CaseStudiesList caseStudies={caseStudies ?? []} />
        <NewsletterSignup />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <GettingStarted />
        <Pricing />
        <Faq />
      </main>
    </div>
  );
}

export const revalidate = parseInt(process.env.NEXT_ISR_REVALIDATE ?? '60', 10);
