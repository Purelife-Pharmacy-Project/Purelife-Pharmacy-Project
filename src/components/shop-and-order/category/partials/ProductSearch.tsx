import { IconSearch } from '@/components/icons/IconSearch';
import { useQueryParams } from '@/hooks';
import { Input } from '@nextui-org/react';
import debounce from 'lodash/debounce';
import { FC, useCallback, useEffect, useState } from 'react';
import { inputBorderedGray } from '@/theme';

type ProductSearchProps = {
  searchString: string;
  onRefetch: () => void;
};

export const ProductSearch: FC<ProductSearchProps> = ({
  searchString,
  onRefetch,
}) => {
  const [searchStr, setSearchStr] = useState<string | null>(searchString);
  const { setQuery, removeQuery } = useQueryParams();

  const handleDebouncedSearch = debounce((value: string) => {
    setSearchStr(value);
  }, 500);

  // watch the search string and refetch the data
  useEffect(() => {
    if (!searchStr || searchStr === '') {
      removeQuery(['searchString']);
      onRefetch();
    } else {
      setSearchStr(searchStr);
      setQuery({ searchString: searchStr || '' });
      onRefetch();
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
      size={'lg'}
      startContent={
        <div className='rounded-full bg-primaryLight p-2'>
          <IconSearch color='header-100' />
        </div>
      }
      classNames={inputBorderedGray}
      placeholder='Find a product'
      defaultValue={searchString}
      onChange={(e) => handleInputChange(e.target.value)}
      onClear={() => handleInputChange('')}
    />
  );
};
