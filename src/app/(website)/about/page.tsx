import {
  AcademicCapIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';
import { Metadata } from 'next';
import Image from 'next/image';

const stats = [
  { label: 'Business was founded', value: '2012' },
  { label: 'People on the team', value: '120+' },
  { label: 'Users on the platform', value: '250k' },
  { label: 'Paid out to creators', value: '$70M' },
];

const values = [
  {
    name: 'Be world-class.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Take responsibility.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Be supportive.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.',
    icon: UserGroupIcon,
  },
  {
    name: 'Always learning.',
    description:
      'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Share everything you know.',
    description:
      'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
    icon: SparklesIcon,
  },
  {
    name: 'Enjoy downtime.',
    description:
      'Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.',
    icon: SunIcon,
  },
];

const team = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
  },
  // More people...
];

export const metadata: Metadata = {
  title: 'ReachOut Starter Kit',
  description: 'Next.js starter kit for content and marketing websites',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <main className="isolate">
        <div className="bg-slate-200">
          {/* Header section */}
          <div className="px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
              <h2 className="text-4xl font-bold tracking-tight text-slate-600 sm:text-6xl">
                We love creators
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
          </div>

          {/* Content section */}
          <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-slate-500 lg:max-w-none lg:grid-cols-2">
                <div>
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas.
                  </p>
                </div>
                <div>
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et
                    eget. Ultricies tellus felis id dignissim eget. Est augue
                    maecenas risus nulla ultrices congue nunc tortor. Enim et
                    nesciunt doloremque nesciunt voluptate.
                  </p>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                </div>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div
                    key={statIdx}
                    className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
                  >
                    <dt className="text-base leading-7 text-slate-500">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-semibold tracking-tight text-slate-600">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Image section */}
          <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <Image
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              alt=""
              className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
              width={1280}
              height={640}
            />
          </div>

          {/* Values section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl">
                Our values
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis.
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-slate-500 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
              {values.map((value) => (
                <div key={value.name} className="relative pl-9">
                  <dt className="inline font-semibold text-slate-600">
                    <value.icon
                      className="absolute left-1 top-1 h-5 w-5 text-purple-500"
                      aria-hidden="true"
                    />
                    {value.name}
                  </dt>{' '}
                  <dd className="inline">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Team section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 py-10 sm:mt-40 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl">
                Our team
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-500">
                Excepturi repudiandae alias ut. Totam aut facilis. Praesentium
                in neque vel omnis. Eos error odio. Qui fugit voluptatibus eum
                culpa.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
            >
              {team.map((person) => (
                <li key={person.name}>
                  <Image
                    className="aspect-[14/13] w-full rounded-2xl object-cover"
                    src={person.imageUrl}
                    alt={person.name}
                    width={280}
                    height={280}
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-600">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-slate-500">
                    {person.role}
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    {person.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
