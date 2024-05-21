'use client';
import { useCartStore, useGetProducts } from '@/hooks';
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
import { FC, useCallback, useRef, useState } from 'react';
import { Section } from '../home/Section';
import { IconSearch } from '../icons/IconSearch';

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
            <div className='grid w-full gap-4 p-1 md:p-4 lg:p-20'>
              <h1 className='w-full text-center text-3xl font-bold text-primaryGreenDark lg:text-4xl'>
                Sign up for amazing health and lifestyle deals
              </h1>

              <div className='relative'>
                <Input
                  size='lg'
                  radius='full'
                  type='Search'
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
                  startContent={<IconSearch size={24} color='success' />}
                  placeholder='Search all tests here'
                />

                {showSearchResults ? (
                  <Card
                    shadow='sm'
                    radius='lg'
                    ref={searchResultsRef}
                    className='-bottom-15 absolute z-20 mt-2 max-h-[300px] w-full overflow-y-auto'
                  >
                    <CardBody>
                      {!loadingLabTests && filteredTests?.length === 0 ? (
                        <p className='text-body text-center'>
                          No lab tests found
                        </p>
                      ) : null}

                      {loadingLabTests ? (
                        <div className='flex justify-center'>
                          <Spinner size='sm' color='success' />
                        </div>
                      ) : null}

                      {!loadingLabTests && (
                        <div className='grid gap-4'>
                          {filteredTests?.map((product) => (
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

                              <p className='text-body max-w-[200px] break-words text-start capitalize'>
                                {product.name?.toLowerCase()}
                              </p>

                              <p className='hidden text-primaryGreenDark group-hover:block'>
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
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
