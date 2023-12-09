// 'use client';
import { FC } from 'react';
import { Button, Card, CardBody, Input, Link } from '@nextui-org/react';
import { inputBordered } from '@/theme';
import { IconImage } from '@/components/icons/IconImage';
import { OrderTypeRadio } from '@/components/drug-refill/OrderTypeRadio';

type AboutDrugCardProps = {};
export const AboutDrugCard: FC<AboutDrugCardProps> = () => {
  return (
    <section className='absolute'>
      <Card
        shadow='none'
        style={{
          boxShadow: '5px 5px 100px 5px rgba(0, 0, 0, 0.05)',
        }}
        className='mb-20 h-max w-full'
      >
        <CardBody className='min-h-[300px] bg-white py-8 lg:px-20'>
          <p className='mb-6 text-base font-medium text-header-100'>
            About the product
          </p>
          <p className='font-lg font-light text-content'>
            Aspirin is a salicylic used to treat pain, fever, inflammation,
            migraines, and reducing the risk of major adverse cardiovascular
            events. Aspirin, acetyl salicylic acid (ASA) is a commonly used drug
            for the treatment of pain and fever due to various causes. Acetyl
            salicylic acid has both anti-inflammatory and antipyretic effects.
          </p>

          <form className='mt-10 grid gap-4 lg:gap-8'>
            <div className='flex flex-col items-center gap-4 md:flex-row'>
              <Input label='Medication Brand' classNames={inputBordered} />
              <Input label='Medication Strength' classNames={inputBordered} />
            </div>
            <div className='mb-[61px] flex flex-col items-center gap-4 md:flex-row'>
              <Input label='Dosage form' classNames={inputBordered} />
              <Input label='Price' type='number' classNames={inputBordered} />
            </div>

            <div className='flex w-full justify-center'>
              <OrderTypeRadio />
            </div>
          </form>
        </CardBody>
      </Card>

      <div className='flex justify-center'>
        <div className='flex flex-col items-center gap-4 lg:flex-row'>
          <Button
            variant='bordered'
            radius='full'
            size='lg'
            className='border-header-100 text-header-100'
            startContent={<IconImage size={24} color='header-100' />}
          >
            Add more Medication
          </Button>

          <Button
            as={Link}
            href='/cart'
            radius='full'
            size='lg'
            color='primary'
            className='border-primary text-white'
            startContent={<IconImage size={24} color='white' />}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
};
