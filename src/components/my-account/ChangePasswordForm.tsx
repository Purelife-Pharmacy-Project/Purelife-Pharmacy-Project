'use client';
import { useChangePassword } from '@/hooks';
import {
  changePasswordPayload,
  changePasswordValidationSchema,
} from '@/services/user/schema';
import { inputDefault } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

export const ChangePasswordForm = () => {
  const { changePassword, loadingChangePassword } = useChangePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<changePasswordPayload>({
    resolver: zodResolver(changePasswordValidationSchema),
  });

  const onSubmit = (data: changePasswordPayload) => {
    changePassword(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-6'>
      <Input
        label='Old Password'
        size='lg'
        type='password'
        placeholder='Enter your old password'
        labelPlacement='outside'
        autoComplete='new-password'
        classNames={inputDefault}
        errorMessage={errors.oldPassword?.message}
        {...register('oldPassword')}
      />

      <Input
        label='New Password'
        size='lg'
        type='password'
        placeholder='Enter your new password'
        labelPlacement='outside'
        autoComplete='new-confirm-password'
        classNames={inputDefault}
        errorMessage={errors.newPassword?.message}
        {...register('newPassword')}
      />

      <Button
        type='submit'
        isLoading={loadingChangePassword}
        color='primary'
        size='lg'
        radius='full'
        className='w-max px-10'
      >
        Save Changes
      </Button>
    </form>
  );
};
