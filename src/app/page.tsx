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
import HealthOfferings from '@/components/home/HealthOfferings';
import { Reviews } from '@/components/home/Reviews';
import { GlobalHealthSolutions } from '@/components/home/global-health-solutions';
import { LatestInsights } from '@/components/home/latest-insignts';
import { QualityHomeBanner } from '@/components/quality-home-banner';
import { DiscoverTopProducts } from '@/components/home/DiscoverTopProducts';
import { StepsForServices } from '@/components/home/steps-for-services';
import { Section } from '@/components/home/Section';

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

const reviews = [
  {
    title: 'Reliable and Comprehensive Service',
    description:
      "Purelife Pharmacy is the best. It's your go-to for all health needs, with top-notch service. No matter how rare your medication, they've got you covered. I recommend them anytime..",
    noOfStars: 5,
    name: 'Aisosa Urhoghide',
  },
  {
    title: "Excellent Customer Care",
    description:
      "Purelife Pharmacy has great customer service. They always greet me whenever I visit the shop, and I also receive phone calls and text messages after getting my medication.",
    noOfStars: 5,
    name: "Abigeal Remilekun",
  },
  {
    title: "Family-Friendly and Caring Staff",
    description:
      "I love this pharmacy. I went there for my toddler's meds, and when they started throwing up, the staff were super helpful. Their prices were fair, and they didn’t push the most expensive products on me right away. I’m definitely a fan!",
    noOfStars: 4,
    name: "Mmeme Amune",
  },
  {
    title: "Organized and Customer-Centric Pharmacy",
    description:
      "Nice, organized, clean, and smart pharmacy that deals with a variety of pharmaceutical products, beverages, and outstanding cosmetics. Customer satisfaction is their priority goal. You can make your choice in person or through ordering and delivery",
    noOfStars: 5,
    name: "Emmanuel Ohaeri",
  },
  {
    title: "Friendly and Knowledgeable Team",
    description:
      "Great friendly service, smiling faces, and knowledgeable staff. A much better customer experience.",
    noOfStars: 5,
    name: "Ogedengbe Patience",
  },
  {
    title: "Unmatched Customer Experience",
    description:
      "There is no place like Purelife Pharmacy; the experience here is overwhelming, and customer service is simply unparalleled.",
    noOfStars: 5,
    name: "Osang Caleb",
  },
  {
    title: "Welcoming Atmosphere and Great Variety",
    description:
      "Great ambiance, spacious. The highlight for me is the hospitality and excellence of the members of the staff. Overall, it's a good store with a good variety.",
    noOfStars: 5,
    name: "Seunfunmi Omale",
  },
];

export default async function Home() {

  return (
    <>
      <main className='grid gap-6 lg:gap-10'>
        <HomePageHero />

        <HomePartners />

        {/* <div className='invisible mb-8'></div> */}

        {/* <Categories /> */}

        <div className='invisible mb-2'></div>

        <DiscoverTopProducts />

        <div className='invisible mb-4'></div>
        <Section className='mb-3 text-[20px] md:text-[26px] lg:text-[32px] font-semibold text-[#1E272F]'>Find Your Perfect Health and Wellness Solution</Section> 
        <Section className='grid lg:grid-cols-[1fr_1fr] grid-cols-1 lg:gap-5 gap-10 w-full'>
          <HotOffersProduct />
          <BestSellers/>
        </Section>

        

        {/* <HealthOfferings title='See our Health offerings' data={data} /> */}

        {/* <HandpickedForYou /> */}

        {/* <PersonalizedPlan /> */}
        <div className='invisible mb-4'></div> 
        <Section><ExploreTests /></Section>
        <div className='invisible mb-4'></div> 

        <StepsForServices/>

        <div className='invisible mb-4'></div> 

        <QualityHomeBanner
          backgroundClassName={'bg-white'}
          buttonClassName={'bg-[#1E272F] text-white'}
          theme='light'
        />

        <Reviews
          title='See Why People Love PureLife and Our Exceptional Care'
          reviews={reviews}
        />

        <GlobalHealthSolutions />

        <LatestInsights />
        <div className='invisible mb-6'></div> 
        <ReportDrugReaction />
        <div className='invisible mb-4'></div> 
        <NewsLetterCard />
        <Footer />
      </main>
    </>
  );
}
