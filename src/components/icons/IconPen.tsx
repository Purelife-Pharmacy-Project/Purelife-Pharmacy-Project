import { FC } from 'react';

type IconPenProps = {
  color?: string;
  size?: number;
};

export const IconPen: FC<IconPenProps> = ({ color = 'inherit', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 51 51'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_3098_1012'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='51'
        height='51'
      >
        <rect width='50.5312' height='50.5312' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_3098_1012)'>
        <path
          d='M4.21094 50.5312V42.1094H46.3203V50.5312H4.21094ZM8.42188 37.8984V28.9502L32.0031 5.42158C32.3891 5.03558 32.8365 4.7373 33.3454 4.52676C33.8542 4.31621 34.3893 4.21094 34.9508 4.21094C35.5122 4.21094 36.0562 4.31621 36.5825 4.52676C37.1089 4.7373 37.5826 5.05313 38.0037 5.47422L40.8987 8.42188C41.3198 8.80788 41.6269 9.26406 41.8199 9.79043C42.0129 10.3168 42.1094 10.8607 42.1094 11.4222C42.1094 11.9485 42.0129 12.4661 41.8199 12.975C41.6269 13.4838 41.3198 13.9487 40.8987 14.3698L17.3701 37.8984H8.42188ZM34.9508 14.3172L37.8984 11.3695L34.9508 8.42188L32.0031 11.3695L34.9508 14.3172Z'
          className={`fill-current text-${color}`}
        />
      </g>
    </svg>
  );
};
