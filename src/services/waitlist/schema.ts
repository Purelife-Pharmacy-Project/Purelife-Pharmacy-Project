import { z } from 'zod';

export const waitingListSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .min(3, { message: 'Email is required' }),
});

export type WaitingListPayload = z.infer<typeof waitingListSchema>;
