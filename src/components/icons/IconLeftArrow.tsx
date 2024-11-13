import React from 'react';

type IconProps = {
  color?: string;
  size?: number;
} & React.SVGProps<SVGSVGElement>;

export const IconLeftArrow = (props: IconProps) => {
  return (
    <svg
      width={props.size || 22}
      height={props.size || 14}
      viewBox='0 0 22 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
    >
      <path d="M1.40039 7.0001L7.80039 0.600098M1.40039 7.0001L7.80039 13.4001M1.40039 7.0001H21.4004" stroke="#1E272F"/>
    </svg>
  );
};
