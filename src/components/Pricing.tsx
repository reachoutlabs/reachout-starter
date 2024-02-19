import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    id: 'starter',
    href: 'https://github.com/reachoutlabs/reachout-starter',
    priceMonthly: 'free',
    description:
      'Build a Next.js web app faster. Integrate with ReachOut.',
    features: [
      'Web analytics',
      'ISR',
      'Content collections',
      'Newsletter subscription form',
      'TailwindCSS',
    ],
    cta: 'Download'
  },
  {
    name: 'Pro',
    id: 'pro',
    href: 'https://reachout.marketing/checkout/buy/4d3dcaca-b968-4c19-8394-ba04ff620897',
    priceMonthly: '$149',
    description:
      'For professional websites with content restrictions, paywall, user authentication, website payments.',
    features: [
      'Content paywall',
      'User authentication with Auth.js and ReachOut',
      'Website payments with Lemonsqueezy',
      'Lifetime purchase for v1.x',
    ],
    cta: 'Join waiting list'
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="isolate overflow-hidden bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-lg font-bold uppercase leading-7 text-purple-600">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              ReachOut Starter
            </p>
          </div>
          <div className="relative mt-6">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
              Fork the ReachOut Starter kit to deploy a Next.js app faster and integrate with ReachOut out of the box.
            </p>
            <svg
              viewBox="0 0 1208 1024"
              className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
            >
              <ellipse
                cx={604}
                cy={512}
                fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                rx={604}
                ry={512}
              />
              <defs>
                <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flow-root bg-white pb-24 sm:pb-32">
          <div className="-mt-80">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                  >
                    <div>
                      <h3
                        id={tier.id}
                        className="text-base font-semibold leading-7 text-purple-600"
                      >
                        {tier.name}
                      </h3>
                      <div className="mt-4 flex items-baseline gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                          {tier.priceMonthly}
                        </span>
                      </div>
                      <p className="mt-6 text-base leading-7 text-gray-600">
                        {tier.description}
                      </p>
                      <ul
                        role="list"
                        className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                      >
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              className="h-6 w-5 flex-none text-purple-600"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={tier.href}
                      target="_blank"
                      aria-describedby={tier.id}
                      className="mt-8 block rounded-md bg-purple-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                    >
                      {tier.cta}
                    </Link>
                  </div>
                ))}
                <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                  <div className="lg:min-w-0 lg:flex-1">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-purple-600">
                      ReachOut
                    </h3>
                    <p className="mt-1 text-base leading-7 text-gray-600">
                      Deploy the ReachOut CMS and database on a hosted dedicated infrastructure or
                      on-premises. Retain administrative access to your
                      content and user data. Pay as you grow based on web and email volume.
                    </p>
                  </div>
                  <Link
                    href="https://reachoutapp.io"
                    className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-purple-600 ring-1 ring-inset ring-purple-200 hover:ring-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                    target='_blank'
                  >
                    Discover <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
