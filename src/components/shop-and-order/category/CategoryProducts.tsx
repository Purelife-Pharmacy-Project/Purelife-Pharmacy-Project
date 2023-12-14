import { Section } from '../../home/Section';
import { ProductsFilter } from './partials/ProductsFilter';
import { ProductsList } from './partials/ProductsList';
import { ProductSortDropdown } from './partials/ProductsSortDropdown';

export const CategoryProducts = () => {
  return (
    <div className='grid justify-center lg:pb-10'>
      <Section className='bg-white'>
        <div className='flex w-full justify-end'>
          <div className='flex items-center gap-4'>
            <p className='font-light'>Sort By:</p>
            <ProductSortDropdown />
          </div>
        </div>
        {/* grid container with sidebar that collapses on mobile */}
        <div className='grid grid-flow-col grid-cols-[3fr_9fr] gap-4'>
          {/* sidebar */}
          <ProductsFilter />
          {/* products */}
          <ProductsList />
        </div>
      </Section>
    </div>
  );
};
