'use client';
import { IconSearch } from '@/components/icons/IconSearch';
import { useCartStore, useGetProducts } from '@/hooks';
import { Product } from '@/services/products/types';
import { inputDefault } from '@/theme';
import {
  Button,
  Card,
  CardBody,
  Image,
  Input,
  Spinner,
} from '@nextui-org/react';
import debounce from 'lodash/debounce';
import { useCallback, useEffect, useRef, useState } from 'react';

export const NavbarSearch = () => {
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

  const { loadingProducts, products, refetch } = useGetProducts({
    name: searchStr,
  });

  const filteredProducts = products?.products.filter(
    (product: Product) =>
      product.name?.toLowerCase().includes(searchStr?.toLowerCase() || '')
  );

  useEffect(() => {
    if (filteredProducts?.length === 0) {
      refetch().then(() => {});
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProducts]);

  const handleInputChange = useCallback(
    (value: string) => {
      handleDebouncedSearch(value);
    },
    [handleDebouncedSearch]
  );

  return (
    <div className='w-full'>
      <Input
        radius='full'
        color='default'
        classNames={inputDefault}
        ref={searchInputRef}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => setShowSearchResults(true)}
        onBlur={() => {
          setTimeout(() => {
            setShowSearchResults(false);
          }, 200);
        }}
        size='lg'
        type='text'
        placeholder='Search products'
        endContent={
          <div className='rounded-full bg-primaryLight p-2'>
            <IconSearch color='header-100' />
          </div>
        }
      />
      {showSearchResults ? (
        <Card
          shadow='sm'
          radius='lg'
          ref={searchResultsRef}
          className='-bottom-15 absolute z-20 mt-2 max-h-[400px] w-[400px] overflow-y-auto'
        >
          <CardBody>
            {!loadingProducts && filteredProducts?.length === 0 ? (
              <p className='text-body text-center'>No products found</p>
            ) : null}

            {loadingProducts ? (
              <div className='flex justify-center'>
                <Spinner size='sm' color='primary' />
              </div>
            ) : null}

            {!loadingProducts && (
              <div className='grid gap-4'>
                {filteredProducts?.map((product: Product) => (
                  <Button
                    variant='light'
                    size='lg'
                    type='button'
                    onPress={() => handleProductClick(product)}
                    key={product.id}
                    className='group grid h-max grid-flow-col grid-cols-[1fr_8fr_3fr] items-center gap-3 p-2'
                  >
                    <Image
                      width={60}
                      height={60}
                      className='max-h-14 object-contain'
                      radius='md'
                      src={product.image_1024}
                      alt={''}
                    />

                    <p className='text-body max-w-[150px] truncate text-start text-sm capitalize'>
                      {product.name?.toLowerCase()}
                    </p>

                    <p className='hidden text-xs text-primaryGreenDark group-hover:block'>
                      Click to Add to Cart
                    </p>
                  </Button>
                ))}
              </div>
            )}
          </CardBody>
        </Card>
      ) : null}
    </div>
  );
};
