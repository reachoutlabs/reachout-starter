import { GlobeAltIcon, CircleStackIcon, PuzzlePieceIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Connect any website.',
    description:
      'The ReachOut SDK and Javascript libraries offer privacy-first web analytics, event collections, user identification and data fetching.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Your infrastructure.',
    description: 'ReachOut deploys dedicated databases and CMS instances to each customer. Upgrade to the enterprise version for custom on-premises deployments.',
    icon: CircleStackIcon,
  },
  {
    name: 'Composable architecture.',
    description: 'Get started fast with the ReachOut starter kit or bring your own websites, integrate the React/JS libraries and start creating marketing automations.',
    icon: PuzzlePieceIcon,
  },
]

export default function SecondaryFeatures() {
  return (
    <div className="overflow-hidden bg-white my-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-bold leading-7 uppercase text-purple-600">Iterate more</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All features in one backend</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                ReachOut is the integrated backend for marketing and content web applications, triggered emails, newsletters, web analytics, automations and data management.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-purple-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/hero-dashboard-large.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
