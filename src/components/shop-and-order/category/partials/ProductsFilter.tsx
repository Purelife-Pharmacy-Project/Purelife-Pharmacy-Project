'use client';
import { IconSearch } from '@/components/icons/IconSearch';
import { useGetProductsByCategory } from '@/hooks';
import { inputDefault } from '@/theme';
import { Card, CardBody, Input, Radio, RadioGroup } from '@nextui-org/react';
import debounce from 'lodash/debounce';
import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type ProductsFilterProps = {
  categoryId: string;
};

export const ProductsFilter: FC<ProductsFilterProps> = ({ categoryId }) => {
  const filterOptions = [
    {
      name: 'Manufacturer',
      options: [
        {
          name: 'Johnson & Johnson',
          value: 'johnson&johnson',
        },
        {
          name: 'Pfizer',
          value: 'pfizer',
        },
        {
          name: 'Roche',
          value: 'roche',
        },
        {
          name: 'Novartis',
          value: 'novartis',
        },
        {
          name: 'Others',
          value: 'others',
        },
      ],
    },
    {
      name: 'Price',
      options: [
        {
          name: '₦0 - ₦1000',
          value: '0-1000',
        },
        {
          name: '₦1000 - ₦2000',
          value: '1000-2000',
        },
        {
          name: '₦2000 - ₦3000',
          value: '2000-3000',
        },
        {
          name: '₦3000 - ₦4000',
          value: '3000-4000',
        },
        {
          name: '₦4000 and above',
          value: '4000+',
        },
      ],
    },
  ];
  const [searchString, setSearchString] = useState<string | undefined>(
    undefined
  );
  const searchStringRef = useRef(searchString);

  useEffect(() => {
    searchStringRef.current = searchString;
  }, [searchString]);

  const { refetch } = useGetProductsByCategory(
    categoryId as string,
    searchString
  );

  const handleDebouncedSearch = debounce((value: string) => {
    if (value === '') {
      setSearchString(undefined);
      refetch();
    } else {
      setSearchString(value);
      refetch();
    }
  }, 500);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      handleDebouncedSearch(e.target.value);
    },
    [handleDebouncedSearch]
  );

  return (
    <Card shadow='none' className='h-max bg-primaryLight'>
      <CardBody>
        <h1 className='mb-4 text-2xl font-semibold text-header-100'>Filter</h1>

        <div className='grid gap-4'>
          {filterOptions.map((filterOption, index) => (
            <RadioGroup
              classNames={{ label: 'font-semibold text-header-100' }}
              label={filterOption.name}
              key={index}
            >
              <Input
                type='text'
                isClearable
                startContent={<IconSearch />}
                radius='full'
                isDisabled
                className='mb-3'
                placeholder='search'
                onChange={handleInputChange}
                classNames={inputDefault}
              />
              {filterOption.options.map((option, index) => (
                <Radio key={index} value={option.value}>
                  {option.name}
                </Radio>
              ))}
            </RadioGroup>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
