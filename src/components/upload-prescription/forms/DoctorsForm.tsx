import { IconBrowse } from '@/components/icons/IconBrowse';
import { inputDefault } from '@/theme';
import { Button, Input, Textarea } from '@nextui-org/react';

export const DoctorsForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className='mb-8 flex flex-col-reverse gap-4 lg:flex-row'>
        <div className='grid w-full gap-8'>
          <Input label='Patient Name' classNames={inputDefault} />
          <Input
            label='Patient Number'
            type='number'
            inputMode='numeric'
            classNames={inputDefault}
          />
          <Input
            label='Phone Number'
            inputMode='numeric'
            classNames={inputDefault}
          />
          <Input
            label="Prescriber's Number"
            type='number'
            inputMode='numeric'
            classNames={inputDefault}
          />
          <div className='flex w-full flex-col items-center justify-center rounded-lg bg-white py-20'>
            <IconBrowse />
            <Button className='text-md font-light text-content' variant='light'>
              Upload your Prescription: Drag & Drop or Click to Browse
            </Button>
          </div>
        </div>
        <div className='flex w-full flex-col gap-8'>
          <Input
            label="Patient's email"
            type='email'
            classNames={inputDefault}
          />
          <Input
            label="Prescriber's email"
            type='email'
            classNames={inputDefault}
          />
          <Input label='Hospital name' classNames={inputDefault} />
          <div className='flex h-full'>
            <Textarea
              size='lg'
              style={{ height: '310px' }}
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
