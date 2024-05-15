import { FC } from 'react';

type IconWomensHealthProps = {
  size?: number;
  color?: string;
};

export const IconWomensHealth: FC<IconWomensHealthProps> = ({
  size = 24,
  color = '#00CD52',
}) => {
  return (
    <svg
      width='75'
      height='75'
      viewBox='0 0 75 75'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_2885_966'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='75'
        height='75'
      >
        <rect width='75' height='75' fill='#00CD52' />
      </mask>
      <g mask='url(#mask0_2885_966)'>
        <path
          d='M32.8125 48.4375H42.1875V40.625H50V31.25H42.1875V23.4375H32.8125V31.25H25V40.625H32.8125V48.4375ZM37.5 68.75C30.2604 66.9271 24.2839 62.7734 19.5703 56.2891C14.8568 49.8047 12.5 42.6042 12.5 34.6875V15.625L37.5 6.25L62.5 15.625V34.6875C62.5 42.6042 60.1432 49.8047 55.4297 56.2891C50.7161 62.7734 44.7396 66.9271 37.5 68.75Z'
          fill='#00CD52'
        />
      </g>
    </svg>
  );
};
