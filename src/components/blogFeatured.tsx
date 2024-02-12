import Image from "next/image";

export default function BlogFeatured() {
  const blogPosts = [
    {
      id: 1,
      headline: "Vel expedita assumenda placeat aut nisi optio voluptates quas",
      href: "#",
      kicker: "kicker",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      featuredImage:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      publishedDate: "2020-03-16",
      author: "Michael Foster",
    },
    {
      id: 2,
      headline: "Vel expedita assumenda placeat aut nisi optio voluptates quas",
      href: "#",
      kicker: "kicker",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      featuredImage:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      publishedDate: "2020-03-16",
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
                {post.kicker}
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
