import { AppNavbar } from '@/components/Navbar';
import { EarnedClients } from '@/components/home/EarnedClients';
import { Footer } from '@/components/home/Footer';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeTransformation } from '@/components/home/HomeTransformation';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { Section } from '@/components/home/Section';
import { TeleHealthServices } from '@/components/home/TeleHealthServices';
import { earnedClients } from '@/constants';

export default function Telehealth() {
  const transformationData = [
    {
      stat: '2%',
      description: 'Top 2% telehealth service providers in Nigeria.',
    },
    {
      stat: '8k+',
      description: 'Verified and accredited laboratory results.',
    },
    {
      stat: '100k+',
      description: 'Approved healthcare products',
    },
  ];

  return (
    <>
      <AppNavbar background='primaryLight' />
      <main className='grid gap-6'>
        <div className='bg-primaryLight lg:grid lg:justify-center'>
          <Section className='bg-primaryLight'>
            <HomeHero
              title='Health Packages and Medical Care Right in Your Home.'
              description='Explore a range of healthcare products, schedule laboratory tests, book vaccination appointments, and receive high-quality medical services from wherever you are in Nigeria.'
              ctaText='Start here'
              ctaLink='#teleHealthServices'
            />
          </Section>
        </div>

        <HomeTransformation data={transformationData} />

        <div className='invisible mb-8' id='teleHealthServices'></div>

        <TeleHealthServices />

        <EarnedClients
          earnedClients={earnedClients}
          title='We got products over 300+ trusted manufacturers'
        />

        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}
