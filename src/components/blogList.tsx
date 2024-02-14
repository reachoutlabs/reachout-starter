import Image from "next/image";
import { Article } from "./types/schema";
import { format, parseISO } from "date-fns";

interface HomeProps {
  posts: Article[];
}

export default function BlogList({ posts }: HomeProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-top"
            >
              <div className="relative w-full">
                <Image
                  src={`https://reachout-demo.reachoutapp.io/assets/${post.articleFeaturedImage}`}
                  width={800}
                  height={600}
                  alt={post.headline}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.publishedDate} className="text-gray-500">
                    {format(parseISO(post.publishedDate), "MMMM dd, yyyy")}
                  </time>
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-gray-500"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  {post.author}
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-gray-500"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <a
                    href={post.kicker}
                    className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600"
                  >
                    {post.kicker}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.slug}>
                      <span className="absolute inset-0" />
                      {post.headline}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.excerpt}
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
