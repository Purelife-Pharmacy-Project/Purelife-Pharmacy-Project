export const IconHealthShield = ({ color = 'inherit', size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 57 57'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_416_1545'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width={size}
        height={size}
      >
        <rect width={size} height={size} fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_416_1545)'>
        <path
          d='M24.5808 36.2863H31.604V30.4336H37.4566V23.4105H31.604V17.5579H24.5808V23.4105H18.7282V30.4336H24.5808V36.2863ZM28.0924 51.5031C22.669 50.1375 18.1917 47.0258 14.6606 42.1681C11.1296 37.3105 9.36401 31.9163 9.36401 25.9857V11.7053L28.0924 4.68213L46.8208 11.7053V25.9857C46.8208 31.9163 45.0552 37.3105 41.5241 42.1681C37.9931 47.0258 33.5158 50.1375 28.0924 51.5031Z'
          className={`fill-current text-${color}`}
        />
      </g>
    </svg>
  );
};
