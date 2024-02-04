'use client';

import { useGetUser, useUpdateUserContactInfo } from '@/hooks';
import { BillingPayload, billingSchema } from '@/services/billing/schema';
import { User, UserType } from '@/services/user/types';
import { inputBorderedRegular } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, Input } from '@nextui-org/react';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type BillingFormProps = {
  onUpdated: () => void;
  isProfile?: boolean;
};

export const BillingForm: FC<BillingFormProps> = ({ onUpdated, isProfile }) => {
  const { user } = useGetUser();
  const { updateUserInfo, loadingUpdateUserInfo } = useUpdateUserContactInfo(
    () => onUpdated()
  );

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    createAccount: false,
  };

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<BillingPayload>({
    resolver: zodResolver(billingSchema),
    mode: 'onChange',
    defaultValues,
  });

  useEffect(() => {
    if (user) {
      const _user = new User(user);

      setValue('firstName', _user.firstName);
      setValue('lastName', _user.lastName);
      setValue('email', _user.email);
      setValue('phone', _user.phoneNumber);
      setValue('address', _user.contactAddress);
    }
  }, [setValue, user]);

  const onSubmit = (data: BillingPayload) => {
    const payload: Partial<UserType> = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phoneNumber: data.phone,
      contactAddress: data.address,
    };

    if (data.createAccount) {
      // if user chooses to create an account while editing billing information
    }

    updateUserInfo(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
      <div className='flex gap-4'>
        <Input
          radius='lg'
          {...register('firstName')}
          errorMessage={errors.firstName?.message}
          labelPlacement='outside'
          disabled={!user}
          label='First name'
          isRequired
          placeholder='Enter your first name'
          classNames={inputBorderedRegular}
        />
        <Input
          radius='lg'
          {...register('lastName')}
          errorMessage={errors.lastName?.message}
          labelPlacement='outside'
          disabled={!user}
          isRequired
          label='Last name'
          placeholder='Enter your last name'
          classNames={inputBorderedRegular}
        />
      </div>
      <div className='w-full'>
        <Input
          radius='lg'
          isRequired
          {...register('address')}
          errorMessage={errors.address?.message}
          labelPlacement='outside'
          label='Contact Address'
          placeholder='Enter your address'
          classNames={inputBorderedRegular}
        />
      </div>
      <div className='w-full'>
        <Input
          {...register('phone')}
          errorMessage={errors.phone?.message}
          radius='lg'
          type='text'
          minLength={2}
          maxLength={11}
          isRequired
          inputMode='numeric'
          labelPlacement='outside'
          label='Phone'
          placeholder='0123XXXXXXX'
          classNames={inputBorderedRegular}
        />
      </div>
      <div className='w-full'>
        <Input
          {...register('email')}
          errorMessage={errors.email?.message}
          radius='lg'
          type='email'
          isRequired
          labelPlacement='outside'
          label='Email Address'
          placeholder='john@doe.com'
          classNames={inputBorderedRegular}
        />
      </div>
      {!user ? (
        <div className='w-full'>
          <Checkbox {...register('createAccount')}>Create an account?</Checkbox>
        </div>
      ) : null}

      {/* <div className='relative w-full'>
        <Textarea
          size='lg'
          labelPlacement='outside'
          label='Order Notes (Optional)'
          style={{ height: '310px' }}
          placeholder='Noted about your prescription'
          classNames={{
            label: ['text-content text-md font-light'],
            inputWrapper: [
              'border border-content bg-white data-[hover=true]:bg-white',
              'group-data-[focus=true]:bg-white',
              'group-data-[active=true]:bg-white',
            ],
          }}
        />
      </div> */}

      <Button
        type='submit'
        color='primary'
        size={isProfile ? 'lg' : 'md'}
        radius={isProfile ? 'full' : 'lg'}
        className={isProfile ? 'mb-5 w-max ' : 'w-full'}
        isDisabled={!isValid || !isDirty || loadingUpdateUserInfo}
        isLoading={loadingUpdateUserInfo}
      >
        Save Changes
      </Button>
    </form>
  );
};
