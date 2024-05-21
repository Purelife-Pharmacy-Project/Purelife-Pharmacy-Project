'use client';
import { removeHtmlTags } from '@/helpers/utils';
import { useCartStore, useGetPartner } from '@/hooks';
import { Button, Card, CardBody } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { IconEdit } from '../icons/IconEdit';
import { BillingAddressModal } from './BillingAddressModal';

export const BillingInfoCard = () => {
  const { partner } = useGetPartner();
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);

  const { deliveryDetails, setDeliveryDetails } = useCartStore();

  useEffect(() => {
    if (partner && Object.keys(deliveryDetails).length <= 0) {
      setDeliveryDetails(partner);
    }
  }, [partner, deliveryDetails]);

  return (
    <Card shadow='none' className='bg-blueLight'>
      <CardBody className='grid gap-4 p-8'>
        <div className='flex justify-between'>
          <p className='text-2xl font-bold text-blue-900'>Billing Details</p>

          {!Object.keys(deliveryDetails).length ? (
            <Button
              variant='faded'
              size='sm'
              onPress={() => setShowDeliveryModal(true)}
              className='font-medium text-blue-900'
            >
              Edit
              <IconEdit size={14} color='blue-900' />
            </Button>
          ) : null}
        </div>

        <div className='grid gap-6'>
          <div className='flex w-full justify-between'>
            <p className='text-light text-content'>Name</p>

            <p className='font-medium text-header-100'>
              {deliveryDetails?.name || '_'}
            </p>
          </div>
          <div className='flex w-full justify-between'>
            <p className='text-light text-content'>Email</p>

            <p className='font-medium text-header-100'>
              {deliveryDetails?.email || '_'}
            </p>
          </div>
          <div className='flex w-full justify-between'>
            <p className='text-light text-content'>Phone number</p>

            <p className='font-medium text-header-100'>
              {deliveryDetails?.phoneNumber || '_'}
            </p>
          </div>
          <div className='flex w-full justify-between'>
            <p className='text-light text-content'>Contact Address</p>

            <div className='flex flex-col gap-1'>
              <p className='font-medium text-header-100'>
                {deliveryDetails?.contactAddress &&
                deliveryDetails?.contactAddress.trim() !== ''
                  ? removeHtmlTags(deliveryDetails?.contactAddress)
                  : 'N/A'}
              </p>
              {deliveryDetails?.contactAddress === partner?.contactAddress &&
              Object.keys(deliveryDetails).length ? (
                <Button
                  variant='faded'
                  size='sm'
                  onPress={() => setShowDeliveryModal(true)}
                  className='self-end font-medium text-blue-900'
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
        />
      </CardBody>
    </Card>
  );
};
