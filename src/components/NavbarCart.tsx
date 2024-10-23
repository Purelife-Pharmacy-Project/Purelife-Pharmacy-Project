'use client';

import { useCartStore } from '@/hooks';
import { useStore } from '@/hooks/store';
import { Badge, Link } from '@nextui-org/react';
import { FC } from 'react';
import { IconCart } from './icons/IconCart';

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
      <div className='flex items-center gap-2'>
        <Badge
          isInvisible={!cart}
          content={cart?.length || '0'}
          size='md'
          classNames={{
            badge: 'bg-[#1E272F] text-white text-xs',
          }}
        >
          <IconCart
            size={24}
            color={isActive('/cart') ? 'primary' : 'header-100'}
          />
        </Badge>
        <p>Cart</p>
      </div>
    </Link>
  );
};
