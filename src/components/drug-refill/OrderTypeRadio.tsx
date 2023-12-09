import { FC } from 'react';
import { Radio, RadioGroup } from '@nextui-org/react';

type OrderTypeRadioProps = {
  defaultValue?: string;
  orientation?: 'horizontal' | 'vertical';
  onChange?: (value: string) => void;
};

export const OrderTypeRadio: FC<OrderTypeRadioProps> = ({
  defaultValue = 'one-time',
  orientation = 'horizontal',
  onChange,
}) => {
  return (
    <RadioGroup
      onValueChange={onChange}
      defaultValue={defaultValue}
      orientation={orientation}
    >
      <Radio value='one-time'>One Time Order</Radio>
      <Radio value='recurring'>Recurring Order</Radio>
    </RadioGroup>
  );
};
