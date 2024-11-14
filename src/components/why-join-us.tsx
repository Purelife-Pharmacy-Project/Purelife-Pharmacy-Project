import { FC } from 'react';
import { Section } from './home/Section';
import { IconTeamUp } from './icons/IconTeamUp';
import { IconTailoredSolution } from './icons/IconTailoredSolution';
import { IconGetInTouch } from './icons/IconGetInTouch';

type WhyJoinUsProps = {};

export const WhyJoinUs: FC<WhyJoinUsProps> = ({}) => {
  const items = [
    {
      title: 'Get in Touch',
      description: 'Fill out our forms to schedule a chat.',
      icon: <IconGetInTouch />,
    },
    {
      title: 'Tailored Solutions',
      description:
        "We'll use your info to customize solutions that fit your needs perfectly.",
      icon: <IconTailoredSolution />,
    },
    {
      title: 'Team Up',
      description: "Let's work together to build the future of healthcare.",
      icon: <IconTeamUp />,
    },
  ];

  return (
    <Section className=''>
      <div className='mx-auto mt-2 sm:mt-10 sm:w-[85%]'>
        <h1 className='mx-auto w-fit text-[30px] font-bold lg:text-[40px]'>
          Why Join Us?
        </h1>
        <p className='mx-auto mt-2 text-center text-base text-[#5A5A5A] md:w-[80%] lg:text-[20px]'>
          Join our platform as a healthcare provider to expand your reach,
          connect with more patients, and access tools that make managing your
          practice easier. Be part of a growing network dedicated to providing
          quality care and making a real difference in healthcare!
        </p>
        <div className='mt-8 grid gap-10 md:mt-20 md:grid-cols-3'>
          {items.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-start gap-2'
            >
              <div className='flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#E7E7E7] border-opacity-50 bg-primaryLight'>
                {item.icon}
              </div>
              <h3 className='text-center text-base font-bold sm:text-[18px] md:text-[22px]'>
                {item.title}
              </h3>
              <p className='w-[70%] text-center text-[#5A5A5A] md:w-full md:text-base'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
