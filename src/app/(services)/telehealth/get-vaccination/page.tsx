import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { VaccinationProducts } from '@/components/get-vaccination/VaccinationProducts';
import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { BookAVaccineHero } from '@/components/get-vaccination/BookAVaccineHero';
import HealthOfferings from '@/components/home/HealthOfferings';
import BookSession from '@/components/book-lab-test/BookSession';

const data = [
  {
    title: 'See top vaccine to take before your get married',
    image: '/images/default-test.png',
    cta: 'Shop all test',
    ctaLink: '/telehealth/get-vaccination#scroll',
  },
  {
    title: 'Top vaccine to boost your immune system',
    image: '/images/default-test.png',
    cta: 'Shop all test',
    ctaLink: '/telehealth/get-vaccination#scroll',
  },
];

export default function GetVaccinationPage() {
  return (
    <>
      <main className='grid gap-20'>
        <BookAVaccineHero />

        <VaccinationProducts />

        <HealthOfferings title='Enjoy 20% of these Vaccine ' data={data} />

        {/*<HowItWorks data={howItWorksData} variant={'primary'} />*/}

        <BookSession />

        <ReportDrugReaction />

        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}
