import { AppNavbar } from '@/components/Navbar';
import { IconDoctor } from '@/components/icons/IconDoctor';
import { IconFluidMed } from '@/components/icons/IconFluidMed';
import { IconLabs } from '@/components/icons/IconLabs';
import { IconPill } from '@/components/icons/IconPill';
import { IconPrescription } from '@/components/icons/IconPrescription';
import { EarnedClients } from '@/components/lib/home/EarnedClients';
import { Footer } from '@/components/lib/home/Footer';
import { HealthSteps } from '@/components/lib/home/HealthSteps';
import { HomeHero } from '@/components/lib/home/HomeHero';
import { Hometransformation } from '@/components/lib/home/HomeTranformation';
import { NewsLetterCard } from '@/components/lib/home/NewsletterCard';
import { Section } from '@/components/lib/home/Section';

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

  const earnedClients = [
    {
      name: 'IFitness',
      image: '/images/clients/iFitness.png',
    },
    {
      name: 'Buy Asap',
      image: '/images/clients/buyAsap.png',
    },
    {
      name: 'Nike',
      image: '/images/clients/nike.png',
    },
    {
      name: 'Gallant Biz',
      image: '/images/clients/gallantBiz.png',
    },
    {
      name: 'Laroche',
      image: '/images/clients/laroche.png',
    },
  ];

  const teleHealthServiceSteps = [
    {
      icon: <IconPill size={48} />,
      title: 'Subscribe to a drug refill',
      description:
        'Get your medications delivered to you at your preferred intervals.',
      url: '#',
    },
    {
      icon: <IconLabs size={48} color='primary' />,
      title: 'Book a lab test',
      description:
        'Choose from our over 500 effective test packages, aimed at providing you with the best health care possible.',
      url: '#',
    },
    {
      icon: <IconFluidMed />,
      title: 'Get Vaccination',
      description:
        'Choose from our expertly curated vaccines whenever you want.',
      url: '#',
    },
    {
      icon: <IconDoctor size={48} color='primary' />,
      title: 'Consult with a doctor',
      description:
        'Choose from our over 500 effective test packages, aimed at providing you with the best health care possible.',
      url: '#',
    },
    {
      icon: <IconPrescription size={48} color='primary' />,
      title: 'Upload Prescription',
      description:
        'Choose from our over 500 effective test packages, aimed at providing you with the best health care possible.',
      url: '#',
    },
  ];
  return (
    <>
      <AppNavbar background='primaryLight' />

      <main className='grid gap-6'>
        <div className='grid justify-center bg-primaryLight lg:pt-[55px]'>
          <Section className='bg-primaryLight'>
            <HomeHero
              title='Your the one-stop shop for wellness and lifestyle.'
              description='Schedule laboratory tests, book vaccination appointments, and receive high-quality medical services from the convenience of wherever you are in Nigeria.'
              ctaText='Start here'
              ctaLink='#'
            />
          </Section>
        </div>

        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <Hometransformation data={transformationData} />
          </Section>
        </div>

        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <HealthSteps steps={teleHealthServiceSteps} />
          </Section>
        </div>

        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <EarnedClients
              title='We got products over 300+ trusted manufacturers'
              clients={earnedClients}
            />
          </Section>
        </div>

        <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <NewsLetterCard />
          </Section>
        </div>
        <div className='flex justify-start md:grid md:justify-center lg:pb-10 lg:pt-[55px]'>
          <Section className='bg-white'>
            <Footer />
          </Section>
        </div>
      </main>
    </>
  );
}
