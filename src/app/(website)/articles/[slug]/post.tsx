import { Article } from "@/components/types/schema";
import Html from "@/components/ui/html";
import { format, millisecondsToMinutes, parseISO } from "date-fns";
import Image from "next/image";

interface PostProps {
  post: Article | null;
}

export default function Post({ post }: PostProps) {
  
  if (!post) return null;
  
  return (
    <div className="bg-white lg:pt-24 px-8 lg:px-0">
        <article
        key={post.id}
        className=""
      >
      <div className="my-8 mx-auto max-w-4xl text-base leading-snug text-gray-700">
        <h2 className="text-xl font-semibold leading-7 text-purple-700 uppercase">
          {post.kicker}
        </h2>
        <h1 className="mt-4 text-5xl font-bold leading-snug tracking-tight text-gray-900">
          {post.headline}
        </h1>
        <p className="mt-8 text-xl font-regular leading-snug">
          <span className="text-gray-600 font-semibold">{post.category}</span> &bull; {post.excerpt}
          </p>
          <p className="mt-4 text-md font-medium leading-snug">Written by: {post.author}</p>
      </div>
      <div className="w-full">
        <Image
          src={`https://reachout-demo.reachoutapp.io/assets/${post.articleFeaturedImage}`}
          alt={post.headline || ""}
          width={1600}
          height={1200}
          className="w-full max-h-128"
        ></Image>
      </div>
      <div className="mt-10 max-w-3xl mx-auto text-lg prose font-regular leading-7 dark:prose-invert [&>p]:text-regular [&>blockquote]:my-8 [&>blockquote]:pl-4 [&>blockquote]:font-bold [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>h2]:mt-8 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-gray-700 [&>h3]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-700 [&>ol>li]:my-2 [&>ol]:my-4 [&>ol]:pl-4 [&>p>a]:font-bold [&>p>a]:text-purple-700 [&>p>a]:underline [&>p>img]:mx-auto [&>p>img]:my-8 [&>p>img]:w-[1200px] [&>p>img]:xl:ml-[-20%] [&>p>img]:xl:max-w-[140%] [&>p]:mt-4">
        <Html content={post.articleBody} />
      </div>
      </article>
    </div>
  );
}