import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudiesList from '@/components/case-studies/CaseStudiesList';
import client from '@/lib/reachout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ReachOut Starter Kit',
  description: 'Next.js starter kit for content and marketing websites',
};

export default async function CaseStudiesPage() {
  const caseStudies = await client.readItems('Sample_case_studies', {
    fields: ['*'],
    sort: ['-publishedDate'],
    filter: {
      status: {
        _eq: 'published',
      },
    },
  });

  return (
    <div className="mx-auto max-w-7xl bg-white py-36">
      <main className="isolate">
        <CaseStudiesHero />
        <CaseStudiesList caseStudies={caseStudies ?? []} />
      </main>
    </div>
  );
}
