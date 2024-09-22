import { CategoryService } from '@/services/categories';
import { QueryClient } from '@tanstack/react-query';
import ShopPage from '@/app/(services)/shop/page';

export default async function ShopAndOrder() {
  // Prefetch categories
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['categories'],
    queryFn: () =>
      CategoryService.getAllCategories({
        pageSize: 50,
      }),
  });

  const earnedClients = [
    {
      name: 'Relumins',
      image: '/images/manufacturers/relumins.png',
    },
    {
      name: 'Zaron',
      image: '/images/manufacturers/zaron.png',
    },
    {
      name: 'Natures Field',
      image: '/images/manufacturers/natures-field.png',
    },
    {
      name: 'Unilever',
      image: '/images/manufacturers/unilever.png',
    },
    {
      name: 'SSA Supplements',
      image: '/images/manufacturers/ssa-supplements.png',
    },
  ];
  return (
    <>
      {/*<main className='grid gap-6'>*/}
      {/*  /!* <div className='grid justify-center bg-primaryLight'>*/}
      {/*    <Section className='bg-primaryLight'>*/}
      {/*      <HomeHero*/}
      {/*        title='Your Wellness is Only a Shopping Order Away'*/}
      {/*        description='Discover our one-stop shop for your health, supermarket, beauty and skin essentials, and enjoy hassle-free ordering.'*/}
      {/*        ctaText='Start here'*/}
      {/*        ctaLink='#'*/}
      {/*      />*/}
      {/*    </Section>*/}
      {/*  </div> *!/*/}

      {/*  <div className='grid justify-center lg:pt-[55px]'>*/}
      {/*    <Section>*/}
      {/*      <HydrationBoundary state={dehydrate(queryClient)}>*/}
      {/*        <ShopCategory />*/}
      {/*      </HydrationBoundary>*/}
      {/*    </Section>*/}
      {/*  </div>*/}

      {/*  <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>*/}
      {/*    <Section className='bg-white'>*/}
      {/*      <EarnedClients*/}
      {/*        earnedClients={earnedClients}*/}
      {/*        title='We got products over 300+ trusted manufacturers'*/}
      {/*      />*/}
      {/*    </Section>*/}
      {/*  </div>*/}

      {/*  <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>*/}
      {/*    <Section className='bg-white'>*/}
      {/*      <TeleHealthServices />*/}
      {/*    </Section>*/}
      {/*  </div>*/}

      {/*  <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>*/}
      {/*    <Section className='bg-white'>*/}
      {/*      <NewsLetterCard />*/}
      {/*    </Section>*/}
      {/*  </div>*/}
      {/*  <div className='flex justify-start md:grid md:justify-center lg:pb-10 lg:pt-[55px]'>*/}
      {/*    <Section className='bg-white'>*/}
      {/*      <Footer />*/}
      {/*    </Section>*/}
      {/*  </div>*/}
      {/*</main>*/}
      <ShopPage />
    </>
  );
}
