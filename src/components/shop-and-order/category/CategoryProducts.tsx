'use client';
import { usePathname, useRouter } from 'next/navigation';
import { Section } from '../../home/Section';
import { ProductsFilter } from './partials/ProductsFilter';
import { ProductsList } from './partials/ProductsList';
import { ProductSortDropdown } from './partials/ProductsSortDropdown';

export const CategoryProducts = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const category = currentPath.split('/')[2].split('-');
  const noId = category.length === 1;
  const categoryId = category.pop() || '1';

  // check if categoryId is undefined
  if (noId) {
    router.push('/shop-and-order');
  }

  return (
    <div className='grid justify-center lg:pb-10'>
      <Section className='bg-white'>
        <div className='flex w-full justify-end'>
          <div className='flex items-center gap-4'>
            <p className='font-light'>Sort By:</p>
            <ProductSortDropdown />
          </div>
        </div>
        <div className='grid grid-flow-col grid-cols-[3fr_9fr] gap-4'>
          {/* sidebar */}
          <ProductsFilter categoryId={categoryId} />
          {/* products */}
          <ProductsList categoryId={categoryId} />
        </div>
      </Section>
    </div>
  );
};
