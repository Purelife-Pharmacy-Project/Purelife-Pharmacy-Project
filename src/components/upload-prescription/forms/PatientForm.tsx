import { IconBrowse } from '@/components/icons/IconBrowse';
import { inputDefault } from '@/theme';
import { Button, Input, Textarea } from '@nextui-org/react';

export const PatientForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className='mb-8 flex flex-col-reverse gap-4 lg:flex-row'>
        <div className='grid w-full gap-8'>
          <Input label='Full Name' classNames={inputDefault} />
          <Input
            label='Phone Number'
            inputMode='numeric'
            classNames={inputDefault}
          />
          <div className='flex w-full flex-col items-center justify-center rounded-lg bg-white py-20 shadow-sm'>
            <IconBrowse />
            <Button className='text-md font-light text-content' variant='light'>
              Upload your Prescription: Drag & Drop or Click to Browse
            </Button>
          </div>
        </div>
        <div className='flex w-full flex-col gap-8'>
          <Input label='Email Address' type='email' classNames={inputDefault} />
          <div className='flex h-full'>
            <Textarea
              size='lg'
              placeholder='Noted about your prescription'
              classNames={inputDefault}
            />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <Button
          color='success'
          className='px-16 py-8 text-white'
          radius='full'
          size='lg'
        >
          Submit Prescription{' '}
        </Button>
      </div>
    </form>
  );
};
