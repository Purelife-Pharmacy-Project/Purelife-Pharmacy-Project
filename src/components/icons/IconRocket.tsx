import { FC } from 'react';

type IconRocketProps = {
  color?: string;
  size?: string | number;
} & React.SVGProps<SVGSVGElement>;

export const IconRocket: FC<IconRocketProps> = ({
  color = 'currentColor',
  size = '24',
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`stroke-${color}`}
    >
      <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z' />
      <path d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' />
      <path d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' />
      <path d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' />
    </svg>
  );
};