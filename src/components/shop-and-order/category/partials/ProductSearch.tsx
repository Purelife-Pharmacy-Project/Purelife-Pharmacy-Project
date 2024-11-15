import { IconSearch } from '@/components/icons/IconSearch';
import { useQueryParams } from '@/hooks';
import { inputBorderedGray } from '@/theme';
import { Input } from '@nextui-org/react';
import debounce from 'lodash/debounce';
import { FC, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type ProductSearchProps = {
  loadingProducts?: boolean;
};

export const ProductSearch: FC<ProductSearchProps> = ({ loadingProducts }) => {
  const searchParams = useSearchParams();
  const [searchStr, setSearchStr] = useState<string | null>(
    searchParams.get('searchString')
  );
  const { setQuery, removeQuery } = useQueryParams();

  const handleDebouncedSearch = debounce((value: string) => {
    setSearchStr(value);
  }, 500);

  // watch the search string and refetch the data
  useEffect(() => {
    if (!searchStr || searchStr === '') {
      removeQuery(['searchString']);
    } else {
      setSearchStr(searchStr);
      removeQuery(['category']);
      setQuery({ searchString: searchStr || '' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchStr]);

  const handleInputChange = useCallback(
    (value: string) => {
      handleDebouncedSearch(value);
    },
    [handleDebouncedSearch]
  );
  return (
    <Input
      type='text'
      radius={'full'}
      color={'default'}
      isClearable
      isDisabled={loadingProducts}
      size={'lg'}
      startContent={
        <div className='rounded-full bg-primaryLight p-2'>
          <IconSearch color='header-100' />
        </div>
      }
      classNames={inputBorderedGray}
      placeholder='Find a product'
      defaultValue={searchStr || ''}
      onChange={(e) => handleInputChange(e.target.value)}
      onClear={() => handleInputChange('')}
    />
  );
};
