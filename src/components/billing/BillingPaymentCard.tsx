'use client';
import { fromNaira, toNaira } from '@/helpers/utils';
import {
  useCartStore,
  useCreateOrder,
  useGetPartner,
  useGetProductsInfinity,
} from '@/hooks';
import { useStore } from '@/hooks/store';
import { CreateOrderPayload, OrderProduct } from '@/services/orders/types';
import { Product } from '@/services/products/types';
import { inputBorderedRegular, selectBordered } from '@/theme';
import {
  Button,
  Card,
  CardBody,
  Image,
  Input,
  Link,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Paystack, PaystackSuccessResponse } from '../paystack';
import { BillingAddressForm } from './BillingAddressForm';
import { DELIVERY_LOCATIONS_CATEGORY_ID } from '@/constants';

type BillingPaymentCardProps = {
  shouldFetchAddresses?: boolean;
  amount?: number;
  onPaymentSuccess?: () => void;
};

type DeliveryMethod = 'home-delivery' | 'pick-up';

export const BillingPaymentCard: FC<BillingPaymentCardProps> = ({
  shouldFetchAddresses = false,
  amount,
  onPaymentSuccess,
}) => {
  const summary = useStore(useCartStore, (state) => state)?.summary;
  const deliveryDetails = useStore(useCartStore, (state) => state)
    ?.deliveryDetails;
  const { partner } = useGetPartner();
  const cart = useStore(useCartStore, (state) => state)?.cart;
  const router = useRouter();

  const { setDeliveryFee } = useCartStore();

  useEffect(() => {
    if (cart && cart.length === 0) {
      toast.warning('Oops! Your cart is empty.');
      router.push('/cart');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearCart = useStore(useCartStore, (state) => state)
    ?.clearCart as () => void;
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank_transfer'>(
    'card'
  );
  const [deliveryAddress, setDeliveryAddress] = useState<string>('');
  const { products, loadingProducts: loadingAddresses } =
    useGetProductsInfinity({
      categoryId: DELIVERY_LOCATIONS_CATEGORY_ID,
      isPublished: false,
      limit: 10000000,
    });

  const excludeAddressIds = [62943];

  const addresses = useMemo(() => {
    const items =
      products?.pages.reduce((acc, page) => {
        return [...acc, ...page];
      }, []) || [];
    if (summary && summary.totalCartAmount >= 15000) {
      return items.filter((item) => excludeAddressIds.includes(item.id));
    } else {
      return items.filter((item) => !excludeAddressIds.includes(item.id));
    }
  }, [products, summary]);

  const [selectedAddress, setSelectedAddress] = useState<
    Partial<Product> | undefined
  >(undefined);
  const [deliveryMethod, setDeliveryMethod] = useState<
    DeliveryMethod | undefined
  >(undefined);
  const [phoneNumber, setPhoneNumber] = useState<string>(
    partner?.phoneNumber || ''
  );

  const { createOrder, loadingCreateOrder, successCreateOrder, data } =
    useCreateOrder(() => {
      clearCart();
      toast.success('Order created successfully');
      router.push('/order-status');
    });

  const handlePaymentSuccess = (response: PaystackSuccessResponse) => {
    if (!response) return;

    const cartProducts = cart?.map((product) => ({
      productId: product.product.id,
      productQuantity: product.quantity,
    }));

    const deliveryProduct = {
      productId: selectedAddress?.id as number,
      quantity: 1,
      description: `${selectedAddress?.name} - ${phoneNumber}`,
      priceUnit: selectedAddress?.lst_price,
    } as OrderProduct;

    const payload: CreateOrderPayload = {
      partnerId: +(
        deliveryDetails?.id ||
        process.env.NEXT_PUBLIC_GUEST_ID ||
        '0'
      ),
      address: deliveryDetails?.contactAddress || '',
      email: deliveryDetails?.email || '',
      phoneNumber: deliveryDetails?.phoneNumber || '',
      name: deliveryDetails?.name || '',
      products: cartProducts || [],
    };

    createOrder(payload);
  };

  const handleCreateOrder = () => {
    const cartProducts = cart?.map((product) => ({
      productId: product.product.id,
      productQuantity: product.quantity,
    }));

    const deliveryProduct = {
      productId: selectedAddress?.id as number,
      productQuantity: 1,
      description: `${selectedAddress?.name} - ${phoneNumber}`,
      priceUnit: selectedAddress?.lst_price,
    };

    const payload: CreateOrderPayload = {
      partnerId: +(
        deliveryDetails?.id ||
        process.env.NEXT_PUBLIC_GUEST_ID ||
        '0'
      ),
      address:
        deliveryProduct.productId === 1115
          ? ''
          : deliveryDetails?.contactAddress || '',
      email: deliveryDetails?.email || '',
      phoneNumber: deliveryDetails?.phoneNumber || '',
      name: deliveryDetails?.name || '',
      products: [...(cartProducts || []), deliveryProduct],
    };

    createOrder(payload);
  };

  const handleSelectBillingAddress = (value: string) => {
    setDeliveryAddress(value);
    const address = addresses?.find((address) => address.id === Number(value));
    if (address) {
      setSelectedAddress(address);
      toast.info(`Delivery fee: ${toNaira(Number(address?.lst_price))} added`);
      setDeliveryFee(address?.lst_price as number);
    }
  };

  // pick up station
  const pickUpStations = [
    {
      id: 1,
      value: '15b Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
    },
    // {
    //   id: 2,
    //   value:
    //     'Plot 5, Block 137, Cananland street, off Elf Bus stop, Lekki, Lagos, Nigeria',
    // },
  ];
  const onSelectPickupStation = (value: string) => {
    setDeliveryAddress(value);
    const address = pickUpStations?.find(
      (address) => address.id === Number(value)
    );

    setSelectedAddress({
      name: address?.value as string,
      lst_price: 0,
      id: 1115,
      description: `${address?.value}` as string,
    });

    toast.info('Pick up store selected.');
  };

  useEffect(() => {
    if (cart && cart?.length === 0) {
      router.push('/cart');
    }
  }, [cart, router]);

  useEffect(() => {
    if (successCreateOrder && data) {
      window.location.href = data.authorization_url;
    }
  }, [successCreateOrder, data]);

  return (
    <Card shadow='none' className='w-full bg-primaryLight'>
      <CardBody className='p-8 lg:p-12'>
        <div className='grid gap-4'>
          <div className='grid gap-6'>
            {shouldFetchAddresses && (
              <div className='flex flex-col gap-2 border-b border-gray-300'>
                <p className='font-medium text-header-100'>Delivery Mode</p>
                <RadioGroup
                  value={deliveryMethod}
                  onValueChange={(value) =>
                    setDeliveryMethod(value as DeliveryMethod)
                  }
                >
                  <Radio value='home-delivery'>Home Delivery</Radio>
                  <Radio value='pick-up'>Pick Up</Radio>
                </RadioGroup>
              </div>
            )}
            {deliveryMethod === 'pick-up' ? (
              <div className='flex w-full flex-col gap-4'>
                <Select
                  size={'lg'}
                  label='Select Pickup Store'
                  aria-label='Select Pickup Store'
                  placeholder='Select a pickup store'
                  classNames={selectBordered}
                  onChange={(e) => onSelectPickupStation(e.target.value)}
                  labelPlacement='outside'
                  name='location'
                >
                  {pickUpStations?.map((address) => (
                    <SelectItem
                      className='py-2 text-header-100'
                      key={address?.id}
                      textValue={address?.value}
                      value={address?.id}
                    >
                      <span>{address.value}</span>
                    </SelectItem>
                  )) ?? []}
                </Select>

                <Input
                  size='lg'
                  label='Your phone number (for pick up)'
                  placeholder='Phone Number'
                  required
                  type='number'
                  maxLength={15}
                  inputMode='numeric'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  labelPlacement='outside'
                  classNames={inputBorderedRegular}
                  name='phone number'
                />
              </div>
            ) : null}
            {shouldFetchAddresses && deliveryMethod === 'home-delivery' ? (
              <BillingAddressForm
                addresses={addresses!}
                loadingAddresses={loadingAddresses}
                onSelect={handleSelectBillingAddress}
                selectedAddress={selectedAddress}
              />
            ) : null}
            <div className='flex justify-between pb-3'>
              <RadioGroup
                label='Payment Method'
                value={paymentMethod}
                onValueChange={(value) =>
                  setPaymentMethod(value as 'card' | 'bank_transfer')
                }
                classNames={{
                  label: 'text-header-100',
                }}
              >
                <Radio value='bank_transfer'>Direct Bank Transfer</Radio>
                <Radio value='card'>Pay via Debit/ Credit/ ATM card</Radio>
              </RadioGroup>
            </div>
            <Image
              alt='secured by paystack'
              width={300}
              height='auto'
              src='/images/paystack-secure.png'
            />
            <p className='font-light text-header-100'>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{' '}
              <Link className='underline' href='#'>
                privacy policy
              </Link>
              .
            </p>
          </div>
          <Button
            color='primary'
            size='md'
            isLoading={loadingCreateOrder}
            isDisabled={
              (!shouldFetchAddresses && !partner?.contactAddress) ||
              partner?.contactAddress?.trim() === '' ||
              !deliveryMethod ||
              (deliveryMethod === 'pick-up' && phoneNumber === '') ||
              !selectedAddress
            }
            onPress={handleCreateOrder}
            radius='full'
            className='mt-6 w-full py-6'
          >
            Place Order
          </Button>

          <div className='hidden' id='paymentButton'>
            <Paystack
              amount={amount || fromNaira(summary?.totalPayableAmount || '0')}
              paymentMethod={paymentMethod}
              email={partner?.email as string}
              ctaText='Pay Now'
              label='Shop and Order'
              onSuccess={(response) => {
                onPaymentSuccess
                  ? onPaymentSuccess()
                  : handlePaymentSuccess(response);
              }}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
