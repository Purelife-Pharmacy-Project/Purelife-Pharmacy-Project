import { AppNavbar } from '@/components/Navbar';
import { IconFluidMed } from '@/components/icons/IconFluidMed';
import { IconLabs } from '@/components/icons/IconLabs';
import { IconPill } from '@/components/icons/IconPill';
import { EarnedClients } from '@/components/lib/home/EarnedClients';
import { FeaturedProducts } from '@/components/lib/home/FeaturedProducts';
import { Footer } from '@/components/lib/home/Footer';
import { HealthSteps } from '@/components/lib/home/HealthSteps';
import { HomeHero } from '@/components/lib/home/HomeHero';
import { HomePartners } from '@/components/lib/home/HomePartners';
import { HomeShopAndOrder } from '@/components/lib/home/HomeShopAndOrder';
import { Hometransformation } from '@/components/lib/home/HomeTranformation';
import { NewsLetterCard } from '@/components/lib/home/NewsletterCard';
import { Testomonials } from '@/components/lib/home/Testimonials';
import { Button } from '@nextui-org/react';

export default function Home() {
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

  const transformationData = [
    {
      stat: '80%',
      description: 'See improvement in their first 6 months.',
    },
    {
      stat: '8k+',
      description: 'Certified and accredited laboratory test results.',
    },
    {
      stat: '95%',
      description: 'Of members would recommend to friends & family.',
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
        <HomeHero
          title='Your the one-stop shop for wellness and lifestyle.'
          description='Schedule laboratory tests, book vaccination appointments, and receive high-quality medical services from the convenience of wherever you are in Nigeria.'
          ctaText='Start here'
          ctaLink='#'
        />

        <HomePartners />

        <Hometransformation data={transformationData} />

        <HealthSteps steps={teleHealthServiceSteps} />

        <HomeShopAndOrder />

        <FeaturedProducts />

        <div className='flex justify-center'>
          <Button
            color='primary'
            className='px-16 py-8'
            radius='full'
            size='lg'
          >
            Shop & Order
          </Button>
        </div>

        <Testomonials />

        <EarnedClients
          title='We have earned the trust of 300+ Clients'
          clients={earnedClients}
        />

        <NewsLetterCard />
        <Footer />
      </main>
    </>
  );
}
