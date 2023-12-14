import { AppNavbar } from '@/components/Navbar';
import { CategoryHero } from '@/components/shop-and-order/category/CategoryHero';
import { CategoryProducts } from '@/components/shop-and-order/category/CategoryProducts';

export default function CategoryPage() {
  return (
    <>
      <AppNavbar background={'white'} />
      <main className='grid gap-6'>
        <CategoryHero />
        <CategoryProducts />
      </main>
    </>
  );
}
