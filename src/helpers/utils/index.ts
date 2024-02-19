import { CategoryType } from '@/services/categories/types';

export const isServer = () => typeof window === 'undefined';

export const getCategoryUrl = (
  category: string,
  allCategories: CategoryType[] | undefined
) => {
  if (!allCategories) return '';
  const categoryId = allCategories?.find(
    (c) => c.name?.toLowerCase() === category
  )?.id;

  if (!categoryId) return '';
  return `/telehealth/shop-and-order/${category}-${categoryId}`;
};

export const toNaira = (amount: number) => {
  return amount?.toLocaleString('en-NG', {
    style: 'currency',
    currency: 'NGN',
  });
};

export const fromNaira = (amount: string) => {
  const numberAmount = Number(amount.replace(/[^0-9.-]+/g, ''));
  return numberAmount;
};

export const randomId = () => {
  return (new Date().getTime() * 0.5).toString(36);
};

export const filteredQueryParams = <T extends Record<string, unknown>>(
  queryParams: T
): string => {
  return Object.entries(queryParams)
    .filter(([_, value]) => value != null && value !== '')
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};

export const removeHtmlTags = (html: string) => {
  // Remove all HTML tags
  const newString = html.replace(/(<([^>]+)>)/gi, '');

  // If the new string is empty, return 'nil'
  return newString === '' ? 'nil' : newString;
};
