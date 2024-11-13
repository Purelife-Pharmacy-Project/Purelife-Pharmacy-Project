import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { BookATestHero } from '@/components/book-lab-test/BookATestHero';
import { LabTestProducts } from '@/components/book-lab-test/LabTestProducts';
import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import HealthOfferings from '@/components/home/HealthOfferings';
import SummerDeals from '@/components/book-lab-test/SummerDeals';
import BookSession from '@/components/book-lab-test/BookSession';
import { Reviews } from '@/components/home/Reviews';
import { QualityHomeBanner } from '@/components/quality-home-banner';
import HealthOfferingsVaccine from '@/components/home/TopTest';
import TopTest from '@/components/home/TopTest';

export default async function BookATest() {
  const data = [
    {
      title: 'See top test to take before you get married',
      image: '/images/lab-test-1.png',
      cta: 'Shop Now',
      ctaLink: '/telehealth/book-lab-test?category=18#scroll',
    },
    {
      title: 'See top test to improve your sexual health',
      tag: 'Sexual Health',
      image: '/images/lab-test-2.png',
      cta: 'Shop Now',
      ctaLink: '/telehealth/book-lab-test?category=21#scroll',
    },
    {
      title: 'Take this test to find out your genotype',
      tag: 'Genotype',
      image: '/images/lab-test-3.png',
      cta: 'Shop Now',
      ctaLink: '/telehealth/book-lab-test?category=18#scroll',
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

  return (
    <>
      <main className='grid gap-6 xl:gap-12'>
        <BookATestHero />

        <LabTestProducts />

        <TopTest
          title='See the top test people are taking'
          data={data}
        />

        <div className='invisible mb-4'></div>

        <SummerDeals />

        <QualityHomeBanner
          theme='dark'
        />

        <Reviews title={'Hear What Our Patients Are Saying About Our Exceptional Doctors'} reviews={reviews}/>

        <ReportDrugReaction />

        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}
