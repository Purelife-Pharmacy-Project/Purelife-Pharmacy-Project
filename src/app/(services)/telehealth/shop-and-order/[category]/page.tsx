import { Footer } from '@/components/home/Footer';
import { CategoryHero } from '@/components/shop-and-order/category/CategoryHero';
import { CategoryProducts } from '@/components/shop-and-order/category/CategoryProducts';

export default async function CategoryPage() {
  return (
    <>
      <main className='grid gap-6'>
        <CategoryHero />

        <CategoryProducts />
        <Footer />
      </main>
    </>
  );
}
