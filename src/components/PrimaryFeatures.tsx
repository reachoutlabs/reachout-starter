import {
  CircleStackIcon,
  ClipboardDocumentListIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';

const features = [
  {
    name: 'Deploy anywhere',
    description:
      'Build the starter kit and deploy on Vercel, Netlify, Cloudflare Pages or Node.js.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Style with Tailwind',
    description:
      'Customize styles and add components with TailwindCSS and shadcn/ui.',
    href: '#',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Fetch data',
    description:
      'The ReachOut SDK is pre-configured with sample data. Sign up to set up your CMS with your data.',
    href: '#',
    icon: CircleStackIcon,
  },
];

export default function PrimaryFeatures() {
  return (
    <section id="features">
      <div className="bg-white pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl lg:text-center">
            <h2 className="text-lg font-bold uppercase leading-7 text-purple-600">
              Deploy faster
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Launch a content website in hours, not weeks
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The ReachOut starter kit for Next.js 14 is pre-configured with the
              ReachOut SDK, Auth.js, Zod, TailwindCSS and shadcn/ui components.
              Customize the starter kit connecting your services, or sign up for
              a{' '}
              <Link
                href="https://app.reachoutapp.io/signup"
                className="text-purple-600 underline"
              >
                ReachOut account
              </Link>{' '}
              to instantly access our headless CMS, email sending system, web
              analytics and automations.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-purple-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
