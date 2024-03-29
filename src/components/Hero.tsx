import { Button } from '@/components/ui/Button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative isolate py-16">
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
      <div
        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-purple-800 to-purple-600 opacity-30"
          style={{
            clipPath:
              'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
          }}
        />
      </div>
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <p className="text-lg font-semibold uppercase text-purple-600">
                <span className="font-regular mx-2 rounded-full bg-purple-600 px-3 py-2 text-sm uppercase text-white hover:bg-purple-300">
                  beta
                </span>{' '}
                ReachOut starter kit
              </p>
              <h1 className="leading-14 mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Create dynamic web applications{' '}
                <span className="text-purple-500 underline">faster</span>
              </h1>
              <p className="relative mt-16 text-2xl font-bold leading-snug text-gray-600 sm:max-w-md lg:max-w-none">
                The <span className="text-purple-500">Next.js starter kit</span>{' '}
                for content and marketing sites
              </p>
              <h2 className="relative mt-16 text-xl font-semibold text-gray-600 sm:max-w-md lg:max-w-none">
                Features
              </h2>
              <p className="text-md font-regular relative mt-4 leading-snug text-gray-600 sm:max-w-md lg:max-w-none">
                <ul className="font-regular grid leading-9 lg:grid-cols-2">
                  <li>&bull; Next.js 14</li>
                  <li>&bull; ISR for content pages</li>
                  <li>&bull; Data fetching and data schema validation</li>
                  <li>&bull; Newsletter signup</li>
                  <li>
                    &bull; Payments
                    <span className="mx-2 rounded-full bg-gray-200 px-2 py-1 text-sm font-medium text-gray-600 hover:bg-purple-300">
                      PRO
                    </span>
                  </li>
                  <li>
                    &bull; User authentication
                    <span className="mx-2 rounded-full bg-gray-200 px-2 py-1 text-sm font-medium text-gray-600 hover:bg-purple-300">
                      PRO
                    </span>
                  </li>
                  <li>
                    &bull; Content paywall
                    <span className="mx-2 rounded-full bg-gray-200 px-2 py-1 text-sm font-medium text-gray-600 hover:bg-purple-300">
                      PRO
                    </span>
                  </li>
                </ul>
              </p>
              <h2 className="relative mt-4 text-lg font-medium text-gray-600 sm:max-w-md lg:max-w-none">
                ReachOut integration
              </h2>
              <p className="text-md font-regular relative mt-4 leading-snug text-gray-600 sm:max-w-md lg:max-w-none">
                <ul className="font-regular grid leading-9 lg:grid-cols-2">
                  <li>&bull; Web and email analytics</li>
                  <li>&bull; Headless CMS</li>
                  <li>&bull; Forms</li>
                  <li>&bull; User management</li>
                </ul>
              </p>
              <div className="mt-8 flex grid-cols-2 gap-4">
                <Button asChild className="h-12 bg-purple-600">
                  <Link
                    href="https://reachout.marketing/checkout/buy/4d3dcaca-b968-4c19-8394-ba04ff620897"
                    className="text-lg font-bold"
                    target="_blank"
                  >
                    PRO waiting list
                  </Link>
                </Button>
                <Button asChild className="h-12 bg-gray-800">
                  <Link
                    href="https://github.com/reachoutlabs/reachout-starter"
                    target="_blank"
                  >
                    <GitHubLogoIcon className="mr-4" />
                    Github
                  </Link>
                </Button>
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <Image
                    src="/ilmanifesto-global2.png"
                    alt="il manifesto global"
                    width={528}
                    height={792}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <Image
                    src="/tuttoimmobili.png"
                    alt="tuttoimmobili.ch"
                    width={528}
                    height={792}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    src="/reachoutapp.png"
                    alt="reachout"
                    width={528}
                    height={792}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <Image
                    src="/repeople.png"
                    alt="repeople"
                    width={528}
                    height={792}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    src="/ilmanifesto.png"
                    alt="il manifesto"
                    width={528}
                    height={792}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
