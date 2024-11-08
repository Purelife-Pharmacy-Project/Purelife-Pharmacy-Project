'use client';
import { IconSearch } from '@/components/icons/IconSearch';
import { useSearchProducts } from '@/hooks';
import { Product } from '@/services/products/types';
import { inputBorderedDefault, inputBorderedGray } from '@/theme';
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
import { useSearch } from '@/helpers/useContext/authContext';

interface NavbarSearchProps {
  searchBtnClassName?: string;
  placeholderClassName?: string;
  show?: boolean;
}
export const NavbarSearch: React.FC<NavbarSearchProps> = ({
  searchBtnClassName,
  placeholderClassName,
  show,
}) => {
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
  const search = [
    {
      title: 'Products',
    },
    {
      title: 'Vaccines',
    },
    {
      title: 'Lab tests',
    },
    {
      title: 'Beauty',
    },
    {
      title: 'Skin care',
    },
    {
      title: 'Health',
    },
    {
      title: 'Supermarket products',
    },
  ];
  const [showSearchCategory, setShowSearchCategory] = useState(true);
  const [searchOn, setSearchOn] = useState('');
  const searchCategory = Array.from({ length: 10 }, () => search).flatMap(
    (item) => item
  );
  const scrollVaccineCategoryRef = useRef<HTMLDivElement | null>(null);
  const [itemHeight, setItemHeight] = useState<number>(0); // Type the state variable

  useEffect(() => {
    if (scrollVaccineCategoryRef.current) {
      const firstItem = scrollVaccineCategoryRef.current
        .firstElementChild as HTMLElement; // Cast to HTMLElement
      if (firstItem) {
        setItemHeight(firstItem.clientHeight);
      }
    }
  }, [searchCategory]);

  const scrollVaccineCategory = () => {
    if (scrollVaccineCategoryRef.current) {
      const startScrollTop = scrollVaccineCategoryRef.current.scrollTop;
      const endScrollTop =
        Math.ceil((startScrollTop + itemHeight) / itemHeight) * itemHeight; // Round to nearest multiple of itemHeight
      const duration = 1000; // Duration of scroll in milliseconds
      const startTime = performance.now();
      const animateScroll = (currentTime: number) => {
        // Type the currentTime parameter
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Calculate progress
        // Smoothly interpolate the scroll position
        scrollVaccineCategoryRef.current!.scrollTop =
          startScrollTop + (endScrollTop - startScrollTop) * progress;
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          scrollVaccineCategoryRef.current!.scrollTop = endScrollTop;
          if (
            endScrollTop >=
            scrollVaccineCategoryRef.current!.scrollHeight -
              scrollVaccineCategoryRef.current!.clientHeight
          ) {
            scrollVaccineCategoryRef.current!.scrollTop = 0;
          }
        }
      };
      requestAnimationFrame(animateScroll);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(scrollVaccineCategory, 3000);
    return () => clearInterval(intervalId);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemHeight]);
  return (
    <div className='relative w-full'>
      <div className='relative'>
        <div
          onMouseEnter={() => {
            setShowSearchCategory(false);
            scrollVaccineCategory();
          }}
          ref={scrollVaccineCategoryRef}
          className={`scrollbar-none absolute left-6 top-2 z-[2] h-[20px] overflow-y-scroll ${placeholderClassName} ${!showSearchCategory && 'hidden'}`}
        >
          {searchCategory.map((category, index) => (
            <p key={index} className='leading-1 text-base text-[#5A5A5A]'>
              {category.title}
            </p>
          ))}
        </div>
        <Input
          onMouseEnter={() => {
            setShowSearchCategory(false);
          }}
          onMouseLeave={() => {
            if (searchOn === '') {
              setShowSearchCategory(true);
            }
          }}
          radius='full'
          color='primary'
          classNames={{
            input: ['py-0'],
            inputWrapper: [
              'h-max',
              'min-h-0',
              'p-0',
              '!p-0',
              'bg-white',
              'border border-[#1212121A]',
              'shadow-none',
              'text-black capitalize',
              'data-[hover=true]:bg-white',
              'group-data-[focus=true]:bg-white transition-all group-data-[focus=true]:shadow-md',
              'group-data-[active=true]:bg-white',
            ],
            description: 'text-white',
          }}
          ref={searchInputRef}
          onChange={(e) => {
            setSearchOn(e.target.value);
            if (e.target.value !== '') {
              setShowSearchCategory(false);
            } else {
              setShowSearchCategory(true);
            }
            handleInputChange(e.target.value);
          }}
          onFocus={() => setShowSearchResults(true)}
          onBlur={() => {
            setTimeout(() => {
              setShowSearchResults(false);
            }, 200);
          }}
          variant='bordered'
          size='lg'
          type='text'
          startContent={<div className='pl-4'></div>}
          endContent={
            <div
              className={`flex cursor-pointer border-[#FF0028] items-center gap-2 rounded-full bg-primary px-6 py-2 ${searchBtnClassName}`}
            >
              <IconSearch color='white' />
              <span className='text-white'>Search</span>
            </div>
          }
        />
      </div>
      {showSearchResults ? (
        <Card
          shadow='sm'
          radius='lg'
          ref={searchResultsRef}
          className='-bottom-15 absolute left-0 z-20 mt-2 max-h-[400px] w-full overflow-y-auto'
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
