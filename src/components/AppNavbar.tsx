'use client';
import { NavbarSearch } from '@/components/NavbarSearch';
import { useLogout } from '@/hooks';
import {
  Button,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { NavbarCart } from './NavbarCart';
import { NavbarUser } from './NavbarUser';
import { useClickOutside } from '@/helpers/utils';
import { IconChevronLeft } from './icons/IconChevronLeft';
import { IconLocation } from './icons/IconLocation';
import { IconSearch } from './icons/IconSearch';
import { useSearch } from '@/helpers/useContext/authContext';
import ReferralBanner from './ReferralBanner';
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
  const { showSearch, setShowSearch } = useSearch();
  useClickOutside(servicesPopupRef, servicesButtonRef, () =>
    setServicesDropdown(false)
  );
  return (
    <div className='w-full bg-white fixed top-0 z-[9999]'>
      <ReferralBanner />
      <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={disabled}
      className={`py-4 text-foreground z-[9999] lg:pb-2 ${getNavbarBackground()}`}
      maxWidth='xl'
      classNames={{
        menu: 'top-[7.5rem]',
      }}
    >
      <NavbarContent
        justify='start'
        className='grid grid-flow-col gap-20 data-[justify=start]:flex-grow-0'
      >
        <NavbarBrand className='w-28 flex-none flex-grow-0'>
            <Image
              src='/app-logo.png'
              alt='Purelife logo'
              loading='eager'
              className='max-w-[150px] max-h-[68px] w-[120px] h-[56px]'
            />
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

        <div className='hidden md:gap-[3.5rem] lg:flex'>
          <NavbarItem className='text-[15px] leading-[1.6875rem] mt-auto '>
            <Link
              color='foreground'
              href='/'
              className={'font-semibold text-[#1E272F] text-[15px]'}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem className='relative mt-0.5 w-fit text-lg leading-[1.6875rem] text-header-100'>
            <div
              ref={servicesButtonRef}
              onClick={() => setServicesDropdown(!servicesDropdown)}
              className='ld:gap-5 flex h-fit w-fit cursor-pointer items-center gap-2 font-medium '
            >
              <p className='text-[15px] font-semibold text-[#1E272F]'>Services</p>
              <IconChevronLeft className='-rotate-90' color='[#5A5A5A]' />
            </div>
            {servicesDropdown && (
              <div
                ref={servicesPopupRef}
                className='absolute -left-[18px] top-[10] z-[99] mt-1 flex w-[12.5rem] flex-col items-center gap-2 rounded-lg border border-gray-200 bg-[#FFFFFF] p-2 pt-0 shadow-lg'
                style={{ boxShadow: '0rem .25rem .625rem 0rem #00000040' }}
              >
                <div className='z-[999] border-t border-l -mt-[8px] w-[15px] h-[15px] bg-white rotate-45'></div>
                <div className=''>
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className='flex h-fit cursor-pointer items-center justify-between rounded-[.3125rem] p-3 py-1 pl-2'
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
              </div>
            )}
          </NavbarItem>
        </div>
      </NavbarContent>

      {showSearch ? (
        <NavbarContent
          justify='center'
          className='mt-4 lg:mt-0 mr-[2%] hidden w-full xl:pl-[10%] lg:flex'
        >
          <NavbarSearch show={false} />
        </NavbarContent>
      ) : (
        <NavbarContent
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          justify='end'
          className='w-full cursor-pointer items-center justify-end gap-2 pr-[3%] hidden lg:flex'
        >
          <IconSearch color='#1E272F' size={24}/>
          <span className='text-[#1E272F] text-[15px] font-semibold'>Search</span>
        </NavbarContent>
      )}
      <NavbarContent
        className='grid w-max grid-flow-col gap-10 py-0 data-[justify=end]:flex-grow-0'
        justify='end'
      >
        <div className='hidden py-0 md:gap-10 lg:flex'>
          {false && <NavbarItem className='flex flex-col items-start justify-center text-lg leading-[1.6875rem] text-header-100'>
            <p className='text-xs font-light'>Deliver to:</p>
            <div className='flex w-full items-center justify-between font-medium'>
              <IconLocation /> <span className='leading-[0.7]'>10111</span>{' '}
            </div>
          </NavbarItem>}
          <NavbarItem className='flex items-center text-lg leading-[1.6875rem] text-header-100'>
            <NavbarCart isActive={isActive} />
          </NavbarItem>
          <NavbarItem className='flex items-center text-lg leading-[1.6875rem] text-header-100'>
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
        <NavbarItem className='flex items-center text-lg leading-[1.6875rem] text-header-100 lg:hidden'>
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
      <div className='relative mx-6 lg:hidden lg:my-0 my-4'>
          <NavbarSearch show={true} />
        </div>
    </div>
    
  );
};
