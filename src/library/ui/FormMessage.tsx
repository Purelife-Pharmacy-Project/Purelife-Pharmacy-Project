import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type FormMessageProps = {
  message?: string;
  type: 'error' | 'warning' | 'success';
};

export const FormMessage: FC<FormMessageProps> = ({ message, type }) => {
  const colorClass = () => {
    switch (type) {
      case 'error':
        return ' border border-primary bg-primary/20 text-primary';
      case 'warning':
        return 'bg-warning text-black';
      case 'success':
        return 'bg-success text-white';
      default:
        return 'bg-warning text-black';
    }
  };
  return (
    <div
      className={twMerge(
        'flex items-center justify-center gap-2 rounded-md p-2',
        colorClass()
      )}
    >
      {message || 'Message'}
    </div>
  );
};
