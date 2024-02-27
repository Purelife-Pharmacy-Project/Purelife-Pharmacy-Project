'use client';
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
import debounce from 'lodash/debounce';
import { FormEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
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
        setIsBooked(true);
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
      setIsBooked(false);
      setCalendarDate(undefined);
      setCalendarTime(undefined);
      toast.success('Information saved successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const weekend = (date: Date | string) => new Date() < date;
  const minDate = new Date();

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
  const genderAnswers = [
    {
      name: 'Male',
      value: 'male',
    },
    {
      name: 'Female',
      value: 'female',
    },
    {
      name: 'Prefer not to say',
      value: 'other',
    },
  ];

  const handleDateDebounce = debounce((value: string) => {
    const date = value.split('-').join('/');
    setFormattedDate(date);
    setCalendarDate(value);

    if (calendarTime) {
      setCalendarTime(undefined);
    }
  }, 500);

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

  const [isBooked, setIsBooked] = useState(false);

  const combineDateAndTime = (date: string, time: string): string => {
    const [hours, minutes, period] = time.match(/\d+|AM|PM/g) as string[];
    const adjustedHours =
      (parseInt(hours, 10) % 12) + (period === 'PM' ? 12 : 0);
    return new Date(
      `${date}T${adjustedHours.toString().padStart(2, '0')}:${minutes.padStart(
        2,
        '0'
      )}:00.000Z`
    ).toISOString();
  };

  const booksSlotOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const date = (formattedDate as string)?.split('/').join('-');
    const dateTime = combineDateAndTime(date!, formattedDate!);

    const payload = {
      summary: 'Consultation',
      startTime: dateTime,
      endTime: dateTime,
    };

    if (!isBooked) {
      createCalendarEvent(payload);
    }
  };

  return (
    <Card shadow='none' className='bg-primaryLight p-5'>
      <CardBody>
        <p className='mb-4 text-2xl font-semibold text-header-100'>
          Book a slot
        </p>
        <form
          onSubmit={booksSlotOnSubmit}
          className='grid gap-4 md:max-w-[50%] md:flex-row'
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
        </form>

        <div className='mt-8 h-[1px] w-full bg-header-100'></div>
        <p className='my-4 text-2xl font-semibold text-header-100'>
          Enter information
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={twMerge(
            'grid gap-6 md:max-w-[80%]',
            isBooked ? '' : 'pointer-events-none cursor-not-allowed blur-sm'
          )}
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
              label='What is your gender'
              placeholder='Select your gender'
              labelPlacement='outside'
              color='default'
              classNames={selectBordered}
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
              isDisabled={loadingMedsAllergies}
              label='Do you have any allergies to medication?'
              placeholder='Choose answer'
              labelPlacement='outside'
              color='default'
              classNames={selectBordered}
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
            <div className='md:max-w-[50%]'>
              <Select
                size='lg'
                isLoading={loadingAlcoholConsumptions}
                label='How often do you consume alcohol?'
                placeholder='Choose answer'
                labelPlacement='outside'
                color='default'
                classNames={selectBordered}
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

          <div className='flex w-full flex-col gap-6 lg:mt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0 xl:w-[50%]'>
            <div className='grid gap-2'>
              <p className='text-sm font-medium uppercase'>Consultation Fee:</p>
              <p className='text-3xl font-bold text-primary'>
                $10/{toNaira(10000)}
              </p>
            </div>

            <Button
              color='primary'
              type='submit'
              isLoading={isSubmittingConsultDoctorForm}
              radius='full'
              size='lg'
              className='px-8'
            >
              Save and Continue
            </Button>
          </div>
        </form>
        <BillingAndPaymentModal
          isOpen={openCheckoutModal}
          onClose={onCloseCheckoutModal}
          toggleModal={() => setOpenCheckoutModal(false)}
          amount={10000}
        />
      </CardBody>
    </Card>
  );
};
