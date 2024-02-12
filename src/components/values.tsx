"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Values() {
  const values = [
    {
      name: "Flexibility",
      description:
        "We have worked with customers of any size and understand things change. We built solutions that adapt to changing needs and scope.",
    },
    {
      name: "Integration options",
      description:
        "Almost no organization works with one single application or data source. Connecting multiple streams with APIs and building integrations is our bread and butter.",
    },
    {
      name: "Security",
      description:
        "ReachOut was built after GDPR came into effect and marketing experiences deserve the maximum security. We put data safety first building privacy by design solutions.",
    },
    {
      name: "Automations",
      description:
        "Marketing and content publishing require advanced personalization and relevant messaging. ReachOut automations are easy to configure and test.",
    },
    {
      name: "Agility",
      description:
        "Every marketer knows that testing assumptions and iterating is the only way forward so we made launching a new content website easy and fast with our starter kit and pre-configured CMS data schema.",
    },
    {
      name: "Data first",
      description:
        "Building dynamic and personalized websites can be hard, so we have built a platform that maximize the user and content visibility and management options.",
    },
  ];

  return (
    <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our values
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We are a team of developers building digital experiences for brands who care about user privacy, security and flexibility. We have developed web applications served to millions of users.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {values.map((value) => (
          <div key={value.name}>
            <dt className="font-semibold text-gray-900">{value.name}</dt>
            <dd className="mt-1 text-gray-600">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
