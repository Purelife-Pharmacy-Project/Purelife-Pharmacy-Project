export const IconHome = ({ color = 'success', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_416_861'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width={size}
        height={size}
      >
        <rect width={size} height={size} fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_416_861)'>
        <path
          d='M21.2 33.8H26.85V28.8H31.85V23.15H26.85V18.15H21.2V23.15H16.2V28.8H21.2V33.8ZM7.19995 42.8V17.65L24 5.05005L40.8 17.6667V42.8H7.19995Z'
          className={`fill-current text-${color}`}
        />
      </g>
    </svg>
  );
};
