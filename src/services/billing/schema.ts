import { z } from 'zod';

export const billingSchema = z
  .object({
    firstName: z.string().min(2, { message: 'First name is required' }),
    lastName: z.string().min(2, { message: 'Last name is required' }),
    address: z.string().min(5, { message: 'Street address is required' }),
    phone: z
      .string()
      .min(11, { message: 'Phone number must be at least 11 digits' }),
    email: z
      .string()
      .email({ message: 'Please enter a valid email address' })
      .min(3, { message: 'Email is required' }),
    password: z
      .string()
      .max(100, { message: 'Password must be less than 100 characters' })
      .min(8, { message: 'Password must contain at least 8 characters' })
      .optional(),
    stateId: z.number().optional(),
    cityId: z.number().optional(),
    companyType: z.string().default('person'),
    countryId: z.number().default(163),
    createAccount: z.boolean(),
    id: z.number(),
  })
  .superRefine(
    ({ createAccount, stateId, cityId, password }, refinementContext) => {
      if (!createAccount) {
        return;
      }
      const fieldsToCheck = ['stateId', 'cityId', 'password'];
      for (const field of fieldsToCheck) {
        if (eval(field) === undefined) {
          refinementContext.addIssue({
            code: z.ZodIssueCode.custom,
            message: `${field} is required when 'createAccount' is checked`,
            path: [field],
          });
        }
      }
    }
  );

export type BillingPayload = z.infer<typeof billingSchema>;
