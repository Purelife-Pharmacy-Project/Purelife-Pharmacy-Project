import React from 'react';

type Prop = { className: string };

const IconHomeHealth: React.FC<Prop> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_82_362'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect
          x='0.701294'
          y='0.662598'
          width='22.7722'
          height='22.7722'
          fill='#D9D9D9'
        />
      </mask>
      <g mask='url(#mask0_82_362)'>
        <path
          d='M10.7591 16.6987H13.4396V14.3266H15.8117V11.6461H13.4396V9.27399H10.7591V11.6461H8.38697V14.3266H10.7591V16.6987ZM4.11719 20.9685V9.03678L12.0875 3.05908L20.0577 9.04468V20.9685H4.11719Z'
          fill='#FF0028'
        />
      </g>
    </svg>
  );
};

export default IconHomeHealth;
