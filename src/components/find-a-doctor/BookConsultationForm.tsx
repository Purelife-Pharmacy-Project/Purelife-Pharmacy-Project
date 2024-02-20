'use client';
import { inputBordered, selectBordered, textAreaClassNames } from '@/theme';
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import { useState } from 'react';
import { IconAlarm } from '../icons/IconAlarm';
import { IconCalendar } from '../icons/IconCalendar';
import { BillingAndPaymentModal } from './modals/BillingAndPaymentModal';

export const BookConsultationForm = () => {
  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  return (
    <Card shadow='none' className='bg-primaryLight p-5'>
      <CardBody>
        <form className='grid gap-6 md:max-w-[80%]'>
          <div className='flex flex-col gap-4 md:flex-row'>
            <Input
              size='lg'
              placeholder='First Name'
              label='First Name'
              labelPlacement='outside'
              classNames={inputBordered}
              radius='md'
            />
            <Input
              size='lg'
              placeholder='Last Name'
              label='Last Name'
              labelPlacement='outside'
              classNames={inputBordered}
              radius='md'
            />
          </div>
          <div className='flex flex-col gap-4 md:flex-row'>
            <Input
              size='lg'
              placeholder='Age'
              label='What is your age?'
              labelPlacement='outside'
              classNames={inputBordered}
              radius='md'
            />

            <Select
              size='lg'
              label='What is your gender'
              placeholder='Select your gender'
              labelPlacement='outside'
              color='default'
              classNames={selectBordered}
            >
              <SelectItem className='text-content' key={0}>
                Male
              </SelectItem>
              <SelectItem className='text-content' key={1}>
                Female
              </SelectItem>
            </Select>
          </div>
          <div className='flex flex-col gap-4 md:flex-row'>
            <Input
              size='lg'
              placeholder='Email'
              label='Email'
              labelPlacement='outside'
              type='email'
              classNames={inputBordered}
              radius='md'
            />
            <Input
              size='lg'
              placeholder='Phone number'
              label='Phone number'
              labelPlacement='outside'
              type='number'
              inputMode='numeric'
              classNames={inputBordered}
              radius='md'
            />
          </div>
          <div className='flex flex-col gap-4 md:flex-row'>
            <Input
              size='lg'
              placeholder='Choose Date'
              type='date'
              label='Choose when you want to see your doctor'
              labelPlacement='outside'
              classNames={inputBordered}
              radius='md'
              endContent={<IconCalendar color='content' />}
            />
            <Input
              size='lg'
              type='time'
              label='Time'
              placeholder='00:00'
              labelPlacement='outside'
              classNames={inputBordered}
              radius='md'
              endContent={<IconAlarm color='content' />}
            />
          </div>

          <div className='grid gap-2'>
            <label
              htmlFor='conditions'
              className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
            >
              Check the conditions that apply to you or any member of your
              immediate relatives:
            </label>

            <div className='grid max-w-[50%] grid-cols-2 gap-4'>
              <Checkbox color='primary' className='w-full'>
                Asthma
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                Asthma
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                Asthma
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                Asthma
              </Checkbox>
            </div>
          </div>

          <div className='grid gap-2'>
            <label
              htmlFor='conditions'
              className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
            >
              Check the symptoms that you&apos;re currently experiencing:
            </label>

            <div className='grid max-w-[50%] grid-cols-2 gap-4'>
              <Checkbox color='primary' className='w-full'>
                Asthma
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                Asthma
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                Asthma
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                Asthma
              </Checkbox>
            </div>
          </div>

          <div className='grid gap-2'>
            <label
              htmlFor='conditions'
              className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
            >
              Are you currently taking any medication?
            </label>

            <div className='grid max-w-[50%] grid-cols-2 gap-4'>
              <Checkbox color='primary' className='w-full'>
                Yes
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                No
              </Checkbox>
            </div>

            <Textarea
              classNames={textAreaClassNames}
              className='w-full md:w-[50%]'
              size='lg'
              placeholder='Type them here..'
              radius='md'
            />
          </div>

          <div className='grid gap-2'>
            <label
              htmlFor='conditions'
              className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
            >
              Do you have any medication allergies?
            </label>

            <div className='grid max-w-[50%] grid-cols-2 gap-4'>
              <Checkbox color='primary' className='w-full'>
                Yes
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                No
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                Not sure
              </Checkbox>
            </div>
          </div>

          <Select
            size='lg'
            label='Do you use any kind of tobacco or have you ever used them?'
            placeholder='Choose answer'
            labelPlacement='outside'
            color='default'
            className='max-w-[50%]'
            classNames={selectBordered}
            defaultSelectedKeys={['0']}
          >
            <SelectItem className='text-content' key={0}>
              Yes
            </SelectItem>
            <SelectItem className='text-content' key={1}>
              No
            </SelectItem>
          </Select>

          <div className='flex flex-col gap-2'>
            <label
              className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
              htmlFor='tobaccoProducts'
            >
              What kind of tobacco products? How long have you used/been using
              them?
            </label>

            <Textarea
              classNames={textAreaClassNames}
              size='lg'
              className='w-full md:w-[50%]'
              placeholder='Type them here..'
              radius='md'
            />
          </div>

          <div className='flex max-w-[50%] flex-col gap-2'>
            <Select
              size='lg'
              label=' Do you use any kind of illegal drugs or have you ever used them?'
              placeholder='Choose answer'
              labelPlacement='outside'
              color='default'
              classNames={selectBordered}
              defaultSelectedKeys={['0']}
            >
              <SelectItem className='text-content' key={0}>
                Yes
              </SelectItem>
              <SelectItem className='text-content' key={1}>
                No
              </SelectItem>

              <SelectItem className='text-content' key={2}>
                Not sure
              </SelectItem>
            </Select>
          </div>

          <div className='flex max-w-[50%] flex-col'>
            <label
              htmlFor='conditions'
              className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
            >
              How often do you consume alcohol?
            </label>

            <div className='grid max-w-[50%] grid-cols-2 gap-4'>
              <Checkbox color='primary' className='w-full'>
                Daily
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                Weekly
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                Monthly
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                Never
              </Checkbox>
              <Checkbox color='primary' className='w-full'>
                Occasionally
              </Checkbox>
            </div>
          </div>

          <div className='grid gap-4 md:flex-row'>
            <p className='text-2xl font-semibold text-header-100'>
              Additional Notes
            </p>

            <div className='flex flex-col gap-2'>
              <label
                className='text-md block origin-top-left pb-1.5 font-light text-content transition-all !duration-200 !ease-out will-change-auto motion-reduce:transition-none'
                htmlFor='tobaccoProducts'
              >
                Doctor’s Notes (Optional)
              </label>

              <Textarea
                classNames={textAreaClassNames}
                size='lg'
                className='w-full md:w-[50%]'
                placeholder='Type them here..'
                radius='md'
              />
            </div>
          </div>

          <p className='text-sm'>
            By clicking on “Book Doctor” y/ou agree to our terms of service and
            privacy policy
          </p>

          <div className='flex w-full flex-col gap-6 md:w-[50%] md:flex-row md:items-center md:justify-between md:gap-0 lg:mt-10'>
            <div className='grid gap-2'>
              <p className='text-sm font-medium uppercase'>Fee:</p>
              <p className='text-3xl font-bold text-primary'>N10,000</p>
            </div>

            <Button
              onPress={() => setOpenCheckoutModal(true)}
              color='primary'
              radius='full'
              size='lg'
              className='px-8'
            >
              Consult now
            </Button>
          </div>
        </form>
        <BillingAndPaymentModal
          isOpen={openCheckoutModal}
          onClose={() => setOpenCheckoutModal(false)}
        />
      </CardBody>
    </Card>
  );
};
