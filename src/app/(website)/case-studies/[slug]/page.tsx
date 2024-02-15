import client from "@/lib/reachout";
import CaseStudy from "./caseStudy";
import { Article } from "@/components/types/schema";
import CaseStudies from "../page";

export async function generateStaticParams() {
  const caseStudies = await client.readItems("Sample_case_studies", {
    fields: ["slug"]
  });

  return (
    caseStudies?.map(caseStudy => ({
      slug: caseStudy.slug
    })) || []
  );
}

type CaseStudyPageProps = {
  params: { slug: string };
};

export default async function Article({ params }: CaseStudyPageProps) {
  const caseStudies = await client.readItems("Sample_case_studies", {
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
        <CaseStudy caseStudies={caseStudies ?? []} />
      </main>
    </div>
  );
}
