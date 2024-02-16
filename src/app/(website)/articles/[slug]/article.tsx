import Html from '@/components/ui/Html';
import { Article } from '@/types/schema';
import Image from 'next/image';

interface ArticleProps {
  article: Article | null;
}

export default function Article({ article }: ArticleProps) {
  if (!article) return null;

  return (
    <div className="bg-white px-8 lg:px-0 lg:pt-24">
      <article key={article.id} className="">
        <div className="mx-auto my-8 max-w-4xl text-base leading-snug text-gray-700">
          <h2 className="text-xl font-semibold uppercase leading-7 text-purple-700">
            {article.kicker}
          </h2>
          <h1 className="mt-4 text-5xl font-bold leading-snug tracking-tight text-gray-900">
            {article.headline}
          </h1>
          <p className="font-regular mt-8 text-xl leading-snug">
            <span className="font-semibold text-gray-600">
              {article.category}
            </span>{' '}
            &bull; {article.excerpt}
          </p>
          <p className="text-md mt-4 font-medium leading-snug">
            Written by: {article.author}
          </p>
        </div>
        <div className="w-full">
          <Image
            src={`https://reachout-demo.reachoutapp.io/assets/${article.articleFeaturedImage}`}
            alt={article.headline || ''}
            width={1600}
            height={1200}
            className="max-h-128 w-full"
          ></Image>
        </div>
        <div className="prose font-regular dark:prose-invert [&>p]:text-regular mx-auto mt-10 max-w-3xl text-lg leading-7 [&>blockquote]:my-8 [&>blockquote]:pl-4 [&>blockquote]:font-bold [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>h2]:mt-8 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-gray-700 [&>h3]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-700 [&>ol>li]:my-2 [&>ol]:my-4 [&>ol]:pl-4 [&>p>a]:font-bold [&>p>a]:text-purple-700 [&>p>a]:underline [&>p>img]:mx-auto [&>p>img]:my-8 [&>p>img]:w-[1200px] [&>p>img]:xl:ml-[-20%] [&>p>img]:xl:max-w-[140%] [&>p]:mt-4">
          <Html content={article.articleBody} />
        </div>
      </article>
    </div>
  );
}
