import React from 'react';

type IconProps = {
  color?: string;
  size?: number;
} & React.SVGProps<SVGSVGElement>;

export const IconLeftArrow = (props: IconProps) => {
  return (
    <svg
      width={props.size || 20}
      height={props.size || 20}
      viewBox='0 0 7 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
    >
      <path
        d='M6.15967 2.64698L1.86261 2.64698L3.83908 0.670509L3.33614 0.176391L0.512608 2.99992L3.33614 5.82345L3.83908 5.32933L1.86261 3.35286L6.15967 3.35286L6.15967 2.64698Z'
        fill='currentColor'
      />
    </svg>
  );
};
