import { AppNavbar } from '@/components/Navbar';
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

export default function Home() {
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
            <Hometransformation />
          </Section>
        </div>

        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <HealthSteps />
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
            <EarnedClients />
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
