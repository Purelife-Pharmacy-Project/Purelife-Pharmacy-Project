import { useGetDeliveryAddresses } from '@/hooks';
import { selectBorderedGray } from '@/theme';
import { Select, SelectItem } from '@nextui-org/react';

type BillingAddressFormProps = {
  onSelect: (value: string) => void;
};

export const BillingAddressForm = () => {
  const { addresses, loadingAddresses } = useGetDeliveryAddresses();

  return (
    <div className='grid gap-1'>
      <label htmlFor='location' className='text-header-100'>
        Select your delivery location
      </label>
      <Select
        size={'lg'}
        aria-label='Select duration'
        placeholder='Select a location'
        classNames={selectBorderedGray}
        labelPlacement='outside'
        name='location'
        defaultValue={1}
      >
        <SelectItem className='py-3 text-black' key={1} value='lagos'>
          Lagos
        </SelectItem>
        <SelectItem className='py-3 text-black' key={2} value='abuja'>
          Abuja
        </SelectItem>
      </Select>
    </div>
  );
};
