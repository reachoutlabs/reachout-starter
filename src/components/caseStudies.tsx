import Link from "next/link"
import { CaseStudy } from "./types/schema";
import { format, parseISO } from "date-fns";

interface HomeProps {
  caseStudies: CaseStudy[];
}

  const posts = [
    {
        id: 1,
        headline: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        featuredImage:
          '/ilmanifesto.png',
        publishedDate: '2024-01-30',
        customer: "il manifesto"
      },
      {
          id: 2,
          headline: 'Boost your conversion rate',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
          featuredImage:
            '/ilmanifesto.png',
          publishedDate: '2024-01-30',
          customer: "il manifesto"
        },
  ]
  
  export default function CaseStudiesHomeList({ caseStudies }) {
    return (
      <div className="bg-white max-w-7xl mx-auto pb-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <h2 className="text-4xl font-bold">
          <Link href="/case-studies" className="text-purple-800">Case studies</Link></h2>
          <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div className="-my-12 divide-y divide-gray-900/10">
              {caseStudies.slice(0, 2).map((caseStudy) => (
                <article key={caseStudy.id} className="py-12">
                  <div className="group relative max-w-xl">
                  <div className="flex items-center gap-x-4 text-md font-semibold">
                        <span className="text-gray-500 font-medium">Customer:</span> {caseStudy.customer}
                    </div>
                    <h2 className="mt-2 text-2xl leading-snug font-semibold text-purple-900 group-hover:text-purple-600">
                      <Link href={`/case-studies/${caseStudy.slug}`}>
                        <span className="absolute inset-0" />
                        {caseStudy.headline}
                      </Link>
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-gray-600">{caseStudy.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  