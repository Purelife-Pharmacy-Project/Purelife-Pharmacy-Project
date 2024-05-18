import { z } from 'zod';
import isMobilePhone from 'validator/es/lib/isMobilePhone';

// const passwordRegex =
//   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/;

export const loginValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Please enter a valid email address'),
  password: z
    .string()
    .max(100, 'Password must be less than 100 characters')
    .min(8, 'Password must contain at least 8 characters'),
  // .refine(
  //   (value) => passwordRegex.test(value),
  //   'Password should have 8 characters, have at least one uppercase letter, one lowercase letter, one number, and one special character'
  // ),
});

export const registerValidationSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .min(1, { message: 'Email is required' }),
  password: z
    .string()
    .max(100, { message: 'Password must be less than 100 characters' })
    .min(8, { message: 'Password must contain at least 8 characters' }),
  // .refine(
  //   (value) => passwordRegex.test(value),
  //   'Password should have 8 characters, have at least one uppercase letter, one lowercase letter, one number, and one special character'
  // ),
  name: z.string().min(1).max(100),
  phoneNumber: z
    .string()
    .refine(isMobilePhone, 'Please enter a valid phone number'),
  address: z
    .string()
    .max(255, { message: 'Password must be less than 255 characters' }),
  stateId: z.number(),
  cityId: z.number(),
  companyType: z.string().default('person'),
  countryId: z.number().default(163),
});

export const changePasswordValidationSchema = z.object({
  oldPassword: z.string().min(8).max(100),
  newPassword: z.string().min(8).max(100),
});

export type LoginPayload = z.infer<typeof loginValidationSchema>;
export type RegisterPayload = z.infer<typeof registerValidationSchema>;
export type changePasswordPayload = z.infer<
  typeof changePasswordValidationSchema
>;
