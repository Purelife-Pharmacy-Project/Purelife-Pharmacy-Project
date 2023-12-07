'use client';
import { inputBordered } from '@/theme';
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

  const isActive = (path: string) => pathName.startsWith(path);

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
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href='/'>
            <Image
              src='/app-logo.png'
              alt='purelife logo'
              width={147}
              loading='eager'
              height={68.271}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify='center' className='hidden gap-8 sm:flex'>
        <NavbarItem>
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
        <NavbarItem>
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
        <NavbarItem>
          <Input
            radius='full'
            color='default'
            classNames={inputBordered}
            size='lg'
            type='text'
            isClearable
            placeholder='Search Purelife'
            startContent={<IconSearch />}
          />
        </NavbarItem>
        <NavbarItem className='flex items-center'>
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
        </NavbarItem>
        <NavbarItem className='flex items-center'>
          <Link
            className={isActive('/cart') ? 'font-medium text-primary' : ''}
            color='foreground'
            href='/cart'
          >
            <div className='flex items-center gap-2'>
              <IconCart
                size={24}
                color={isActive('/cart') ? 'primary' : 'header-100'}
              />
              <p>Cart</p>
            </div>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
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
