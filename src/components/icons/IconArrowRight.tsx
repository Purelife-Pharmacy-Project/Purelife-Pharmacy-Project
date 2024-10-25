export const IconArrowRight = ({ size = 24, color, ...props }: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0.32253 6.28141L11.1025 6.28141L6.14414 1.32308L7.40586 0.0834958L14.4892 7.16683L7.40586 14.2502L6.14414 13.0106L11.1025 8.05225L0.32253 8.05224L0.32253 6.28141Z'
        fill={color}
      />
    </svg>
  );
};
