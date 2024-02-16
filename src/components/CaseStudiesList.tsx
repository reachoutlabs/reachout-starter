import { CaseStudy } from '@/types/schema';
import Link from 'next/link';

interface CaseStudiesListProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesList({ caseStudies }: CaseStudiesListProps) {
  return (
    <div className="mx-auto max-w-7xl bg-white pb-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 px-6 lg:grid-cols-2 lg:gap-y-24 lg:px-8">
        <h2 className="text-4xl font-bold">
          <Link href="/case-studies" className="text-slate-700">
            Case studies
          </Link>
        </h2>
        <div className="mx-auto w-full max-w-2xl pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:pt-0">
          <div className="">
            {caseStudies.map((caseStudy) => (
              <article key={caseStudy.id} className="py-12">
                <div className="group relative max-w-xl">
                  <div className="text-md flex items-center gap-x-4 font-semibold">
                    <span className="font-medium text-gray-500">Customer:</span>{' '}
                    {caseStudy.customer}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold leading-snug text-slate-700 group-hover:text-slate-500">
                    <Link href={`/case-studies/${caseStudy.slug}`}>
                      <span className="absolute inset-0" />
                      {caseStudy.headline}
                    </Link>
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {caseStudy.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
