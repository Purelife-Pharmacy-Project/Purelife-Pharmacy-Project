'use client';

import { useGetCities, useGetStates, useRegister } from '@/hooks';
import { FormMessage } from '@/library/ui/FormMessage';
import {
  RegisterPayload,
  registerValidationSchema,
} from '@/services/user/schema';
import {
  inputDefault,
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
    <form
      onSubmit={handleSubmit(onSubmit, console.log)}
      className='grid gap-8 md:w-[554px]'
    >
      {isError ? <FormMessage type='error' message={registerError!} /> : null}
      <Input
        label='Full Name'
        type='text'
        autoComplete='new-name'
        isInvalid={!!errors.name?.message}
        errorMessage={errors.name?.message}
        classNames={inputDefault}
        {...register('name')}
      />
      <Input
        label='Email'
        type='email'
        autoComplete='email'
        isInvalid={!!errors.email?.message}
        errorMessage={errors.email?.message}
        classNames={inputDefault}
        {...register('email')}
      />
      <Input
        label='Phone Number'
        type='tel'
        autoComplete='tel'
        isInvalid={!!errors.phoneNumber?.message}
        errorMessage={errors.phoneNumber?.message}
        classNames={inputDefault}
        {...register('phoneNumber')}
      />
      <Select
        items={states || []}
        isLoading={loadingStates}
        label='State'
        isInvalid={!!errors.stateId?.message}
        errorMessage={errors.stateId?.message}
        classNames={selectBorderedGrayLight}
        onChange={(value) => setValue('stateId', +value.target.value)}
      >
        {(item) => (
          <SelectItem value={+item.id} key={item.id} className='capitalize'>
            {item.name}
          </SelectItem>
        )}
      </Select>
      <Select
        items={cities || []}
        isLoading={loadingCities}
        label='City'
        isInvalid={!!errors.cityId?.message}
        errorMessage={errors.cityId?.message}
        classNames={selectBorderedGrayLight}
        onChange={(value) => setValue('cityId', +value.target.value)}
      >
        {(item) => (
          <SelectItem value={item.id} key={item.id} className='capitalize'>
            {item.name}
          </SelectItem>
        )}
      </Select>
      <Textarea
        label='Address'
        autoComplete='street-address'
        classNames={textAreaDefault}
        isInvalid={!!errors.address?.message}
        errorMessage={errors.address?.message}
        {...register('address')}
      />
      <Input
        label='Password'
        type={passwordIsVisible ? 'text' : 'password'}
        autoComplete='new-password'
        isInvalid={!!errors.password?.message}
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
