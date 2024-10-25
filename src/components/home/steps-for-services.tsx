"use client";
import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import { Section } from './Section';
import { useState } from 'react';
import { IconSearch } from '../icons/IconSearch';
import { IconLine } from '../icons/IconLine';
import { IconProfessional } from '../icons/IconProfessional';
import { IconPen } from '../icons/IconPen';

interface StepsForServicesProps {}
export const StepsForServices: React.FC<StepsForServicesProps> = () => {
  const [active, setActive] = useState('Consult Doctor');
  return (
    <>
      <Section
        className={``}
      >
        <div className='flex justify-between w-[80%] mb-10 text-2xl font-medium'>
          <div className='cursor-pointer' onClick={()=>{setActive('Consult Doctor')}}>
            <h3 className={`${(active === 'Consult Doctor') ? '' : 'text-[#5A5A5A]'}`}>Consult Doctor</h3>
            {(active === 'Consult Doctor') && <div className='bg-primary rounded-full w-[50%] h-[6px]'></div>}
          </div>
          <div className='cursor-pointer' onClick={()=>{setActive('Shop Pharmacy')}}>
            <h3 className={`${(active === 'Shop Pharmacy') ? '' : 'text-[#5A5A5A]'}`}>Shop Pharmacy</h3>
            {(active === 'Shop Pharmacy') && <div className='bg-primary rounded-full w-[50%] h-[6px]'></div>}
          </div>
          <div className='cursor-pointer' onClick={()=>{setActive('Book a Vaccination')}}>
            <h3 className={`${(active === 'Book a Vaccination') ? '' : 'text-[#5A5A5A]'}`}>Book a Vaccination</h3>
            {(active === 'Book a Vaccination') && <div className='bg-primary rounded-full w-[50%] h-[6px]'></div>}
          </div>
          <div className='cursor-pointer' onClick={()=>{setActive('Book a Lab test')}}>
            <h3 className={`${(active === 'Book a Lab test') ? '' : 'text-[#5A5A5A]'}`}>Book a Lab test</h3>
            {(active === 'Book a Lab test') && <div className='bg-primary rounded-full w-[50%] h-[6px]'></div>}
          </div>
        </div>
        {(active === 'Consult Doctor') && <div className='grid grid-cols-[6fr_4fr]'>
          <div>
            <h3 className='text-3xl font-semibold w-[85%]'>Streamline Your Consultation Booking, All in One Place</h3>
            <div className='flex mt-8 gap-3 w-[70%]'>
              <div className='flex flex-col items-center'>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconSearch color='#1E272F'/>
                </div>
                <IconLine/>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconProfessional color='#1E272F'/>
                </div>
                <IconLine/>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconPen color='#1E272F'/>
                </div>
                <IconLine/>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconProfessional color='#1E272F'/>
                </div>
                <IconLine/>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <h3 className='text-2xl font-medium'>Search for Specialists</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Browse and filter through a diverse range of healthcare professionals to find the right consultant for your needs.</p>
                </div>
                <div>
                  <h3 className='text-2xl font-medium'>Choose your Specialists</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Select the specific health professional you would like to consult with.</p>
                </div>
                <div className='mt-3'>
                  <h3 className='text-2xl font-medium'>Schedule your Appointments</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Choose a time, provide name, contact info, reason. Appointment confirmed, professional assigned for consultation.</p>
                </div>
                <div className='mt-4'>
                  <h3 className='text-2xl font-medium'>Attend your appointment</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Consult your provider from the Comfort of your home or office.</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            width={415}
            height={385}
            className='h-[385px] w-auto mt-20'
            src={'/images/consult-a-doctor-section.png'}
            alt={'quality home image'}
            quality={100}
          />
        </div>}
        {(active === 'Shop Pharmacy') && <div className='grid grid-cols-[6fr_4fr]'>
          <div>
            <h3 className='text-3xl font-semibold w-[85%]'>Effortless Online Pharmacy Experience for Your Health Needs</h3>
            <div className='flex mt-8 gap-3 w-[70%]'>
              <div className='flex flex-col items-center'>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconSearch color='#1E272F'/>
                </div>
                <IconLine/>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconProfessional color='#1E272F'/>
                </div>
                <IconLine/>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconPen color='#1E272F'/>
                </div>
                <IconLine/>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconProfessional color='#1E272F'/>
                </div>
                <IconLine/>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <h3 className='text-2xl font-medium'>Browse Our Pharmacy</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Explore a wide variety of lab tests available to find the right one for your health needs.</p>
                </div>
                <div>
                  <h3 className='text-2xl font-medium'>Select Your Medications</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Choose the right products by reviewing descriptions, dosages, and customer ratings.</p>
                </div>
                <div className='mt-3'>
                  <h3 className='text-2xl font-medium'>Place Your Order</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Securely complete your purchase with multiple payment options and instant order confirmation.</p>
                </div>
                <div className='mt-4'>
                  <h3 className='text-2xl font-medium'>Receive Your Delivery</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Enjoy fast and discreet shipping straight to your door, with tracking available for your convenience.</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            width={415}
            height={385}
            className='h-[385px] w-auto mt-20'
            src={'/images/shop-pharmacy-section.png'}
            alt={'quality home image'}
            quality={100}
          />
        </div>}
        {(active === 'Book a Vaccination') && <div className='grid grid-cols-[6fr_4fr]'>
          <div>
            <h3 className='text-3xl font-semibold w-[85%]'>Quick and Simple Steps to Secure Your Vaccination Appointment</h3>
            <div className='flex mt-8 gap-3 w-[70%]'>
              <div className='flex flex-col items-center'>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconSearch color='#1E272F'/>
                </div>
                <IconLine/>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconProfessional color='#1E272F'/>
                </div>
                <IconLine/>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconPen color='#1E272F'/>
                </div>
                <IconLine/>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconProfessional color='#1E272F'/>
                </div>
                <IconLine/>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <h3 className='text-2xl font-medium'>Explore Vaccine Options</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Check our comprehensive list of vaccines available for you and your family.</p>
                </div>
                <div>
                  <h3 className='text-2xl font-medium'>Select Your Preferred Location</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Choose a nearby clinic or pharmacy that offers your selected vaccine.</p>
                </div>
                <div className='mt-3'>
                  <h3 className='text-2xl font-medium'>Choose Your Appointment Time</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Schedule your vaccination at a convenient time that fits your schedule.</p>
                </div>
                <div className='mt-4'>
                  <h3 className='text-2xl font-medium'>Attend and Get Vaccinated</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Go to your appointment and receive your vaccine, with follow-up information provided for your records.</p>
              </div>
            </div>
            </div>
          </div>
          <Image
            width={415}
            height={385}
            className='h-[385px] w-auto mt-20'
            src={'/images/book-a-vaccination-section.png'}
            alt={'quality home image'}
            quality={100}
          />
          </div>
        }
        {(active === 'Book a Lab test') && <div className='grid grid-cols-[6fr_4fr]'>
          <div>
            <h3 className='text-3xl font-semibold w-[85%]'>Your One-Stop Destination for Hassle-Free Lab Test Bookings</h3>
            <div className='flex mt-8 gap-3 w-[70%]'>
              <div className='flex flex-col items-center'>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconSearch color='#1E272F'/>
                </div>
                <IconLine/>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconProfessional color='#1E272F'/>
                </div>
                <IconLine/>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconPen color='#1E272F'/>
                </div>
                <IconLine/>
                <div className='grid h-[50px] w-[50px] place-content-center rounded-full border my-2'>
                  <IconProfessional color='#1E272F'/>
                </div>
                <IconLine/>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <h3 className='text-2xl font-medium'>Search for Tests</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Explore a wide variety of lab tests available to find the right one for your health needs.</p>
                </div>
                <div>
                  <h3 className='text-2xl font-medium'>Select and Book Your Test</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Review test details and requirements to ensure you choose the appropriate option for accurate results.</p>
                </div>
                <div className='mt-3'>
                  <h3 className='text-2xl font-medium'>Visit the Lab</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Get directions and preparation instructions for your visit, ensuring a smooth testing experience.</p>
                </div>
                <div className='mt-4'>
                  <h3 className='text-2xl font-medium'>Access Your Results</h3>
                  <p className='text-[#5A5A5A] text-sm font-medium'>Track your test status and receive your results online, all accessible through your PureLife account.</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            width={415}
            height={385}
            className='h-[385px] w-auto mt-20'
            src={'/images/book-a-lab-test-section.png'}
            alt={'quality home image'}
            quality={100}
          />
        </div>}
      </Section>
    </>
  );
};
