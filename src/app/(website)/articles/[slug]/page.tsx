import client from "@/lib/reachout";
import Post from "./post";
import { Article } from "@/components/types/schema";

export async function generateStaticParams() {
  const posts = await client.readItems("Sample_content", {
    fields: ["slug"]
  });

  return (
    posts?.map(post => ({
      slug: post.slug
    })) || []
  );
}

type PostPageProps = {
  params: { slug: string };
};

export default async function Article({ params }: PostPageProps) {
  const posts = await client.readItems("Sample_content", {
    fields: ["*"],
    filter: {
      slug: {
        _eq: params.slug,
      },
    },
  });

  return (
    <div className="bg-white py-36 max-w-7xl mx-auto">
      <main className="isolate">
        <Post posts={posts ?? []} />
      </main>
    </div>
  );
}
