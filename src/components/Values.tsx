const values = [
  {
    name: 'Flexibility',
    description:
      'We build web applications that adapt to changing needs and scope.',
  },
  {
    name: 'Integration',
    description:
      'Connecting multiple  data streams with APIs and building integrations is our bread and butter.',
  },
  {
    name: 'Data privacy',
    description:
      'We put data privacy first and build secure solutions to host the most sensitive data.',
  },
  {
    name: 'Automations',
    description:
      'ReachOut automations are easy to configure, test and adapt to changing needs.',
  },
  {
    name: 'Agility',
    description:
      'We male launching new content websites easy and fast with our starter kit and pre-configured CMS data schema.',
  },
  {
    name: 'Content is king',
    description:
      'We have built a platform that empowers users to easily manage, import and edit content.',
  },
];

export default function Values() {
  return (
    <div className="mx-auto my-16 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-4xl lg:mx-0">
        <hr></hr>
        <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
          Our values
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-500">
          We are a team of developers building digital experiences for brands
          who care about user privacy, security and flexibility. We have
          developed web applications served to millions of users.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {values.map((value) => (
          <div key={value.name}>
            <dt className="font-semibold text-gray-700">{value.name}</dt>
            <dd className="mt-1 text-gray-600">{value.description}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-16 max-w-4xl">
        <hr></hr>
      </div>
    </div>
  );
}
