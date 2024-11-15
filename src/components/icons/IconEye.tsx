import { FC } from 'react';

export type IconEyeProps = {
  size?: number;
  color?: string;
};
export const IconEye: FC<IconEyeProps> = ({
  size = 24,
  color = 'currentColor',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='icon/image/remove_red_eye_24px'>
        <path
          id='icon/image/remove_red_eye_24px_2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1 12C2.72998 7.61 7 4.5 12 4.5C17 4.5 21.27 7.61 23 12C21.27 16.39 17 19.5 12 19.5C7 19.5 2.72998 16.39 1 12ZM20.82 12C19.17 8.63 15.79 6.5 12 6.5C8.21002 6.5 4.83002 8.63 3.17999 12C4.83002 15.37 8.20001 17.5 12 17.5C15.8 17.5 19.17 15.37 20.82 12ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM7.5 12C7.5 9.52 9.52002 7.5 12 7.5C14.48 7.5 16.5 9.52 16.5 12C16.5 14.48 14.48 16.5 12 16.5C9.52002 16.5 7.5 14.48 7.5 12Z'
          className={`fill-current text-${color}`}
        />
      </g>
    </svg>
  );
};
