const posts = [
  {
    id: 1,
    headline: "We are building a marketing platform for developers",
    href: "#",
    kicker: "vision",
    description:
      "ReachOut is a marketing automation platform built to improve developer experience. With more than 10 years of experience building large-scale marketing applications, we have developed tools and technologies to improve speed to market in one robust, privacy-respecting platform.",
    featuredImage:
      "/marketing-platform.webp",
    publishedDate: "2024-01-09",
    author: "Stephen Fawlerr",
  },
  {
    id: 2,
    headline: "The ugly truth about visual email editors",
    href: "#",
    kicker: "email marketing",
    description:
      "A visual email editor and a good template can help a lot to strike a creative output and consistent design. When doing a lot of email marketing or newsletter publishing the inconvenience of mixing layout and content becomes more obvious, yet a solution exists.",
    featuredImage:
      "/visual-editors.webp",
    publishedDate: "2023-06-24",
    author: "Michael Foster",
  },
  {
    id: 3,
    headline: "What are the best Google Analytics alternatives for digital marketing",
    href: "#",
    kicker: "data privacy",
    description:
      "It is now a good time to evaluate privacy respecting web analytics tools. With many Google Analytics alternatives available, the right choice now can go a long way in the future. Personalized marketing is growing in popularity as marketers experiment with more personal and relevant messaging to gain trust and show compliant data handling.",
    featuredImage:
      "/analytics.webp",
    publishedDate: "2020-03-16",
    author: "Michael Foster",
  },
];

export default function BlogList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={post.featuredImage}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.publishedDate} className="text-gray-500">
                    {post.publishedDate}
                  </time>
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-gray-500"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  {post.author}
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-gray-500"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <a
                    href={post.kicker}
                    className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600"
                  >
                    {post.kicker}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.headline}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
