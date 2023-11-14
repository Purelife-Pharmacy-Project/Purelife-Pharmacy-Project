import { AppNavbar } from '@/components/Navbar';
import { CategoryHero } from '@/components/category/CategoryHero';
import { CategoryProducts } from '@/components/category/CategoryProducts';

export default function CategoryPage() {
  return (
    <>
      <AppNavbar background='white' />
      <main className='grid gap-6'>
        <CategoryHero />
        <CategoryProducts />
      </main>
    </>
  );
}
