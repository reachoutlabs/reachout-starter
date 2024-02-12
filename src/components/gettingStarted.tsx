import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function GettingStarted() {
  return (
    <div className="overflow-hidden bg-white pt-8 pb-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-lg font-bold uppercase leading-7 text-purple-600">
                Get started
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Build faster
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                ReachOut starter is ready to go. Fork the Github project and run
                in dev mode. Sample data is pre-loaded from the ReachOut demo
                organization data.
              </p>
              <div className="rounded-md mt-8 bg-gray-800 text-gray-200 px-4 py-8">
                <pre>
                  <span className="text-gray-500">reachout-starter %</span> pnpm
                  i<br />
                  <span className="text-gray-500">reachout-starter %</span> pnpm
                  dev
                </pre>
              </div>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-purple-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-purple-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        Code
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        .env.local
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6 text-gray-200 text-sm">
                    NEXT_PUBLIC_REACHOUT_URL=https://reachout-demo.reachoutapp.io/
                    <br />
                    NEXT_PUBLIC_REACHOUT_WORKER_URL=https://track.reachoutapp.io/
                    <br />
                    NEXT_PUBLIC_REACHOUT_TOUCHPOINT=628c61f5-a26d-44f9-8c3a-725af4a03a84
                    <br />
                    NEXT_PUBLIC_REACHOUT_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxOTgzODEyOTk2IiwiaXNzIjoiYXBwLnJlYWNob3V0YXBwLmlvIiwicm9sZSI6ImFub24ifQ.wNeQ8BRhIKBNbEPNs1xSnItzMHM_ji_2qX--3Ot_dcA
                    <br />
                    NEXT_PUBLIC_ROOT_DOMAIN=starter.reachoutapp.io
                    <br />
                    NEXT_ISR_REVALIDATE=300
                    <br />
                    NEXT_REVALIDATE_TOKEN=
                  </div>
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
