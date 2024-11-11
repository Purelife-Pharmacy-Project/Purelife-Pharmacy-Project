'use client';
import { genderAnswers } from '@/constants';
import { toNaira } from '@/helpers/utils';
import {
  useCreateCalendarEvent,
  useGetAvailableTimeSlots,
  useSubmitConsultDoctorForm,
} from '@/hooks/useConsultDoctor';
import {
  useGetAlcoholConsumptionEnum,
  useGetConditionEnum,
  useGetMedsAllergyEnum,
  useGetSymptomEnum,
} from '@/hooks/useEnum';
import { InputError } from '@/library/ui/InputError';
import {
  ConsultDoctorFormPayload,
  consultDoctorFormValidationSchema,
} from '@/services/consult-doctor/schema';
import { ModifiedConsultDoctorFormPayload } from '@/services/consult-doctor/types';
import {
  inputBordered,
  inputBorderedGray,
  selectBordered,
  selectBorderedGray,
  textAreaClassNames,
} from '@/theme';
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
import debounce from 'lodash/debounce';
import { FormEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { BillingAndPaymentModal } from './modals/BillingAndPaymentModal';

export const BookConsultationForm = () => {
  const [calendarDate, setCalendarDate] = useState<Date | string>();
  const [formattedDate, setFormattedDate] = useState<string | undefined>(
    undefined
  );
  const [calendarTime, setCalendarTime] = useState<string | undefined>(
    undefined
  );

  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  const { data: conditions, isLoading: loadingConditions } =
    useGetConditionEnum();
  const { data: symptoms, isLoading: loadingSymptoms } = useGetSymptomEnum();
  const { data: medsAllergies, isLoading: loadingMedsAllergies } =
    useGetMedsAllergyEnum();
  const { data: alcoholConsumptions, isLoading: loadingAlcoholConsumptions } =
    useGetAlcoholConsumptionEnum();
  const { data: availableTimeSlots, isLoading: loadingAvailableTimeSlots } =
    useGetAvailableTimeSlots(formattedDate as string);
  const { mutate: createCalendarEvent, isPending: isCreatingCalendarEvent } =
    useCreateCalendarEvent({
      onSuccess: () => {
        toast.success('Slot booked successfully');
      },
    });

  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm<ConsultDoctorFormPayload>({
    resolver: zodResolver(consultDoctorFormValidationSchema),
  });

  const {
    mutate: submitConsultDoctorForm,
    isPending: isSubmittingConsultDoctorForm,
  } = useSubmitConsultDoctorForm({
    onSuccess: () => {
      reset();
      setCalendarDate(undefined);
      setCalendarTime(undefined);
      toast.success('Information saved successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const genericAnswers: BooleanEnumType[] = [
    {
      name: 'Yes',
      value: true,
    },
    {
      name: 'No',
      value: false,
    },
  ];

  const onSubmit: SubmitHandler<ConsultDoctorFormPayload> = (data) => {
    setOpenCheckoutModal(true);
  };

  const onCloseCheckoutModal = () => {
    setOpenCheckoutModal(false);

    const data = getValues();

    if (alcoholConsumptions && medsAllergies) {
      const payload: ModifiedConsultDoctorFormPayload = {
        ...data,
        gender: (
          genderAnswers[data.gender as keyof typeof genderAnswers] as EnumType
        ).value,
        alcoholConsumption: (
          alcoholConsumptions[
            data.alcoholConsumption as keyof typeof alcoholConsumptions
          ] as EnumType
        ).name,
        medsAllergy: (
          medsAllergies[
            data.medsAllergy as keyof typeof medsAllergies
          ] as EnumType
        ).name,
        takingMeds: (
          genericAnswers[
            data.takingMeds as keyof typeof genericAnswers
          ] as BooleanEnumType
        ).value,
        illegalDrugHistory: (
          genericAnswers[
            Number(data.illegalDrugHistory as string) as number
          ] as BooleanEnumType
        ).value,
        tobaccoUsage: (
          genericAnswers[
            data.tobaccoUsage as keyof typeof genericAnswers
          ] as BooleanEnumType
        ).value,
      };

      submitConsultDoctorForm(payload);
      
    }
  };

  return (
    <Card shadow='none' className='mt-4 w-[40%] rounded-none border-t pt-5'>
      <CardBody className='p-0 '>
        {/* <form
          onSubmit={booksSlotOnSubmit}
          className='grid gap-4  md:flex-row'
        >
          <div className='grid'>
            <label
              htmlFor='date'
              className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
            >
              Choose when you want to see your doctor
            </label>
            <DatePicker
              filterDate={weekend}
              placeholderText='Select date'
              selected={calendarDate as Date}
              minDate={minDate}
              disabled={isBooked || isCreatingCalendarEvent}
              onChange={(date: Date) => {
                if (date) {
                  const formattedDate = date.toISOString().split('T')[0];
                  handleDateDebounce(formattedDate);
                  setCalendarDate(date);
                }
              }}
              className='w-full rounded-xl  border-1 border-header-100 px-4 py-3 disabled:border-header-100/40 disabled:opacity-50'
              name='date'
              dateFormat={'dd/MM/yyyy'}
            />
          </div>

          <div className='grid gap-2'>
            <Select
              size='lg'
              label='Choose Time'
              isRequired
              isLoading={loadingAvailableTimeSlots}
              isDisabled={
                !availableTimeSlots || isCreatingCalendarEvent || isBooked
              }
              placeholder='Select time'
              labelPlacement='outside'
              color='default'
              description='Select a 30mins time slot'
              classNames={selectBordered}
              onChange={(e) => {
                setCalendarTime(e.target.value);
              }}
            >
              {availableTimeSlots?.map((timeSlot, index) => (
                <SelectItem
                  className='text-content'
                  value={timeSlot}
                  key={timeSlot.toString()}
                >
                  {timeSlot}
                </SelectItem>
              )) ?? []}
            </Select>
          </div>

          <Button
            color='primary'
            type='submit'
            isDisabled={isBooked}
            isLoading={isCreatingCalendarEvent}
            className='max-w-fit px-8'
            radius='full'
            size='sm'
          >
            Book Slot
          </Button>
        </form> */}

        <form onSubmit={handleSubmit(onSubmit)} className='gap-6 pt-2'>
          <div className='flex flex-col'>
            <label className='mb-2 font-medium text-[#1E272F]'>
              What is your age?
            </label>
            <Input
              size='lg'
              classNames={inputBorderedGray}
              radius='full'
              type='number'
              errorMessage={errors.age?.message}
              {...register('age')}
            />
            <label className='mb-2 mt-4 font-medium text-[#1E272F]'>
              Gender
            </label>
            <Select
              size='lg'
              color='default'
              classNames={selectBorderedGray}
              radius='full'
              errorMessage={errors.gender?.message}
              {...register('gender')}
            >
              {genderAnswers?.map((gender, index) => (
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
          <div className='grid gap-2'>
            <label
              htmlFor='conditions'
              className='text-md mt-4 block origin-top-left pb-1.5 font-medium text-[#1E272F] transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
            >
              Check the conditions that apply to you or any member of your
              immediate relatives:
            </label>

            {loadingConditions ? <p>Loading conditions...</p> : null}

            <div className='grid grid-cols-2 gap-4'>
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
                          : field.value.filter(
                              (v: string) => v !== condition.name
                            );
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
              className='text-md mt-4 block origin-top-left pb-1.5 font-light font-medium text-[#1E272F] transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
            >
              Check the symptoms that you&apos;re currently experiencing:
            </label>

            <div className='grid grid-cols-2 gap-4'>
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
                          : field.value.filter((v: any) => v !== symptom.name);
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
          <div className='grid'>
            <label className='mb-2 mt-6 font-medium text-[#1E272F]'>
              Are you currently taking any medication?
            </label>
            <Select
              size='lg'
              color='default'
              radius='full'
              classNames={selectBorderedGray}
              {...register('takingMeds')}
              errorMessage={errors.takingMeds?.message}
            >
              {genericAnswers.map((answer, index) => (
                <SelectItem
                  className='text-content'
                  key={index}
                  value={Number(answer.value)}
                >
                  {answer.name}
                </SelectItem>
              ))}
            </Select>

            <Textarea
              classNames={{
                inputWrapper: [
                  'pr-2 py-4 flex items-start',
                  'bg-white',
                  'shadow-none',
                  'text-content',
                  'border border-gray-300 data-[hover=true]:bg-white',
                  'group-data-[focus=true]:bg-white',
                  'group-data-[active=true]:bg-white',
                ],
              }}
              className='mt-6 w-full'
              size='lg'
              placeholder='Type them here...'
              radius='md'
              {...register('medsDescription')}
              errorMessage={errors.medsDescription?.message}
            />
          </div>
          <div className='grid gap-2'>
            <label className='mb-2 mt-6 font-medium text-[#1E272F]'>
              Do you have any allergies to medication?
            </label>
            <Select
              size='lg'
              isDisabled={loadingMedsAllergies}
              labelPlacement='outside'
              color='default'
              classNames={selectBorderedGray}
              className='mb-4'
              radius='full'
              {...register('medsAllergy')}
            >
              {medsAllergies?.map((answer, index) => (
                <SelectItem
                  className='text-content'
                  key={index}
                  value={answer.name}
                >
                  {answer.name}
                </SelectItem>
              )) ?? []}
            </Select>
          </div>
          <label className='font-medium text-[#1E272F]'>
            Do you use any kind of tobacco or have you ever used them?
          </label>
          <Select
            size='lg'
            color='default'
            className='mt-2'
            classNames={selectBorderedGray}
            radius='full'
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
              className='text-md block origin-top-left pb-1.5 pt-4 font-light font-medium text-[#1E272F] transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
              htmlFor='tobaccoProducts'
            >
              What kind of tobacco products? How long have you used/been using
              them?
            </label>

            <Textarea
              classNames={{
                inputWrapper: [
                  'pr-2 py-4 flex items-start',
                  'bg-white',
                  'shadow-none',
                  'text-content',
                  'border border-gray-300 data-[hover=true]:bg-white',
                  'group-data-[focus=true]:bg-white',
                  'group-data-[active=true]:bg-white',
                ],
              }}
              size='lg'
              className='w-full'
              placeholder='Type them here..'
              radius='md'
              {...register('tobaccoProductBrand')}
              errorMessage={errors.tobaccoProductBrand?.message}
            />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 mt-4 font-medium text-[#1E272F]'>
              Do you use any kind of illegal drugs or have you ever used them?
            </label>
            <Select
              size='lg'
              color='default'
              classNames={selectBorderedGray}
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
            <label className='text-[#1E272F]mt-4 mt-4 mb-2 font-medium'>
              How often do you consume alcohol?
            </label>
            <Select
              size='lg'
              isLoading={loadingAlcoholConsumptions}
              color='default'
              classNames={selectBorderedGray}
              {...register('alcoholConsumption')}
              errorMessage={errors.alcoholConsumption?.message}
            >
              {alcoholConsumptions?.map((answer, index) => (
                <SelectItem
                  className='text-content'
                  key={index}
                  value={answer.name}
                >
                  {answer.name}
                </SelectItem>
              )) ?? []}
            </Select>
          </div>

          <div className='grid gap-4 md:flex-row'>
            <div className='flex flex-col gap-2'>
              <label
                className='mt-5 text-md block origin-top-left pb-1.5 font-light font-medium text-[#1E272F] transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
                htmlFor='tobaccoProducts'
              >
                Doctor’s Notes (Optional)
              </label>

              <Textarea
                classNames={{
                  inputWrapper: [
                    'pr-2 py-4 flex items-start',
                    'bg-white',
                    'shadow-none',
                    'text-content',
                    'border border-gray-300 data-[hover=true]:bg-white',
                    'group-data-[focus=true]:bg-white',
                    'group-data-[active=true]:bg-white',
                  ],
                }}
                size='lg'
                className='w-full '
                radius='md'
                {...register('additionalNote')}
                errorMessage={errors.additionalNote?.message}
              />
            </div>
          </div>

          <div className='flex w-full flex-col gap-6 lg:mt-10 lg:flex-row lg:items-center lg:justify-between'>
            <Button
              color='primary'
              type='submit'
              isLoading={isSubmittingConsultDoctorForm}
              radius='full'
              size='lg'
              className='w-full'
            >
              Continue
            </Button>
          </div>
        </form>
        {/* <BillingAndPaymentModal
          isOpen={openCheckoutModal}
          onClose={onCloseCheckoutModal}
          toggleModal={() => setOpenCheckoutModal(false)}
          amount={10000}
        /> */}
      </CardBody>
    </Card>
  );
};
