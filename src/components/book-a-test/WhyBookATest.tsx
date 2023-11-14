import { IconLabs } from '@/components/icons/IconLabs';
import { IconScience } from '@/components/icons/IconScience';
import { IconStar } from '@/components/icons/IconStar';
import { Image } from '@nextui-org/react';
import { Section } from '../home/Section';

interface IAnswerToQuestion {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const WhyBookATest = () => {
  const answersToQuestions: IAnswerToQuestion[] = [
    {
      title: 'Free Home Test Sample Collection',
      description:
        'Our licensed healthcare experts will gather your test sample wherever it suits you.',
      icon: <IconLabs color='success' />,
    },
    {
      title: 'Exciting Offers and Prices',
      description: 'Enjoy amazing discount offers on our tests and packages',
      icon: <IconStar color='success' />,
    },
    {
      title: 'Quick Lab Test Results',
      description:
        'Get your digital lab test results within 24 hours after sample collection',
      icon: <IconScience color='success' />,
    },
  ];
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid w-full justify-center'>
          <div className='flex gap-4'>
            <div className='flex w-full flex-col gap-6'>
              <p className='h-max text-2xl font-bold text-primaryGreenDark lg:text-4xl'>
                Why Book a Test with Us?
              </p>
              {answersToQuestions.map((answer, index) => {
                return (
                  <div
                    key={index}
                    className='grid grid-flow-row place-content-start gap-4 lg:grid-flow-col'
                  >
                    <div className='grid h-20 w-20 place-content-center items-center rounded-full bg-primaryGreenLight'>
                      {answer.icon}
                    </div>
                    <div className='flex flex-col gap-1 '>
                      <p className='text-lg font-medium text-primaryGreenDark'>
                        {answer.title}
                      </p>
                      <p className='text-lg font-light text-content'>
                        {answer.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='relative hidden w-full lg:flex lg:justify-end'>
              <Image
                width={400}
                src='/images/test-samples.png'
                alt='woman in red smiling'
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
