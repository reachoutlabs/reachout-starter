import client from "@/lib/reachout";
import BlogFeatured from "@/components/blogFeatured";
import BlogList from "@/components/blogList";

export default async function Articles() {
  const posts = await client.readItems("Sample_content", {
    fields: ["*"],
    sort: ["-publishedDate"],
    filter: {
      status: {
        _eq: "published",
      },
      tag: {
        _neq: "Featured",
      },
    },
  });

  const featuredPosts = await client.readItems("Sample_content", {
    fields: ["*"],
    sort: ["-publishedDate"],
    filter: {
      status: {
        _eq: "published",
      },
      tag: {
        _eq: "Featured",
      },
    },
  });

  return (
    <div className="bg-white py-36 max-w-7xl mx-auto">
      <main className="isolate">
        <BlogFeatured posts={featuredPosts ?? []} />
        <BlogList posts={posts ?? []} />
      </main>
    </div>
  );
}
