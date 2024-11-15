export const IconChat = ({ size = 24, color = 'inherit', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16 8H20C20.5523 8 21 8.44772 21 9V20L17.6667 17.2308C17.4872 17.0817 17.2611 17 17.0277 17H9C8.44771 17 8 16.5523 8 16V13'
        className={`stroke-current text-${color}`}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15 4H4C3.44772 4 3 4.44772 3 5V16L6.33329 13.2308C6.51283 13.0817 6.73889 13 6.97231 13H15C15.5523 13 16 12.5523 16 12V5C16 4.44772 15.5523 4 15 4Z'
        className={`stroke-current text-${color}`}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
