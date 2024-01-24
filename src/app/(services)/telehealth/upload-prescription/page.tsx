import { AppNavbar } from '@/components/Navbar';
import { IconPill } from '@/components/icons/IconPill';
import { IconDrugPrescription } from '@/components/icons/IconDrugPrescription';
import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { HomeHero } from '@/components/home/HomeHero';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { DrugSubscriptionTabs } from '@/components/upload-prescription/DrugSubscriptionTabs';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { Footer } from '@/components/home/Footer';

export default function UploadPrescriptionPage() {
  const howItWorksData: {
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      description:
        'Browse for your preferred test packages and easily schedule a home sample collection.',
      icon: <IconPill size={48} color='success' />,
    },
    {
      description:
        'Receive one of our certified health professionals at your preferred location for a test sample collection.',
      icon: <IconDrugPrescription size={60} color='success' />,
    },
    {
      description:
        'Get notified by mail of your reports, which is also available within your account on the Purelife app.',
      icon: <IconAddNotification size={60} color='success' />,
    },
  ];
  return (
    <>
      <AppNavbar background='primaryLight' />
      <main className='grid gap-6'>
        <HomeHero
          title="Get us Your Doctor's Prescription, and Get an On-time Refill"
          description='We deliver your medications to you at your preferred intervals.'
          ctaText='Start Here'
          ctaLink='#'
        />

        <HowItWorks data={howItWorksData} />

        <DrugSubscriptionTabs />

        <NewsLetterCard />
        <Footer />
      </main>
    </>
  );
}
