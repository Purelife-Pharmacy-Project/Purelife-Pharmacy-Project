import { FC } from 'react';

type IconProps = {
  size?: number;
  color?: string;
  className?: string;
};

export const IconStarBold: FC<IconProps> = ({
  size = 32,
  className = '',
  color,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 33 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M7.7329 21.3332C7.87956 20.6798 7.6129 19.7465 7.14623 19.2798L3.90623 16.0398C2.8929 15.0265 2.4929 13.9465 2.78623 13.0132C3.0929 12.0798 4.03957 11.4398 5.4529 11.1998L9.6129 10.5065C10.2129 10.3998 10.9462 9.8665 11.2262 9.31984L13.5196 4.71984C14.1862 3.39984 15.0929 2.6665 16.0796 2.6665C17.0662 2.6665 17.9729 3.39984 18.6396 4.71984L20.9329 9.31984C21.1062 9.6665 21.4662 9.99984 21.8529 10.2265L7.4929 24.5865C7.30623 24.7732 6.98623 24.5998 7.03956 24.3332L7.7329 21.3332Z'
        fill='#FDC04B'
      />
      <path
        d='M25.0125 19.28C24.5325 19.76 24.2658 20.68 24.4258 21.3334L25.3458 25.3467C25.7325 27.0134 25.4925 28.2667 24.6658 28.8667C24.3325 29.1067 23.9325 29.2267 23.4658 29.2267C22.7858 29.2267 21.9858 28.9734 21.1058 28.4534L17.1992 26.1334C16.5858 25.7734 15.5725 25.7734 14.9592 26.1334L11.0525 28.4534C9.5725 29.32 8.30583 29.4667 7.4925 28.8667C7.18583 28.64 6.95917 28.3334 6.8125 27.9334L23.0258 11.72C23.6392 11.1067 24.5058 10.8267 25.3458 10.9734L26.6925 11.2C28.1058 11.44 29.0525 12.08 29.3592 13.0134C29.6525 13.9467 29.2525 15.0267 28.2392 16.04L25.0125 19.28Z'
        fill='#FDC04B'
      />
    </svg>
  );
};