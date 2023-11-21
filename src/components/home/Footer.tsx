import { IconFacebook } from '@/components/icons/social/IconFacebook';
import { IconInstagram } from '@/components/icons/social/IconInstagram';
import { IconLinkedin } from '@/components/icons/social/IconLinkedin';
import { IconTwitter } from '@/components/icons/social/IconTwitter';
import { Line } from '@/library/ui/Line';
import { Link } from '@nextui-org/react';
import Image from 'next/image';
import { FooterBase } from './FooterBase';
import { Section } from './Section';

export const Footer = () => {
  const socialIcons = [
    {
      name: 'instagram',
      icon: <IconInstagram />,
    },
    {
      name: 'facebook',
      icon: <IconFacebook />,
    },
    {
      name: 'linkedin',
      icon: <IconLinkedin />,
    },
    {
      name: 'twitter',
      icon: <IconTwitter />,
    },
  ];

  const footerContent = [
    {
      title: 'Shop and Order',
      links: [
        {
          name: 'Shop by brand',
          path: '#',
        },
        {
          name: 'Shop Supermarket',
          path: '#',
        },
        {
          name: 'Shop health',
          path: '#',
        },
        {
          name: 'Shop beauty',
          path: '#',
        },
      ],
    },
    {
      title: 'Telehealth',
      links: [
        {
          name: 'Order a lab test',
          path: '#',
        },
        {
          name: 'Subscribe to drug refill',
          path: '#',
        },
        {
          name: 'Book a lab test',
          path: '#',
        },
        {
          name: 'Book vaccination',
          path: '#',
        },
      ],
    },
    {
      title: 'Company',
      links: [
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
          path: '#',
        },
        {
          name: 'Plot 5, Block 137, Cananland street, off Elf Bus stop, Lekki, Lagos, Nigeria',
          path: '#',
        },
        {
          name: '(+234) 809 056 4568, (+234) 809 056 4568',
          path: '#',
        },
        {
          name: 'order@purelifepharmacy.ng',
          path: '#',
        },
      ],
    },
  ];

  return (
    <div className='flex justify-start md:grid md:justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <footer className='mx-auto grid w-full gap-8 pb-10'>
          <div className='grid grid-flow-dense gap-24 sm:grid-cols-2 lg:grid-flow-col'>
            <div className='flex flex-col gap-2 md:col-span-2 lg:col-span-1'>
              <Link href='/'>
                <Image
                  src='/app-logo.png'
                  alt='purelife logo'
                  width={147}
                  height={68.271}
                />
              </Link>
              <div className='flex gap-2'>
                {socialIcons.map((socialIcon, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-center rounded-full'
                  >
                    {socialIcon.icon}
                  </div>
                ))}
              </div>
            </div>
            {footerContent.map((content, index) => (
              <div key={index} className='flex flex-col'>
                <p className='mb-5 h-max font-bold text-header-100'>
                  {content.title}
                </p>
                <div className='grid gap-2'>
                  {content.links.map((link, index) => (
                    <div key={index} className='max-w-[300px]'>
                      <Link
                        href={link.path}
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
