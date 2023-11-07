'use client';

import { Link } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export const MyAccountTabs = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const isActive = (path: string) => pathName === path;

  const links = [
    {
      name: 'Personal details',
      path: '/my-account',
    },
    {
      name: 'Transactions',
      path: '/my-account/transactions',
    },
    {
      name: 'Subscriptions',
      path: '/my-account/subscriptions',
    },
    {
      name: 'Settings',
      path: '/my-account/settings',
    },
  ];
  return (
    <div className='grid lg:grid-flow-col lg:grid-cols-[2fr_5fr]'>
      <div className='flex flex-row lg:flex-col'>
        {links.map((link, index) => (
          <Link
            key={link.name}
            href={link.path}
            className={twMerge(
              'flex items-center gap-2 px-10 py-4 hover:bg-primaryLight',
              isActive(link.path) ? 'bg-primaryLight lg:bg-transparent' : ''
            )}
          >
            <span
              className={twMerge(
                'text-content',
                isActive(link.path) ? 'font-semibold text-primary' : ''
              )}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      <div className='rounded-lg bg-primaryLight px-10 py-5'>{children}</div>
    </div>
  );
};
