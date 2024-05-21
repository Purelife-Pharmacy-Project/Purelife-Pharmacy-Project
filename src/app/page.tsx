import { EarnedClients } from '@/components/home/EarnedClients';
import { HomeFaq } from '@/components/home/Faq';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Footer } from '@/components/home/Footer';
import { HomePageHero } from '@/components/home/HomePageHero';
import { HomePartners } from '@/components/home/HomePartners';
import { HomeShopAndOrder } from '@/components/home/HomeShopAndOrder';
import { HomeTransformation } from '@/components/home/HomeTransformation';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { TeleHealthServices } from '@/components/home/TeleHealthServices';
import { Testimonials } from '@/components/home/Testimonials';
import { WellnessBlogSection } from '@/components/home/WellnessBlogSection';
import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { earnedClients } from '@/constants';

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
      <main className='grid gap-6'>
        <HomePageHero
          title='Your one-stop for wellness and lifestyle.'
          description='Schedule laboratory tests, book vaccination appointments, and receive high-quality medical services from the convenience of wherever you are in Nigeria.'
          ctaText='Shop All'
          ctaLink='/shop'
        />

        <HomePartners />

        <HomeTransformation data={transformationData} />

        <div className='invisible mb-8' id='teleHealthServices'></div>

        <TeleHealthServices />

        {/*<HydrationBoundary state={dehydrate(queryClient)}>*/}
        <HomeShopAndOrder />
        <FeaturedProducts />
        {/*</HydrationBoundary>*/}

        <Testimonials />

        <EarnedClients
          earnedClients={earnedClients}
          title='We have earned the trust of 300+ Clients'
        />

        <WellnessBlogSection />

        <HomeFaq />

        <ReportDrugReaction />

        <NewsLetterCard />
        <Footer />
      </main>
    </>
  );
}
