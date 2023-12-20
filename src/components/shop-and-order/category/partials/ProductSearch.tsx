import { IconSearch } from '@/components/icons/IconSearch';
import { Input } from '@nextui-org/react';
import debounce from 'lodash/debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback, useEffect, useState } from 'react';

type ProductSearchProps = {
  searchString: string;
  onRefetch: () => void;
};

export const ProductSearch: FC<ProductSearchProps> = ({
  searchString,
  onRefetch,
}) => {
  const [searchStr, setSearchStr] = useState<string | null>(searchString);

  const router = useRouter();
  const pathName = usePathname();
  const urlParams = useSearchParams();

  const handleDebouncedSearch = debounce((value: string) => {
    setSearchStr(value);
  }, 500);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(urlParams);

      params.set(name, value);

      return params.toString();
    },
    [urlParams]
  );

  // watch the search string and refetch the data
  useEffect(() => {
    if (searchStr === '') {
      router.push(`${pathName}?${createQueryString('searchString', '')}`, {
        scroll: false,
      });
      onRefetch();
    } else {
      setSearchStr(searchStr);

      router.push(
        `${pathName}?${createQueryString('searchString', searchStr!)}`,
        {
          scroll: false,
        }
      );
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
      isClearable
      variant={'flat'}
      size={'lg'}
      startContent={<IconSearch />}
      placeholder='Find a product'
      defaultValue={searchString}
      onChange={(e) => handleInputChange(e.target.value)}
      onClear={() => handleInputChange('')}
    />
  );
};
