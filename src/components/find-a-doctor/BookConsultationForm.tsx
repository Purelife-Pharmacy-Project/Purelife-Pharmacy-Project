'use client';
import {
  useGetAlcoholConsumptionEnum,
  useGetConditionEnum,
  useGetGenderEnum,
  useGetMedsAllergyEnum,
  useGetSymptomEnum,
} from '@/hooks/useEnum';
import { InputError } from '@/library/ui/InputError';
import {
  ConsultDoctorFormPayload,
  consultDoctorFormValidationSchema,
} from '@/services/consult-doctor/schema';
import { inputBordered, selectBordered, textAreaClassNames } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IconAlarm } from '../icons/IconAlarm';
import { IconCalendar } from '../icons/IconCalendar';
import { BillingAndPaymentModal } from './modals/BillingAndPaymentModal';

export const BookConsultationForm = () => {
  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  const { data: conditions, isLoading: loadingConditions } =
    useGetConditionEnum();
  const { data: symptoms, isLoading: loadingSymptoms } = useGetSymptomEnum();
  const { data: genders, isLoading: loadingGenders } = useGetGenderEnum();
  const { data: medsAllergies, isLoading: loadingMedsAllergies } =
    useGetMedsAllergyEnum();
  const { data: alcoholConsumptions, isLoading: loadingAlcoholConsumptions } =
    useGetAlcoholConsumptionEnum();

  const genericAnswers = [
    {
      name: 'Yes',
      value: true,
    },
    {
      name: 'No',
      value: false,
    },
  ];

  const stringGenericAnswers = [
    {
      name: 'Yes',
      value: 'yes',
    },
    {
      name: 'No',
      value: 'no',
    },
  ];

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<ConsultDoctorFormPayload>({
    resolver: zodResolver(consultDoctorFormValidationSchema),
  });

  const onSubmit: SubmitHandler<ConsultDoctorFormPayload> = (data) => {
    console.log(data);
  };

  return (
    <Card shadow='none' className='bg-primaryLight p-5'>
      <CardBody>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid gap-6 md:max-w-[80%]'
        >
          <div className='flex flex-col gap-4 md:flex-row'>
            <Input
              size='lg'
              placeholder='First Name'
              label='First Name'
              labelPlacement='outside'
              classNames={inputBordered}
              radius='md'
              errorMessage={errors.firstName?.message}
              {...register('firstName')}
            />
            <Input
              size='lg'
              placeholder='Last Name'
              label='Last Name'
              labelPlacement='outside'
              classNames={inputBordered}
              radius='md'
              errorMessage={errors.lastName?.message}
              {...register('lastName')}
            />
          </div>
          <div className='flex flex-col gap-4 md:flex-row'>
            <Input
              size='lg'
              placeholder='Age'
              label='What is your age?'
              labelPlacement='outside'
              classNames={inputBordered}
              radius='md'
              type='number'
              errorMessage={errors.age?.message}
              {...register('age')}
            />

            <Select
              size='lg'
              isDisabled={loadingGenders}
              label='What is your gender'
              placeholder='Select your gender'
              labelPlacement='outside'
              color='default'
              classNames={selectBordered}
              errorMessage={errors.gender?.message}
              {...register('gender')}
            >
              {genders?.map((gender, index) => (
                <SelectItem
                  className='text-content'
                  value={gender.value}
                  key={index}
                >
                  {gender.name}
                </SelectItem>
              )) ?? []}
            </Select>
          </div>
          <div className='flex flex-col gap-4 md:flex-row'>
            <Input
              size='lg'
              placeholder='Email'
              label='Email'
              labelPlacement='outside'
              type='email'
              {...register('email')}
              errorMessage={errors.email?.message}
              classNames={inputBordered}
              radius='md'
            />
            <Input
              size='lg'
              placeholder='Phone number'
              label='Phone number'
              labelPlacement='outside'
              type='number'
              {...register('phoneNumber')}
              errorMessage={errors.phoneNumber?.message}
              inputMode='numeric'
              classNames={inputBordered}
              radius='md'
            />
          </div>
          <div className='grid gap-2'>
            <label
              htmlFor='conditions'
              className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
            >
              Check the conditions that apply to you or any member of your
              immediate relatives:
            </label>

            {loadingConditions ? <p>Loading conditions...</p> : null}

            <div className='grid grid-cols-2 gap-4 md:max-w-[50%]'>
              {conditions?.map((condition, index) => (
                <Controller
                  key={index}
                  name='condition'
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value.includes(condition.name)}
                      onChange={(e) => {
                        const value = e.target.checked
                          ? [...field.value, condition.name]
                          : field.value.filter((v) => v !== condition.name);
                        field.onChange(value);
                      }}
                      color='primary'
                      className='w-full'
                    >
                      {condition.name}
                    </Checkbox>
                  )}
                />
              ))}
            </div>
            {errors.condition && (
              <InputError message={errors.condition.message} />
            )}
          </div>
          <div className='grid gap-2'>
            <label
              htmlFor='conditions'
              className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
            >
              Check the symptoms that you&apos;re currently experiencing:
            </label>

            <div className='grid grid-cols-2 gap-4 md:max-w-[50%]'>
              {loadingSymptoms ? <p>Loading symptoms...</p> : null}

              {symptoms?.map((symptom, index) => (
                <Controller
                  key={index}
                  name='symptoms'
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value.includes(symptom.name)}
                      onChange={(e) => {
                        const value = e.target.checked
                          ? [...field.value, symptom.name]
                          : field.value.filter((v) => v !== symptom.name);
                        field.onChange(value);
                      }}
                      color='primary'
                      className='w-full'
                    >
                      {symptom.name}
                    </Checkbox>
                  )}
                />
              ))}
            </div>
            {errors.symptoms && (
              <InputError message={errors.symptoms.message} />
            )}
          </div>
          <div className='grid gap-2 md:max-w-[50%]'>
            <Select
              size='lg'
              label='Are you currently taking any medication?'
              placeholder='Choose answer'
              labelPlacement='outside'
              color='default'
              classNames={selectBordered}
              {...register('takingMeds')}
              errorMessage={errors.takingMeds?.message}
            >
              {stringGenericAnswers.map((answer, index) => (
                <SelectItem
                  className='text-content'
                  key={index}
                  value={answer.value}
                >
                  {answer.name}
                </SelectItem>
              ))}
            </Select>

            <Textarea
              classNames={textAreaClassNames}
              className='w-full'
              size='lg'
              placeholder='Type them here..'
              radius='md'
              {...register('medsDescription')}
              errorMessage={errors.medsDescription?.message}
            />
          </div>
          <div className='grid gap-2 md:max-w-[50%]'>
            <Select
              size='lg'
              label='Do you have any allergies to medication?'
              placeholder='Choose answer'
              labelPlacement='outside'
              color='default'
              classNames={selectBordered}
              {...register('medsAllergy')}
            >
              {stringGenericAnswers.map((answer, index) => (
                <SelectItem
                  className='text-content'
                  key={index}
                  value={answer.value}
                >
                  {answer.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <Select
            size='lg'
            label='Do you use any kind of tobacco or have you ever used them?'
            placeholder='Choose answer'
            labelPlacement='outside'
            color='default'
            className='md:max-w-[50%]'
            classNames={selectBordered}
            {...register('tobaccoUsage')}
            errorMessage={errors.tobaccoUsage?.message}
          >
            {genericAnswers.map((answer, index) => (
              <SelectItem
                className='text-content'
                key={index}
                value={String(answer.value)}
              >
                {answer.name}
              </SelectItem>
            ))}
          </Select>
          <div className='flex flex-col gap-2'>
            <label
              className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
              htmlFor='tobaccoProducts'
            >
              What kind of tobacco products? How long have you used/been using
              them?
            </label>

            <Textarea
              classNames={textAreaClassNames}
              size='lg'
              className='w-full md:w-[50%]'
              placeholder='Type them here..'
              radius='md'
              {...register('tobaccoProductBrand')}
              errorMessage={errors.tobaccoProductBrand?.message}
            />
          </div>
          <div className='flex flex-col gap-2 md:max-w-[50%]'>
            <Select
              size='lg'
              label=' Do you use any kind of illegal drugs or have you ever used them?'
              placeholder='Choose answer'
              labelPlacement='outside'
              color='default'
              classNames={selectBordered}
              {...register('illegalDrugHistory')}
              errorMessage={errors.illegalDrugHistory?.message}
            >
              {genericAnswers.map((answer, index) => (
                <SelectItem
                  className='text-content'
                  key={index}
                  value={String(answer.value)}
                >
                  {answer.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='conditions'
              className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
            >
              How often do you consume alcohol?
            </label>

            <div className='grid grid-cols-2 gap-4 md:max-w-[50%]'>
              {loadingAlcoholConsumptions ? (
                <p>Loading consumptions...</p>
              ) : null}

              {alcoholConsumptions?.map((alcoholConsumption, index) => (
                <Controller
                  key={index}
                  name='alcoholConsumption'
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value.includes(alcoholConsumption.name)}
                      onChange={(e) => {
                        const value = e.target.checked
                          ? [...field.value, alcoholConsumption.name]
                          : field.value.filter(
                              (v) => v !== alcoholConsumption.name
                            );
                        field.onChange(value);
                      }}
                      color='primary'
                      className='w-full'
                    >
                      {alcoholConsumption.name}
                    </Checkbox>
                  )}
                />
              ))}
            </div>

            {errors.alcoholConsumption && (
              <InputError message={errors.alcoholConsumption.message} />
            )}
          </div>

          <div className='h-[1px] w-full bg-header-100'></div>
          <p className='text-2xl font-semibold text-header-100'>Book a slot</p>
          <div className='grid gap-4 md:max-w-[50%] md:flex-row'>
            <Input
              size='lg'
              placeholder='Choose Date'
              type='date'
              label='Choose when you want to see your doctor'
              labelPlacement='outside'
              classNames={inputBordered}
              radius='md'
              endContent={<IconCalendar color='content' />}
            />
            <Input
              size='lg'
              type='time'
              label='Time'
              placeholder='00:00'
              labelPlacement='outside'
              classNames={inputBordered}
              radius='md'
              endContent={<IconAlarm color='content' />}
            />
          </div>

          <div className='grid gap-4 md:flex-row'>
            <p className='text-2xl font-semibold text-header-100'>
              Additional Notes
            </p>

            <div className='flex flex-col gap-2'>
              <label
                className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
                htmlFor='tobaccoProducts'
              >
                Doctor’s Notes (Optional)
              </label>

              <Textarea
                classNames={textAreaClassNames}
                size='lg'
                className='w-full md:max-w-[50%]'
                placeholder='Type them here..'
                radius='md'
                {...register('additionalNote')}
                errorMessage={errors.additionalNote?.message}
              />
            </div>
          </div>

          <p className='text-sm'>
            By clicking on “Book Doctor” y/ou agree to our terms of service and
            privacy policy
          </p>

          <div className='flex w-full flex-col gap-6 md:w-[50%] md:flex-row md:items-center md:justify-between md:gap-0 lg:mt-10'>
            <div className='grid gap-2'>
              <p className='text-sm font-medium uppercase'>Fee:</p>
              <p className='text-3xl font-bold text-primary'>N10,000</p>
            </div>

            <Button
              // onPress={() => setOpenCheckoutModal(true)}
              color='primary'
              // type='submit'
              radius='full'
              size='lg'
              className='px-8'
            >
              Continue
            </Button>
          </div>
        </form>
        <BillingAndPaymentModal
          isOpen={openCheckoutModal}
          onClose={() => setOpenCheckoutModal(false)}
        />
      </CardBody>
    </Card>
  );
};
