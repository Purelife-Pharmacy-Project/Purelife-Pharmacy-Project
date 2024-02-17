import { toNaira } from '@/helpers/utils';
import { useGetDeliveryAddresses } from '@/hooks';
import { selectBorderedGray } from '@/theme';
import { Select, SelectItem } from '@nextui-org/react';
import { FC } from 'react';

type BillingAddressFormProps = {
  onSelect: (value: string) => void;
};

export const BillingAddressForm: FC<BillingAddressFormProps> = ({
  onSelect,
}) => {
  const { addresses, loadingAddresses } = useGetDeliveryAddresses();

  return (
    <div className='grid gap-1'>
      <label htmlFor='location' className='text-header-100'>
        Select your delivery location
      </label>
      <Select
        size={'lg'}
        isDisabled={loadingAddresses}
        aria-label='Select duration'
        placeholder='Select a location'
        classNames={selectBorderedGray}
        defaultValue={addresses?.[0]?.id ?? ''}
        onChange={(e) => onSelect(e.target.value)}
        labelPlacement='outside'
        name='location'
      >
        {addresses?.map((address) => (
          <SelectItem
            className='py-2 text-header-100'
            key={address.id}
            textValue={address.name}
            value={address.id}
          >
            <div className='flex items-center justify-between'>
              <span>{address.name}</span>
              <span className='text-right font-medium'>
                {toNaira(address.price)}
              </span>
            </div>
          </SelectItem>
        )) ?? []}
      </Select>
    </div>
  );
};
