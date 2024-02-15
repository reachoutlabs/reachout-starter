import client from "@/lib/reachout";
import Post from "./post"

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

type GenerateMetadataProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const posts = await client.readItems("Sample_content", {
    fields: ["headline"],
    filter: { slug: { _eq: params.slug } },
    limit: 1
  });

  return { title: posts?.[0]?.headline };
}

type PostPageProps = {
  params: { slug: string };
};

export default async function PostPage({ params }: PostPageProps) {
  const posts = await client.readItems("Sample_content", {
    fields: ["*", "*.*"],
    filter: { slug: { _eq: params.slug } },
    limit: 1
  });

  return <Post post={posts?.[0]} />;
}

export const revalidate = parseInt(process.env.NEXT_ISR_REVALIDATE ?? "60", 10);
