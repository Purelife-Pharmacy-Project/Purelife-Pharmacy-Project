import { FC } from 'react';

type IconSearchProps = {
  size?: number;
  color?: string;
};

export const IconSearch: FC<IconSearchProps> = ({
  size = 18,
  color = 'white',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 18 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.62476 15.8936C12.5598 15.8936 15.7498 12.7036 15.7498 8.76855C15.7498 4.83353 12.5598 1.64355 8.62476 1.64355C4.68973 1.64355 1.49976 4.83353 1.49976 8.76855C1.49976 12.7036 4.68973 15.8936 8.62476 15.8936Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16.4998 16.6436L14.9998 15.1436'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
