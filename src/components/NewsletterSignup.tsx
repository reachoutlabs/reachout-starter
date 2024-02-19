'use client';

import { FormState, subscribeToNewsletter } from '@/app/actions';
import { newsletterFormSchema } from '@/app/validation';
import { Transition } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { FieldPath, useForm } from 'react-hook-form';
import { z } from 'zod';

type NewsletterFormSchema = z.infer<typeof newsletterFormSchema>;

export default function NewsletterSignup() {
  const {
    register,
    formState: { errors },
    setError,
    reset,
  } = useForm<NewsletterFormSchema>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const { pending } = useFormStatus();

  const [state, formAction] = useFormState<FormState, FormData>(
    subscribeToNewsletter,
    null,
  );

  useEffect(() => {
    if (!state) {
      return;
    }

    if (state.status === 'error') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<NewsletterFormSchema>, {
          message: error.message,
        });
      });
    }

    if (state.status === 'success') {
      reset();
    }
  }, [state, setError, reset]);

  return (
    <div className="bg-purple-800 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl lg:col-span-7">
          <h2 className="inline text-3xl font-bold tracking-tight text-white sm:block sm:text-4xl lg:inline xl:block">
            Product updates in your inbox
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Subscribe to our newsletter for 20% off our PRO starter kit
          </p>
        </div>
        <form
          action={formAction}
          className="w-full max-w-md lg:col-span-5 lg:pt-2"
          noValidate
        >
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              type="email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
              {...register('email')}
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              disabled={pending}
            >
              Subscribe
            </button>
          </div>
          {errors.email && (
            <p className="mt-2 text-sm leading-6 text-red-300">
              {errors.email?.message}
            </p>
          )}
          <Transition
            show={state?.status === 'success'}
            className="mt-2 text-sm font-semibold leading-6 text-white"
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            Registration was successful. Thank you
          </Transition>
          <p className="mt-4 text-sm leading-6 text-gray-300">
            We care about your data. Read our{' '}
            <a
              href="#"
              className="font-semibold text-white hover:text-indigo-50"
            >
              privacy&nbsp;policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
