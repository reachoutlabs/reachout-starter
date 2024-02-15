import { Article } from "@/components/types/schema";
import Html from "@/components/ui/html";
import { format, millisecondsToMinutes, parseISO } from "date-fns";
import Image from "next/image";

interface PostProps {
  posts: Article[];
}

export default function Post({ posts }: PostProps) {
  return (
    <div className="bg-white pt-24">
      {posts.slice(0, 1).map((post) => (
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
        <p className="mt-8 text-xl font-medium leading-snug">
          <span className="text-gray-600 font-semibold">{post.category} &bull;</span> {post.excerpt}
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
      <div className="mt-10 max-w-3xl mx-auto text-lg prose font-regular leading-7 dark:prose-invert [&>p]:text-regular [&>p]:mt-4">
        <Html content={post.articleBody} />
      </div>
      </article>
      ))}
    </div>
  );
}
