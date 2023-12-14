'use client';
import { usePathname } from 'next/navigation';
import { IconTellehealthRound } from '@/components/icons/IconTellehealthRound';
import { IconShopAndOrderRound } from '@/components/icons/IconShopAndOrderRound';
import { Card, CardBody, Image } from '@nextui-org/react';

export const HeroImage = () => {
  const currentPath = usePathname();

  const getImage = () => {
    switch (currentPath) {
      case '/':
        return '/images/joyful-caring-couple.png';
      case '/telehealth':
        return '/images/powerful-nurse.png';
      case '/drug-refill':
        return '/images/drug-refill-hero.png';
      case '/upload-prescription':
        return '/images/serious-nurse.png';
      case '/shop-and-order':
        return '/images/customer-smiling.png';
      case '/get-vaccination':
        return '/images/patient-get-tested.png';
      default:
        return '/images/customer-smiling.png';
    }
  };

  const getAlt = () => {
    switch (currentPath) {
      case '/':
        return 'charming joyful youth couple';
      case '/telehealth':
        return 'powerful nurse';
      case '/drug-refill':
        return 'drug refill';
      case '/upload-prescription':
        return 'nurse with prescription';
      case '/shop-and-order':
        return 'customer smiling';
      case '/get-vaccination':
        return 'patient getting tested';
      default:
        return 'hero image';
    }
  };

  const teleHealthImages = [
    {
      alt: 'doctor consultant',
      src: '/images/doctor-consultant.png',
    },
    {
      alt: 'health kit',
      src: '/images/health-kit.png',
    },
    {
      alt: 'woman getting vaccination',
      src: '/images/woman-get-vaccination.png',
    },
  ];
  return (
    <>
      <Card
        radius='lg'
        shadow='none'
        className={currentPath === '/' ? 'flex items-end bg-white' : 'bg-white'}
      >
        <CardBody className={currentPath === '/' ? 'p-0' : 'p-3'}>
          <Image
            width={600}
            height={600}
            className='rounded-lg'
            src={getImage()}
            alt={getAlt()}
          />
        </CardBody>
      </Card>
      {currentPath === '/' || currentPath === '/shop-and-order' ? (
        <>
          <div className='absolute left-[-10px] top-[280px] z-10 flex items-center gap-3 rounded-md bg-white p-2 px-6 shadow-lg'>
            <IconTellehealthRound />
            <p className='text-sm font-bold text-header-100'>TeleHealth</p>
          </div>
          <div className='absolute  right-[-10px] top-[380px] z-10 flex items-center gap-3 rounded-md bg-white p-2 px-6 shadow-lg'>
            <IconShopAndOrderRound />
            <p className='text-sm font-bold text-header-100'>Shop & Order</p>
          </div>
        </>
      ) : null}

      {currentPath === '/telehealth' ? (
        <Card
          shadow='none'
          className='absolute -bottom-14 left-9 mx-auto bg-transparent'
        >
          <CardBody className='flex justify-center'>
            <div className='grid w-full grid-flow-col grid-cols-3 items-center gap-4'>
              {teleHealthImages.map((image, index) => (
                <div className='z-20 rounded-[20px] bg-white p-2' key={index}>
                  <Image
                    width={145}
                    height={145}
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      ) : null}
    </>
  );
};
