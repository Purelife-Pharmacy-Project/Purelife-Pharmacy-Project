'use client';

import { useRegister } from '@/hooks';
import { FormMessage } from '@/library/ui/FormMessage';
import {
  RegisterPayload,
  registerValidationSchema,
} from '@/services/user/schema';
import { inputDefault } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Link } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { IconEye } from '../icons/IconEye';
import { IconEyeClose } from '../icons/IconEyeClose';
import { IconSpinner } from '../icons/IconSpinner';

export const CreateAccountForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterPayload>({
    resolver: zodResolver(registerValidationSchema),
  });

  const router = useRouter();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const toggleVisibility = () => setPasswordIsVisible(!passwordIsVisible);

  const { registerUser, loadingRegister, registerError, isSuccess, isError } =
    useRegister();

  if (isSuccess) {
    toast.success('Account created successfully');
    router.push(`/sign-in?user=${getValues('email')}`);
  }

  const onSubmit: SubmitHandler<RegisterPayload> = (data) => {
    registerUser(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-8 md:w-[554px]'>
      {isError ? <FormMessage type='error' message={registerError!} /> : null}
      <Input
        label='Full Name'
        type='text'
        autoComplete='new-name'
        errorMessage={errors.name?.message}
        classNames={inputDefault}
        {...register('name')}
      />
      <Input
        label='Email'
        type='email'
        autoComplete='new-email'
        errorMessage={errors.email?.message}
        classNames={inputDefault}
        {...register('email')}
      />
      <Input
        label='Password'
        type={passwordIsVisible ? 'text' : 'password'}
        autoComplete='new-password'
        errorMessage={errors.password?.message}
        classNames={inputDefault}
        {...register('password')}
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
      <p className='mx-auto w-full text-center font-light md:max-w-[400px]'>
        We&apos;ll use your data to improve your website experience, manage
        account access, and for other purposes as detailed in our privacy
        policy.
      </p>

      <div className='flex justify-center'>
        <Button
          isLoading={loadingRegister}
          spinner={<IconSpinner />}
          size='lg'
          type='submit'
          className='px-10'
          color='primary'
          radius='full'
        >
          Create Account
        </Button>
      </div>

      <p className='text-center'>
        Already have an account?
        <Link className='ml-2' href='/sign-in'>
          {' '}
          Sign in
        </Link>
      </p>
    </form>
  );
};
