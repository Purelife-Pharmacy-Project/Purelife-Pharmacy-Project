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
import { Section } from '@/components/lib/home/Section';
import { Testomonials } from '@/components/lib/home/Testimonials';

export const teleHealthServiceSteps = [
  {
    icon: <IconPill size={48} />,
    title: 'Subscribe to a drug refill',
    description:
      'Get your medications delivered to you at your preferred intervals.',
    url: '#',
  },
  {
    icon: <IconLabs />,
    title: 'Book a lab test',
    description:
      'Choose from our over 500 effective test packages, aimed at providing you with the best health care possible.',
    url: '#',
  },
  {
    icon: <IconFluidMed />,
    title: 'Get Vaccination',
    description: 'Choose from our expertly curated vaccines whenever you want.',
    url: '#',
  },
];

export default function Home() {
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
        <div className='grid justify-center bg-primaryLight lg:pt-[55px]'>
          <Section className='bg-primaryLight'>
            <HomeHero />
          </Section>
        </div>

        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <HomePartners />
          </Section>
        </div>

        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <Hometransformation data={transformationData} />
          </Section>
        </div>

        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <HealthSteps steps={teleHealthServiceSteps} />
          </Section>
        </div>
        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <HomeShopAndOrder />
          </Section>
        </div>
        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <FeaturedProducts />
          </Section>
        </div>

        <Testomonials />

        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <EarnedClients
              title='We have earned the trust of 300+ Clients'
              clients={earnedClients}
            />
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
