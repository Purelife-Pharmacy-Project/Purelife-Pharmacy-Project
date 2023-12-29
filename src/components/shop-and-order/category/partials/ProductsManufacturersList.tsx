'use client';
import { IconSearch } from '@/components/icons/IconSearch';
import { useGetManufacturers, useQueryParams } from '@/hooks';
import { inputDefault } from '@/theme';
import { Button, Input, Radio, RadioGroup } from '@nextui-org/react';
import debounce from 'lodash/debounce';
import { FC, useCallback, useEffect, useState } from 'react';
import { ManufacturersSkeleton } from '../skeletons/ManufacturersSkeleton';

type ProductsManufacturersListProps = {
  categoryId: string;
  manufacturerId: string;
  onRefetch: () => void;
};

export const ProductsManufacturersList: FC<ProductsManufacturersListProps> = ({
  categoryId,
  manufacturerId,
  onRefetch,
}) => {
  const { setQuery, removeQuery } = useQueryParams();
  const [manufacturer, setManufacturer] = useState<string>(
    manufacturerId || ''
  );
  const [searchStr, setSearchStr] = useState<string>('');

  const { loadingManufacturers, manufacturers, refetchManufacturers } =
    useGetManufacturers(categoryId, searchStr || '');

  const handleDebouncedSearch = debounce((value: string) => {
    setSearchStr(value);
  }, 500);

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
      removeQuery(['manufacturer']);
      onRefetch();
    } else {
      setManufacturer(manufacturer);
      setQuery({ manufacturer: manufacturer });
      onRefetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manufacturer]);

  return (
    <>
      <RadioGroup
        classNames={{
          label: 'font-semibold text-header-100',
        }}
        label={'Manufacturer'}
        value={manufacturer}
        onValueChange={setManufacturer}
      >
        {manufacturers && manufacturers.length > 0 && !loadingManufacturers && (
          <>
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
            {manufacturers?.map((manufacturer) => (
              <Radio
                isDisabled={loadingManufacturers}
                key={manufacturer.id}
                value={manufacturer.id}
              >
                {manufacturer.name}
              </Radio>
            ))}
          </>
        )}
        {manufacturers &&
          manufacturers.length > 0 &&
          !loadingManufacturers &&
          manufacturer !== '' && (
            <div className='flex justify-end'>
              <Button variant='faded' onClick={handleReset}>
                Reset
              </Button>
            </div>
          )}

        {!loadingManufacturers && manufacturers?.length === 0 && (
          <div className='text-center'>
            <p className='text-center text-sm text-content'>
              No Manufacturers found
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
