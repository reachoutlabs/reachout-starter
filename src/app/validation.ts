import { z } from 'zod';

export const newsletterFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please enter your email address' })
    .email({ message: 'Please enter a valid email address' }),
});
