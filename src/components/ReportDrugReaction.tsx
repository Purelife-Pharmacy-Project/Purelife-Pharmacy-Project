import { Button, Link } from '@nextui-org/react';
import { Section } from './home/Section';

export const ReportDrugReaction = () => {
  return (
    <div className=''>
      <Section>
        <div className='flex flex-col md:items-center justify-between gap-4 rounded-[25px] bg-[#262629] px-4  py-7 sm:px-8 sm:py-12 md:flex-row lg:px-12'>
          <div>
            <p className='mb-3 sm:mb-4 text-xl font-medium text-white md:text-2xl text-center md:text-left'>
            Report Adverse Drug Reactions
            </p>
            <p className='sm:w-full w-[80%] mx-auto text-sm sm:text-base font-[300] sm:font-normal text-white text-center md:text-left'>
              Help us ensure safety by reporting any side effects or concerns
              related to medications here.
            </p>
          </div>

          <Button
            as={Link}
            href='https://primaryreporting.who-umc.org/NG'
            target='_blank'
            className='bg-white px-10 text-sm sm:text-lg text-[#262629] lg:px-12 lg:py-8 w-[40%] mx-auto md:w-auto'
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