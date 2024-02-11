'use client';
import { useLogin } from '@/hooks';
import { FormMessage } from '@/library/ui/FormMessage';
import { LoginPayload, loginValidationSchema } from '@/services/user/schema';
import { inputDefault } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Link } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IconEye } from '../icons/IconEye';
import { IconEyeClose } from '../icons/IconEyeClose';
import { IconSpinner } from '../icons/IconSpinner';

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
    loginUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4 md:w-[554px]'>
      {isError ? <FormMessage type='error' message={loginError!} /> : null}
      <Input
        {...register('email')}
        label='Email'
        autoComplete='new-email'
        errorMessage={errors.email?.message}
        type='email'
        classNames={inputDefault}
      />
      <Input
        {...register('password')}
        label='Password'
        autoComplete='new-password'
        errorMessage={errors.password?.message}
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

      <div className='flex flex-col items-center justify-start gap-4 md:flex-row'>
        <Button
          type='submit'
          size='lg'
          spinner={<IconSpinner />}
          isLoading={loadingLogin}
          className='px-20'
          color='primary'
          radius='full'
        >
          Login
        </Button>

        <p className='text-center'>
          <Link isDisabled href='/forgot-password'>
            Forgot Password
          </Link>
        </p>
      </div>

      <p className='mt-4'>
        Don&apos;t have an account?{' '}
        <Link color='primary' href='/create-account'>
          Create an account
        </Link>
      </p>
    </form>
  );
};
