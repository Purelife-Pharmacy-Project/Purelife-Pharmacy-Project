'use client';
import { ProductSearch } from '@/components/shop-and-order/category/partials/ProductSearch';
import { useGetProductsByCategory } from '@/hooks';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Section } from '../../home/Section';
import { ProductsFilterContainer } from './partials/ProductsFilterContainer';
import { ProductsList } from './partials/ProductsList';
import { ProductSortDropdown } from './partials/ProductsSortDropdown';

export const CategoryProducts = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const category = currentPath.split('/')[2].split('-');
  const noId = category.length === 1;
  const categoryId = category.pop() || '1';
  const searchParams = useSearchParams();

  const searchString = searchParams.get('searchString') || '';
  const manufacturerId = searchParams.get('manufacturer') || '';

  // check if categoryId is undefined
  if (noId) {
    router.push('/shop-and-order');
  }

  const { refetch: refetchProducts } = useGetProductsByCategory(
    categoryId as string,
    searchString,
    10,
    0,
    true,
    undefined,
    manufacturerId as string
  );

  return (
    <div className='grid justify-center lg:pb-10'>
      <Section className='grid gap-6 bg-white'>
        <div className='grid w-full grid-flow-col grid-cols-2 items-center justify-between gap-4'>
          <ProductSearch
            searchString={searchString}
            onRefetch={refetchProducts}
          />
          <div className='flex w-full items-center justify-end gap-4'>
            <p className='font-light'>Sort By:</p>
            <ProductSortDropdown />
          </div>
        </div>
        <div className='grid grid-flow-col grid-cols-[3fr_9fr] gap-4'>
          {/* sidebar */}
          <ProductsFilterContainer
            categoryId={categoryId}
            searchString={searchString}
            manufacturerId={manufacturerId}
          />
          {/* products */}
          <ProductsList
            categoryId={categoryId}
            searchString={searchString}
            manufacturerId={manufacturerId}
          />
        </div>
      </Section>
    </div>
  );
};
