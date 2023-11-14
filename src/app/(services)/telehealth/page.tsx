import { AppNavbar } from '@/components/Navbar';
import { EarnedClients } from '@/components/home/EarnedClients';
import { Footer } from '@/components/home/Footer';
import { HealthServices } from '@/components/home/HealthServices';
import { HomeHero } from '@/components/home/HomeHero';
import { Hometransformation } from '@/components/home/HomeTranformation';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { Section } from '@/components/home/Section';
import { IconDoctor } from '@/library/icons/IconDoctor';
import { IconFluidMed } from '@/library/icons/IconFluidMed';
import { IconLabs } from '@/library/icons/IconLabs';
import { IconPill } from '@/library/icons/IconPill';
import { IconPrescription } from '@/library/icons/IconPrescription';

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

  const healthServicesFull = [
    {
      icon: <IconPill size={48} />,
      title: 'Subscribe to a drug refill',
      description:
        'Get your medications delivered to you at your preferred intervals.',
      url: '/drug-refill',
    },
    {
      icon: <IconLabs color='primary' />,
      title: 'Book a lab test',
      description:
        'Choose from our over 500 effective test packages, aimed at providing you with the best health care possible.',
      url: '/book-lab-test',
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
        <div className='grid justify-center bg-primaryLight'>
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
            <HealthServices steps={healthServicesFull} />
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
