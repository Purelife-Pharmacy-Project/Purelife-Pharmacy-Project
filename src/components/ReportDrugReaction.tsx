import { Button, Link } from '@nextui-org/react';
import { Section } from './home/Section';

export const ReportDrugReaction = () => {
  return (
    <div className=''>
      <Section>
        <div className='flex flex-col md:items-center justify-between gap-4 rounded-[25px] bg-[#262629] px-8 py-12 md:flex-row lg:px-12'>
          <div>
            <p className='mb-4 text-xl font-medium text-white md:text-2xl'>
              Report any adverse drug reaction here{' '}
            </p>
            <p className='text-white'>
              Help us ensure safety by reporting any side effects or concerns
              related to medications here.
            </p>
          </div>

          <Button
            as={Link}
            href='https://primaryreporting.who-umc.org/NG'
            target='_blank'
            className='bg-white px-10 text-lg text-[#262629] lg:px-12 lg:py-8'
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