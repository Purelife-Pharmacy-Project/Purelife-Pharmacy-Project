'use client';
import { Section } from '@/components/home/Section';
import { useGetCategories, useGetProductsByCategoryId } from '@/hooks';
import { Product } from '@/services/products/types';
import {
  Button,
  Card,
  CardBody,
  Image,
  Input,
  Spinner,
} from '@nextui-org/react';
import debounce from 'lodash/debounce';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { IconSearch } from '../icons/IconSearch';
import { AboutDrugCard } from './AboutDrugCard';

type DrugRefillHeroProps = {};

export const DrugRefillHero: FC<DrugRefillHeroProps> = ({}) => {
  const [searchStr, setSearchStr] = useState<string | undefined>('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleDebouncedSearch = debounce((value: string) => {
    setSearchStr(value);
  }, 800);

  const { categories } = useGetCategories();

  const getHealthCategoryId = () =>
    categories?.find((category) => category.name?.toLowerCase() === 'health')
      ?.id;

  const {
    loadingProducts,
    products,
    refetch: refetchProducts,
  } = useGetProductsByCategoryId({
    categoryId: getHealthCategoryId(),
    searchStr,
    pageSize: 10,
    pageIndex: 1,
  });

  const handleProductClick = (product: Product) => {
    if (searchResultsRef.current) {
      searchResultsRef.current.style.display = 'none';
    }

    setSelectedProduct(product);
  };

  const filteredProducts = products?.products.filter(
    (product) =>
      product.name?.toLowerCase().includes(searchStr?.toLowerCase() || '')
  );

  useEffect(() => {
    if (filteredProducts?.length === 0) {
      refetchProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProducts]);

  const handleInputChange = useCallback(
    (value: string) => {
      handleDebouncedSearch(value);
    },
    [handleDebouncedSearch]
  );

  return (
    <div className='grid justify-center bg-primaryLight lg:pb-10 lg:pt-[55px]'>
      <Section className='relative bg-primaryLight'>
        <div className='relative'>
          <div className='bg-primaryLight p-3'>
            <div className='grid w-full justify-center p-1 md:p-4 lg:p-20'>
              <h1 className='mx-auto mb-[32px] w-full text-center text-3xl font-bold text-header-100 lg:max-w-[650px] lg:text-5xl'>
                Never Miss Out on Your Medications Again
              </h1>

              <p className='mb-[59px] text-center text-lg font-light text-content'>
                With Pure life, you can get your medications delivered to you at
                your preferred intervals.
              </p>

              <div className='relative'>
                <Input
                  size='lg'
                  radius='full'
                  type='search'
                  ref={searchInputRef}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onFocus={() => setShowSearchResults(true)}
                  onBlur={() => {
                    setTimeout(() => {
                      setShowSearchResults(false);
                    }, 200);
                  }}
                  classNames={{
                    input: ['py-6'],
                    inputWrapper: [
                      'h-max',
                      'pr-2',
                      'bg-white',
                      'shadow-none',
                      'text-black capitalize',
                      'data-[hover=true]:bg-white',
                      'group-data-[focus=true]:bg-white transition-all group-data-[focus=true]:shadow-md',
                      'group-data-[active=true]:bg-white',
                    ],
                  }}
                  startContent={<IconSearch size={24} color='primary' />}
                  placeholder='Search for medication'
                />

                {showSearchResults ? (
                  <Card
                    shadow='sm'
                    radius='lg'
                    ref={searchResultsRef}
                    className='-bottom-15 absolute z-20 mt-2 max-h-[300px] w-full overflow-y-auto'
                  >
                    <CardBody>
                      {!loadingProducts && filteredProducts?.length === 0 ? (
                        <p className='text-body text-center'>
                          No products found
                        </p>
                      ) : null}

                      {loadingProducts ? (
                        <div className='flex justify-center'>
                          <Spinner size='sm' color='primary' />
                        </div>
                      ) : null}

                      {!loadingProducts && (
                        <div className='grid gap-4'>
                          {filteredProducts?.map((product) => (
                            <Button
                              variant='light'
                              size='lg'
                              type='button'
                              onPress={() =>
                                handleProductClick({
                                  ...product,
                                  categoryId: getHealthCategoryId()!,
                                })
                              }
                              key={product.id}
                              className='grid h-max grid-flow-col grid-cols-[1fr_8fr_3fr] items-center gap-3 p-2'
                            >
                              <Image
                                width={60}
                                height={60}
                                className='max-h-14 object-contain'
                                radius='md'
                                src={product.imageInBinary}
                                alt={''}
                              />

                              <p className='text-body max-w-[200px] break-words text-start capitalize'>
                                {product.name?.toLowerCase()}
                              </p>
                            </Button>
                          ))}
                        </div>
                      )}
                    </CardBody>
                  </Card>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <AboutDrugCard
          product={selectedProduct}
          onFinish={() => {
            setSelectedProduct(undefined);
            setSearchStr('');

            if (searchInputRef.current) {
              searchInputRef.current.value = '';
            }
          }}
          addNew={() => {
            if (searchInputRef.current) {
              searchInputRef.current.value = '';
            }
            searchInputRef.current?.focus();
          }}
        />
      </Section>
    </div>
  );
};
