import { Image } from '@nextui-org/react';
import { FC } from 'react';

export interface EarnedClientsProps {
  clients: {
    name: string;
    image: string;
  }[];
  title: string;
}

export const EarnedClients: FC<EarnedClientsProps> = ({ clients, title }) => {
  return (
    <div className='grid gap-10'>
      <div className='flex justify-center'>
        <h1 className='text-center text-2xl font-bold lg:max-w-[557px] lg:text-4xl'>
          {title}
        </h1>
      </div>

      <div className='mx-auto grid w-full grid-flow-dense grid-cols-2 gap-24 md:grid-cols-2 lg:grid-flow-col'>
        {clients.map((client, index) => (
          <div key={index} className='flex items-center justify-center'>
            <Image
              width={120}
              height={40}
              radius='none'
              className='object-contain'
              src={client.image}
              alt={client.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
