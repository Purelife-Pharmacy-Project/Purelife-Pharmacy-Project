export const IconImage = ({ size = 24, color = 'currentColor' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
    >
      <path
        d='M5.3 10.06H13.12L10.58 6.64L8.52 9.34L7.16 7.6L5.3 10.06ZM3.6 13.6C3.28 13.6 3 13.48 2.76 13.24C2.52 13 2.4 12.72 2.4 12.4V1.2C2.4 0.88 2.52 0.6 2.76 0.36C3 0.12 3.28 0 3.6 0H14.8C15.12 0 15.4 0.12 15.64 0.36C15.88 0.6 16 0.88 16 1.2V12.4C16 12.72 15.88 13 15.64 13.24C15.4 13.48 15.12 13.6 14.8 13.6H3.6ZM3.6 12.4H14.8V1.2H3.6V12.4ZM1.2 16C0.88 16 0.6 15.88 0.36 15.64C0.12 15.4 0 15.12 0 14.8V2.4H1.2V14.8H13.6V16H1.2Z'
        className={`fill-current text-${color}`}
      />
    </svg>
  );
};
