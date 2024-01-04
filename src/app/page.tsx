import { EarnedClients } from '@/components/home/EarnedClients';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Footer } from '@/components/home/Footer';
import { HealthServices } from '@/components/home/HealthServices';
import { HomeHero } from '@/components/home/HomeHero';
import { HomePartners } from '@/components/home/HomePartners';
import { HomeShopAndOrder } from '@/components/home/HomeShopAndOrder';
import { HomeTransformation } from '@/components/home/HomeTransformation';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { Testimonials } from '@/components/home/Testimonials';
import { WellnessBlogSection } from '@/components/home/WellnessBlogSection';
import { IconFluidMed } from '@/components/icons/IconFluidMed';
import { IconLabs } from '@/components/icons/IconLabs';
import { IconPill } from '@/components/icons/IconPill';
import { AppNavbar } from '@/components/Navbar';
import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { earnedClients } from '@/constants';
import ProductService from '@/services/products';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['featured-products'],
    queryFn: () =>
      ProductService.getAllProducts({
        active: true,
        pageSize: 3,
        pageIndex: 1,
      }),
  });

  const healthServices = [
    {
      icon: <IconPill size={48} />,
      title: 'Subscribe to a drug refill',
      description:
        'Get your medications delivered to you at your preferred intervals.',
      url: '/drug-refill',
    },
    {
      icon: <IconLabs color='primary' />,
      title: 'Book a lab test',
      description:
        'Choose from our over 500 effective test packages, aimed at providing you with the best health care possible.',
      url: '/book-lab-test',
    },
    {
      icon: <IconFluidMed color='primary' />,
      title: 'Get Vaccination',
      description:
        'Choose from our expertly curated vaccines whenever you want.',
      url: '/get-vaccination',
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

  return (
    <>
      <AppNavbar background={'primaryLight'} />
      <main className='grid gap-6'>
        <HomeHero
          title='Your one-stop shop for wellness and lifestyle.'
          description='Schedule laboratory tests, book vaccination appointments, and receive high-quality medical services from the convenience of wherever you are in Nigeria.'
          ctaText='Start here'
          ctaLink='#'
        />

        <HomePartners />

        <HomeTransformation data={transformationData} />

        <HealthServices />

        <HydrationBoundary state={dehydrate(queryClient)}>
          <HomeShopAndOrder />
          <FeaturedProducts />
        </HydrationBoundary>

        <Testimonials />

        <EarnedClients
          earnedClients={earnedClients}
          title='We have earned the trust of 300+ Clients'
        />

        <WellnessBlogSection />

        <ReportDrugReaction />

        <NewsLetterCard />
        <Footer />
      </main>
    </>
  );
}
