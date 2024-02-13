"use client";

import ArticlesHero from "@/components/articles/articlesHero";
import BlogFeatured from "@/components/blogFeatured";
import BlogList from "@/components/blogList";

export default function Articles() {

  return (
    <div className="bg-white py-36 max-w-7xl mx-auto">
      <main className="isolate">
        <ArticlesHero />
        <BlogFeatured />
        <BlogList />
      </main>
    </div>
  );
}
