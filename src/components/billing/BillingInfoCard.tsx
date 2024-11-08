'use client';
import { removeHtmlTags } from '@/helpers/utils';
import { useCartStore, useGetPartner } from '@/hooks';
import { Button, Card, CardBody } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { IconEdit } from '../icons/IconEdit';
import { BillingAddressModal } from './BillingAddressModal';
import clsx from 'clsx';

export const BillingInfoCard = ({
  className,
  color = 'blue-900',
  isPickup,
}: {
  className?: string;
  color?: string;
  isPickup?: string;
}) => {
  const { partner } = useGetPartner();
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);

  const { deliveryDetails, setDeliveryDetails } = useCartStore();

  useEffect(() => {
    if (partner && Object.keys(deliveryDetails).length <= 0) {
      setDeliveryDetails(partner);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partner, deliveryDetails]);

  return (
    <Card
      id='details'
      shadow='none'
      radius='none'
      className={clsx('bg-transparent', className)}
    >
      <CardBody className='grid gap-4 p-0'>
        <div className='flex justify-between'>
          <p className={`text-2xl font-bold text-${color}`}>Billing Details</p>

          {!Object.keys(deliveryDetails).length ? (
            <Button
              variant='faded'
              size='sm'
              onPress={() => setShowDeliveryModal(true)}
              className={`font-medium text-${color}`}
            >
              Edit
              <IconEdit size={14} color={color} />
            </Button>
          ) : null}
        </div>

        <div className='grid gap-6'>
          <div className='flex w-full justify-between gap-2'>
            <p className='text-light text-content'>Name</p>

            <p className='text-end font-medium text-header-100'>
              {deliveryDetails?.name || '_'}
            </p>
          </div>
          <div className='flex w-full justify-between'>
            <p className='text-light text-content'>Email</p>

            <p className='text-end font-medium text-header-100 '>
              {deliveryDetails?.email || '_'}
            </p>
          </div>
          <div className='flex w-full justify-between'>
            <p className='text-light text-content'>Phone number</p>

            <p className='text-end font-medium text-header-100 '>
              {deliveryDetails?.phoneNumber || '_'}
            </p>
          </div>
          <div className='flex w-full justify-between'>
            <p className='text-light text-content'>Contact Address</p>

            <div className='flex flex-col gap-1'>
              <p className='text-end font-medium text-header-100 '>
                {deliveryDetails?.contactAddress &&
                deliveryDetails?.contactAddress.trim() !== ''
                  ? removeHtmlTags(deliveryDetails?.contactAddress)
                  : 'N/A'}
              </p>
              {Object.keys(deliveryDetails).length ? (
                <Button
                  variant='faded'
                  size='sm'
                  onPress={() => setShowDeliveryModal(true)}
                  className={`self-end font-medium text-${color || 'blue-900'}`}
                >
                  Send to a different address
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        {/* delivery address modal */}

        <BillingAddressModal
          isOpen={showDeliveryModal}
          openChange={() => setShowDeliveryModal(false)}
          isPickup={isPickup}
        />
      </CardBody>
    </Card>
  );
};
