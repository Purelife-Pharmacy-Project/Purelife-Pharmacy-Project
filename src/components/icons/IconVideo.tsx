import { FC } from 'react';

type IconVideoProps = {
  color?: string;
  size?: number;
};

export const IconVideo: FC<IconVideoProps> = ({
  color = 'inherit',
  size = 24,
}) => {
  return (
    <svg
      width='18'
      height='14'
      viewBox='0 0 18 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.125 13.25C17.125 13.4158 17.0592 13.5747 16.9419 13.6919C16.8247 13.8092 16.6658 13.875 16.5 13.875H1.5C1.33424 13.875 1.17527 13.8092 1.05806 13.6919C0.940848 13.5747 0.875 13.4158 0.875 13.25C0.875 13.0842 0.940848 12.9253 1.05806 12.8081C1.17527 12.6908 1.33424 12.625 1.5 12.625H16.5C16.6658 12.625 16.8247 12.6908 16.9419 12.8081C17.0592 12.9253 17.125 13.0842 17.125 13.25ZM17.125 1.375V10.125C17.125 10.4565 16.9933 10.7745 16.7589 11.0089C16.5245 11.2433 16.2065 11.375 15.875 11.375H2.125C1.79348 11.375 1.47554 11.2433 1.24112 11.0089C1.0067 10.7745 0.875 10.4565 0.875 10.125V1.375C0.875 1.04348 1.0067 0.725537 1.24112 0.491116C1.47554 0.256696 1.79348 0.125 2.125 0.125H15.875C16.2065 0.125 16.5245 0.256696 16.7589 0.491116C16.9933 0.725537 17.125 1.04348 17.125 1.375ZM11.8125 5.75C11.8125 5.64481 11.7859 5.54133 11.7352 5.44915C11.6846 5.35697 11.6114 5.27906 11.5227 5.22266L8.08516 3.03516C7.99067 2.97513 7.8818 2.94158 7.76992 2.93801C7.65803 2.93444 7.54724 2.96099 7.44913 3.01488C7.35101 3.06877 7.26917 3.14802 7.21215 3.24435C7.15513 3.34068 7.12503 3.45056 7.125 3.5625V7.9375C7.12503 8.04944 7.15513 8.15932 7.21215 8.25565C7.26917 8.35198 7.35101 8.43123 7.44913 8.48512C7.54724 8.53901 7.65803 8.56556 7.76992 8.56199C7.8818 8.55842 7.99067 8.52487 8.08516 8.46484L11.5227 6.27734C11.6114 6.22094 11.6846 6.14303 11.7352 6.05085C11.7859 5.95867 11.8125 5.85519 11.8125 5.75Z'
        fill='#1E272F'
      />
    </svg>
  );
};