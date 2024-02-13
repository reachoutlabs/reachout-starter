"use client";
import BlogFeatured from "@/components/blogFeatured";
import BlogList from "@/components/blogList";
import CaseStudiesHero from "@/components/case-studies/caseStudiesHero";

export default function CaseStudies() {

  return (
    <div className="bg-white py-36 max-w-7xl mx-auto">
      <main className="isolate">
        <CaseStudiesHero />
        <BlogFeatured />
        <BlogList />
      </main>
    </div>
  );
}
