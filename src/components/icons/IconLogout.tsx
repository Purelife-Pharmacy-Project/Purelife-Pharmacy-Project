export const IconLogout = ({ size = 24, color = 'inherit', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12 15L15 12M15 12L12 9M15 12L4 12'
        className={`stroke-current text-${color}`}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 7V5C9 4.44772 9.44772 4 10 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H10C9.44771 20 9 19.5523 9 19V17'
        className={`stroke-current text-${color}`}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
