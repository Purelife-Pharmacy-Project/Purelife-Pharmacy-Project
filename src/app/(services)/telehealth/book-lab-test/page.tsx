import { AppNavbar } from '@/components/Navbar';
import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { BookATestHero } from '@/components/book-lab-test/BookATestHero';
import { FrequentLabTests } from '@/components/book-lab-test/FrequentLabTests';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { LabTestProducts } from '@/components/book-lab-test/LabTestProducts';
import { WhyBookATest } from '@/components/book-lab-test/WhyBookATest';
import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { IconBrowse } from '@/components/icons/IconBrowse';
import { IconHealthShield } from '@/components/icons/IconHealthShield';
import { LabTestService } from '@/services/lab-tests';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

export default async function BookATest() {
  const howItWorksData: {
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      description:
        'Browse for your preferred test packages and easily schedule a home sample collection.',
      icon: <IconBrowse size={48} color='success' />,
    },
    {
      description:
        'Receive one of our certified health professionals at your preferred location for a test sample collection.',
      icon: <IconHealthShield size={60} color='success' />,
    },
    {
      description:
        'Get notified by mail of your reports, which is also available within your account on the Purelife app.',
      icon: <IconAddNotification size={60} color='success' />,
    },
  ];

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['lab-tests'],
    queryFn: () =>
      LabTestService.getLabTests({
        pageSize: 3,
      }),
  });

  return (
    <>
      <AppNavbar background='white' />
      <main className='grid gap-6'>
        <BookATestHero />

        <WhyBookATest />

        <HydrationBoundary state={dehydrate(queryClient)}>
          <FrequentLabTests title='Frequently Scheduled Lab Tests' />
        </HydrationBoundary>

        <LabTestProducts />

        <HowItWorks data={howItWorksData} />

        <ReportDrugReaction />

        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}