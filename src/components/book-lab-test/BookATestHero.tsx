'use client';
import { useCartStore, useGetProducts } from '@/hooks';
import { Product } from '@/services/products/types';
import debounce from 'lodash/debounce';
import { FC, useCallback, useRef, useState } from 'react';
import { Section } from '../home/Section';

type BookATestHeroProps = {};

export const BookATestHero: FC<BookATestHeroProps> = ({}) => {
  const [searchStr, setSearchStr] = useState<string | undefined>('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  const [showSearchResults, setShowSearchResults] = useState(false);
  const { addToCart } = useCartStore();

  const handleDebouncedSearch = debounce((value: string) => {
    setSearchStr(value);
  }, 800);

  const handleProductClick = (product: Product) => {
    if (searchResultsRef.current) {
      searchResultsRef.current.style.display = 'none';
    }

    addToCart({
      id: product.id,
      product,
      quantity: 1,
    });
  };

  const {
    loadingProducts: loadingLabTests,
    products: labTests,
    refetch: refetchLabTests,
  } = useGetProducts({
    limit: 12,
    offset: 1,
    categoryId: '17',
  });

  const filteredTests = labTests?.filter(
    (test) => test.name?.toLowerCase().includes(searchStr?.toLowerCase() || '')
  );

  // useEffect(() => {
  //   if (filteredTests && filteredTests?.length === 0) {
  //     // refetchLabTests().then(() => {});
  //   }
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filteredTests]);

  const handleInputChange = useCallback(
    (value: string) => {
      handleDebouncedSearch(value);
    },
    [handleDebouncedSearch]
  );

  return (
    <div className='lg:grid lg:justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div>
          <div className='bg-primaryGreenLight'>
            <div className='grid w-full gap-4 px-10 py-12 lg:p-20'>
              <h1 className='text-balance w-full text-center text-3xl font-bold text-primaryGreenDark lg:text-4xl'>
                Discover exciting health packages
              </h1>

              <p className='text-balance text-center text-content'>
                Check out various tests ensure you stay healthy.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
