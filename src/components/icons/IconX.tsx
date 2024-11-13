export const IconX = ({ size, color = 'inherit' }: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_873_12745'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width={size}
        height={size}
      >
        <rect width={size} height={size} fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_873_12745)'>
        <path
          d='M8.53464 25.3327L6.66797 23.466L14.1346 15.9993L6.66797 8.53268L8.53464 6.66602L16.0013 14.1327L23.468 6.66602L25.3346 8.53268L17.868 15.9993L25.3346 23.466L23.468 25.3327L16.0013 17.866L8.53464 25.3327Z'
          className={`fill-current text-${color}`}
        />
      </g>
    </svg>
  );
};
