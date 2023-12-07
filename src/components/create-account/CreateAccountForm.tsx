'use client';

import { Button, Input, Link } from '@nextui-org/react';
import { inputDefault } from '@/theme';
import {
  RegisterPayload,
  registerValidationSchema,
} from '@/services/user/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRegister } from '@/hooks';
import { FormMessage } from '@/library/ui/FormMessage';

export const CreateAccountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload>({
    resolver: zodResolver(registerValidationSchema),
  });

  const { registerUser, loadingRegister, registerError, isSuccess, isError } =
    useRegister();

  const onSubmit: SubmitHandler<RegisterPayload> = (data) => {
    registerUser(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-8'>
      {isError ? <FormMessage type='error' message={registerError!} /> : null}
      <Input
        label='Full Name'
        type='text'
        autoComplete='new-name'
        classNames={inputDefault}
        {...register('name')}
      />
      <Input
        label='Email'
        type='email'
        autoComplete='new-email'
        classNames={inputDefault}
        {...register('email')}
      />
      <Input
        label='Password'
        type='password'
        autoComplete='new-password'
        classNames={inputDefault}
        {...register('password')}
      />
      <p className='mx-auto w-full text-center font-light md:max-w-[400px]'>
        We&apos;ll use your data to improve your website experience, manage
        account access, and for other purposes as detailed in our privacy
        policy.
      </p>

      <div className='flex justify-center'>
        <Button
          isLoading={loadingRegister}
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
