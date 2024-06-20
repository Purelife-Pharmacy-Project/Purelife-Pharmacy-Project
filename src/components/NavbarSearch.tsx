'use client';
import { IconSearch } from '@/components/icons/IconSearch';
import { useSearchProducts } from '@/hooks';
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
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export const NavbarSearch = () => {
  const [searchStr, setSearchStr] = useState<string | undefined>('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  const [showSearchResults, setShowSearchResults] = useState(false);

  const router = useRouter();

  const handleDebouncedSearch = debounce((value: string) => {
    setSearchStr(value);
  }, 800);

  const handleProductClick = (product: Product) => {
    if (searchResultsRef.current) {
      searchResultsRef.current.style.display = 'none';
    }
    router.push(`/cart/${product.id}`);
    // toast.success('Item added to cart successfully!');
  };

  const { loadingFilteredProducts, filteredProducts, refetch } =
    useSearchProducts({
      searchQuery: searchStr !== '' ? searchStr : undefined,
      limit: 20,
      offset: 0,
    });

  const filteredItems = useMemo(() => {
    return (
      filteredProducts?.pages.reduce((acc, page) => {
        return [...acc, ...page];
      }, []) || []
    );
  }, [filteredProducts]);

  useEffect(() => {
    if (filteredItems?.length === 0 && searchStr !== '') {
      refetch().then(() => {});
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProducts, searchStr]);

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
            {!loadingFilteredProducts && filteredItems?.length === 0 ? (
              <p className='text-body text-center'>No products found</p>
            ) : null}

            {loadingFilteredProducts ? (
              <div className='flex justify-center'>
                <Spinner size='sm' color='primary' />
              </div>
            ) : null}

            {!loadingFilteredProducts && (
              <div className='grid gap-4'>
                {filteredItems?.map((product: Product) => (
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

                    <p className='text-body max-w-[150px] truncate text-start text-sm capitalize'>
                      ₦{product.lst_price.toLocaleString()}
                    </p>

                    <p className='hidden text-xs text-primaryGreenDark group-hover:block'>
                      Click to View
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
