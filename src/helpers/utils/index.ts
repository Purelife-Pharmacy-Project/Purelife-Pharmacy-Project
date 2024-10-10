import { CategoryType } from '@/services/categories/types';
import * as React from "react";

export const isServer = () => typeof window === 'undefined';

export const getCategoryUrl = (
  category: string,
  allCategories: CategoryType[] | undefined
) => {
  if (!allCategories) return '';
  const categoryId = allCategories?.find(
    (c) => c.name?.toLowerCase() === category
  )?.name;

  if (!categoryId) return '';
  return `/telehealth/shop-and-order/${category?.toLowerCase()}`;
};

export const toNaira = (amount: number) => {
  return amount?.toLocaleString('en-NG', {
    style: 'currency',
    currency: 'NGN',
  });
};

export const fromNaira = (amount: string) => {
  return Number(amount.replace(/[^0-9.-]+/g, ''));
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
  const newString = html?.replace(/(<([^>]+)>)/gi, '');

  // If the new string is empty, return 'nil'
  return newString === '' ? '_' : newString;
};

export const filteredCategories = (
  categories: CategoryType[] | undefined,
  allowedCategories: string[]
) => {
  if (!categories) return [];

  const formatted = categories?.filter((category) =>
    allowedCategories.includes(category.name?.toLowerCase())
  );

  if (formatted)
    return [
      ...formatted.filter((value, index) => formatted.indexOf(value) === index),
    ];
};

export const useClickOutside = (
  popupRef: React.RefObject<HTMLElement>, // Properly type the ref
  buttonRef: React.RefObject<HTMLElement>, // Properly type the ref
  closeFunction: () => void // Typing for the close function
) => {
  React.useEffect(() => {
    /**
     * Hide if clicked on outside of the element
     */
    const handleClickOutside = (event: MouseEvent) => {
      // Ensure ref.current is defined and validate the event target
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeFunction();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef, buttonRef, closeFunction]); // Including ref and closeFunction as dependencies
};