import { Footer } from '@/components/home/Footer';
import { CategoryProducts } from '@/components/shop-and-order/category/CategoryProducts';

export default async function ShopPage() {
  return (
    <>
      <main className='grid gap-6'>
        <div className='grid justify-center gap-6 lg:pt-[55px]'>
          <CategoryProducts />

          <Footer />
        </div>
      </main>
    </>
  );
}
