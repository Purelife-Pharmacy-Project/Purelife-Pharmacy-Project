'use client';
import { useCartStore, useGetProducts } from '@/hooks';
import debounce from 'lodash/debounce';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Section } from '../home/Section';
import {
  Button,
  Card,
  CardBody,
  Image,
  Input,
  Spinner,
} from '@nextui-org/react';
import { IconArrowRight } from '@/components/icons/IconArrowRight';
import NextLink from 'next/link';

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

  const {
    loadingProducts: loadingLabTests,
    products: labTests,
    refetch: refetchLabTests,
  } = useGetProducts({
    limit: 12,
    offset: 1,
    categoryId: '18',
  });

  const filteredTests = labTests?.filter(
    (test) => test.name?.toLowerCase().includes(searchStr?.toLowerCase() || '')
  );

  useEffect(() => {
    if (filteredTests && filteredTests?.length === 0) {
      refetchLabTests().then(() => {});
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredTests]);

  const handleInputChange = useCallback(
    (value: string) => {
      handleDebouncedSearch(value);
    },
    [handleDebouncedSearch]
  );

  const search = [
    {
      title: "Men's Health",
    },
    {
      title: 'Sexual Health',
    },
  ];
  const [showLabTestCategory, setShowLabTestCategory] = useState(true);
  const [searchOn, setSearchOn] = useState('');
  const searchCategory = Array.from({ length: 10 }, () => search).flatMap(
    (item) => item
  );
  const scrollLabTestCategoryRef = useRef<HTMLDivElement | null>(null);
  const [itemHeight, setItemHeight] = useState<number>(0); // Type the state variable
  
  useEffect(() => {
    if (scrollLabTestCategoryRef.current) {
      const firstItem = scrollLabTestCategoryRef.current.firstElementChild as HTMLElement; // Cast to HTMLElement
      if (firstItem) {
        setItemHeight(firstItem.clientHeight);
      }
    }
  }, [searchCategory]);
  
  const scrollLabTestCategory = () => {
    if (scrollLabTestCategoryRef.current) {
      const startScrollTop = scrollLabTestCategoryRef.current.scrollTop;
      const endScrollTop = Math.ceil((startScrollTop + itemHeight) / itemHeight) * itemHeight; // Round to nearest multiple of itemHeight
      const duration = 1000; // Duration of scroll in milliseconds
      const startTime = performance.now();
  
      const animateScroll = (currentTime: number) => { // Type the currentTime parameter
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Calculate progress
  
        // Smoothly interpolate the scroll position
        scrollLabTestCategoryRef.current!.scrollTop = 
          startScrollTop + (endScrollTop - startScrollTop) * progress;
  
        if (progress < 1) {
          requestAnimationFrame(animateScroll); // Continue animation
        } else {
          // Snap to exact position to avoid small offsets
          scrollLabTestCategoryRef.current!.scrollTop = endScrollTop;
  
          // Reset to the top if we reached the bottom
          if (endScrollTop >= scrollLabTestCategoryRef.current!.scrollHeight - scrollLabTestCategoryRef.current!.clientHeight) {
            scrollLabTestCategoryRef.current!.scrollTop = 0; // Reset scroll to top
          }
        }
      };
  
      requestAnimationFrame(animateScroll); // Start the animation
    }
  };
  
  useEffect(() => {
    const intervalId = setInterval(scrollLabTestCategory, 3000); // Scroll every 3 seconds
  
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemHeight]);

  return (
    <div className='relative w-full items-center bg-transparent md:grid md:min-h-[539px] md:justify-center'>
      <div
        className='absolute left-0 top-0 h-full w-full bg-center md:bg-right'
        style={{
          backgroundImage:
            'url(/images/book-test.png), linear-gradient(to right,#000000, #0000004D)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
        }}
      ></div>
      <div className='absolute left-0 top-0 z-[2] h-full w-5/6 bg-gradient-to-r from-black/100 from-45% to-black/0 md:from-25%'></div>
      <Section className='relative z-[3] bg-transparent'>
        <div className='grid w-full gap-4 py-12 text-white md:px-10 lg:p-20'>
          <h1 className='w-full text-balance text-center text-3xl font-bold capitalize lg:text-5xl'>
            Find Your Perfect Test
          </h1>

          <p className='text-balance text-center'>
            Select the type of test you’re looking for and get accurate results
            quickly and easily.
          </p>

          <div className='relative mx-auto w-full max-w-xl'>
            <div
              onMouseEnter={() => {
                setShowLabTestCategory(false);
                scrollLabTestCategory();
              }}
              ref={scrollLabTestCategoryRef}
              className={`scrollbar-none absolute left-6 top-4 z-[999] h-[20px] overflow-y-scroll ${!showLabTestCategory && 'hidden'}`}
            >
              {searchCategory.map((category, index) => (
                <p key={index} className='leading-1 text-base text-gray-400'>
                  {category.title}
                </p>
              ))}
            </div>
            <Input
              onMouseEnter={() => {
                setShowLabTestCategory(false);
              }}
              onMouseLeave={() => {
                if (searchOn === '') {
                  setShowLabTestCategory(true);
                }
              }}
              size='lg'
              radius='full'
              type='Search'
              ref={searchInputRef}
              onChange={(e) => {
                setSearchOn(e.target.value);
                if (e.target.value !== '') {
                  setShowLabTestCategory(false);
                } else {
                  setShowLabTestCategory(true);
                }
                handleInputChange(e.target.value);
              }}
              onFocus={() => setShowSearchResults(true)}
              onBlur={() => {
                setTimeout(() => {
                  setShowSearchResults(false);
                }, 200);
              }}
              classNames={{
                input: ['py-4'],
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
                description: 'text-white',
              }}
              endContent={
                <span className='grid h-9 w-9 place-content-center rounded-full bg-primaryLight'>
                  <IconArrowRight size={12} color='#1C1B1F' />
                </span>
              }
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
                    <p className='text-body text-center'>No products found</p>
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
                          as={NextLink}
                          href={`/cart/${product.id}`}
                          variant='light'
                          size='lg'
                          type='button'
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
                            View item
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
      </Section>
    </div>
  );
};
