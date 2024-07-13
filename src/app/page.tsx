import { Footer } from '@/components/home/Footer';
import { HomePageHero } from '@/components/home/HomePageHero';
import { HomePartners } from '@/components/home/HomePartners';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { Categories } from '@/components/home/Categories';
import { Testimonials } from '@/components/home/Testimonials';
import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { NavbarSearch } from '@/components/NavbarSearch';
import HotOffersProduct from '@/components/home/HotOffersProduct';
import BestSellers from '@/components/home/BestSellers';
import PersonalizedPlan from '@/components/home/PersonalizedPlan';
import HandpickedForYou from '@/components/home/HandpickedForYou';
import ExploreTests from '@/components/home/ExploreTests';
import DiscoverTopProducts from '@/components/home/DiscoverTopProducts';
import HealthOfferings from '@/components/home/HealthOfferings';

export default async function Home() {
  // const queryClient = new QueryClient();
  //
  // await queryClient.prefetchQuery({
  //   queryKey: ['featured-products'],
  //   queryFn: () =>
  //     ProductService.getAllProducts({
  //       active: true,
  //       pageSize: 3,
  //       pageIndex: 1,
  //     }),
  // });

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

  return (
    <>
      <main className='grid gap-6 lg:gap-10'>
        <div className='relative mx-6 lg:hidden'>
          <NavbarSearch />
        </div>
        <HomePageHero
          title='Simplify your health journey with one click.'
          description='Saves time, unlimited access, quality service and providers, authentic medications and one-stop shop.'
          ctaText='Shop All'
          ctaLink='/shop'
          features={[
            'shop pharmacy',
            'consult with a doctor',
            'book a lab test',
            'saves time',
          ]}
          featuresWithLinks={[
            { label: 'shop pharmacy', href: '/shop' },
            {
              label: 'consult with a doctor',
              href: '/telehealth/find-a-doctor',
            },
            {
              label: 'book a vaccination',
              href: '/telehealth/get-vaccination',
            },
            { label: 'book a lab test', href: '/telehealth/book-lab-test' },
          ]}
        />

        <HomePartners />

        <div className='invisible mb-4'></div>

        <HotOffersProduct />

        <div className='invisible mb-4'></div>

        <Categories />

        <div className='invisible mb-4'></div>

        <BestSellers />

        <div className='invisible mb-4'></div>

        <HealthOfferings />

        <div className='invisible mb-4'></div>

        <DiscoverTopProducts />

        <div className='invisible mb-4'></div>

        <ExploreTests />

        <div className='invisible mb-4'></div>

        <HandpickedForYou />

        <div className='invisible mb-4'></div>

        <PersonalizedPlan />

        <div className='invisible mb-4'></div>

        <Testimonials />

        <ReportDrugReaction />

        <NewsLetterCard />
        <Footer />
      </main>
    </>
  );
}
