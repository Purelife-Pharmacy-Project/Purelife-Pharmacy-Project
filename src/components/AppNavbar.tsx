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
import { useRef, useState } from 'react';
import { NavbarCart } from './NavbarCart';
import { NavbarUser } from './NavbarUser';
import { useClickOutside } from '@/helpers/utils';
import { IconChevronLeft } from './icons/IconChevronLeft';
import { IconLocation } from './icons/IconLocation';
import { IconSearch } from './icons/IconSearch';
interface ServicesType {
  id: number;
  value: string;
  link: string;
}
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
  const [search, setSearch] = useState(true);
  const services: ServicesType[] = [
    { id: 0, value: 'Pharmacy', link: '/shop?category=health' },
    { id: 1, value: 'Telehealth', link: '/telehealth' },
    { id: 2, value: 'Vaccination', link: '/telehealth/get-vaccination' },
    { id: 2, value: 'Lab tests', link: '/telehealth/book-lab-test' },
    { id: 2, value: 'Virtual Consultation', link: '/telehealth/find-a-doctor' },
  ];
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const servicesButtonRef = useRef<HTMLDivElement | null>(null);
  const servicesPopupRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(servicesPopupRef, servicesButtonRef, () =>
    setServicesDropdown(false)
  );
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
              className={isActive('/') ? 'font-medium text-primary' : ''}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem className='relative mt-0.5 w-fit text-lg leading-[27px] text-header-100'>
            <div
              ref={servicesButtonRef}
              onClick={() => setServicesDropdown(!servicesDropdown)}
              className='ld:gap-5 flex h-fit w-fit cursor-pointer items-center gap-2 font-medium '
            >
              <p className='text-medium font-medium'>Services</p>
              <IconChevronLeft className='-rotate-90' color='[#5A5A5A]' />
            </div>
            {servicesDropdown && (
              <div
                ref={servicesPopupRef}
                className='absolute left-0 top-[35px] z-[99] mt-1 flex w-[200px] flex-col gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-[#FFFFFF] p-2 shadow-lg'
              >
                {services.map((service) => (
                  <div
                    key={service.id}
                    className='flex h-fit cursor-pointer items-center justify-between rounded-[5px] bg-primaryLight p-3 py-1 pl-2 hover:bg-gray-200'
                    onClick={() => {
                      setServicesDropdown(false);
                    }}
                  >
                    <Link
                      color='foreground'
                      href={service.link}
                      className={
                        // isActive('/telehealth/shop-and-order')
                        //   ? 'font-medium text-primary'
                        //   : ''
                        'cursor-pointer font-medium'
                      }
                    >
                      {service.value}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </NavbarItem>
        </div>
      </NavbarContent>

      {!search ? (
        <NavbarContent justify='center' className='w-full hidden lg:flex pl-[10%] mr-[2%]'>
          <NavbarSearch />
        </NavbarContent>
      ) : (
        <NavbarContent onClick={()=>{setSearch(!search)}} justify='end' className='hidden w-full lg:flex pr-[3%] cursor-pointer'>
          <IconSearch color='#1E272F' />
          <span className='text-[#1E272F]'>Search</span>
        </NavbarContent>
      )}

      <NavbarContent
        className='grid w-max grid-flow-col gap-10 py-0 data-[justify=end]:flex-grow-0'
        justify='end'
      >
        <div className='hidden py-0 md:gap-10 lg:flex'>
          <NavbarItem className='flex flex-col items-start justify-center text-lg leading-[27px] text-header-100'>
            <p className='text-xs font-light'>Deliver to:</p>
            <div className='flex w-full items-center justify-between font-medium'>
              <IconLocation /> <span className='leading-[0.7]'>10111</span>{' '}
            </div>
          </NavbarItem>
          <NavbarItem className='flex items-center text-lg leading-[27px] text-header-100'>
            <NavbarCart isActive={isActive} />
          </NavbarItem>
          <NavbarItem className='flex items-center text-lg leading-[27px] text-header-100'>
            <NavbarUser isActive={isActive} />
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
