import { array, string, z } from 'zod';

export const consultDoctorFormValidationSchema = z.object({
  firstName: string({
    required_error: 'First name is required',
  })
    .min(1)
    .max(100),
  lastName: string({
    required_error: 'Last name is required',
  })
    .min(1)
    .max(100),
  email: string({
    required_error: 'Email is required',
    invalid_type_error: 'Please enter a valid email address',
  }).email({
    message: 'Please enter a valid email address',
  }),

  phoneNumber: string({
    required_error: 'Phone number is required',
  })
    .min(1)
    .max(100),
  age: string({
    required_error: 'Age is required',
  }),
  gender: string({
    required_error: 'Gender is required',
  })
    .min(1)
    .max(100),
  condition: array(
    string({
      required_error: 'Condition is required',
    })
  ).min(1, 'Condition is required'),
  symptoms: array(
    string({
      required_error: 'Symptoms is required',
    })
  ).min(1, 'Symptoms is required'),
  alcoholConsumption: array(
    string({
      required_error: 'Alcohol consumption is required',
    })
  ).min(1, 'Alcohol consumption is required'),
  takingMeds: string({
    required_error: 'Taking meds is required',
  }),
  medsAllergy: string({
    required_error: 'Meds allergy is required',
  }),
  medsDescription: string({
    required_error: 'Meds description is required',
  })
    .max(100)
    .optional()
    .superRefine((medsAllergy, ctx) => {
      if (medsAllergy?.toLowerCase() === 'yes') {
        return ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Meds description is required',
        });
      }
    }),
  tobaccoUsage: string({
    required_error: 'Tobacco usage is required',
  })
    .min(1)
    .max(100),
  tobaccoProductBrand: string({
    required_error: 'Tobacco product brand is required',
  })
    .min(1)
    .max(100),
  illegalDrugHistory: string({
    required_error: 'Illegal drug history is required',
  })
    .min(1)
    .max(100),
  additionalNote: string({
    required_error: 'Additional note is required',
  })
    .min(1)
    .max(100),
});

export const bookSlotValidationSchema = z.object({
  summary: string({
    required_error: 'Summary is required',
  })
    .min(1)
    .max(100),
  startTime: string({
    required_error: 'Start time is required',
  }),
  endTime: string({
    required_error: 'End time is required',
  }),
});

export type ConsultDoctorFormPayload = z.infer<
  typeof consultDoctorFormValidationSchema
>;

export type CreateEventPayload = z.infer<typeof bookSlotValidationSchema>;
