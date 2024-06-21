export const IconHealthShield = ({
  color = 'inherit',
  size = 48,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 35 35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <mask
        id='mask0_93_113'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='35'
        height='35'
      >
        <rect
          x='0.80933'
          y='0.919434'
          width='33.4122'
          height='33.4122'
          fill='currentColor'
        />
      </mask>
      <g mask='url(#mask0_93_113)'>
        <path
          d='M15.4271 22.4984H19.6036V19.018H23.084V14.8415H19.6036V11.3611H15.4271V14.8415H11.9466V19.018H15.4271V22.4984ZM17.5153 31.5476C14.2901 30.7355 11.6276 28.885 9.52772 25.9963C7.42786 23.1075 6.37793 19.8997 6.37793 16.3729V7.88062L17.5153 3.7041L28.6527 7.88062V16.3729C28.6527 19.8997 27.6028 23.1075 25.5029 25.9963C23.403 28.885 20.7405 30.7355 17.5153 31.5476Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};
