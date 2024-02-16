import Html from '@/components/ui/Html';
import { CaseStudy } from '@/types/schema';
import Image from 'next/image';
import Link from 'next/link';

interface CaseStudyProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudy({ caseStudies }: CaseStudyProps) {
  return (
    <div className="bg-white px-8 lg:px-0 lg:pt-8">
      {caseStudies.slice(0, 1).map((caseStudy) => (
        <article key={caseStudy.id} className="">
          <div className="mb-16 grid grid-cols-1 items-center lg:grid-cols-2">
            <Image
              src={`https://reachout-demo.reachoutapp.io/assets/${caseStudy.caseFeaturedImage}`}
              alt={caseStudy.headline || ''}
              width={600}
              height={600}
              className="mx-auto h-[600px] w-auto rounded-md shadow-lg"
            />
            <div className="mx-auto mt-8 max-w-4xl text-base leading-snug text-gray-700">
              <h2 className="text-xl font-semibold leading-7 text-slate-600">
                <span className="font-regular text-slate-500">Customer: </span>
                {caseStudy.customer}
              </h2>
              <h1 className="mt-4 text-5xl font-bold leading-snug tracking-tight text-slate-800">
                {caseStudy.headline}
              </h1>
              <p className="mt-8 text-xl font-medium leading-snug text-slate-600">
                {caseStudy.excerpt}
              </p>
              <p className="text-md mt-6 font-medium leading-snug">
                Project URL:{' '}
                <Link href={caseStudy.project_url} target="_blank">
                  <span className="text-purple-700">
                    {caseStudy.project_url}
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="prose font-regular dark:prose-invert [&>p]:text-regular mx-auto mt-10 max-w-3xl text-lg leading-7 [&>p]:mt-4">
            <Html content={caseStudy.caseContent} />
          </div>
        </article>
      ))}
    </div>
  );
}
