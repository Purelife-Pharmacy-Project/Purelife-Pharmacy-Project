import { Footer } from '@/components/home/Footer';
import { HomePageHero } from '@/components/home/HomePageHero';
import { HomePartners } from '@/components/home/HomePartners';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { Categories } from '@/components/home/Categories';
import { Testimonials } from '@/components/home/Testimonials';
import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { NavbarSearch } from '@/components/NavbarSearch';
import HotOffersProduct from '@/components/home/HotOffersProduct';
import BestSellers from '@/components/home/BestSellers';
import PersonalizedPlan from '@/components/home/PersonalizedPlan';
import HandpickedForYou from '@/components/home/HandpickedForYou';
import ExploreTests from '@/components/home/ExploreTests';
import DiscoverTopProducts from '@/components/home/DiscoverTopProducts';
import HealthOfferings from '@/components/home/HealthOfferings';
import { Reviews } from '@/components/home/Reviews';

const data = [
  {
    title: 'Shop our top tests now and enjoy a 20% discount!',
    image: '/images/holding-blood-tube.png',
    cta: 'Shop all test',
    ctaLink: '/telehealth/book-lab-test',
  },
  {
    title: 'Explore popular vaccines and get 20% off your order!',
    image: '/images/getting-injection.png',
    cta: 'Shop all vaccines',
    ctaLink: '/telehealth/get-vaccination',
  },
  {
    title: 'Book an instant consultation with a doctor',
    image: '/images/doctor-consulting.png',
    cta: 'Book Session',
    ctaLink: '/telehealth/find-a-doctor',
  },
  {
    title: 'For healthier skin and beauty, speak to our cosmetologist.',
    image: '/images/skin-care.png',
    cta: 'Book Session',
    ctaLink: '/telehealth/find-a-doctor',
  },
  {
    title: 'Subscribe for a drug refill for your prescriptions',
    image: '/images/doctor-prescribing.png',
    cta: 'Subscribe Now',
    ctaLink: '',
  },
  {
    title: 'Want to improve your health? Talk to our pharmacist.',
    image: '/images/smiling-nurse.png',
    cta: 'Book Session',
    ctaLink: '/telehealth/find-a-doctor',
  },
];

export default async function Home() {
  return (
    <>
      <main className='grid gap-6 lg:gap-10'>
        <div className='relative mx-6 lg:hidden'>
          <NavbarSearch show={true}/>
        </div>
        <HomePageHero/>

        <HomePartners />

        <div className='invisible mb-4'></div>

        {/* <HotOffersProduct /> */}

        <div className='invisible mb-4'></div>

        <Categories />

        <div className='invisible mb-4'></div>

        <BestSellers />

        <div className='invisible mb-4'></div>

        <HealthOfferings title='See our Health offerings' data={data} />

        <div className='invisible mb-4'></div>

        <DiscoverTopProducts />

        <div className='invisible mb-4'></div>

        <ExploreTests />

        <div className='invisible mb-4'></div>

        <HandpickedForYou />

        <div className='invisible mb-4'></div>

        <PersonalizedPlan />

        <div className='invisible mb-4'></div>

        <Reviews/>

        <ReportDrugReaction />

        <NewsLetterCard />
        <Footer />
      </main>
    </>
  );
}
