'use client';
import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import { Section } from './Section';
import { useState } from 'react';
import { IconSearch } from '../icons/IconSearch';
import { IconLine } from '../icons/IconLine';
import { IconProfessional } from '../icons/IconProfessional';
import { IconPen } from '../icons/IconPen';

interface StepsForServicesProps {}

const serviceSteps:any = {
  'Consult Doctor': [
    {
      icon: <IconSearch color='#1E272F' />,
      title: 'Search for Specialists',
      description: 'Browse and filter through a diverse range of healthcare professionals to find the right consultant for your needs.',
    },
    {
      icon: <IconProfessional color='#1E272F' />,
      title: 'Choose your Specialists',
      description: 'Select the specific health professional you would like to consult with.',
    },
    {
      icon: <IconPen color='#1E272F' />,
      title: 'Schedule your Appointments',
      description: 'Choose a time, provide name, contact info, reason. Appointment confirmed, professional assigned for consultation.',
    },
    {
      icon: <IconProfessional color='#1E272F' />,
      title: 'Attend your appointment',
      description: 'Consult your provider from the Comfort of your home or office.',
    },
  ],
  'Shop Pharmacy': [
    {
      icon: <IconSearch color='#1E272F' />,
      title: 'Browse Our Pharmacy',
      description: 'Explore a wide variety of lab tests available to find the right one for your health needs.',
    },
    {
      icon: <IconProfessional color='#1E272F' />,
      title: 'Select Your Medications',
      description: 'Choose the right products by reviewing descriptions, dosages, and customer ratings.',
    },
    {
      icon: <IconPen color='#1E272F' />,
      title: 'Place Your Order',
      description: 'Securely complete your purchase with multiple payment options and instant order confirmation.',
    },
    {
      icon: <IconProfessional color='#1E272F' />,
      title: 'Receive Your Delivery',
      description: 'Enjoy fast and discreet shipping straight to your door, with tracking available for your convenience.',
    },
  ],
  'Book a Vaccination': [
    {
      icon: <IconSearch color='#1E272F' />,
      title: 'Explore Vaccine Options',
      description: 'Check our comprehensive list of vaccines available for you and your family.',
    },
    {
      icon: <IconProfessional color='#1E272F' />,
      title: 'Select Your Preferred Location',
      description: 'Choose a nearby clinic or pharmacy that offers your selected vaccine.',
    },
    {
      icon: <IconPen color='#1E272F' />,
      title: 'Choose Your Appointment Time',
      description: 'Schedule your vaccination at a convenient time that fits your schedule.',
    },
    {
      icon: <IconProfessional color='#1E272F' />,
      title: 'Attend and Get Vaccinated',
      description: 'Go to your appointment and receive your vaccine, with follow-up information provided for your records.',
    },
  ],
  'Book a Lab test': [
    {
      icon: <IconSearch color='#1E272F' />,
      title: 'Search for Tests',
      description: 'Explore a wide variety of lab tests available to find the right one for your health needs.',
    },
    {
      icon: <IconProfessional color='#1E272F' />,
      title: 'Select and Book Your Test',
      description: 'Review test details and requirements to ensure you choose the appropriate option for accurate results.',
    },
    {
      icon: <IconPen color='#1E272F' />,
      title: 'Visit the Lab',
      description: 'Get directions and preparation instructions for your visit, ensuring a smooth testing experience.',
    },
    {
      icon: <IconProfessional color='#1E272F' />,
      title: 'Access Your Results',
      description: 'Track your test status and receive your results online, all accessible through your PureLife account.',
    },
  ],
};

export const StepsForServices: React.FC<StepsForServicesProps> = () => {
  const [active, setActive] = useState('Consult Doctor');

  return (
    <>
      <Section>
        <div className='mb-10 flex w-full justify-between text-xl font-medium md:text-2xl lg:w-[80%]'>
          {Object.keys(serviceSteps).map((service) => (
            <div key={service} className='cursor-pointer' onClick={() => setActive(service)}>
              <h3 className={`${active === service ? '' : 'text-[#5A5A5A]'}`}>{service}</h3>
              {active === service && <div className='h-[6px] w-[50%] rounded-full bg-primary'></div>}
            </div>
          ))}
        </div>

        {active && (
          <div className='grid grid-cols-1 lg:grid-cols-[6fr_4fr]'>
            <div>
              <h3 className='w-full text-2xl font-semibold lg:w-[85%] lg:text-3xl'>
                {active === 'Consult Doctor'
                  ? 'Streamline Your Consultation Booking, All in One Place'
                  : active === 'Shop Pharmacy'
                  ? 'Effortless Online Pharmacy Experience for Your Health Needs'
                  : active === 'Book a Vaccination'
                  ? 'Quick and Simple Steps to Secure Your Vaccination Appointment'
                  : active === 'Book a Lab test'
                  ? 'Your One-Stop Destination for Hassle-Free Lab Test Bookings'
                  : ''}
              </h3>
                <div className='mt-8 flex flex-col items-start w-full lg:w-[70%]'>
                {serviceSteps[active].map((step: any, index: any) => (
                  <div key={index}>
                    <div className='flex items-center gap-6'>
                      <div className='my-2 grid h-[50px] w-[50px] place-content-center rounded-full border'>
                        {step.icon}
                      </div>
                      <div className='w-[90%]'>
                        <h3 className='text-xl font-medium md:text-2xl'>{step.title}</h3>
                        <p className='text-sm font-medium text-[#5A5A5A]'>{step.description}</p>
                      </div>
                    </div>
                    {index < serviceSteps[active].length - 1 && <IconLine className="ml-[23px]" />}
                  </div>
                ))}
              </div>
              </div>
              
              {/* Conditional image rendering based on active section */}
              {active === 'Consult Doctor' && (
                <Image width={415} height={385} className='mt-20 hidden h-[385px] w-auto lg:block' src={'/images/consult-a-doctor-section.png'} alt={'quality home image'} quality={100} />
              )}
              {active === 'Shop Pharmacy' && (
                <Image width={415} height={385} className='mt-20 hidden h-[385px] w-auto lg:block' src={'/images/shop-pharmacy-section.png'} alt={'quality home image'} quality={100} />
              )}
              {active === 'Book a Vaccination' && (
                <Image width={415} height={385} className='mt-20 hidden h-[385px] w-auto lg:block' src={'/images/book-a-vaccination-section.png'} alt={'quality home image'} quality={100} />
              )}
              {active === 'Book a Lab test' && (
                <Image width={415} height={385} className='mt-20 hidden h-[385px] w-auto lg:block' src={'/images/book-a-lab-test-section.png'} alt={'quality home image'} quality={100} />
              )}
          </div>
        )}
      </Section>
    </>
  );
};