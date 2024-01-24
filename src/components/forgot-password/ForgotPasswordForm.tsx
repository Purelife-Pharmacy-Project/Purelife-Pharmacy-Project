'use client';
import { FormMessage } from '@/library/ui/FormMessage';
import { Button, Input } from '@nextui-org/react';
import {
  changePasswordPayload,
  changePasswordValidationSchema,
} from '@/services/user/schema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { inputDefault } from '@/theme';
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

      <Input
        {...register('oldPassword')}
        label='Old Password'
        autoComplete='old-password'
        errorMessage={errors.oldPassword?.message}
        type={passwordIsVisible ? 'text' : 'password'}
        classNames={inputDefault}
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

      <Input
        {...register('newPassword')}
        label='New Password'
        autoComplete='new-password'
        errorMessage={errors.newPassword?.message}
        type={passwordIsVisible ? 'text' : 'password'}
        classNames={inputDefault}
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
    </form>
  );
};
