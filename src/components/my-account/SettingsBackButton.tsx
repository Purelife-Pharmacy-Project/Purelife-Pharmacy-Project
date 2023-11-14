'use client';

import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { Link } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

export const SettingsBackButton = () => {
  const pathName = usePathname();
  const isSettings = pathName === '/my-account/settings';
  return (
    <>
      <Link
        color='foreground'
        className='rounded-lg hover:bg-primary/10'
        as={Link}
        href='/my-account/settings'
      >
        {!isSettings && <IconChevronLeft size={32} />}
      </Link>
    </>
  );
};
