import { AppNavbar } from '@/components/Navbar';
import { EarnedClients } from '@/components/lib/home/EarnedClients';
import { Footer } from '@/components/lib/home/Footer';
import { HealthSteps } from '@/components/lib/home/HealthSteps';
import { HomeHero } from '@/components/lib/home/HomeHero';
import { NewsLetterCard } from '@/components/lib/home/NewsletterCard';
import { Section } from '@/components/lib/home/Section';
import { ShopCategory } from '@/components/lib/shop-and-order/ShopCategory';
import { teleHealthServiceSteps } from '../page';

export default function ShopAndOrder() {
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
            <HealthSteps steps={teleHealthServiceSteps} />
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
