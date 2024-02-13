import Image from "next/image"

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
      {
        id: 3,
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
        id: 4,
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
  
  export default function CaseStudiesList() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <Image
                      src={post.featuredImage}
                      alt={post.headline}
                      width={264}
                      height={396}
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-contain"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                        {post.publishedDate}
                        <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-gray-500"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                        {post.customer}
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.headline}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  