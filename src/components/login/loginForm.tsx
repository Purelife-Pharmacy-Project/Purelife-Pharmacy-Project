'use client';
import { useLogin } from '@/hooks';
import { FormMessage } from '@/library/ui/FormMessage';
import { LoginPayload, loginValidationSchema } from '@/services/user/schema';
import { inputDefault } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Link } from '@nextui-org/react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: zodResolver(loginValidationSchema),
  });

  const { loginUser, loadingLogin, loginError, isSuccess, isError } =
    useLogin();

  const onSubmit: SubmitHandler<LoginPayload> = (data) => {
    loginUser(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
      {isError ? <FormMessage type='error' message={loginError!} /> : null}
      <Input
        {...register('email')}
        label='Email'
        errorMessage={errors.email?.message}
        type='email'
        classNames={inputDefault}
      />
      <Input
        {...register('password')}
        label='Password'
        errorMessage={errors.password?.message}
        type='password'
        classNames={inputDefault}
      />

      <div className='flex items-center justify-start gap-4'>
        <Button
          type='submit'
          size='lg'
          isLoading={loadingLogin}
          className='px-20'
          color='primary'
          radius='full'
        >
          Login
        </Button>

        <p className='text-center'>
          <Link href='/sign-in'>Forgot Password</Link>
        </p>
      </div>
      <p>
        Don&apos;t have an account?{' '}
        <Link color='primary' href='/create-account'>
          Create an account
        </Link>
      </p>
    </form>
  );
};
