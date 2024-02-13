"use client";
import CaseStudiesHero from "@/components/case-studies/caseStudiesHero";
import CaseStudiesList from "@/components/case-studies/caseStudiesList";

export default function CaseStudies() {

  return (
    <div className="bg-white py-36 max-w-7xl mx-auto">
      <main className="isolate">
        <CaseStudiesHero />
        <CaseStudiesList />
      </main>
    </div>
  );
}
