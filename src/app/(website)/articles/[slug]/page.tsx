import client from '@/lib/reachout';
import { Metadata } from 'next';
import Article from './article';

export async function generateStaticParams() {
  const articles = await client.readItems('Sample_content', {
    fields: ['slug'],
  });

  return (
    articles?.map((article) => ({
      slug: article.slug,
    })) || []
  );
}

type ArticlePageProps = {
  params: { slug: string };
};

export const metadata: Metadata = {
  title: 'ReachOut Starter Kit',
  description: 'Next.js starter kit for content and marketing websites',
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const articles = await client.readItems('Sample_content', {
    fields: ['*'],
    filter: {
      slug: {
        _eq: params.slug,
      },
    },
  });

  return (
    <div className="mx-auto max-w-7xl bg-white py-36">
      <main className="isolate">
        <Article article={articles ? articles[0] : null} />
      </main>
    </div>
  );
}
