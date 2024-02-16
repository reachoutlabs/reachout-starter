import client from '@/lib/reachout';
import { Metadata } from 'next';
import CaseStudy from './caseStudy';

export async function generateStaticParams() {
  const caseStudies = await client.readItems('Sample_case_studies', {
    fields: ['slug'],
  });

  return (
    caseStudies?.map((caseStudy) => ({
      slug: caseStudy.slug,
    })) || []
  );
}

type CaseStudyPageProps = {
  params: { slug: string };
};

export const metadata: Metadata = {
  title: 'ReachOut Starter Kit',
  description: 'Next.js starter kit for content and marketing websites',
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudies = await client.readItems('Sample_case_studies', {
    fields: ['*'],
    filter: {
      slug: {
        _eq: params.slug,
      },
    },
  });

  return (
    <div className="mx-auto max-w-7xl bg-white py-36">
      <main className="isolate">
        <CaseStudy caseStudies={caseStudies ?? []} />
      </main>
    </div>
  );
}
