import { z } from 'zod';

export const billingSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  country: z.string().min(3, { message: 'Country is required' }),
  streetAddress: z.string().min(1, { message: 'Street address is required' }),
  apartment: z.string().min(5, { message: 'Apartment is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  phone: z
    .string()
    .min(11, { message: 'Phone number must be at least 11 digits' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .min(5, { message: 'Email is required' }),
  createAccount: z.boolean(),
});

export type BillingPayload = z.infer<typeof billingSchema>;
