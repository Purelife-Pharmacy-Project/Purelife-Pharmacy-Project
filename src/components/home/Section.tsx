import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={twMerge(
        'lg:max-w-1024 w-full bg-background px-4 lg:px-6 xl:w-1024',
        className
      )}
    >
      {children}
    </section>
  );
};