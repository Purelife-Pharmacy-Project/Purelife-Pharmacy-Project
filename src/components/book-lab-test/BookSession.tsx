import React from 'react';
import { Button, Card, CardBody, Image } from '@nextui-org/react';
import { Section } from '@/components/home/Section';

type Prop = {};

const BookSession: React.FC<Prop> = () => {
  return (
    <Section>
      <Card radius='md' className='mx-auto border border-[#D9D9D9] md:w-5/6'>
        <CardBody className='flex flex-col items-center justify-between gap-y-10 bg-[#FAFAFA] p-5 md:flex-row lg:px-12 lg:py-8 xl:px-20 xl:py-11'>
          <div className='flex max-w-[423px] flex-col gap-[18px] text-header-100'>
            <h3 className='text-lg font-medium text-header-100 md:text-xl lg:text-2xl'>
              Need more clarity about the test you should take? Speak to a
              pharmacist.
            </h3>
            <p>
              Ask our pharmacist for advice and recommendations based on your
              needs.
            </p>
            <Button color='primary' className='w-fit px-10'>
              Book Session
            </Button>
          </div>
          <Image
            src='/images/doctor-consulting.png'
            alt=''
            width={282}
            height={282}
            className='min-h-[200px] min-w-[200px] shrink-0 lg:min-h-[282px] lg:min-w-[282px]'
          />
        </CardBody>
      </Card>
    </Section>
  );
};

export default BookSession;
