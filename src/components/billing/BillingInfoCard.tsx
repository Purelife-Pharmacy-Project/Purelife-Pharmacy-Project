'use client';
import { useGetUser } from '@/hooks';
import { Button, Card, CardBody } from '@nextui-org/react';
import { useState } from 'react';
import { IconEdit } from '../icons/IconEdit';
import { BillingAddressModal } from './BillingAddressModal';

export const BillingInfoCard = () => {
  const { user } = useGetUser();
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);

  return (
    <Card shadow='none' className='bg-blueLight'>
      <CardBody>
        <div className='grid gap-6'>
          <div className='flex w-full justify-between'>
            <p className='text-light text-content'>Name</p>

            <p className='font-medium text-header-100'>{user?.name}</p>
          </div>
          <div className='flex w-full justify-between'>
            <p className='text-light text-content'>Email</p>

            <p className='font-medium text-header-100'>{user?.email}</p>
          </div>
          <div className='flex w-full justify-between'>
            <p className='text-light text-content'>Phone number</p>

            <p className='font-medium text-header-100'>{user?.phoneNumber}</p>
          </div>
          <div className='flex w-full justify-between'>
            <p className='text-light text-content'>Contact Address</p>

            <p className='font-medium text-header-100'>
              {user?.contactAddress && user?.contactAddress.trim() !== ''
                ? user?.contactAddress
                : 'N/A'}
            </p>
          </div>
        </div>

        <div className='flex justify-end'>
          <Button
            variant='bordered'
            color='primary'
            onClick={() => setShowDeliveryModal(true)}
            className='mt-10'
          >
            Edit
            <IconEdit size={18} color='primary' />
          </Button>
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
