import { Image } from '@nextui-org/react';

export const EarnedClients = () => {
  const partners = [
    {
      name: 'IFitness',
      image: '/images/clients/iFitness.png',
    },
    {
      name: 'Buy Asap',
      image: '/images/clients/buyAsap.png',
    },
    {
      name: 'Nike',
      image: '/images/clients/nike.png',
    },
    {
      name: 'Gallant Biz',
      image: '/images/clients/gallantBiz.png',
    },
    {
      name: 'Laroche',
      image: '/images/clients/laroche.png',
    },
  ];
  return (
    <div className='grid gap-10'>
      <div className='flex justify-center'>
        <h1 className='text-center text-2xl font-bold lg:max-w-[408px] lg:text-4xl'>
          We have earned the trust of 300+ Clients
        </h1>
      </div>

      <div className='mx-auto grid w-full grid-flow-dense grid-cols-2 gap-24 md:grid-cols-2 lg:grid-flow-col'>
        {partners.map((partner, index) => (
          <div key={index} className='flex items-center justify-center'>
            <Image
              width={120}
              height={40}
              radius='none'
              className='object-contain'
              src={partner.image}
              alt={partner.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
