import { Button, Link } from '@nextui-org/react';
import { Section } from './home/Section';

export const ReportDrugReaction = () => {
  return (
    <div className='lg:grid lg:justify-center'>
      <Section>
        <div className='flex flex-col items-center justify-between gap-4 rounded-xl bg-gray-100 p-4 text-center md:flex-row md:text-left lg:px-8'>
          <p className='text-xl font-bold text-primary md:text-2xl'>
            Report any adverse drug reaction here{' '}
          </p>

          <Button
            as={Link}
            href='https://primaryreporting.who-umc.org/NG'
            target='_blank'
            color='primary'
            className='px-10 lg:px-12'
            radius='full'
            size='lg'
          >
            Report Now
          </Button>
        </div>
      </Section>
    </div>
  );
};
