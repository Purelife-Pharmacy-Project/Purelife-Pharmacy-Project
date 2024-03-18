import { AppNavbar } from '@/components/Navbar';
import { Footer } from '@/components/home/Footer';
import { CategoryProducts } from '@/components/shop-and-order/category/CategoryProducts';
import { CategoryService } from '@/services/categories';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

export default async function ShopPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['categories'],
    queryFn: () =>
      CategoryService.getAllCategories({
        pageSize: 50,
      }),
  });
  return (
    <>
      <AppNavbar background={'primaryLight'} />
      <main className='grid gap-6'>
        <div className='grid justify-center gap-6 lg:pt-[55px]'>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <CategoryProducts />
          </HydrationBoundary>

          <Footer />
        </div>
      </main>
    </>
  );
}
