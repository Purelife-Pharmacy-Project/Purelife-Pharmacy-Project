import { FC } from 'react';

type InputErrorProps = {
  message?: string;
};
export const InputError: FC<InputErrorProps> = ({ message }) => {
  return <div className='mt-1.5 text-tiny text-danger'>{message}</div>;
};
