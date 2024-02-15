import { CaseStudy } from "@/components/types/schema";
import Html from "@/components/ui/html";
import { format, millisecondsToMinutes, parseISO } from "date-fns";
import Image from "next/image";

interface CaseStudyProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudy({ caseStudies }: CaseStudyProps) {
  return (
    <div className="bg-white pt-24">
      {caseStudies.slice(0, 1).map((caseStudy) => (
        <article
        key={caseStudy.id}
        className=""
      >
      <div className="mb-16 grid grid-cols-2 items-center">
        <Image
          src={`https://reachout-demo.reachoutapp.io/assets/${caseStudy.caseFeaturedImage}`}
          alt={caseStudy.headline || ""}
          width={600}
          height={600}
          className="w-auto h-[600px] mx-auto shadow-lg rounded-md"
        ></Image>
        <div className="mx-auto max-w-4xl text-base leading-snug text-gray-700">
        <h2 className="text-xl font-semibold leading-7 text-slate-600 uppercase">
          {caseStudy.customer}
        </h2>
        <h1 className="mt-4 text-5xl font-bold leading-snug tracking-tight text-gray-900">
          {caseStudy.headline}
        </h1>
        <p className="mt-8 text-xl font-medium leading-snug">
          <span className="text-gray-600 font-semibold">{caseStudy.customer} &bull;</span> {caseStudy.excerpt}
          </p>
          <p className="mt-4 text-md font-medium leading-snug">Written by: {caseStudy.author}</p>
      </div>
      </div>
      <div className="mt-10 max-w-3xl mx-auto text-lg prose font-regular leading-7 dark:prose-invert [&>p]:text-regular [&>p]:mt-4">
        <Html content={caseStudy.caseContent} />
      </div>
      </article>
      ))}
    </div>
  );
}