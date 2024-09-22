import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { BookATestHero } from '@/components/book-lab-test/BookATestHero';
import { LabTestProducts } from '@/components/book-lab-test/LabTestProducts';
import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import HealthOfferings from '@/components/home/HealthOfferings';
import SummerDeals from '@/components/book-lab-test/SummerDeals';
import BookSession from '@/components/book-lab-test/BookSession';

export default async function BookATest() {
  const data = [
    {
      title: 'See top test to take before you get married',
      image: '/images/default-test.png',
      cta: 'Shop all test',
      ctaLink: '/telehealth/book-lab-test?category=18#scroll',
    },
    {
      title: 'Top Test to Improve Your Sexual Health',
      image: '/images/default-test.png',
      cta: 'Shop all test',
      ctaLink: '/telehealth/book-lab-test?category=21#scroll',
    },
    {
      title: 'Take this test to find out your genotype',
      image: '/images/default-test.png',
      cta: 'Shop all test',
      ctaLink: '/telehealth/book-lab-test?category=18#scroll',
    },
    {
      title: 'Take this test to find out your genotype',
      image: '/images/default-test.png',
      cta: 'Shop all test',
      ctaLink: '/telehealth/book-lab-test?category=18#scroll',
    },
  ];

  return (
    <>
      <main className='grid gap-6 xl:gap-12'>
        <BookATestHero />

        {/*<FrequentLabTests title='Frequently Scheduled Lab Tests' />*/}

        <LabTestProducts />

        <HealthOfferings
          title='See the top test people are taking'
          data={data}
        />

        <div className='invisible mb-4'></div>

        <SummerDeals />

        <div className='invisible mb-4'></div>

        <BookSession />

        <div className='invisible mb-4'></div>

        <ReportDrugReaction />

        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}
