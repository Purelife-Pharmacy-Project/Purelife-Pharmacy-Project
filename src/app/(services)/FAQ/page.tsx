'use client';
import { Footer } from '@/components/home/Footer';
import { IconSearch } from '@/components/icons/IconSearch';
import { useSearchProducts } from '@/hooks';
import {
  Button,
  Card,
  CardBody,
  Image,
  Input,
  Spinner,
} from '@nextui-org/react';
import debounce from 'lodash.debounce';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/services/products/types';
import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { NewsLetterCard } from '@/components/home/NewsletterCard';

export default function FAQ() {
  const [searchStr, setSearchStr] = useState<string | undefined>('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<string>('0');
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
      filteredProducts?.pages.reduce((acc: any, page: any) => {
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
  const [searchOn, setSearchOn] = useState('');

  const [activeButton, setActiveButton] = useState<number>(1); // Track active button

  const buttons = [
    { id: 1, label: 'General' },
    { id: 2, label: 'Pharmacy' },
    { id: 3, label: 'Book Lab Test' },
    { id: 4, label: 'Consult Doctor' },
    { id: 5, label: 'Book Vaccination' },
  ];

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0');
    }
  }, [isOpen]);

  const [openIndex, setOpenIndex] = useState<number | null>(null); // To track which dropdown is open

  const faqData: { [key: number]: { title: string; details: string }[] } = {
    1: [
      {
        title: 'What is general service?',
        details:
          'General service includes basic health and wellness assistance.',
      },
      {
        title: 'How do I avail general services?',
        details:
          'Simply visit our store or contact our support team for more information.',
      },
    ],
    2: [
      {
        title: 'What types of tests can I get at your pharmacy?',
        details: `At our pharmacy, we offer a variety of health tests, including 
          blood pressure, blood glucose, cholesterol, and COVID-19 testing.`,
      },
      {
        title: 'Do I need an appointment for these tests?',
        details:
          'No appointment is required for most tests. Walk-in is welcome.',
      },
    ],
    3: [
      {
        title: 'How can I book a lab test?',
        details:
          'You can book a lab test through our website or by contacting us directly.',
      },
      {
        title: 'What lab tests do you offer?',
        details:
          'We offer blood tests, urine analysis, and specialized screenings.',
      },
    ],
    4: [
      {
        title: 'How do I consult a doctor?',
        details:
          'You can book an appointment or use our teleconsultation services.',
      },
      {
        title: 'Are your doctors certified?',
        details:
          'Yes, all our doctors are highly qualified and certified professionals.',
      },
    ],
    5: [
      {
        title: 'How do I book a vaccination?',
        details:
          'You can book a vaccination appointment through our portal or walk in.',
      },
      {
        title: 'What vaccinations do you offer?',
        details:
          'We offer flu shots, COVID-19 vaccines, and other routine immunizations.',
      },
    ],
  };

  const activeFAQs = faqData[activeButton] || [];

  const data = [
    {
      title: 'What types of tests can I get at your pharmacy?',
      details: `At our pharmacy, we offer a variety of health tests, including 
        blood pressure, blood glucose, cholesterol, and COVID-19 testing. We 
        also provide health screenings for conditions like diabetes and heart 
        health, helping you monitor and manage your well-being. Visit us for 
        quick, reliable results and personalized health advice tailored to 
        your needs.`,
    },
    {
      title: 'Do I need an appointment for these tests?',
      details: `No appointment is required for most tests. Simply walk in, and 
        our trained staff will assist you. For more specialized screenings, 
        you may call ahead to confirm availability.`,
    },
    {
      title: 'Are your test results reliable?',
      details: `Yes, we use modern equipment and trained professionals to 
        ensure accurate and reliable results. Our processes adhere to 
        healthcare standards to give you peace of mind.`,
    },
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle between open and closed
  };
  <div className='space-y-6'>
    {data.map((item, index) => {
      const isOpen = openIndex === index;
      return (
        <div key={index}>
          <div
            className='flex cursor-pointer items-center justify-between'
            onClick={() => toggleDropdown(index)}
          >
            <span className='mb-3 font-semibold text-header-100'>
              {item.title}
            </span>
            {isOpen ? (
              <div className='-rotate-90'>
                <IconChevronLeft />
              </div>
            ) : (
              <div className='rotate-90'>
                <IconChevronLeft />
              </div>
            )}
          </div>
          <div
            style={{
              height: isOpen ? 'auto' : 0,
              overflow: 'hidden',
              transition: 'height 0.3s ease-in-out',
            }}
            className='flex flex-col gap-3 text-[#5A5A5A]'
          >
            {isOpen && <p>{item.details}</p>}
          </div>
        </div>
      );
    })}
  </div>;
  return (
    <>
      <main className='mx-auto mb-10 w-[90%] justify-center md:mb-0 lg:w-[53%]'>
        <div className='mt-12 flex w-full flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-center text-2xl font-bold text-header-100 lg:text-[32px]'>
              Frequently Asked Questions
            </h1>

            <p className='text-center font-medium text-[#5A5A5A] text-sm md:text-base'>
              These are the most commonly asked questions across our various
              products and services. Can’t find what you are looking for?{' '}
              <span className='cursor-pointer text-primary underline'>
                Chat to our friendly team!{' '}
              </span>
            </p>
          </div>
          <div className='relative mx-auto w-[90%] md:w-[60%]'>
            <Input
              size='lg'
              radius='full'
              type='Search'
              ref={searchInputRef}
              onChange={(e) => {
                setSearchOn(e.target.value);
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
                  'bg-white border border-[#1212121A] h-[43px]',
                  'shadow-none',
                  'text-black capitalize',
                  'data-[hover=true]:bg-white',
                  'group-data-[focus=true]:bg-white transition-all group-data-[focus=true]:shadow-md',
                  'group-data-[active=true]:bg-white',
                ],
                description: 'text-white',
              }}
              startContent={
                <div
                  className={`flex cursor-pointer items-center gap-2 rounded-full border-[#FF0028] py-2 pl-2`}
                >
                  <IconSearch color='#5A5A5A' size={22} />
                  <span className='text-[#5A5A5A] text-sm md:text-base'>Search</span>
                </div>
              }
            />
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
            <div className='mx-auto flex gap-4 flex-wrap w-fit justify-center'>
            {buttons.map((button) => (
              <Button
                key={button.id}
                onClick={() => setActiveButton(button.id)} // Set active button on click
                className={`rounded-full border border-[#1E272F] px-6 transition-all ${
                  activeButton === button.id
                    ? 'bg-[#1E272F] text-white'
                    : 'bg-white text-[#1E272F]'
                }`}
              >
                {button.label}
              </Button>
            ))}
          </div>
          
          {/* FAQ Section */}
          <div className='mb-5'>
            {activeFAQs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className='border-b border-[#E7E7E7] pb-[9px] pt-[18px]'
                >
                  <div
                    className='flex cursor-pointer items-center justify-between'
                    onClick={() => toggleDropdown(index)}
                  >
                    <span className='mb-3 font-semibold text-header-100'>
                      {item.title}
                    </span>
                    {isOpen ? (
                      <div className='-rotate-90'>
                        <IconChevronLeft />
                      </div>
                    ) : (
                      <div className='rotate-90'>
                        <IconChevronLeft />
                      </div>
                    )}
                  </div>
                  <div
                    ref={contentRef}
                    style={{
                      height: isOpen ? 'auto' : 0,
                      overflow: 'hidden',
                      transition: 'height 0.3s ease-in-out',
                    }}
                    className='flex flex-col gap-3 text-[#5A5A5A]'
                  >
                    {isOpen && <p>{item.details}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <div className='mb-[100px]'></div>
      <ReportDrugReaction />
      <div className='my-10'></div>
      <NewsLetterCard />
      <Footer />
    </>
  );
}
