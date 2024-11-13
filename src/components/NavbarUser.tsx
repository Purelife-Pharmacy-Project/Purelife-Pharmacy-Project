'use client';

import { useCartStore, useGetPartner } from '@/hooks';
import UsersService from '@/services/user';
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Link,
} from '@nextui-org/react';
import { useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { IconProfile } from './icons/IconProfile';
import NextLink from 'next/link';

type NavbarUserProps = {
  isActive: (path: string) => boolean;
};

export const NavbarUser: FC<NavbarUserProps> = ({ isActive }) => {
  const { partner } = useGetPartner();
  const store = useCartStore();

  const queryClient = useQueryClient();

  const handleLogout = () => {
    UsersService.logoutUser();
    queryClient.clear();

    window.location.reload();
    store.clearCart();
  };
  return (
    <>
      {partner ? (
        <Dropdown showArrow>
          <DropdownTrigger>
            <Button variant='solid' color='primary' radius='full' size='lg'>
              <Avatar
                size='sm'
                showFallback
                src={''}
                name={partner && partner.name.substring(0, 1)}
                classNames={{
                  base: 'bg-white',
                  icon: 'text-primary',
                  name: 'text-primary text-base',
                }}
              />
              <span className='text-base'>
                Hi,{' '}
                <span className='capitalize'>
                  {partner.name.split(' ')[0].toLowerCase()}
                </span>
              </span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label='Static Actions'>
            <DropdownItem
              isReadOnly
              className='pointer-events-none flex gap-2 text-lg text-content'
              color='default'
              key='profile'
            >
              {partner && partner.name}
            </DropdownItem>
            <DropdownSection>
              <DropdownItem
                className='text-content'
                color='default'
                as={Link}
                href='/my-account'
                key='account'
              >
                My Account
              </DropdownItem>
              <DropdownItem
                key='logout'
                onPress={handleLogout}
                className='text-primary'
                color='primary'
              >
                Logout
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Button
          as={NextLink}
          radius='full'
          color='primary'
          className={isActive('/sign-in') ? 'font-medium' : 'w-[8rem] py-6'}
          href='/sign-in'
        >
          <div className='flex items-center gap-2'>
            <p className='text-[17px]'>Join Now</p>
          </div>
        </Button>
      )}
    </>
  );
};
