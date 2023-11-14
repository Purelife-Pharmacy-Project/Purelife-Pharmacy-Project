import { AppNavbar } from '@/components/Navbar';
import { EarnedClients } from '@/components/home/EarnedClients';
import { Footer } from '@/components/home/Footer';
import { HealthServices } from '@/components/home/HealthServices';
import { HomeHero } from '@/components/home/HomeHero';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { Section } from '@/components/home/Section';
import { ShopCategory } from '@/components/shop-and-order/ShopCategory';
import { IconFluidMed } from '@/library/icons/IconFluidMed';
import { IconLabs } from '@/library/icons/IconLabs';
import { IconPill } from '@/library/icons/IconPill';

export default function ShopAndOrder() {
  const teleHealthServiceSteps = [
    {
      icon: <IconPill size={48} />,
      title: 'Subscribe to a drug refill',
      description:
        'Get your medications delivered to you at your preferred intervals.',
      url: '#',
    },
    {
      icon: <IconLabs color='primary' />,
      title: 'Book a lab test',
      description:
        'Choose from our over 500 effective test packages, aimed at providing you with the best health care possible.',
      url: '#',
    },
    {
      icon: <IconFluidMed />,
      title: 'Get Vaccination',
      description:
        'Choose from our expertly curated vaccines whenever you want.',
      url: '#',
    },
  ];
  const earnedClients = [
    {
      name: 'IFitness',
      image: '/images/clients/iFitness.png',
    },
    {
      name: 'Buy Asap',
      image: '/images/clients/buyAsap.png',
    },
    {
      name: 'Nike',
      image: '/images/clients/nike.png',
    },
    {
      name: 'Gallant Biz',
      image: '/images/clients/gallantBiz.png',
    },
    {
      name: 'Laroche',
      image: '/images/clients/laroche.png',
    },
  ];
  return (
    <>
      <AppNavbar background='primaryLight' />
      <main className='grid gap-6'>
        <div className='grid justify-center bg-primaryLight'>
          <Section className='bg-primaryLight'>
            <HomeHero
              title='Your the one-stop shop for wellness and lifestyle.'
              description='Schedule laboratory tests, book vaccination appointments, and receive high-quality medical services from the convenience of wherever you are in Nigeria.'
              ctaText='Start here'
              ctaLink='#'
            />
          </Section>
        </div>

        <div className='grid justify-center lg:pt-[55px]'>
          <Section>
            <ShopCategory />
          </Section>
        </div>

        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <EarnedClients
              title='We got products over 300+ trusted manufacturers'
              clients={earnedClients}
            />
          </Section>
        </div>

        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <HealthServices steps={teleHealthServiceSteps} />
          </Section>
        </div>

        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <NewsLetterCard />
          </Section>
        </div>
        <div className='flex justify-start md:grid md:justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <Footer />
          </Section>
        </div>
      </main>
    </>
  );
}
