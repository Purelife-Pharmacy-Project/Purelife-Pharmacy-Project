'use client';
import { IconFacebook } from '@/components/icons/social/IconFacebook';
import { IconInstagram } from '@/components/icons/social/IconInstagram';
import { IconLinkedin } from '@/components/icons/social/IconLinkedin';
import { IconTwitter } from '@/components/icons/social/IconTwitter';
import { getCategoryUrl } from '@/helpers/utils';
import { useGetCategories } from '@/hooks';
import { Line } from '@/library/ui/Line';
import { Link } from '@nextui-org/react';
import Image from 'next/image';
import { FooterBase } from './FooterBase';
import { Section } from './Section';

export const Footer = () => {
  const { categories: allCategories } = useGetCategories();

  const socialIcons = [
    {
      name: 'instagram',
      icon: <IconInstagram />,
      url: 'https://www.instagram.com/purelifepharmang?igsh=bHRncm85cXU1eTF6',
    },
    {
      name: 'facebook',
      icon: <IconFacebook />,
      url: '#',
    },
    {
      name: 'linkedin',
      icon: <IconLinkedin />,
      url: 'https://www.linkedin.com/company/purelife-pharmacy-ltd/',
    },
    {
      name: 'twitter',
      icon: <IconTwitter />,
      url: '#',
    },
  ];

  const footerContent = [
    {
      title: 'Shop and Order',
      links: [
        {
          name: 'Shop health',
          path: getCategoryUrl('health', allCategories),
        },
        {
          name: 'Shop Supermarket',
          path: getCategoryUrl('supermarket', allCategories),
        },
        {
          name: 'Shop beauty',
          path: getCategoryUrl('beauty', allCategories),
        },
      ],
    },
    {
      title: 'Telehealth',
      links: [
        {
          name: 'Book a lab test',
          path: '/telehealth/book-lab-test',
        },
        {
          name: 'Subscribe to drug refill',
          path: '/telehealth/drug-refill',
        },
        {
          name: 'Upload Prescription',
          path: '/telehealth/get-vaccination',
        },
        {
          name: 'Consult a doctor',
          path: '/telehealth/find-a-doctor',
        },
        {
          name: 'Book a vaccination',
          path: '/telehealth/upload-prescription',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          name: 'Lifestyle',
          path: '/lifestyle',
        },
        {
          name: 'Partner with us',
          path: '/partner-with-us',
        },
        {
          name: 'About us',
          path: '#',
        },
        {
          name: 'Blog',
          path: '#',
        },
        {
          name: 'Careers',
          path: '#',
        },
        {
          name: 'Refund policy',
          path: '#',
        },
      ],
    },
    {
      title: 'Our Office Address',
      links: [
        {
          name: '15b Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
          path: 'https://maps.app.goo.gl/8Z3DBWoYk41eTVos8',
        },
        {
          name: 'Plot 5, Block 137, Cananland street, off Elf Bus stop, Lekki, Lagos, Nigeria',
          path: 'https://maps.app.goo.gl/a3iwccJu85MX6mf96',
        },
        {
          name: '(+234) 809 056 4568, (+234) 809 056 4568',
          path: 'tel:+2348090564568',
        },
        {
          name: 'hello@purelifehealth.io',
          path: 'mailto:hello@purelifehealth.io',
        },
      ],
    },
  ];

  return (
    <div className='flex w-full justify-start sm:w-3/5 md:grid md:justify-center lg:w-full lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <footer className='mx-auto grid w-full gap-4 pb-10 lg:gap-8'>
          <div className='grid grid-flow-dense gap-8 sm:grid-cols-2 md:gap-24 lg:grid-flow-col'>
            <div className='flex flex-col gap-2 md:col-span-2 lg:col-span-1'>
              <Link href='/'>
                <Image
                  src='/app-logo.png'
                  priority
                  alt='purelife logo'
                  width={147}
                  height={68.271}
                />
              </Link>
              <div className='flex gap-2'>
                {socialIcons.map((socialIcon, index) => (
                  <Link
                    key={index}
                    href={socialIcon.url}
                    className='flex items-center justify-center rounded-full'
                  >
                    {socialIcon.icon}
                  </Link>
                ))}
              </div>
            </div>
            {footerContent.map((content, index) => (
              <div key={index} className='flex flex-col'>
                <p className='mb-5 h-max font-bold text-header-100'>
                  {content.title}
                </p>
                <div className='grid gap-3'>
                  {content.links.map((link, index) => (
                    <div key={index} className='max-w-[350px]'>
                      <Link
                        href={link.path}
                        size='sm'
                        target='_blank'
                        className='font-light text-content'
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Line />
          <FooterBase />
        </footer>
      </Section>
    </div>
  );
};
