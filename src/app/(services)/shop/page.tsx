import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { QualityHomeBanner } from '@/components/quality-home-banner';
import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { CategoryProducts } from '@/components/shop-and-order/category/CategoryProducts';

export default async function ShopPage() {
  return (
    <>
      <div className='flex flex-col justify-center gap-10'>
        <CategoryProducts />
        <QualityHomeBanner backgroundClassName={'bg-white'}
          buttonClassName={'bg-[#1E272F] text-white'}
          theme='light' />
        <div className='mb-1'></div>
        <ReportDrugReaction />
        <NewsLetterCard/>
        <Footer />
      </div>
    </>
  );
}
