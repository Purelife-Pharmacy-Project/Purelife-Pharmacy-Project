'use client';
import { useGetSubscriptionsByCustomerId } from '@/hooks';
import { AccountSubscription } from '@/services/user/types';
import {
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
    AccountSubscription | undefined
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
    {
      key: 'date',
      label: 'Date Created',
    },
    {
      key: 'refillDate',
      label: 'Date of Refill',
    },
  ];

  const data: AccountSubscription[] = [
    {
      id: 1,
      medication: 'Acebutolol',
      refillFrequency: '2',
      refillDate: '25 Oct 2023',
      date: '25 Oct 2023',
    },
    {
      id: 2,
      medication: 'Acebutolol',
      refillFrequency: '2',
      refillDate: '25 Oct 2023',
      date: '25 Oct 2023',
    },
  ];
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
          const item = data.find((item) => item.id === Number(key));
          setSelectedSubscription(item);
          setOpenSubscriptionDetailsModal(true);
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={data} emptyContent={'No rows to display.'}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.medication}</TableCell>
              <TableCell>{item.refillFrequency}</TableCell>
              <TableCell>{item.refillDate}</TableCell>
              <TableCell>{item.date}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <SubscriptionDetailsModal
        isOpen={openSubscriptionDetailsModal}
        onOpenChange={() =>
          setOpenSubscriptionDetailsModal(!openSubscriptionDetailsModal)
        }
        subscription={selectedSubscription}
      />
    </>
  );
};
