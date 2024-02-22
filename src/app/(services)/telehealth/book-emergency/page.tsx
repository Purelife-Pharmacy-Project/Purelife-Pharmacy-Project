import { AppNavbar } from '@/components/Navbar';
import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { FeatureCard } from '@/components/book-emergency/FeatureCard';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { Footer } from '@/components/home/Footer';
import { HomeHero } from '@/components/home/HomeHero';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { IconBrowse } from '@/components/icons/IconBrowse';
import { IconHealthShield } from '@/components/icons/IconHealthShield';

export default function BookEmergencyPage() {
  const howItWorksData: {
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      description:
        'Reach out to our emergency hotline or visit our pharmacy in person to notify us of your situation.',
      icon: <IconBrowse size={48} color='primary' />,
    },
    {
      description:
        'Our trained team springs into action immediately, providing expert assistance tailored to your emergency needs.',
      icon: <IconHealthShield size={60} color='primary' />,
    },
    {
      description:
        "Get speedy care for wound cleaning, first aid, or advanced medical needs. We're here for you, putting your safety first.",
      icon: <IconAddNotification size={60} color='primary' />,
    },
  ];

  const featuresData: FeatureCard[] = [
    {
      title: 'Wound cleaning available at our pharmacy.',
      description:
        "Need wound care? Swing by our pharmacy. Our team will make sure it's cleaned right, so you can heal up quickly.",
      ctaText: 'Launching soon',
      ctaLink: '#',
      icon: '/images/patch-up.jpg',
      direction: 'left',
    },
    {
      title: 'Get an ambulance for any emergency.',
      description:
        "Immediate help when you need it most. Don't hesitate to call for an ambulance in any emergency situation.",
      ctaText: 'Launching soon',
      ctaLink: '#',
      icon: '/images/ambulance.jpg',
      direction: 'right',
    },
  ];
  return (
    <>
      <AppNavbar background='primaryLight' />

      <main className='grid gap-6'>
        <HomeHero
          title='Emergency Care 
          at Your Fingertips'
          description="We're here to act fast when you need it most. From small accidents to big emergencies, we've got your back. Your safety is our priority."
          ctaText='Start here'
          ctaLink='#teleHealthServices'
        />

        <HowItWorks data={howItWorksData} variant={'primary'} />

        <div className='mb-10 grid gap-14'>
          {featuresData.map((data, i) => (
            <FeatureCard key={i} data={data} />
          ))}
        </div>

        <ReportDrugReaction />
        <NewsLetterCard />
        <Footer />
      </main>
    </>
  );
}
