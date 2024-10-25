import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { VaccinationProducts } from '@/components/get-vaccination/VaccinationProducts';
import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { BookAVaccineHero } from '@/components/get-vaccination/BookAVaccineHero';
import HealthOfferings from '@/components/home/HealthOfferings';
import { Reviews } from '@/components/home/Reviews';

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
    title: 'This Care Truly Made a Difference',
    description:
      'When I had a consultation with Dr. Smith, I felt like I was in the hands of someone who truly cared. He took the time to explain everything, making me feel comfortable and understood. The whole team was attentive, and it made all the difference in my recovery.',
    noOfStars: 5,
    name: 'Mrs Adebayo Gregson',
  },
  {
    title: 'I did not like how this went',
    description:
      'When I had a consultation with Dr. Smith, I felt like I was in the hands of someone who truly cared. He took the time to explain everything, making me feel comfortable and understood. The whole team was attentive, and it made all the difference in my recovery.',
    noOfStars: 3,
    name: 'Mrs Adebayo Gregson',
  },
  {
    title: 'This Care Truly Made a Difference',
    description:
      'When I had a consultation with Dr. Smith, I felt like I was in the hands of someone who truly cared. He took the time to explain everything, making me feel comfortable and understood. The whole team was attentive, and it made all the difference in my recovery.',
    noOfStars: 2,
    name: 'Mrs Adebayo Gregson',
  },
  {
    title: 'This Care Truly Made a Difference',
    description:
      'When I had a consultation with Dr. Smith, I felt like I was in the hands of someone who truly cared. He took the time to explain everything, making me feel comfortable and understood. The whole team was attentive, and it made all the difference in my recovery.',
    noOfStars: 5,
    name: 'Mrs Adebayo Gregson',
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

        <Reviews reviews={reviews} title='Hear What Our Patients Are Saying About Our Exceptional Doctors'/>
        
        <ReportDrugReaction />

        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}
