'use client';
import { FC, useMemo } from 'react';
import { Section } from '@/components/home/Section';
import { NavbarSearch } from '../NavbarSearch';
import Image from 'next/image';
import { IconArrowRight } from '../icons/IconArrowRight';
import { useGetProductsInfinity } from '@/hooks';
import { Spinner } from '@nextui-org/react';
import Link from 'next/link';

interface HomePageHeroProps {}
export const HomePageHero: FC<HomePageHeroProps> = ({}) => {
  const { products, loadingProducts: loadingVaccines } = useGetProductsInfinity(
    {
      categoryId: process.env.NEXT_PUBLIC_VACCINE_ID,
      limit: 2,
    }
  );
  const vaccines = useMemo(() => {
    return products?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [products]);
  const baseUrl = '/telehealth/get-vaccination';
  return (
    <Section className='pt-16'>
      <div className='mx-auto flex w-[60%] flex-col items-center justify-center'>
        <div className='mb-5 w-fit rounded-[5px] border border-[#38CB611A] px-[6px] py-[4px] text-xs text-[#38CB61]'>
          No 1 Healthcare Platform
        </div>
        <div className='mb-7 text-center text-5xl font-bold'>
          The future of health services, anytime and anywhere
        </div>
        <div className='mx-auto mb-7 w-[70%] text-center text-xl text-[#5A5A5A]'>
          Take control of your health and experience the benefits of Purelife
          health
        </div>
        <div className='w-[80%]'>
          <NavbarSearch searchBtnClassName='h-[50px] w-[40%] justify-center' placeholderClassName='absolute top-[15px]'/>
        </div>
      </div>
      <div
        className='mt-20 grid grid-cols-[1fr_1fr_1fr] gap-10 px-0 pb-28'>
        <div className='mt-14'>
          <div
            className='relative h-[450px] w-full'
            style={{
              backgroundImage: 'url(/images/doctor.jpg)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'auto 100%',
              borderRadius: '20px',
            }}
          >
            <Image
              src={'/images/mini-doctor.png'}
              width={139}
              height={155}
              className='absolute left-6 top-6'
              alt={'consult a doctor image'}
            />
            <Image
              src={'/images/call-frame.png'}
              width={304}
              height={59}
              className='absolute bottom-5 left-9'
              alt={'consult a doctor image'}
            />
          </div>
          <div
            style={{boxShadow: '50px 70px 112px 0px #AAAAAA1A'}}
            className='bg-white mt-10 cursor-pointer rounded-[20px] border border-[0.5px] px-5 py-4 '>
            <h3 className='flex items-center justify-between text-2xl font-medium'>
              Consult with a Doctor
              <span className='-rotate-45'>
                <IconArrowRight />
              </span>
            </h3>
            <p className='text-sm text-[#5A5A5A]'>
              Top rated doctors at your finger tip, to help you live a healthier
              life style
            </p>
          </div>
        </div>
        <div className=''>
          <div
            className='relative h-[357px] w-full'
            style={{
              backgroundImage: 'url(/images/book-a-lab-test.png)',
              backgroundPosition: 'center bottom 20%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '20px',
            }}
          ></div>
          <div
            style={{boxShadow: '50px 70px 112px 0px #AAAAAA1A'}}
            className='bg-white mt-10 cursor-pointer rounded-[20px] border border-[0.5px] px-5 py-4 '>
            <h3 className='flex items-center justify-between text-2xl font-medium mb-5'>
              Book a Vaccination
              <span className='-rotate-45'>
                <IconArrowRight />
              </span>
            </h3>
            {loadingVaccines ? (
              <div className='flex justify-center'>
                <Spinner size='sm' color='primary' />
              </div>
            ) : null}
            <div
              className='flex flex-col gap-3'>
              {vaccines?.map((product) => (
              <div className='grid grid-cols-[1fr_3fr] gap-2'>
                <div className='relative flex w-full items-center justify-center rounded-2xl bg-primaryLight py-[13px]'>
                  <Link href={`${baseUrl}/${product.id}`}>
                    <Image
                      alt=''
                      src={product.image_1024}
                      width={30}
                      height={61.69}
                      className=''
                    />
                  </Link>
                </div>
                <div className='flex flex-col h-fit my-auto gap-1'>
                  <p className='font-medium'>
                    {product.name}
                  </p>
                  <p className='font-bold'>{product.amount}</p>
                </div>
              </div>
            ))}
            </div>
            
          </div>
        </div>
        <div className='mt-14'>
          <div
            className='h-[450px] w-full'
            style={{
              backgroundImage: 'url(/images/shop-pharmacy.png)',
              backgroundPosition: 'center bottom 20%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '20px',
            }}
          ></div>
          <div
            style={{boxShadow: '50px 70px 112px 0px #AAAAAA1A'}}
            className='bg-white mt-10 cursor-pointer rounded-[20px] border border-[0.5px] px-5 py-4 '>
            <h3 className='flex items-center justify-between text-2xl font-medium'>
              Shop Pharmacy
              <span className='-rotate-45'>
                <IconArrowRight />
              </span>
            </h3>
            <p className='text-sm text-[#5A5A5A]'>
              Buy genuine prescription medications online from trusted, licensed
              pharmacies.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
