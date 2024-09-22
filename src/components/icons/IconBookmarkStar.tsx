import React from 'react';

type Prop = { className: string };

const IconHomeHealth: React.FC<Prop> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_82_353'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='28'
        height='28'
      >
        <rect
          x='0.557007'
          y='0.336426'
          width='26.9338'
          height='26.9338'
          fill='#FF0028'
        />
      </mask>
      <g mask='url(#mask0_82_353)'>
        <path
          d='M11.4709 16.0478L14.024 14.5047L16.5771 16.0478L15.9038 13.13L18.1483 11.1941L15.2024 10.9416L14.024 8.1921L12.8457 10.9416L9.8998 11.1941L12.1443 13.13L11.4709 16.0478ZM6.16833 23.9035V5.94761C6.16833 5.33038 6.38811 4.80199 6.82765 4.36244C7.2672 3.9229 7.79559 3.70312 8.41282 3.70312H19.6353C20.2525 3.70312 20.7809 3.9229 21.2204 4.36244C21.66 4.80199 21.8797 5.33038 21.8797 5.94761V23.9035L14.024 20.5368L6.16833 23.9035Z'
          fill='#FF0028'
        />
      </g>
    </svg>
  );
};

export default IconHomeHealth;
