import { Article } from '@/types/schema';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

interface BlogFeaturedProps {
  articles: Article[];
}

export default function BlogFeatured({ articles }: BlogFeaturedProps) {
  return (
    <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-4xl lg:mx-0">
        <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <Link href="/articles" className="text-purple-800">
            Articles
          </Link>
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Web applications, content strategy, marketing automation and more
          curated by our editors.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {articles.map((article) => (
          <article
            key={article.id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
          >
            <Image
              src={`https://reachout-demo.reachoutapp.io/assets/${article.articleFeaturedImage}`}
              width={800}
              height={600}
              alt={article.headline}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time dateTime={article.publishedDate} className="mr-8">
                {format(parseISO(article.publishedDate), 'MMMM dd, yyyy')}
              </time>
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="flex gap-x-1.5">{article.author}</div>
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <span className="text-sm">{article.kicker}</span>
              </div>
            </div>
            <h3 className="mt-3 text-2xl font-semibold leading-snug text-white">
              <Link href={`/articles/${article.slug}`}>
                <span className="absolute inset-0" />
                {article.headline}
              </Link>
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
}
