import React from 'react';

type IconProps = {
  color?: string;
  size?: number;
} & React.SVGProps<SVGSVGElement>;

export const IconRightArrow = (props: IconProps) => {
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
        d='M0.840332 3.35302L5.13739 3.35302L3.16092 5.32949L3.66386 5.82361L6.48739 3.00008L3.66386 0.17655L3.16092 0.670667L5.13739 2.64714L0.840332 2.64714L0.840332 3.35302Z'
        fill='currentColor'
      />
    </svg>
  );
};
