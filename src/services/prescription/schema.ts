import { z } from 'zod';

export const patientPrescriptionValidationSchema = z.object({
  fullName: z.string().min(1, {
    message: 'Full name is required',
  }),
  email: z
    .string()
    .email({
      message: 'Please enter a valid email address',
    })
    .min(1, {
      message: 'Email is required',
    }),
  phone: z
    .string({
      invalid_type_error: 'Please provide a valid phone number',
      required_error: 'Phone number is required',
    })
    .min(10, {
      message: 'Phone number must be at least 10 characters',
    }),
  prescriptionUrl: z
    .string({
      invalid_type_error: 'Please provide a valid URL',
      required_error: 'Prescription URL is required',
    })
    .min(5, {
      message: 'Prescription URL must be at least 10 characters',
    }),
  note: z
    .string({
      invalid_type_error: 'Invalid text',
      required_error: 'Note is required',
    })
    .min(5, {
      message: 'Note must be at least 5 characters',
    }),
});

export const doctorPrescriptionValidationSchema = z.object({
  patientName: z.string().min(1, {
    message: 'Patient name is required',
  }),
  patientEmail: z
    .string()
    .email({
      message: 'Please enter a valid email address',
    })
    .min(1, {
      message: 'Email is required',
    }),
  patientPhone: z
    .string({
      invalid_type_error: 'Please provide a valid phone number',
      required_error: 'Patient Phone number is required',
    })
    .min(10, {
      message: 'Phone number must be at least 10 characters',
    }),
  prescriberName: z.string().min(1, {
    message: 'Prescriber name is required',
  }),
  prescriberEmail: z
    .string()
    .email({
      message: 'Please enter a valid email address',
    })
    .min(1, {
      message: 'Email is required',
    }),
  prescriberPhone: z
    .string({
      invalid_type_error: 'Please provide a valid phone number',
      required_error: "Prescriber's Phone number is required",
    })
    .min(10, {
      message: 'Phone number must be at least 10 characters',
    }),
  hospitalName: z
    .string({ required_error: "Hospitals's Name is required" })
    .min(1, {
      message: 'Hospital name is required',
    }),
  prescriptionUrl: z
    .string({
      invalid_type_error: 'Please provide a valid URL',
      required_error: 'Prescription URL is required',
    })
    .min(5, {
      message: 'Prescription URL must be at least 10 characters',
    }),
  note: z
    .string({
      invalid_type_error: 'Invalid text',
      required_error: 'Note is required',
    })
    .min(5, {
      message: 'Note must be at least 5 characters',
    }),
});

export type PatientPayload = z.infer<
  typeof patientPrescriptionValidationSchema
>;
export type DoctorsPayload = z.infer<typeof doctorPrescriptionValidationSchema>;
