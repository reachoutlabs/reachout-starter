import Image from "next/image";
import { CaseStudy } from "../types/schema";
import { format, parseISO } from "date-fns";
import Link from "next/link";

interface HomeProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesList({ caseStudies }: HomeProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {caseStudies.map((caseStudy) => (
              <article
                key={caseStudy.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Link href={`/case-studies/${caseStudy.slug}`}>
                    <Image
                      src={`https://reachout-demo.reachoutapp.io/assets/${caseStudy.caseFeaturedImage}`}
                      alt={caseStudy.headline}
                      width={264}
                      height={396}
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-contain"
                    />
                  </Link>
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-md font-semibold">
                    <span className="text-slate-500 font-regular">Customer:</span> {caseStudy.customer}
                  </div>
                  <div className="group relative max-w-xl">
                    <Link href={`/case-studies/${caseStudy.slug}`}>
                      <h3 className="mt-3 text-3xl font-bold leading-snug text-gray-900 group-hover:text-gray-600">
                        <a href={caseStudy.slug}>
                          <span className="absolute inset-0" />
                          {caseStudy.headline}
                        </a>
                      </h3>
                    </Link>
                    <p className="mt-5 text-md leading-snug text-gray-600">
                      {caseStudy.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
