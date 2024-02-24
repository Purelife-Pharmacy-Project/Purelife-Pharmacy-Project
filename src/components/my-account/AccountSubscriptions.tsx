'use client';
import { useGetSubscriptionsByCustomerId } from '@/hooks';
import { SubscriptionType } from '@/services/drug-refill/types';
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { useState } from 'react';
import { SubscriptionDetailsModal } from './modals/SubscriptionDetailsModal';

export const AccountSubscriptions = () => {
  const { loadingSubscriptions, subscriptions } =
    useGetSubscriptionsByCustomerId();
  const [openSubscriptionDetailsModal, setOpenSubscriptionDetailsModal] =
    useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState<
    SubscriptionType | undefined
  >(undefined);

  const columns = [
    {
      key: 'medication',
      label: 'Medication',
    },
    {
      key: 'refillFrequency',
      label: 'Refill Frequency',
    },
  ];

  const getSubscriptionName = (subscription: SubscriptionType) => {
    return subscription &&
      subscription.products &&
      subscription.products.length > 0
      ? subscription.products[0].description || 'NIL'
      : '_';
  };
  const getRefillFrequency = (subscription: SubscriptionType) => {
    return subscription &&
      subscription.products &&
      subscription.products.length > 0
      ? subscription.products[0].quantity || 'NIL'
      : 'NIL';
  };

  return (
    <>
      <Table
        isStriped
        shadow='none'
        aria-label='My Account transactions'
        removeWrapper
        classNames={{
          tbody: 'text-base',
          th: 'text-sm bg-transparent text-semibold text-header-100',
          td: 'group-data-[odd=true]:before:bg-white text-light py-4 text-header-100',
        }}
        onRowAction={(key) => {
          const item = subscriptions?.data.find(
            (item) => item.id === Number(key)
          );
          setSelectedSubscription(item);
          setOpenSubscriptionDetailsModal(true);
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>

        <TableBody
          items={subscriptions?.data || []}
          loadingContent={<Spinner size='sm' />}
          isLoading={loadingSubscriptions}
          emptyContent={
            loadingSubscriptions ? ' ' : 'No subscriptions to display.'
          }
        >
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{getSubscriptionName(item)}</TableCell>
              <TableCell>{getRefillFrequency(item)}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <SubscriptionDetailsModal
        isOpen={openSubscriptionDetailsModal}
        onOpenChange={() =>
          setOpenSubscriptionDetailsModal(!openSubscriptionDetailsModal)
        }
        subscription={{
          medication: getSubscriptionName(selectedSubscription!),
          refillFrequency: getRefillFrequency(selectedSubscription!),
        }}
      />
    </>
  );
};
