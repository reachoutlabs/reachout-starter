"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Values() {
  const values = [
    {
      name: "Flexible",
      description:
        "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
    },
    {
      name: "Composable",
      description:
        "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
    },
    {
      name: "Secure",
      description:
        "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
    },
    {
      name: "Automated",
      description:
        "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.",
    },
    {
      name: "Agile",
      description:
        "Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.",
    },
    {
      name: "Data-based",
      description:
        "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.",
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
