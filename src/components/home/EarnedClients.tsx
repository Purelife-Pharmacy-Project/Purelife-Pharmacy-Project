import { Image } from '@nextui-org/react';
import { FC } from 'react';
import { Section } from './Section';

export interface EarnedClientsProps {
  title: string;
  earnedClients: {
    image: string;
    name: string;
  }[];
}

export const EarnedClients: FC<EarnedClientsProps> = ({
  title,
  earnedClients,
}) => {
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-5 md:gap-20'>
          <div className='flex justify-center'>
            <h1 className='text-center text-2xl font-bold lg:max-w-[557px] lg:text-4xl'>
              {title}
            </h1>
          </div>

          <div className='mx-auto grid w-4/5 grid-flow-col grid-cols-1 items-center justify-center gap-2 md:grid-cols-2 lg:grid-cols-5'>
            {earnedClients.map((client, index) => (
              <Image
                key={index}
                width={120}
                height={40}
                radius='none'
                className='object-contain grayscale'
                src={client.image}
                alt={client.name}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
