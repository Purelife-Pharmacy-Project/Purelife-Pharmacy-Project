'use client';
import { inputDefault } from '@/theme';
import {
  Button,
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
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavbarCart } from './NavbarCart';
import { NavbarUser } from './NavbarUser';
import { IconSearch } from './icons/IconSearch';

export const AppNavbar = ({
  background = 'bg-inherit',
  disabled = false,
}: {
  background?: string;
  disabled?: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();

  const isActive = (path: string) => path === pathName;

  const menuItems = [
    {
      name: 'Telehealth',
      path: '/telehealth',
    },
    {
      name: 'Shop & Order',
      path: '/telehealth/shop-and-order',
    },
    {
      name: 'Partner with us',
      path: '#',
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
      className={`py-4 text-foreground lg:pb-2 bg-${background}`}
      maxWidth='xl'
    >
      <NavbarContent
        justify='start'
        className='grid grid-flow-col gap-6 data-[justify=start]:flex-grow-0'
      >
        <NavbarBrand className='w-28 flex-none flex-grow-0 lg:w-max'>
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

        <div className='hidden md:gap-[22px] lg:flex'>
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
              href='/telehealth/shop-and-order'
              className={
                isActive('/telehealth/shop-and-order')
                  ? 'font-medium text-primary'
                  : ''
              }
            >
              Shop & Order
            </Link>
          </NavbarItem>
          <NavbarItem className='text-lg leading-[27px] text-header-100'>
            <Link
              color='foreground'
              href='#'
              className={
                isActive('/partner-with-us') ? 'font-medium text-primary' : ''
              }
            >
              Partner with us
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify='center' className='hidden w-full lg:flex'>
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
        <div className='hidden md:gap-[22px] lg:flex'>
          <NavbarItem className='flex items-center text-lg leading-[27px] text-header-100'>
            <NavbarUser isActive={isActive} />
          </NavbarItem>
          <NavbarItem className='flex items-center text-lg leading-[27px] text-header-100'>
            <NavbarCart isActive={isActive} />
          </NavbarItem>
        </div>
        <NavbarItem className='hidden lg:block'>
          <Button
            as={Link}
            href='/telehealth/shop-and-order'
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
