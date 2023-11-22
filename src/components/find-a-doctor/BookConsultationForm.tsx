'use client';
import { inputBordered, selectBordered } from '@/theme';
import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { IconAlarm } from '../icons/IconAlarm';
import { IconCalendar } from '../icons/IconCalendar';

export const BookConsultationForm = () => {
  return (
    <Card shadow='none' className='bg-primaryLight p-5'>
      <CardBody>
        <form className='grid gap-6'>
          <div className='flex flex-col gap-4 md:flex-row'>
            <Input
              size='lg'
              placeholder='First Name'
              name='first-name'
              classNames={inputBordered}
              radius='md'
            />
            <Input
              size='lg'
              placeholder='Last Name'
              name='last-name'
              classNames={inputBordered}
              radius='md'
            />
          </div>
          <div className='flex flex-col gap-4 md:flex-row'>
            <Input
              size='lg'
              placeholder='Email'
              name='email'
              type='email'
              classNames={inputBordered}
              radius='md'
            />
            <Input
              size='lg'
              placeholder='Phone number'
              name='phone number'
              type='number'
              inputMode='numeric'
              classNames={inputBordered}
              radius='md'
            />
          </div>
          <div className='flex flex-col gap-4 md:flex-row'>
            <Input
              size='lg'
              placeholder='Date'
              name='date'
              type='date'
              classNames={inputBordered}
              radius='md'
              endContent={<IconCalendar color='content' />}
            />
            <Input
              size='lg'
              name='time'
              type='time'
              classNames={inputBordered}
              radius='md'
              endContent={<IconAlarm color='content' />}
            />
          </div>
          <Select
            size='lg'
            labelPlacement='outside'
            color='default'
            name='consultation-type'
            classNames={selectBordered}
            defaultSelectedKeys={['0']}
          >
            <SelectItem className='text-content' key={0}>
              Choose consultation type
            </SelectItem>
            <SelectItem className='text-content' key={1}>
              Medical
            </SelectItem>
            <SelectItem className='text-content' key={2}>
              Personal
            </SelectItem>
          </Select>

          <Select
            size='lg'
            labelPlacement='outside'
            color='default'
            name='consultation-reason'
            classNames={selectBordered}
            defaultSelectedKeys={['0']}
          >
            <SelectItem className='text-content' key={0}>
              What are you consulting for
            </SelectItem>
            <SelectItem className='text-content' key={1}>
              Family
            </SelectItem>
            <SelectItem className='text-content' key={2}>
              Friends
            </SelectItem>
          </Select>

          <p className='text-sm'>
            By clicking on “Book Doctor” y/ou agree to our terms of service and
            privacy policy
          </p>

          <div className='flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-0'>
            <div className='grid gap-2'>
              <p className='text-sm font-medium uppercase'>Fee:</p>
              <p className='text-3xl font-bold text-primary'>N10,000</p>
            </div>

            <Button color='primary' radius='full' size='lg' className='px-8'>
              Consult now
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};
