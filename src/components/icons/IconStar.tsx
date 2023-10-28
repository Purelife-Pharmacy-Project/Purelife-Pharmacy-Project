export const IconStar = ({ color = 'inherit', size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 37 37'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_416_1534'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width={size}
        height={size}
      >
        <rect width={size} height={size} fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_416_1534)'>
        <path
          d='M13.9906 25.052L18.4999 22.3156L23.0093 25.052L21.8145 19.926L25.8229 16.4572L20.5426 16.0333L18.4999 11.177L16.4572 16.0333L11.177 16.4572L15.1854 19.926L13.9906 25.052ZM18.4999 35.9208L13.3354 30.8333H6.1666V23.6645L1.0791 18.4999L6.1666 13.3354V6.1666H13.3354L18.4999 1.0791L23.6645 6.1666H30.8333V13.3354L35.9208 18.4999L30.8333 23.6645V30.8333H23.6645L18.4999 35.9208ZM18.4999 31.6041L22.3541 27.7499H27.7499V22.3541L31.6041 18.4999L27.7499 14.6458V9.24994H22.3541L18.4999 5.39577L14.6458 9.24994H9.24994V14.6458L5.39577 18.4999L9.24994 22.3541V27.7499H14.6458L18.4999 31.6041Z'
          className={`fill-current text-${color}`}
        />
      </g>
    </svg>
  );
};
