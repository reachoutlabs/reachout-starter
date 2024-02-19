'use server';

import client from '@/lib/reachout';
import { newsletterFormSchema } from './validation';

export type FormState =
  | {
      status: 'success';
    }
  | {
      status: 'error';
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;

export async function subscribeToNewsletter(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const validatedFields = newsletterFormSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      errors: validatedFields.error.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      })),
    };
  }

  try {
    await client.createItem('Sample_recipients', {
      email: validatedFields.data.email,
    });

    return {
      status: 'success',
    };
  } catch (err) {
    return {
      status: 'error',
      errors: [
        {
          path: 'email',
          message: err instanceof Error ? err.message : 'Something went wrong',
        },
      ],
    };
  }
}
