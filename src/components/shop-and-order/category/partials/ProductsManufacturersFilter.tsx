'use client';
import { IconSearch } from '@/components/icons/IconSearch';
import { useGetManufacturers } from '@/hooks';
import { inputDefault } from '@/theme';
import { Button, Input, Radio, RadioGroup } from '@nextui-org/react';
import debounce from 'lodash/debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback, useEffect, useState } from 'react';
import { ManufacturersSkeleton } from '../skeletons/ManufacturersSkeleton';

type ProductsManufacturersFilterProps = {
  categoryId: string;
  manufacturerId: string;
  onRefetch: () => void;
};

export const ProductsManufacturersFilter: FC<
  ProductsManufacturersFilterProps
> = ({ categoryId, manufacturerId, onRefetch }) => {
  const urlParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const [manufacturer, setManufacturer] = useState<string>(
    manufacturerId || ''
  );
  const [searchStr, setSearchStr] = useState<string>('');

  const { loadingManufacturers, manufacturers, refetchManufacturers } =
    useGetManufacturers(categoryId, searchStr || '');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(urlParams);

      params.set(name, value);

      return params.toString();
    },
    [urlParams]
  );

  const handleDebouncedManufacturer = debounce((value: string) => {
    setManufacturer(value);
  }, 500);

  const handleDebouncedSearch = debounce((value: string) => {
    setSearchStr(value);
  }, 500);

  const handleRadioChange = useCallback(
    (value: string) => {
      handleDebouncedManufacturer(value);
    },
    [handleDebouncedManufacturer]
  );

  const handleSearchChange = useCallback(
    (value: string) => {
      handleDebouncedSearch(value);
    },
    [handleDebouncedSearch]
  );

  const handleReset = () => {
    setSearchStr('');
    setManufacturer('');
  };

  useEffect(() => {
    refetchManufacturers().then(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchStr]);

  // watch the manufacturerId and refetch the data
  useEffect(() => {
    if (manufacturer === '') {
      router.replace(`${pathName}?${createQueryString('manufacturer', '')}`);
      onRefetch();
    } else {
      setManufacturer(manufacturer);
      router.replace(
        `${pathName}?${createQueryString('manufacturer', manufacturer!)}`
      );
      onRefetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manufacturer]);

  return (
    <>
      <RadioGroup
        classNames={{ label: 'font-semibold text-header-100' }}
        label={'Manufacturer'}
        value={manufacturer}
        onValueChange={setManufacturer}
      >
        <Input
          type='text'
          isClearable
          startContent={<IconSearch />}
          radius='full'
          className='mb-3'
          placeholder='Find Manufacturer'
          onChange={(e) => handleSearchChange(e.target.value)}
          classNames={inputDefault}
          onClear={() => handleSearchChange('')}
        />

        {manufacturers && manufacturers.length > 0 && !loadingManufacturers && (
          <>
            {manufacturers?.map((manufacturer, index) => (
              <Radio key={index} value={manufacturer.id}>
                {manufacturer.name}
              </Radio>
            ))}
          </>
        )}
        {manufacturer !== '' && (
          <Button variant='faded' onClick={handleReset}>
            Reset
          </Button>
        )}

        {!loadingManufacturers && manufacturers?.length === 0 && (
          <div className='text-center'>
            <p className='text-center text-sm text-content'>
              Oops! Couldnt find that
            </p>
          </div>
        )}

        <div className='grid gap-3'>
          {loadingManufacturers &&
            Array.from(Array(5).keys()).map((_, index) => (
              <ManufacturersSkeleton key={index} />
            ))}
        </div>
      </RadioGroup>
    </>
  );
};
