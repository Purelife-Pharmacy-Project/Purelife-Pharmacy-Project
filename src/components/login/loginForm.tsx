'use client';
import { useLogin } from '@/hooks';
import { FormMessage } from '@/library/ui/FormMessage';
import { LoginPayload, loginValidationSchema } from '@/services/user/schema';
import { inputAuth } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Link } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IconEye } from '../icons/IconEye';
import { IconEyeClose } from '../icons/IconEyeClose';
import { IconSpinner } from '../icons/IconSpinner';
import { IconLock } from '../icons/IconLock';

export const LoginForm = () => {
  const {
    register,
    setValue,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: zodResolver(loginValidationSchema),
  });

  const queryParams = useSearchParams();
  const email = queryParams.get('user');
  const redirectUrl = queryParams.get('redirectUrl');
  const router = useRouter();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const toggleVisibility = () => setPasswordIsVisible(!passwordIsVisible);

  useEffect(() => {
    if (email) {
      setValue('email', email, {
        shouldDirty: true,
        shouldValidate: true,
        shouldTouch: true,
      });

      // focus on the password input
      setFocus('password');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const { loginUser, loadingLogin, loginError, isError } = useLogin(() => {
    router.push(redirectUrl ? redirectUrl : '/');
  });

  const onSubmit: SubmitHandler<LoginPayload> = (data) => {
    try {
      loginUser(data);
    } catch (e) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
      {isError ? <FormMessage type='error' message={loginError!} /> : null}
      <p className='font-medium text-[#1E272F]'>Email Address</p>
      <Input
        {...register('email')}
        autoComplete='user-email'
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        type='email'
        classNames={inputAuth}
        startContent={
          <span className='px-1'></span>
        }
      />
      <p className='font-medium text-[#1E272F]'>Password</p>
      <Input
        {...register('password')}
        autoComplete='user-password'
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        type={passwordIsVisible ? 'text' : 'password'}
        classNames={inputAuth}
        startContent={
          <button type='button' className='px-2'>
              <IconLock color='content' />
          </button>
        }
        endContent={
          <button type='button' className='px-2' onClick={toggleVisibility}>
            {passwordIsVisible ? (
              <IconEyeClose color='content' />
            ) : (
              <IconEye color='content' />
            )}
          </button>
        }
      />
      <p className='text-right cursor-pointer'>
          <Link href='/forgot-password'>
            Forgot Password
          </Link>
        </p>
        <Button
          type='submit'
          size='lg'
          spinner={<IconSpinner />}
          isLoading={loadingLogin}
          className=''
          color='primary'
          radius='full'
        >
          Continue
        </Button>

      <p className='text-center text-sm text-[#5A5A5A4D]'>
        Don&apos;t have an account?{' '}
        <Link className='ml-2 font-medium text-sm text-[#FF0028]' color='primary' href='/create-account'>
          Create an account
        </Link>
      </p>
    </form>
  );
};
