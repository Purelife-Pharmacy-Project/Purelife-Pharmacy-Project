'use client';

import { BillingAddressModal } from '@/components/billing/BillingAddressModal';
import { IconBrowse } from '@/components/icons/IconBrowse';
import { useGetUser } from '@/hooks';
import { Line } from '@/library/ui/Line';
import { inputDefault } from '@/theme';
import { Button, Image, Input, Radio, RadioGroup } from '@nextui-org/react';
import { useState } from 'react';

export const AccountPersonalForm = () => {
  const { user, loadingUser } = useGetUser();
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  return (
    <div className='grid gap-6'>
      <form className='grid gap-6'>
        <div className='grid h-[100px] w-[100px] place-content-center rounded-full bg-white'>
          <IconBrowse />
        </div>
        <Input
          label='Name'
          size='lg'
          readOnly
          defaultValue={user?.name}
          placeholder='Enter your username'
          labelPlacement='outside'
          autoComplete='personal-info'
          classNames={inputDefault}
        />

        <div className='flex gap-4'>
          <Input
            label='Email Address'
            labelPlacement='outside'
            size='lg'
            readOnly
            defaultValue={user?.email}
            placeholder='Enter your email address'
            type='email'
            classNames={inputDefault}
          />
          <Input
            label='Phone'
            type='tel'
            size='lg'
            readOnly
            defaultValue={user?.phoneNumber}
            placeholder='Enter your phone number'
            labelPlacement='outside'
            autoComplete='personal-info'
            inputMode='numeric'
            classNames={inputDefault}
          />
        </div>

        <Input
          label='Address'
          size='lg'
          readOnly
          defaultValue={
            user?.contactAddress && user.contactAddress.trim() !== ''
              ? user.contactAddress
              : 'N/A'
          }
          placeholder='Enter your address'
          labelPlacement='outside'
          autoComplete='personal-info'
          classNames={inputDefault}
        />

        <Button
          color='primary'
          isDisabled={loadingUser}
          onPress={() => setShowEditProfileModal(true)}
          size='lg'
          radius='full'
          className='w-max px-10'
        >
          Edit Profile
        </Button>

        <BillingAddressModal
          isOpen={showEditProfileModal}
          openChange={() => setShowEditProfileModal(false)}
        />
      </form>

      <Line className='w-full' />

      <h1 className='text-2xl font-semibold text-header-100'>Payment</h1>

      <RadioGroup>
        <Radio value='debit/atm'>Pay via Debit/ Credit/ ATM card</Radio>
      </RadioGroup>

      <Image
        alt='secured by paystack'
        width={300}
        height='auto'
        src='/images/paystack-secure.png'
      />

      <Button color='primary' size='lg' radius='full' className='w-max px-10'>
        Add Payment Option
      </Button>
    </div>
  );
};
