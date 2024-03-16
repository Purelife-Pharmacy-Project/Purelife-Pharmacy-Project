import { FC } from 'react';

type IconFilterProps = {
  color?: string;
  size?: number;
};
export const IconFilter: FC<IconFilterProps> = ({
  size = 24,
  color = 'inherit',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_3001_1130'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#40000A' />
      </mask>
      <g mask='url(#mask0_3001_1130)'>
        <path
          d='M3 18V16H9V18H3ZM3 13V11H15V13H3ZM3 8V6H21V8H3Z'
          fill='#40000A'
        />
      </g>
    </svg>
  );
};
