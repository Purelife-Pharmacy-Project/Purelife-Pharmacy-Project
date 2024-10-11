'use client';
import { FormMessage } from '@/library/ui/FormMessage';
import { Button, Input, Link } from '@nextui-org/react';
import {
  changePasswordPayload,
  changePasswordValidationSchema,
} from '@/services/user/schema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { inputAuth } from '@/theme';
import { IconEyeClose } from '@/components/icons/IconEyeClose';
import { IconEye } from '@/components/icons/IconEye';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconSpinner } from '@/components/icons/IconSpinner';

export const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<changePasswordPayload>({
    resolver: zodResolver(changePasswordValidationSchema),
  });

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const loginError = 'Error';

  const toggleVisibility = () => setPasswordIsVisible(!passwordIsVisible);

  const onSubmit: SubmitHandler<changePasswordPayload> = (
    data: changePasswordPayload
  ) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
      {false ? <FormMessage type='error' message={loginError!} /> : null}
      <p className='font-medium text-[#1E272F]'>Old Password</p>
      <Input
        {...register('oldPassword')}
        autoComplete='old-password'
        errorMessage={errors.oldPassword?.message}
        type={passwordIsVisible ? 'text' : 'password'}
        classNames={inputAuth}
        startContent={
          <span className='px-1'></span>
        }
        endContent={
          <button className='px-2' onClick={toggleVisibility}>
            {' '}
            {passwordIsVisible ? (
              <IconEyeClose color='content' />
            ) : (
              <IconEye color='content' />
            )}
          </button>
        }
      />
      <p className='font-medium text-[#1E272F]'>New Password</p>
      <Input
        {...register('newPassword')}
        autoComplete='new-password'
        errorMessage={errors.newPassword?.message}
        type={passwordIsVisible ? 'text' : 'password'}
        classNames={inputAuth}
        startContent={
          <span className='px-1'></span>
        }
        endContent={
          <button className='px-2' onClick={toggleVisibility}>
            {' '}
            {passwordIsVisible ? (
              <IconEyeClose color='content' />
            ) : (
              <IconEye color='content' />
            )}
          </button>
        }
      />

      <Button
        type='submit'
        size='lg'
        spinner={<IconSpinner />}
        isLoading={false}
        className='px-20'
        color='primary'
        radius='full'
      >
        Change Password
      </Button>

      <p className='text-center text-sm text-[#5A5A5A4D]'>
        Already gotten your password?
        <Link className='ml-2 font-medium text-sm text-[#FF0028]' href='/sign-in'>
          {' '}
          Log in
        </Link>
      </p>
    </form>
  );
};
