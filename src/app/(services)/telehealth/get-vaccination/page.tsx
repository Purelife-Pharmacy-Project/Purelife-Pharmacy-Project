import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { VaccinationProducts } from '@/components/get-vaccination/VaccinationProducts';
import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { BookAVaccineHero } from '@/components/get-vaccination/BookAVaccineHero';
import HealthOfferings from '@/components/home/HealthOfferings';
import BookSession from '@/components/book-lab-test/BookSession';

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

export default function GetVaccinationPage() {
  return (
    <>
      <main className='grid gap-10'>
        <BookAVaccineHero />

        <VaccinationProducts />

        <HealthOfferings title='Enjoy 20% of these Vaccine ' data={data} />

        {/*<HowItWorks data={howItWorksData} variant={'primary'} />*/}

        {/* <BookSession /> */}

        <ReportDrugReaction />

        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}
