import { FC } from 'react';

type IconUploadProps = {
  color?: string;
  size?: number;
};

export const IconUpload: FC<IconUploadProps> = ({
  color = 'currentColor',
  size = 24,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      className={`stroke-current text-${color}`}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242' />
      <path d='M12 12v9' />
      <path d='m16 16-4-4-4 4' />
    </svg>
  );
};
