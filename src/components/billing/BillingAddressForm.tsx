import { toNaira } from '@/helpers/utils';
import { Product } from '@/services/products/types';
import { selectBorderedGray } from '@/theme';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { FC } from 'react';

type BillingAddressFormProps = {
  onSelect: (value: string) => void;
  addresses: Product[];
  loadingAddresses: boolean;
  selectedAddress: Partial<Product> | undefined;
};

export const BillingAddressForm: FC<BillingAddressFormProps> = ({
  onSelect,
  addresses,
  loadingAddresses,
  selectedAddress,
}) => {
  return (
    <div className='grid gap-1'>
      <label htmlFor='location' className='text-header-100'>
        Select your delivery location
      </label>
      <Autocomplete
        size={'lg'}
        isDisabled={loadingAddresses}
        aria-label='Select delivery location'
        placeholder='Select a location'
        classNames={selectBorderedGray}
        onSelectionChange={(e) => onSelect(e?.toString() || '')}
        labelPlacement='outside'
        name='location'
        selectedKey={selectedAddress?.id?.toString()}
      >
        {addresses?.map((address) => (
          <AutocompleteItem
            className='py-2 text-header-100'
            key={address.id}
            textValue={address.name}
            value={address.id}
          >
            <div className='flex items-center justify-between'>
              <span>{address.name}</span>
              {/* <span className='text-right font-medium'>
                {toNaira(address.lst_price)}
              </span> */}
            </div>
          </AutocompleteItem>
        )) ?? []}
      </Autocomplete>
    </div>
  );
};
