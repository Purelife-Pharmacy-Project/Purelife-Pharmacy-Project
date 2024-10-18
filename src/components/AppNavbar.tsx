'use client';
import { NavbarSearch } from '@/components/NavbarSearch';
import { useLogout } from '@/hooks';
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavbarCart } from './NavbarCart';
import { NavbarUser } from './NavbarUser';

export const AppNavbar = ({
  background = 'inherit',
  disabled = false,
}: {
  background?: string;
  disabled?: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = usePathname();

  const isActive = (path: string) => path === currentPath;

  const { logout } = useLogout();

  const getNavbarBackground = () => {
    switch (currentPath) {
      case '/sign-in':
        return '';
      case '/create-account':
        return '';
      case '/cart':
        return '';

      default:
        return 'bg-white';
    }
  };

  const menuItems = [
    {
      name: 'Pharmacy',
      path: '/telehealth/shop-and-order',
    },
    {
      name: 'Telehealth',
      path: '/telehealth',
    },
    {
      name: 'Lifestyle',
      path: '/lifestyle',
    },
    {
      name: 'Partner with us',
      path: '/partner-with-us',
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
      isBlurred={disabled}
      className={`py-4 text-foreground lg:pb-2 ${getNavbarBackground()}`}
      maxWidth='xl'
      classNames={{
        menu: 'top-[120px]',
      }}
    >
      <NavbarContent
        justify='start'
        className='grid grid-flow-col gap-6 data-[justify=start]:flex-grow-0'
      >
        <NavbarBrand className='w-28 flex-none flex-grow-0'>
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

        {/* Silent Logout Button */}
        <button
          type='button'
          role='button'
          id='logout-btn'
          className=' pointer-events-none invisible absolute z-0'
          onClick={() => {
            console.log('hello');
            logout();
          }}
        >
          hello
        </button>

        <div className='hidden md:gap-[22px] lg:flex'>
          <NavbarItem className='text-lg leading-[27px] text-header-100'>
            <Link
              color='foreground'
              href='/shop'
              className={
                isActive('/telehealth/shop-and-order')
                  ? 'font-medium text-primary'
                  : ''
              }
            >
              Pharmacy
            </Link>
          </NavbarItem>
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
              href='/lifestyle'
              className={
                isActive('/lifestyle') ? 'font-medium text-primary' : ''
              }
            >
              Lifestyle
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify='center' className='hidden w-full lg:flex'>
        <NavbarSearch />
      </NavbarContent>

      <NavbarContent
        className='grid w-max grid-flow-col gap-6 data-[justify=end]:flex-grow-0'
        justify='end'
      >
        <div className='hidden md:gap-[22px] lg:flex'>
          <NavbarItem className='flex items-center text-lg leading-[27px] text-header-100'>
            <NavbarUser isActive={isActive} />
          </NavbarItem>
          <NavbarItem className='flex items-center text-lg leading-[27px] text-header-100'>
            <NavbarCart isActive={isActive} />
          </NavbarItem>
        </div>
        <NavbarItem className='hidden'>
          <Button
            as={Link}
            href='/shop?category=health'
            radius='full'
            size='lg'
            color='primary'
          >
            Shop & Order
          </Button>
        </NavbarItem>
        <NavbarItem className='flex items-center text-lg leading-[27px] text-header-100 lg:hidden'>
          <NavbarCart isActive={isActive} />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='lg:hidden'
        />
      </NavbarContent>

      <NavbarMenu className='bg-background pt-10'>
        <NavbarMenuItem>
          <Link
            color={isActive('/') ? 'primary' : 'foreground'}
            href='/'
            className='w-full font-medium lg:hidden'
            size='lg'
          >
            Home
          </Link>
        </NavbarMenuItem>

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
