import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is the pricing of ReachOut?",
    answer:
      "You can create unlimited clients, brands, campaigns and touch points. ReachOut hosts unlimited data and assets in the CMS database. Email credits never expire and can be purchased any time. Web analytics start at $9 / month for 20,000 pageviews.",
  },
  {
    question: "Do you offer larger plans?",
    answer:
      "ReachOut can scale to hundred million pageviews and emails. Get in touch with support to discuss web analytics plans over 500k or to purchase larger email credits packages.",
  },
  {
    question: "Do you offer a custom, Enterprise plan?",
    answer:
      "ReachOut's unique technology allows to deploy a marketing database, CMS and API on-premises or a private cloud. Get in touch with support to discuss a custom deployment.",
  },
  {
    question: "What is the pricing of ReachOut?",
    answer:
      "You can create unlimited clients, brands, campaigns and touch points. ReachOut hosts unlimited data and assets in the CMS database. Email credits never expire and can be purchased any time. Web analytics start at $9 / month for 20,000 pageviews.",
  },
  {
    question: "Can you help with building email and web campaigns?",
    answer:
      "ReachOut is a powerful and flexible marketing automation platform that allows to create complex campaigns and user journeys. ReachOut Marketing, starting at $1,495 / month, is our campaign implementation service built on ReachOut.",
  },
]

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
