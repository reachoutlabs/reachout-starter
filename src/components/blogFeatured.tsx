import Image from "next/image";

export default function BlogFeatured() {
  const blogPosts = [
    {
      id: 1,
      headline: "How to improve your email marketing conversion rate",
      href: "#",
      kicker: "email marketing",
      description:
        "Studies show highly personalized email marketing leads to higher conversions. But you need a platform that lets you create relevant targeted content at scale. Learn how with our step-by-step guide.",
      featuredImage:
        "/improve-email-conversions.jpg",
      publishedDate: "2023-11-16",
      author: "Lars Kerles",
    },
    {
      id: 2,
      headline: "When privacy-respecting means giving out control and letting the majors win",
      href: "#",
      kicker: "data privacy",
      description:
        "The new privacy-respecting analytics are important but by removing the tools that small-medium businesses can rely on for content relevancy, personalization, timely communication and customer support, we are letting big tech win the battle.",
      featuredImage:
        "/privacy.webp",
      publishedDate: "2023-10-22",
      author: "Michael Foster",
    },
  ];

  return (
    <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {blogPosts.slice(0, 2).map((post) => (
          <article
            key={post.id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
          >
            <Image
              src={post.featuredImage}
              width={800}
              height={600}
              alt={post.headline}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time dateTime={post.publishedDate} className="mr-8">
                {post.publishedDate}
              </time>
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="flex gap-x-2.5">{post.author}</div>
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <span className="uppercase">{post.kicker}</span>
              </div>
            </div>
            <h3 className="mt-3 text-2xl font-semibold leading-snug text-white">
              <a href={post.href}>
                <span className="absolute inset-0" />
                {post.headline}
              </a>
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
}
