'use client';

import { inputBorderedRegular, selectBordered } from '@/theme';
import {
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';

export const BillingForm = () => {
  return (
    <form className='grid gap-6'>
      <div className='flex gap-4'>
        <Input
          radius='lg'
          labelPlacement='outside'
          label='First name'
          placeholder='Enter your first name'
          classNames={inputBorderedRegular}
        />
        <Input
          radius='lg'
          labelPlacement='outside'
          label='Last name'
          placeholder='Enter your last name'
          classNames={inputBorderedRegular}
        />
      </div>
      <div className='relative mt-6 w-full'>
        <Select
          color='default'
          aria-label='Select a country'
          labelPlacement='outside'
          classNames={selectBordered}
          defaultSelectedKeys={['0']}
          label='Country/Region'
        >
          <SelectItem key={0} value=''>
            Select a country
          </SelectItem>
          <SelectItem key={1} value='ngn'>
            Nigeria
          </SelectItem>
          <SelectItem key={2} value='us'>
            United States
          </SelectItem>
        </Select>
      </div>
      <div className='w-full'>
        <Input
          radius='lg'
          labelPlacement='outside'
          label='Street Address'
          placeholder='Enter your street address'
          classNames={inputBorderedRegular}
        />
      </div>

      <div className='relative mt-6 w-full'>
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
      </div>

      <div className='w-full'>
        <Input
          radius='lg'
          labelPlacement='outside'
          label='Apartment/Suite'
          placeholder='Apartment, suite, etc. (optional)'
          classNames={inputBorderedRegular}
        />
      </div>
      <div className='w-full'>
        <Input
          radius='lg'
          labelPlacement='outside'
          label='Town/City'
          placeholder='Town/City'
          classNames={inputBorderedRegular}
        />
      </div>
      <div className='w-full'>
        <Input
          radius='lg'
          labelPlacement='outside'
          label='Phone'
          placeholder='0123XXXXXXX'
          classNames={inputBorderedRegular}
        />
      </div>
      <div className='w-full'>
        <Input
          radius='lg'
          type='email'
          labelPlacement='outside'
          label='Email Address'
          placeholder='john@doe.com'
          classNames={inputBorderedRegular}
        />
      </div>
      <div className='w-full'>
        <Checkbox>Create an account?</Checkbox>
      </div>

      <div className='relative w-full'>
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
      </div>
    </form>
  );
};
