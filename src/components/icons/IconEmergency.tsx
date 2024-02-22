import { FC } from 'react';

type IconEmergencyProps = {
  size: number;
  color: string;
};

export const IconEmergency: FC<IconEmergencyProps> = ({
  size = 24,
  color = 'inherit',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 50 51'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_2537_3210'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='50'
        height='51'
      >
        <rect
          x='0.15625'
          y='0.847778'
          width='49.5873'
          height='49.5873'
          fill='#D9D9D9'
        />
      </mask>
      <g mask='url(#mask0_2537_3210)'>
        <path
          d='M22.7276 37.1601H27.1698V31.0134H33.4715V26.5195H27.1698V20.3728H22.7276V26.5195H16.4775V31.0134H22.7276V37.1601ZM13.4816 45.0631C12.4227 45.0631 11.5296 44.6994 10.8021 43.9719C10.0747 43.2445 9.71094 42.3513 9.71094 41.2924V16.3438C9.71094 15.2849 10.0747 14.3917 10.8021 13.6643C11.5296 12.9368 12.4227 12.5731 13.4816 12.5731H36.4158C37.4747 12.5731 38.3678 12.9368 39.0953 13.6643C39.8227 14.3917 40.1865 15.2849 40.1865 16.3438V41.2924C40.1865 42.3513 39.8227 43.2445 39.0953 43.9719C38.3678 44.6994 37.4747 45.0631 36.4158 45.0631H13.4816ZM13.4816 41.2924H36.4158V16.3438H13.4816V41.2924ZM12.1386 9.88713V6.11642H37.8621V9.88713H12.1386Z'
          className={`fill-current text-${color}`}
        />
      </g>
    </svg>
  );
};
