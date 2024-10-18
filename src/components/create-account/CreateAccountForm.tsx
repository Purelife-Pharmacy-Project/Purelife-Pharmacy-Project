'use client';

import { useGetCities, useGetStates, useRegister } from '@/hooks';
import { FormMessage } from '@/library/ui/FormMessage';
import {
  RegisterPayload,
  registerValidationSchema,
} from '@/services/user/schema';
import {
  inputAuth,
  selectAuth,
  selectBorderedGrayLight,
  textAreaDefault,
} from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Input,
  Link,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { IconEye } from '../icons/IconEye';
import { IconEyeClose } from '../icons/IconEyeClose';
import { IconSpinner } from '../icons/IconSpinner';
import { IconLock } from '../icons/IconLock';

export const CreateAccountForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
    setValue,
  } = useForm<RegisterPayload>({
    resolver: zodResolver(registerValidationSchema),
  });

  const state = watch('stateId');

  const router = useRouter();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const toggleVisibility = () => setPasswordIsVisible(!passwordIsVisible);

  const { registerUser, loadingRegister, registerError, isSuccess, isError } =
    useRegister();

  const { states, loadingStates } = useGetStates();
  const { cities, loadingCities } = useGetCities(+(state || 0));

  if (isSuccess) {
    toast.success('Account created successfully');
    router.push(`/sign-in?user=${getValues('email')}`);
  }

  const onSubmit: SubmitHandler<RegisterPayload> = (data) => {
    registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, console.log)} className='grid gap-3'>
      {isError ? <FormMessage type='error' message={registerError!} /> : null}
      <p className='font-medium text-[#1E272F]'>Full Name</p>
      <Input
        type='text'
        autoComplete='new-name'
        isInvalid={!!errors.name?.message}
        errorMessage={errors.name?.message}
        classNames={inputAuth}
        startContent={
          <span className='px-1'></span>
        }
        {...register('name')}
      />
      <p className='font-medium text-[#1E272F]'>Email Address</p>
      <Input
        type='email'
        autoComplete='email'
        isInvalid={!!errors.email?.message}
        errorMessage={errors.email?.message}
        classNames={inputAuth}
        startContent={
          <span className='px-1'></span>
        }
        {...register('email')}
      />
      <p className='font-medium text-[#1E272F]'>Phone Number</p>
      <Input
        type='tel'
        autoComplete='tel'
        isInvalid={!!errors.phoneNumber?.message}
        errorMessage={errors.phoneNumber?.message}
        classNames={inputAuth}
        startContent={
          <span className='px-1'></span>
        }
        {...register('phoneNumber')}
      />
      <div className='grid grid-cols-[1fr_1fr] gap-5 w-full'>
        <div>
          <p className='font-medium text-[#1E272F] mb-3'>State</p>
          <Select
            items={states || []}
            isLoading={loadingStates}
            label='Select'
            isInvalid={!!errors.stateId?.message}
            errorMessage={errors.stateId?.message}
            classNames={selectAuth}
            style={{ paddingLeft: '1.5rem' }}
            onChange={(value) => setValue('stateId', +value.target.value)}
          >
            {(item) => (
              <SelectItem value={+item.id} key={item.id} className='capitalize'>
                {item.name}
              </SelectItem>
            )}
          </Select>
        </div>
        <div>
          <p className='font-medium text-[#1E272F] mb-3'>City</p>
          <Select
            items={cities || []}
            isLoading={loadingCities}
            label='Select'
            isInvalid={!!errors.cityId?.message}
            errorMessage={errors.cityId?.message}
            classNames={selectAuth}
            style={{ paddingLeft: '1.5rem' }}
            onChange={(value) => setValue('cityId', +value.target.value)}
          >
            {(item) => (
              <SelectItem value={item.id} key={item.id} className='capitalize'>
                {item.name}
              </SelectItem>
            )}
          </Select>
        </div>
      </div>

      <p className='font-medium text-[#1E272F]'>Address</p>
      <Input
        autoComplete='street-address'
        classNames={inputAuth}
        isInvalid={!!errors.address?.message}
        errorMessage={errors.address?.message}
        {...register('address')}
        startContent={
          <span className='px-1'></span>
        }
      />
      <p className='font-medium text-[#1E272F]'>Password</p>
      <Input
        type={passwordIsVisible ? 'text' : 'password'}
        autoComplete='new-password'
        isInvalid={!!errors.password?.message}
        errorMessage={errors.password?.message}
        classNames={inputAuth}
        {...register('password')}
        startContent={
          <button type='button' className='px-2'>
              <IconLock color='content' />
          </button>
        }
        endContent={
          <button type='button' className='px-2' onClick={toggleVisibility}>
            {' '}
            {passwordIsVisible ? (
              <IconEyeClose color='content' />
            ) : (
              <IconEye color='content' />
            )}
          </button>
        }
      />

      <div className='flex w-full justify-center'>
        <Button
          isLoading={loadingRegister}
          spinner={<IconSpinner />}
          size='lg'
          type='submit'
          className='mt-10 w-full px-10'
          color='primary'
          radius='full'
        >
          Create Account
        </Button>
      </div>

      <p className='text-center text-sm text-[#5A5A5A4D]'>
        Already have an account?
        <Link className='ml-2 font-medium text-sm text-[#FF0028]' href='/sign-in'>
          {' '}
          Log in
        </Link>
      </p>
    </form>
  );
};
