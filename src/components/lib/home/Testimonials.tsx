import { Quotes } from '@/components/illustrations/Quotes';
import { Avatar, AvatarGroup } from '@nextui-org/react';
import { Section } from './Section';

export const Testomonials = () => {
  return (
    <div className='h-max min-h-[380px] w-full bg-primaryGreenLight py-6 lg:min-h-[484px] lg:py-0'>
      <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
        <Section className='bg-primaryGreenLight'>
          <div className='flex flex-col justify-center gap-4  lg:flex-row lg:justify-between lg:gap-0'>
            <h1 className='text-center text-4xl font-bold text-primaryGreenDark lg:text-start'>
              People ❤️ Purelife
            </h1>
            <div className='flex justify-center'>
              <AvatarGroup isGrid isBordered max={3}>
                <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
                <Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
                <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
              </AvatarGroup>
            </div>
          </div>

          <div className='flex w-full justify-center'>
            <div className='relative w-full lg:w-[699px]'>
              <Quotes />
              <p className='absolute left-5 top-10 text-medium lg:text-2xl'>
                You can&apos;t buy peace of mind but you can join Purelife.
                There&apos;s so much less to worry about when you can get advice
                before you need it and answers when you need them.
                <span className='mt-8 block text-medium font-medium lg:text-2xl'>
                  Amanam Israel
                </span>
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};
