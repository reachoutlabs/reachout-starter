import { Article } from '@/types/schema';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

interface BlogListProps {
  articles: Article[];
}

export default function BlogList({ articles }: BlogListProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="justify-top flex flex-col items-start"
            >
              <div className="relative w-full">
                <Link href={`/articles/${article.slug}`}>
                  <Image
                    src={`https://reachout-demo.reachoutapp.io/assets/${article.articleFeaturedImage}`}
                    width={800}
                    height={600}
                    alt={article.headline}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </Link>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={article.publishedDate}
                    className="text-gray-500"
                  >
                    {format(parseISO(article.publishedDate), 'MMMM dd, yyyy')}
                  </time>
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-gray-500"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  {article.author}
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-gray-500"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600"
                  >
                    {article.kicker}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/articles/${article.slug}`}>
                      <span className="absolute inset-0" />
                      {article.headline}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
