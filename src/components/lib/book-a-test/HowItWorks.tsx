import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { IconBrowse } from '@/components/icons/IconBrowse';
import { IconHealthShield } from '@/components/icons/IconHealthShield';
import { Section } from '../home/Section';

interface IHowItWorks {
  description: string;
  icon: JSX.Element;
}

export const HowitWorks = () => {
  const howItWorksData: IHowItWorks[] = [
    {
      description:
        'Browse for your preferred test packages and easily schedule a home sample collection.',
      icon: <IconBrowse size={48} color='success' />,
    },
    {
      description:
        'Receive one of our certified health professionals at your preferred location for a test sample collection.',
      icon: <IconHealthShield size={60} color='success' />,
    },
    {
      description:
        'Get notified by mail of your reports, which is also available within your account on the Purelife app.',
      icon: <IconAddNotification size={60} color='success' />,
    },
  ];
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <h1 className='text-center text-2xl font-bold text-primaryGreenDark lg:text-4xl'>
            How it Works
          </h1>

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {howItWorksData.map((answer, index) => {
              return (
                <div key={index} className='grid w-full gap-2'>
                  <div className='mx-auto grid h-[123px] w-[123px] place-content-center items-center rounded-full bg-primaryGreenLight'>
                    {answer.icon}
                  </div>
                  <div className='mx-auto flex max-w-[330px] flex-col gap-1'>
                    <p className='text-center text-xl text-content'>
                      {answer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};
