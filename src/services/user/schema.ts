import { z } from 'zod';

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/;

export const loginValidationSchema = z.object({
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
