import { AppNavbar } from '@/components/Navbar';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { DrugRefillHero } from '@/components/drug-refill/DrugRefillHero';
import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { IconBrowse } from '@/components/icons/IconBrowse';
import { IconHealthShield } from '@/components/icons/IconHealthShield';
import { CategoryService } from '@/services/categories';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function DrugRefill() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['categories'],
    queryFn: () => CategoryService.getAllCategories({}),
  });

  const howItWorksData: {
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      description:
        'Choose from our pool of curated drug subscription packages.',
      icon: <IconBrowse size={48} color='success' />,
    },
    {
      description:
        'Submit your drug prescriptions either as a doctor for your patients, or as a patient yourself.',
      icon: <IconHealthShield size={60} color='success' />,
    },
    {
      description:
        'Get notified of the details of your drug subscriptions via mail or within the Pure life app.',
      icon: <IconAddNotification size={60} color='success' />,
    },
  ];

  return (
    <>
      <AppNavbar background={'primaryLight'} />
      <main className='grid gap-6'>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <DrugRefillHero />
        </HydrationBoundary>

        <div className='mt-0 md:mt-[700px] lg:mt-[652px]'>
          <HowItWorks data={howItWorksData} variant={'success'} />
        </div>

        <NewsLetterCard />
        <Footer />
      </main>
    </>
  );
}
