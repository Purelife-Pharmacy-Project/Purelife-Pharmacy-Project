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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          setShowSearch(true);
        } else {
          setShowSearch(false);
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = divRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const handleResize = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);
  return (
    <div className=''>
      <div
        style={{
          // backgroundImage: isLargeScreen ? `url(${bannerImages[currentIndex]})` : undefined,
          backgroundImage: `url('/images/homepage-banner/banner-1.jpg')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className={`banner-container flex min-h-[580px] w-full flex-col items-start justify-center`}
      >
        <div className='mx-auto w-[95%] lg:ml-[5%] lg:w-[45%]'>
          <div className='lg:mt-8 mt-8 mb-7 text-center text-[50px] leading-[1.2] font-bold lg:text-white lg:text-left'>
            The future of health services, anytime and anywhere
          </div>
          <div
            ref={divRef}
            className='mb-7 mr-auto text-center text-xl font-light text-[#5A5A5A] lg:text-white lg:text-left'
          >
            Take control of your health and experience the benefits of Purelife
            health
          </div>
          <div className=''>
            <NavbarSearch
              show={true}
              searchBtnClassName='h-[60px] w-[40%] justify-center text-[18px]'
              placeholderClassName='absolute top-[20px]'
              borderClassName='border-none'
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

        <div className='my-8 w-full block lg:hidden'>
        <Image
          src={'/images/homepage-banner/banner-2.jpg'}
          width={139}
          height={155}
          className='mx-auto h-auto w-[95%] rounded-[20px]'
          alt={'consult a doctor image'}
        />
        <div className='lg-mx-0 mx-auto mt-8 flex w-fit gap-2'>
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
      
      <Section>
        <h1 className='mb-6 mt-14 w-full text-center text-[35px] font-semibold text-[#1E272F]'>
          Quality Healthcare you can trust
        </h1>
        <div className='mt-20 grid lg:grid-cols-[1fr_1fr_1fr] grid-cols-1 lg:gap-10 px-0 pb-28'>
          <Link href={'/telehealth/find-a-doctor'} className='mt-14'>
            <div
              className='relative h-[600px] lg:h-[450px] w-full rounded-[20px]'
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
                className='absolute lg:left-6 left-[5%] top-6'
                alt={'consult a doctor image'}
              />
              <Image
                src={'/images/call-frame.png'}
                width={304}
                height={59}
                className='absolute bottom-5 lg:left-9 mx-auto left-0 right-0'
                alt={'consult a doctor image'}
              />
            </div>
            <div
              style={{ boxShadow: '50px 70px 112px 0px #AAAAAA1A' }}
              className='mt-10 cursor-pointer rounded-[20px] border border-[0.5px] bg-white px-5 py-4 lg:mb-0 mb-8'
            >
              <h3 className='flex items-center justify-between text-2xl font-medium'>
                Consult with a Doctor
                <span className='-rotate-45'>
                  <IconArrowRight color='#1E272F'/>
                </span>
              </h3>
              <p className='text-sm text-[#5A5A5A]'>
                Top rated doctors at your finger tip, to help you live a
                healthier life style
              </p>
            </div>
          </Link>
          <Link href={'/telehealth/book-lab-test'} className=''>
            <div
              className='relative h-[600px] lg:h-[375px] w-full'
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
              className='mt-10 cursor-pointer rounded-[20px] border border-[0.5px] bg-white px-5 py-4  lg:mb-0 mb-8'
            >
              <h3 className='mb-5 flex items-center justify-between text-2xl font-medium'>
                Book a Vaccination
                <span className='-rotate-45'>
                  <IconArrowRight color='#1E272F'/>
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
                    <div className='my-auto flex h-fit flex-col gap-1'>
                      <p className='font-medium'>{product.name}</p>
                      <p className='font-bold'>{product.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
          <Link href={'/shop'} className='mt-14'>
            <div
              className='h-[650px] lg:h-[450px] w-full'
              style={{
                backgroundImage: 'url(/images/shop-pharmacy.png)',
                backgroundPosition: 'center bottom 30%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '20px',
              }}
            ></div>
            <div
              style={{ boxShadow: '50px 70px 112px 0px #AAAAAA1A' }}
              className='mt-10 cursor-pointer rounded-[20px] border border-[0.5px] bg-white px-5 py-4 '
            >
              <h3 className='flex items-center justify-between text-2xl font-[600] text-[#1E272F]'>
                Shop Pharmacy
                <span className='-rotate-45'>
                  <IconArrowRight color='#1E272F'/>
                </span>
              </h3>
              <p className='text-sm text-[#5A5A5A]'>
                Buy genuine prescription medications online from trusted,
                licensed pharmacies.
              </p>
            </div>
          </Link>
        </div>
      </Section>
    </div>
  );
};
