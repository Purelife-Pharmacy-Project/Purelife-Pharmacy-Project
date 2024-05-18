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
            <Button variant='light'>
              <Avatar
                size='sm'
                showFallback
                src={''}
                name={partner && partner.name.substring(0, 1)}
                classNames={{
                  base: 'bg-primary/80',
                  icon: 'text-primary',
                  name: 'text-white text-base',
                }}
              />
              <span className='text-base'>Profile</span>
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
        <Link
          color='foreground'
          className={isActive('/sign-in') ? 'font-medium text-primary' : ''}
          href='/sign-in'
        >
          <div className='flex items-center gap-2'>
            <IconProfile
              color={isActive('/sign-in') ? 'primary' : 'header-100'}
              size={24}
            />
            <p>Sign in</p>
          </div>
        </Link>
      )}
    </>
  );
};
