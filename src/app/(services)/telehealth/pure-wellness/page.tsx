import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { FeatureCard } from '@/components/book-emergency/FeatureCard';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { Footer } from '@/components/home/Footer';
import { HomeHero } from '@/components/home/HomeHero';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { IconBrowse } from '@/components/icons/IconBrowse';
import { IconHealthShield } from '@/components/icons/IconHealthShield';

export default function PureWellnessPage() {
  const howItWorksData: {
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      description:
        'Complete a lifestyle assessment to define your goals and challenges.',
      icon: <IconBrowse size={48} color='primary' />,
    },
    {
      description:
        "We'll create a personalized plan based on your unique needs and preferences.",
      icon: <IconHealthShield size={60} color='primary' />,
    },
    {
      description:
        'Follow your plan with support and adjustments along the way for optimal results.',
      icon: <IconAddNotification size={60} color='primary' />,
    },
  ];

  const featuresData: FeatureCard[] = [
    {
      title: 'Get a personalized meal plan just for you',
      description:
        'Eat better, live better. Our personalized meal plans are designed just for you, making healthy eating easy and enjoyable.',
      ctaText: 'Launching soon',
      ctaLink: '#',
      icon: '/images/meal-plan.jpg',
      direction: 'left',
    },
    {
      title:
        'Get health insurance and enjoy discounts on all your health needs.',
      description:
        'Stay healthy without breaking the bank. Our health insurance offers discounts on all your medical needs.',
      ctaText: 'Launching soon',
      ctaLink: '#',
      icon: '/images/blood-pressure.jpg',
      direction: 'right',
    },
    {
      title: 'Subscribe to our fitness plan to improve your well-being.',
      description:
        'Elevate your health journey with our tailored fitness plan. Join today and experience the transformation towards a healthier, happier you.',
      ctaText: 'Launching soon',
      ctaLink: '#',
      icon: '/images/workout.jpg',
      direction: 'left',
    },
  ];

  return (
    <>
      <main className='grid gap-6'>
        <HomeHero
          title='Get a personalized 
                    wellness plan for 
                    your lifestyle.'
          description='Tailored solutions for your unique needs. Achieve balance and vitality with a wellness plan designed just for you.'
          ctaText='Start Here'
          ctaLink='#'
        />

        <HowItWorks data={howItWorksData} variant={'primary'} />

        <div className='mb-10 grid md:gap-20'>
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
