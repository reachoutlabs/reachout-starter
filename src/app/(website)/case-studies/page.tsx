import client from "@/lib/reachout";
import CaseStudiesHero from "@/components/case-studies/caseStudiesHero";
import CaseStudiesList from "@/components/case-studies/caseStudiesList";

export default async function CaseStudies() {

  const caseStudies = await client.readItems("Sample_case_studies", {
    fields: ["*"],
    sort: ["-publishedDate"],
    filter: {
      status: {
        _eq: "published",
      },
    },
  });

  return (
    <div className="bg-white py-36 max-w-7xl mx-auto">
      <main className="isolate">
        <CaseStudiesHero />
        <CaseStudiesList caseStudies={caseStudies ?? []} />
      </main>
    </div>
  );
}
