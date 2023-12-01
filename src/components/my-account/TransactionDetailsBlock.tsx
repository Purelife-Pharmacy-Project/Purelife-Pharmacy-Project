import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface TransactionDetailsBlockProps {
  title: string;
  content: string | React.ReactNode;
  contentClass?: string;
}

export const TransactionDetailsBlock: FC<TransactionDetailsBlockProps> = ({
  title,
  content,
  contentClass,
}) => {
  return (
    <div className='flex items-center justify-between gap-2 py-5'>
      <p className='font-light text-header-100'>{title}</p>
      <p className={twMerge('text-sm text-header-100', contentClass)}>
        {content}
      </p>
    </div>
  );
};
