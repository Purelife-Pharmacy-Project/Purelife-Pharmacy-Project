'use client';
import { useCartStore, useGetUser } from '@/hooks';
import { useStore } from '@/hooks/store';
import UsersService from '@/services/user';
import { inputDefault } from '@/theme';
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IconCart } from './icons/IconCart';
import { IconProfile } from './icons/IconProfile';
import { IconSearch } from './icons/IconSearch';

export const AppNavbar = ({
  background = 'bg-inherit',
}: {
  background?: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();
  const queryClient = useQueryClient();
  const cart = useStore(useCartStore, (state) => state)?.cart;
  const { user } = useGetUser();

  const isActive = (path: string) => pathName.startsWith(path);

  const handleLogout = () => {
    UsersService.logoutUser();
    queryClient.clear();

    window.location.reload();
  };

  const menuItems = [
    {
      name: 'Telehealth',
      path: '/telehealth',
    },
    {
      name: 'Shop & Order',
      path: '/shop-and-order',
    },
    {
      name: 'Sign in',
      path: '/sign-in',
    },
    {
      name: 'Cart',
      path: '/cart',
    },
  ];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`py-4 text-foreground lg:pb-2 bg-${background}`}
      maxWidth='xl'
    >
      <NavbarContent
        justify='start'
        className='grid grid-flow-col gap-6 data-[justify=start]:flex-grow-0'
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand className='w-max flex-none flex-grow-0'>
          <Link href='/'>
            <Image
              src='/app-logo.png'
              priority
              alt='Purelife logo'
              width={147}
              loading='eager'
              height={68.271}
            />
          </Link>
        </NavbarBrand>

        <div className='hidden md:flex md:gap-[22px]'>
          <NavbarItem className='text-lg leading-[27px] text-header-100'>
            <Link
              color='foreground'
              href='/telehealth'
              className={
                isActive('/telehealth') ? 'font-medium text-primary' : ''
              }
            >
              Telehealth
            </Link>
          </NavbarItem>
          <NavbarItem className='text-lg leading-[27px] text-header-100'>
            <Link
              color='foreground'
              href='/shop-and-order'
              className={
                isActive('/shop-and-order') ? 'font-medium text-primary' : ''
              }
            >
              Shop & Order
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify='center' className='hidden w-full sm:flex'>
        <Input
          radius='full'
          color='default'
          classNames={inputDefault}
          size='lg'
          type='text'
          isClearable
          placeholder='Search Purelife'
          startContent={<IconSearch />}
        />
      </NavbarContent>

      <NavbarContent
        className='grid w-max grid-flow-col gap-6 data-[justify=end]:flex-grow-0'
        justify='end'
      >
        <div className='hidden md:flex md:gap-[22px]'>
          <NavbarItem className='flex items-center text-lg leading-[27px] text-header-100'>
            {user ? (
              <Dropdown>
                <DropdownTrigger>
                  <Button variant='light'>
                    <Avatar
                      size='sm'
                      showFallback
                      src={''}
                      name={user?.name[0]}
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
                    className='text-content'
                    color='default'
                    key='key'
                  >
                    Link
                  </DropdownItem>
                  <DropdownItem
                    key='logout'
                    onClick={handleLogout}
                    className='text-danger'
                    color='danger'
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link
                color='foreground'
                className={
                  isActive('/sign-in') ? 'font-medium text-primary' : ''
                }
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
          </NavbarItem>
          <NavbarItem className='flex items-center text-lg leading-[27px] text-header-100'>
            <Link
              className={isActive('/cart') ? 'font-medium text-primary' : ''}
              color='foreground'
              href='/cart'
            >
              <div className='flex items-center gap-2'>
                <Badge content={cart?.length || 0} size='lg' color='primary'>
                  <IconCart
                    size={24}
                    color={isActive('/cart') ? 'primary' : 'header-100'}
                  />
                </Badge>
                <p>Cart</p>
              </div>
            </Link>
          </NavbarItem>
        </div>
        <NavbarItem>
          <Link color='foreground' href='/shop-and-order'>
            <Button radius='full' size='lg' color='primary'>
              Shop & Order
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='bg-background pt-10'>
        {menuItems.map((link, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={isActive(link.path) ? 'primary' : 'foreground'}
              href={link.path}
              className='w-full'
              size='lg'
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
