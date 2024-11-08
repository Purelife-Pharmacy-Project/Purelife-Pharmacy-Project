import { FC } from 'react';

type IconProps = {
  size?: number;
  color?: string;
  className?: string;
};

export const IconRating: FC<IconProps> = ({
  size = 11,
  className = '',
  color,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 11 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g mask='url(#mask0_2885_972)'>
        <path d="M5.5 8.85195L8.16742 10.4653C8.65591 10.7609 9.25367 10.3238 9.12512 9.77108L8.41809 6.73729L10.777 4.69334C11.2076 4.32054 10.9762 3.61352 10.4106 3.56853L7.30613 3.305L6.09133 0.438323C5.8728 -0.0823057 5.1272 -0.0823057 4.90867 0.438323L3.69387 3.29857L0.589376 3.5621C0.0237545 3.60709 -0.207636 4.31412 0.223007 4.68691L2.58191 6.73086L1.87488 9.76465C1.74633 10.3174 2.34409 10.7545 2.83258 10.4588L5.5 8.85195Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
