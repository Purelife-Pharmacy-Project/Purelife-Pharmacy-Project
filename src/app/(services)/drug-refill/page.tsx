import { AppNavbar } from '@/components/Navbar';
import { IconBrowse } from '@/components/icons/IconBrowse';
import { IconHealthShield } from '@/components/icons/IconHealthShield';
import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { DrugRefillHero } from '@/components/drug-refill/DrugRefillHero';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { Footer } from '@/components/home/Footer';

export default function DrugRefill() {
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
      <AppNavbar background='primaryLight' />
      <main className='grid gap-6'>
        <DrugRefillHero />

        <div className='mt-[900px] md:mt-[700px] lg:mt-[652px]'>
          <HowItWorks data={howItWorksData} variant={'success'} />
        </div>

        <NewsLetterCard />
        <Footer />
      </main>
    </>
  );
}
