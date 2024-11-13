'use client';

import { useCartStore } from '@/hooks';
import { useStore } from '@/hooks/store';
import { Badge, Link } from '@nextui-org/react';
import { FC } from 'react';
import { IconCartTwo } from './icons/IconCart-2';

type NavbarCartProps = {
  isActive: (path: string) => boolean;
};

export const NavbarCart: FC<NavbarCartProps> = ({ isActive }) => {
  const cart = useStore(useCartStore, (state) => state)?.cart;
  return (
    <Link
      className={isActive('/cart') ? 'font-medium text-primary' : ''}
      color='foreground'
      href='/cart'
    >
      <div className='flex items-center gap-3 sm:gap-2'>
        <Badge
          isInvisible={!cart}
          content={cart?.length || '0'}
          size='md'
          classNames={{
            badge: 'w-[16px] h-[16px] min-w-[16px] min-h-[16px] sm:w-[20px] sm:h-[20px] sm:min-w-[20px] sm:min-h-[20px] bg-[#1E272F] text-white text-[8px] sm:text-xs',
          }}
        >
          <IconCartTwo
            className="w-[20px] h-[20px] sm:w-auto sm:h-auto"
            size={24}
            color={isActive('/cart') ? 'primary' : 'header-100'}
          />
        </Badge>
        <p className='font-semibold text-sm sm:text-[15px]'>Cart</p>
      </div>
    </Link>
  );
};
