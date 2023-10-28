import { AppNavbar } from '@/components/Navbar';
import { BookATestHero } from '@/components/lib/book-a-test/BookATestHero';
import { HowitWorks } from '@/components/lib/book-a-test/HowItWorks';
import { WhyBookATest } from '@/components/lib/book-a-test/WhyBookATest';
import { FeaturedProducts } from '@/components/lib/home/FeaturedProducts';
import { Footer } from '@/components/lib/home/Footer';
import { NewsLetterCard } from '@/components/lib/home/NewsletterCard';

export default function BookATest() {
  return (
    <>
      <AppNavbar background='white' />

      <main className='grid gap-6'>
        <BookATestHero />

        <WhyBookATest />

        <FeaturedProducts title='Frequently Scheduled Lab Tests' />

        <HowitWorks />

        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}
