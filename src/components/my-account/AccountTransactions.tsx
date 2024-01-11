'use client';
import { TransactionDetailsModal } from '@/components/my-account/modals/TransactionDetailsModal';
import {
  AccountTransaction,
  AccountTransactionStatus,
} from '@/services/user/types';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { useState } from 'react';
import { useGetOrders } from '@/hooks';

export const AccountTransactions = () => {
  const { orders, loadingGetOrders } = useGetOrders();
  const [openTransactionDetailsModal, setOpenTransactionDetailsModal] =
    useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<
    AccountTransaction | undefined
  >(undefined);

  const columns = [
    {
      key: 'orderId',
      label: 'Order ID',
    },
    {
      key: 'status',
      label: 'Status',
    },
    {
      key: 'description',
      label: 'Description',
    },
    {
      key: 'date',
      label: 'Date',
    },
    {
      key: 'price',
      label: 'Price',
    },
  ];
  const data: AccountTransaction[] = [
    {
      orderId: '23748437',
      status: AccountTransactionStatus.Pending,
      description: 'Lonart 20mg Tablet',
      date: '25 Oct 2023',
      amount: '₦ 1500.00',
    },
    {
      orderId: '23748438',
      status: AccountTransactionStatus.Failed,
      description: 'Lonart 20mg Tablet',
      date: '25 Oct 2023',
      amount: '₦ 1500.00',
    },
    {
      orderId: '23748439',
      status: AccountTransactionStatus.Pending,
      description: 'Lonart 20mg Tablet',
      date: '25 Oct 2023',
      amount: '₦ 1500.00',
    },
  ];
  return (
    <>
      <Table
        isStriped
        shadow='none'
        selectionMode='single'
        onRowAction={(key) => {
          const item = data.find((item) => item.orderId === key);
          setSelectedTransaction(item);
          setOpenTransactionDetailsModal(true);
        }}
        aria-label='My Account transactions'
        removeWrapper
        classNames={{
          tbody: 'text-base',
          th: 'text-sm bg-transparent text-semibold text-header-100',
          td: 'group-data-[odd=true]:before:bg-white text-light py-4 text-header-100',
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={data} emptyContent={'No rows to display.'}>
          {(item) => (
            <TableRow key={item.orderId}>
              <TableCell>{item.orderId}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.amount}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TransactionDetailsModal
        isOpen={openTransactionDetailsModal}
        onOpenChange={() =>
          setOpenTransactionDetailsModal(!openTransactionDetailsModal)
        }
        transaction={selectedTransaction}
      />
    </>
  );
};
