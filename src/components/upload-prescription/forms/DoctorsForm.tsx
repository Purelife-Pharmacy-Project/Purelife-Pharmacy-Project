'use client';
import { useCreateDoctorPrescription } from '@/hooks';
import { FormMessage } from '@/library/ui/FormMessage';
import {
  DoctorsPayload,
  doctorPrescriptionValidationSchema,
} from '@/services/prescription/schema';
import { inputBordered, prescriptionTextArea } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PrescriptionImageUpload } from '../PrescriptionImageUpload';

export const DoctorsForm = () => {
  const {
    register,
    setValue,
    getValues,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<DoctorsPayload>({
    resolver: zodResolver(doctorPrescriptionValidationSchema),
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { createPrescription, loadingCreatePrescription } =
    useCreateDoctorPrescription(
      () => reset(),
      (error) => setErrorMessage(error as string)
    );

  const onSubmit = (data: DoctorsPayload) => {
    createPrescription(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {false ? <FormMessage type='error' message={errorMessage!} /> : null}

      {JSON.stringify(getValues())}

      <div className='mb-8 flex flex-col-reverse gap-4 lg:flex-row'>
        <div className='grid w-full gap-8'>
          <Input
            label='Patient Name'
            {...register('patientName')}
            errorMessage={errors.patientName?.message}
            classNames={inputBordered}
          />
          <Input
            label='Patient Number'
            {...register('patientPhone')}
            errorMessage={errors.patientPhone?.message}
            type='tel'
            minLength={10}
            maxLength={13}
            inputMode='numeric'
            classNames={inputBordered}
          />
          <Input
            label="Prescriber's Name"
            {...register('prescriberName')}
            errorMessage={errors.prescriberName?.message}
            minLength={10}
            maxLength={13}
            classNames={inputBordered}
          />
          <Input
            label="Prescriber's Number"
            {...register('prescriberPhone')}
            errorMessage={errors.prescriberPhone?.message}
            type='tel'
            minLength={10}
            maxLength={13}
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
            label="Patient's email"
            {...register('patientEmail')}
            errorMessage={errors.patientEmail?.message}
            type='email'
            classNames={inputBordered}
          />
          <Input
            label="Prescriber's email"
            {...register('prescriberEmail')}
            errorMessage={errors.prescriberEmail?.message}
            type='email'
            classNames={inputBordered}
          />
          <Input
            label='Hospital name'
            {...register('hospitalName')}
            errorMessage={errors.hospitalName?.message}
            classNames={inputBordered}
          />
          <div className='flex h-full flex-grow'>
            <Textarea
              size='lg'
              {...register('note')}
              errorMessage={errors.note?.message}
              style={{ height: '310px' }}
              placeholder='Noted about your prescription'
              classNames={prescriptionTextArea}
            />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <Button
          type='submit'
          isLoading={loadingCreatePrescription}
          color='success'
          className='px-16 py-7 text-white'
          radius='full'
          size='lg'
        >
          Submit Prescription{' '}
        </Button>
      </div>
    </form>
  );
};
