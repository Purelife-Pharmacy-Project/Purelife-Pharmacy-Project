import React from 'react';
import { IconMegaphone } from '@/components/icons/IconMegaphone';
import { Link } from '@nextui-org/react';
import NextLink from 'next/link';

type Prop = {};

const AnnouncementBanner: React.FC<Prop> = () => {
  return (
    <div className='flex items-center justify-center gap-5 bg-primary py-3 '>
      <IconMegaphone size={31} />
      <p className='text-sm text-white md:text-lg'>
        Enjoy free delivery! when you shop{' '}
        <Link
          as={NextLink}
          href='/shop'
          className='text-sm capitalize text-white underline md:text-lg'
        >
          Shop now
        </Link>
      </p>
    </div>
  );
};

export default AnnouncementBanner;
