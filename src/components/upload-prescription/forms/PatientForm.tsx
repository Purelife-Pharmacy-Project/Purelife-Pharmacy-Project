'use client';
import { useCreatePatientPrescription } from '@/hooks';
import { FormMessage } from '@/library/ui/FormMessage';
import {
  PatientPayload,
  patientPrescriptionValidationSchema,
} from '@/services/prescription/schema';
import { inputBordered, prescriptionTextArea } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PrescriptionImageUpload } from '../PrescriptionImageUpload';

export const PatientForm = () => {
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PatientPayload>({
    resolver: zodResolver(patientPrescriptionValidationSchema),
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { createPrescription, loadingCreatePrescription } =
    useCreatePatientPrescription(
      () => reset(),
      (error) => setErrorMessage(error as string)
    );

  const onSubmit = (data: PatientPayload) => {
    createPrescription(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {false ? <FormMessage type='error' message={errorMessage!} /> : null}

      <div className='mb-8 flex flex-col-reverse gap-4 lg:flex-row'>
        <div className='grid w-full gap-8'>
          <Input
            label='Full Name'
            {...register('fullName')}
            errorMessage={errors.fullName?.message}
            variant='bordered'
            classNames={inputBordered}
          />
          <Input
            label='Phone Number'
            {...register('phone')}
            errorMessage={errors.phone?.message}
            variant='bordered'
            inputMode='numeric'
            classNames={inputBordered}
          />
          <PrescriptionImageUpload
            onUpload={(imageUrl) =>
              setValue('prescriptionUrl', imageUrl, {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            error={errors.prescriptionUrl?.message}
          />
        </div>
        <div className='flex w-full flex-col gap-8'>
          <Input
            label='Email Address'
            {...register('email')}
            errorMessage={errors.email?.message}
            type='email'
            variant='bordered'
            classNames={inputBordered}
          />
          <div className='flex h-full flex-grow'>
            <Textarea
              size='lg'
              {...register('note')}
              errorMessage={errors.note?.message}
              placeholder='Noted about your prescription'
              classNames={prescriptionTextArea}
            />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <Button
          isLoading={loadingCreatePrescription}
          color='success'
          type='submit'
          className='px-16 py-6 text-white'
          radius='full'
          size='lg'
        >
          Submit Prescription{' '}
        </Button>
      </div>
    </form>
  );
};
