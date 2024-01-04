'use client';

import { useGetUser } from '@/hooks';
import { BillingPayload, billingSchema } from '@/services/billing/schema';
import { User, UserType } from '@/services/user/types';
import { inputBorderedRegular, selectBordered } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox, Input, Select, SelectItem } from '@nextui-org/react';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type BillingFormProps = {
  onFinish: (data: Partial<UserType> | null) => void;
};

export const BillingForm: FC<BillingFormProps> = ({ onFinish }) => {
  const { user } = useGetUser();

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    streetAddress: '',
    apartment: '',
    city: '',
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
      const country = _user.contactAddress.split(',').pop();
      const streetAddress = _user.contactAddress.split(',').shift();
      const apartment = _user.contactAddress.split(' ')[0];
      const city = _user.contactAddress.split(',')[2];

      console.log(user.contactAddress);
      // does not come back with contact address

      // TODO: finish the prefill

      setValue('firstName', _user.firstName);
      setValue('lastName', _user.lastName);
      setValue('email', _user.email);
      setValue('phone', _user.phoneNumber);
      setValue('country', country || '');
      setValue('streetAddress', streetAddress || '');
      setValue('apartment', city || '');
      setValue('city', apartment || '');
    }
  }, [setValue, user]);

  useEffect(() => {
    if (isValid && isDirty) {
      const formData = getValues();
      const payload: Partial<UserType> = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phoneNumber: formData.phone,
        contactAddress: `${formData.apartment} ${formData.streetAddress}, ${formData.city}, ${formData.country}`,
      };
      onFinish(payload);
    } else {
      onFinish(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid, isDirty]);

  return (
    <form className='flex flex-col gap-6'>
      <div className='flex gap-4'>
        <Input
          radius='lg'
          {...register('firstName')}
          errorMessage={errors.firstName?.message}
          labelPlacement='outside'
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
          isRequired
          label='Last name'
          placeholder='Enter your last name'
          classNames={inputBorderedRegular}
        />
      </div>
      <div className='relative mt-6 w-full'>
        <Select
          color='default'
          {...register('country')}
          errorMessage={errors.country?.message}
          aria-label='Select a country'
          labelPlacement='outside'
          isRequired
          classNames={selectBordered}
          defaultSelectedKeys={[defaultValues.country || '']}
          disabledKeys={['']}
          label='Country/Region'
        >
          <SelectItem className='text-content' key={''} value=''>
            Select a country
          </SelectItem>
          <SelectItem className='text-content' key={'nigeria'} value='nigeria'>
            Nigeria
          </SelectItem>
        </Select>
      </div>
      <div className='w-full'>
        <Input
          radius='lg'
          isRequired
          {...register('streetAddress')}
          errorMessage={errors.streetAddress?.message}
          labelPlacement='outside'
          label='Street Address'
          placeholder='Enter your street address'
          classNames={inputBorderedRegular}
        />
      </div>

      {/* <div className='relative mt-6 w-full'>
        <Select
          color='default'
          aria-label='delivery address'
          labelPlacement='outside'
          classNames={selectBordered}
          defaultSelectedKeys={['0']}
          label='Delivery Address'
        >
          <SelectItem key={0} value=''>
            Select your location and see the price
          </SelectItem>
          <SelectItem key={1} value='ngn'>
            Nigeria
          </SelectItem>
          <SelectItem key={2} value='us'>
            United States
          </SelectItem>
        </Select>
      </div> */}

      <div className='w-full'>
        <Input
          {...register('apartment')}
          errorMessage={errors.apartment?.message}
          radius='lg'
          labelPlacement='outside'
          isRequired
          label='Apartment/Suite'
          placeholder='Apartment, suite, etc. (optional)'
          classNames={inputBorderedRegular}
        />
      </div>
      <div className='w-full'>
        <Input
          {...register('city')}
          errorMessage={errors.city?.message}
          radius='lg'
          labelPlacement='outside'
          label='Town/City'
          isRequired
          placeholder='Town/City'
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
    </form>
  );
};
