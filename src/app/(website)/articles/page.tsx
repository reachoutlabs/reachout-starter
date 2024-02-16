import BlogFeatured from '@/components/BlogFeatured';
import BlogList from '@/components/BlogList';
import client from '@/lib/reachout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ReachOut Starter Kit',
  description: 'Next.js starter kit for content and marketing websites',
};

export default async function ArticlesPage() {
  const articles = await client.readItems('Sample_content', {
    fields: ['*'],
    sort: ['-publishedDate'],
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

  return (
    <div className="mx-auto max-w-7xl bg-white py-36">
      <main className="isolate">
        <BlogFeatured articles={featuredArticles ?? []} />
        <BlogList articles={articles ?? []} />
      </main>
    </div>
  );
}
