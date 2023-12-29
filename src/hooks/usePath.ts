import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useQueryParams = () => {
  const urlParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setQuery = useCallback(
    (paramsObj: { [key: string]: string | number | boolean }) => {
      const params = new URLSearchParams(urlParams);

      Object.entries(paramsObj).forEach(([key, value]) => {
        params.set(key, String(value));
      });

      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [urlParams, router, pathname]
  );

  const removeQuery = useCallback(
    (names: string[]) => {
      const params = new URLSearchParams(urlParams);

      names.forEach((name) => {
        params.delete(name);
      });

      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [urlParams, router, pathname]
  );

  return {
    setQuery,
    removeQuery,
  };
};
