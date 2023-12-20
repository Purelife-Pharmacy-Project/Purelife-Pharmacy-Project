import { CategoryType } from '@/services/categories/types';

export const isServer = () => typeof window === 'undefined';

export const getCategoryUrl = (
  category: string,
  allCategories: CategoryType[] | undefined
) => {
  const categoryId = allCategories?.find(
    (c) => c.name?.toLowerCase() === category
  )?.id;

  if (!categoryId) return '';
  return `/shop-and-order/${category}-${categoryId}`;
};
