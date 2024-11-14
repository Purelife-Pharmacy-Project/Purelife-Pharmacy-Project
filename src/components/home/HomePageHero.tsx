'use client';
import { FC, useMemo } from 'react';
import { Section } from '@/components/home/Section';
import { NavbarSearch } from '../NavbarSearch';
import Image from 'next/image';
import { IconArrowRight } from '../icons/IconArrowRight';
import { useGetProductsInfinity } from '@/hooks';
import { Spinner } from '@nextui-org/react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useSearch } from '@/helpers/useContext/authContext';

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

  const divRef = useRef<HTMLDivElement>(null);
  const { setShowSearch } = useSearch();

  const checkScrollPosition = () => {
    const divPosition = divRef.current?.offsetTop ?? 0;
    setShowSearch(window.scrollY > divPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const bannerImages = [
    '/images/homepage-banner/banner-1.jpg',
    '/images/homepage-banner/banner-2.jpg',
    '/images/homepage-banner/banner-3.jpg',
    '/images/homepage-banner/banner-2.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
        setFade(true);
      }, 500);
      return () => clearTimeout(timeout);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Media query to check if screen width is large or greater
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    // Set initial state based on current screen width
    setIsLargeScreen(mediaQuery.matches);

    // Event listener to update state on resize
    const handleResize = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);
  return (
    <div className=''>
      <div
        style={{
          // backgroundImage: isLargeScreen ? `url(${bannerImages[currentIndex]})` : undefined,
          backgroundImage: isLargeScreen
            ? `url('/images/homepage-banner/banner-1.jpg')`
            : undefined,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className={`${isLargeScreen ? '' : 'bg-primaryLight'} banner-container flex w-full flex-col items-start justify-center sm:h-auto sm:min-h-[580px]`}
      >
        <div className='mx-auto w-[95%] lg:ml-[5%] lg:w-[45%]'>
          <h1 className='mb-[10px] mt-[40px] text-center text-[30px] font-bold leading-[1.2] sm:mb-7 sm:mt-[100px] text-header-100 sm:text-[50px] lg:mt-8 lg:text-left lg:text-white'>
            The future of health services, anytime and anywhere
          </h1>
          <p
            ref={divRef}
            className='mx-auto mb-7 mr-auto w-[85%] text-center text-[15px] font-light text-[#5A5A5A] sm:text-xl lg:w-full lg:text-left lg:text-white'
          >
            Take control of your health and experience the benefits of Purelife
            health
          </p>
          <div className=''>
            <NavbarSearch
              show={true}
              searchBtnClassName='h-[40px] sm:h-[60px] w-[40%] justify-center sm:text-[18px]'
              placeholderClassName='absolute top-[10px] sm:top-[20px]'
              borderClassName='border-none'
              searchIconClassName='w-[18px] h-[18px] sm:w-auto sm:h-auto'
            />
          </div>
          {/*<div className='lg-mx-0 mt-8 hidden w-fit gap-2 lg:flex'>
            {bannerImages.map((_, index) => (
              <div
                key={index}
                className={`h-[8px] w-[30px] rounded-full ${
                  currentIndex === index ? 'bg-[#38CB61]' : 'bg-[#D9D9D9]'
                }`}
              />
            ))}
          </div>*/}
        </div>

        <div className='my-8 block w-full lg:hidden'>
          <div
            style={{
              backgroundImage: `url('/images/homepage-banner/banner-1.jpg')`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className={`banner-container mx-auto flex h-[150px] w-[95%] flex-col items-start justify-center rounded-[15px] sm:h-[300px] sm:rounded-[20px]`}
          ></div>
          <div className='lg-mx-0 mx-auto mt-8 flex hidden w-fit gap-2'>
            {bannerImages.map((_, index) => (
              <div
                key={index}
                className={`h-[8px] w-[30px] rounded-full ${
                  currentIndex === index ? 'bg-[#38CB61]' : 'bg-[#D9D9D9]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='xl:max-w-1024 mx-auto w-full bg-background sm:px-4 lg:px-6 xl:w-1024'>
        <h1 className='mb-6 mt-7 hidden w-full text-center text-2xl font-semibold text-[#1E272F] sm:mt-14 sm:text-[35px] lg:block'>
          Quality Healthcare you can trust
        </h1>
        <div className='mt-10 grid grid-cols-2 gap-[14px] px-0 sm:mt-20 sm:pb-28 lg:grid-cols-[1fr_1fr_1fr] lg:gap-0 lg:gap-10'>
          <Link href={'/telehealth/find-a-doctor'} className='mt-0 lg:mt-14'>
            <div
              className='relative h-[240px] w-full rounded-[20px] border sm:h-[500px] lg:h-[450px]'
              style={{
                backgroundImage: 'url(/images/doctor.jpg)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '20px',
              }}
            >
              <Image
                src={'/images/mini-doctor.png'}
                width={139}
                height={155}
                className='absolute left-4 top-4 h-auto w-[70px] sm:left-[5%] sm:top-6 sm:h-auto sm:w-auto lg:left-6'
                alt={'consult a doctor image'}
              />
              <Image
                src={'/images/call-frame.png'}
                width={304}
                height={59}
                className='absolute bottom-5 left-0 right-0 mx-auto h-auto w-[120px] sm:h-auto sm:w-auto lg:left-9'
                alt={'consult a doctor image'}
              />
            </div>
            <div
              style={{ boxShadow: '50px 70px 112px 0px #AAAAAA1A' }}
              className='my-4 cursor-pointer rounded-[20px] border border-[0.5px] bg-white px-3 py-4 sm:my-0 sm:mb-8 sm:mt-10 sm:px-5 lg:mb-0'
            >
              <h3 className='flex items-start justify-between text-base font-semibold sm:text-2xl'>
                Consult with a Doctor
                <span className='mt-1 -rotate-45 sm:mt-0'>
                  <IconArrowRight
                    color='#1E272F'
                    className='h-[16px] w-[16px] sm:h-auto sm:w-auto'
                  />
                </span>
              </h3>
              <p className='pb-[16px] text-xs text-[#5A5A5A] sm:pb-0 sm:text-sm'>
                Top rated doctors at your finger tip, to help you live a
                healthier life style
              </p>
            </div>
          </Link>
          <Link href={'/telehealth/book-lab-test'} className='hidden lg:block'>
            <div
              className='relative h-[240px] w-full sm:h-[500px] lg:h-[450px]'
              style={{
                backgroundImage: 'url(/images/book-a-lab-test.png)',
                backgroundPosition: 'center bottom 20%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '20px',
              }}
            ></div>
            <div
              style={{ boxShadow: '50px 70px 112px 0px #AAAAAA1A' }}
              className='mb-8 mt-10 cursor-pointer rounded-[20px] border border-[0.5px] bg-white px-5 py-4 lg:mb-0'
            >
              <h3 className='flex items-start justify-between text-base font-semibold sm:text-2xl'>
                Book a Vaccination
                <span className='mt-1 -rotate-45 sm:mt-0'>
                  <IconArrowRight
                    color='#1E272F'
                    className='h-[12px] w-[12px] sm:h-auto sm:w-auto'
                  />
                </span>
              </h3>
              {loadingVaccines ? (
                <div className='flex justify-center'>
                  <Spinner size='sm' color='primary' />
                </div>
              ) : null}
              <div className='flex flex-col gap-3'>
                {vaccines?.map((product) => (
                  <div
                    key={product.id}
                    className='grid grid-cols-[1fr_3fr] gap-2'
                  >
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
                    <div className='my-auto flex h-fit flex-col gap-1 text-sm sm:text-base'>
                      <p className='font-medium'>{product.name}</p>
                      <p className='font-bold'>{product.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
          <Link href={'/shop'} className='lg:mt-14'>
            <div
              className='relative h-[240px] w-full sm:h-[500px] lg:h-[450px]'
              style={{
                backgroundImage: 'url(/images/shop-pharmacy.png)',
                backgroundPosition: isLargeScreen
                  ? `center bottom 30%`
                  : `center bottom 10%`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '20px',
              }}
            ></div>
            <div
              style={{ boxShadow: '50px 70px 112px 0px #AAAAAA1A' }}
              className='my-4 cursor-pointer rounded-[20px] border border-[0.5px] bg-white px-3 py-4 sm:my-0 sm:mb-8 sm:mt-10 sm:px-5 '
            >
              <h3 className='flex items-start justify-between text-base font-semibold sm:text-2xl'>
                <span className='w-[40%] sm:w-fit '>Shop Pharmacy</span>
                <span className='mt-1 -rotate-45 sm:mt-0'>
                  <IconArrowRight
                    color='#1E272F'
                    className='h-[16px] w-[16px] sm:h-auto sm:w-auto'
                  />
                </span>
              </h3>
              <p className='text-xs text-[#5A5A5A] sm:text-sm'>
                Buy genuine prescription medications online from trusted,
                licensed pharmacies.
              </p>
            </div>
          </Link>
          <Link
            href={'/telehealth/book-lab-test'}
            className=' col-span-2 grid grid-cols-2 gap-[14px] lg:hidden'
          >
            <div
              className='relative h-[240px] w-full sm:h-[500px] lg:h-[450px]'
              style={{
                backgroundImage: 'url(/images/book-a-lab-test.png)',
                backgroundPosition: 'center bottom 20%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '20px',
              }}
            ></div>
            <div
              style={{ boxShadow: '50px 70px 112px 0px #AAAAAA1A' }}
              className='h-[240px] cursor-pointer rounded-[20px] border border-[0.5px] bg-white px-3 py-4 sm:h-[500px] sm:px-5 lg:mb-0 lg:h-[450px]'
            >
              <h3 className='mb-5 flex items-start justify-between text-[15px] font-semibold sm:text-2xl'>
                Book a Vaccination
                <span className='mt-1 -rotate-45 sm:mt-0'>
                  <IconArrowRight
                    color='#1E272F'
                    className='h-[16px] w-[16px] sm:h-auto sm:w-auto'
                  />
                </span>
              </h3>
              {loadingVaccines ? (
                <div className='flex justify-center'>
                  <Spinner size='sm' color='primary' />
                </div>
              ) : null}
              <div className='flex flex-col gap-4'>
                {vaccines?.map((product) => (
                  <div
                    key={product.id}
                    className='grid grid-cols-[1.5fr_3fr] gap-2'
                  >
                    <div className='relative flex w-full items-center justify-center rounded-2xl bg-primaryLight py-[13px]'>
                      <Link href={`${baseUrl}/${product.id}`}>
                        <Image
                          alt=''
                          src={product.image_1024}
                          width={30}
                          height={61.69}
                          className='h-[45px] w-auto sm:h-[173px] lg:h-auto'
                        />
                      </Link>
                    </div>
                    <div className='my-auto flex h-fit flex-col gap-1 text-xs sm:text-lg'>
                      <p className='line-clamp-2 font-medium sm:line-clamp-3'>
                        {product.name}
                      </p>
                      <p className='font-bold'>{product.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
