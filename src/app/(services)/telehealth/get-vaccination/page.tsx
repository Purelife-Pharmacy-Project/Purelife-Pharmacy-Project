import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { VaccinationProducts } from '@/components/get-vaccination/VaccinationProducts';
import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { BookAVaccineHero } from '@/components/get-vaccination/BookAVaccineHero';
import HealthOfferings from '@/components/home/HealthOfferings';
import { Reviews } from '@/components/home/Reviews';
import HealthOfferingsVaccine from '@/components/home/HealthOfferingsVaccine';

const data = [
  {
    title: 'Your Medications, Delivered Exclusively Online.',
    image: '/images/vaccines/deliveryMan.png',
    cta: 'Shop Now',
    ctaLink: '/telehealth/get-vaccination#scroll',
  },
  {
    title: 'See top vaccine to take before marriage',
    image: '/images/vaccines/vaccine1.png',
    cta: 'Shop Now',
    ctaLink: '/telehealth/get-vaccination#scroll',
  },
  {
    title: 'Top vaccine to boost your immune system',
    image: '/images/vaccines/vaccine2.png',
    cta: 'Shop Now',
    ctaLink: '/telehealth/get-vaccination#scroll',
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
      "I love this pharmacy. I went there for my toddler's meds, and when they started throwing up, the staff were super helpful. Their prices were fair, and they didn’t push the most expensive products on me right away. I'm definitely a fan!",
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
export default function GetVaccinationPage() {
  return (
    <>
      <main className='grid gap-10'>
        <BookAVaccineHero />

        <VaccinationProducts />

        <HealthOfferingsVaccine title='Enjoy 20% of these Vaccine ' data={data} />

        {/*<HowItWorks data={howItWorksData} variant={'primary'} />*/}

        <Reviews reviews={reviews} title='Hear What Our Patients Are Saying About Our Exceptional Doctors'/>
        
        <ReportDrugReaction />

        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}
