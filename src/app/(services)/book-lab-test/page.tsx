import { AppNavbar } from '@/components/Navbar';
import { BookATestHero } from '@/components/book-a-test/BookATestHero';
import { HowitWorks } from '@/components/book-a-test/HowItWorks';
import { WhyBookATest } from '@/components/book-a-test/WhyBookATest';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { IconAddNotification } from '@/library/icons/IconAddNotification';
import { IconBrowse } from '@/library/icons/IconBrowse';
import { IconHealthShield } from '@/library/icons/IconHealthShield';

export default function BookATest() {
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
  return (
    <>
      <AppNavbar background='white' />

      <main className='grid gap-6'>
        <BookATestHero />

        <WhyBookATest />

        <FeaturedProducts title='Frequently Scheduled Lab Tests' />

        <HowitWorks data={howItWorksData} />

        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}
