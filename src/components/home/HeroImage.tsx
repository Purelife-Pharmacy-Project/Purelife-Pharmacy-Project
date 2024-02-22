'use client';
import { IconShopAndOrderRound } from '@/components/icons/IconShopAndOrderRound';
import { IconTellehealthRound } from '@/components/icons/IconTellehealthRound';
import { Card, CardBody, Image } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

export const HeroImage = () => {
  const currentPath = usePathname();

  const getImage = () => {
    switch (currentPath) {
      case '/':
        return '/images/joyful-caring-couple.png';
      case '/telehealth':
        return '/images/powerful-nurse.png';
      case '/telehealth/drug-refill':
        return '/images/drug-refill-hero.png';
      case '/telehealth/upload-prescription':
        return '/images/senior-nurse.png';
      case '/telehealth/shop-and-order':
        return '/images/customer-smiling.png';
      case '/telehealth/get-vaccination':
        return '/images/patient-get-tested.png';
      default:
        return '/images/customer-smiling.png';
    }
  };

  const getAlt = () => {
    switch (currentPath) {
      case '/':
        return 'charming joyful youth couple';
      case '/telehealth/telehealth':
        return 'powerful nurse';
      case '/telehealth/drug-refill':
        return 'drug refill';
      case '/telehealth/upload-prescription':
        return 'nurse with prescription';
      case '/telehealth/shop-and-order':
        return 'customer smiling';
      case '/telehealth/get-vaccination':
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
      src: '/images/first-aid-kit.png',
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
      {currentPath === '/' || currentPath === '/telehealth/shop-and-order' ? (
        <>
          <div className='absolute bottom-20 left-[-10px] z-10 flex items-center gap-3 rounded-md bg-white p-2 shadow-lg lg:px-6'>
            <IconTellehealthRound />
            <p className='text-xs font-bold text-header-100 md:text-sm'>
              TeleHealth
            </p>
          </div>
          <div className='absolute bottom-10 right-[-10px] z-10 flex items-center gap-3 rounded-md bg-white p-2 shadow-lg lg:px-6'>
            <IconShopAndOrderRound />
            <p className='text-xs font-bold text-header-100 md:text-sm'>
              Shop & Order
            </p>
          </div>
        </>
      ) : null}

      {currentPath === '/telehealth' ? (
        <Card
          shadow='none'
          className='absolute -bottom-14 left-0 mx-auto bg-transparent md:left-9'
        >
          <CardBody className='flex justify-center'>
            <div className='grid w-full grid-flow-col grid-cols-3 items-center gap-4'>
              {teleHealthImages.map((image, index) => (
                <div
                  className='z-20 rounded-2xl bg-white p-2 md:rounded-[20px]'
                  key={index}
                >
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
