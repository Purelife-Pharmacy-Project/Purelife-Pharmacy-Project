'use client';
import { TransactionDetailsModal } from '@/components/my-account/modals/TransactionDetailsModal';
import { useGetOrders } from '@/hooks';
import { OrderType } from '@/services/orders/types';
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

export const AccountTransactions = () => {
  const { orders, loadingGetOrders } = useGetOrders();
  const [openTransactionDetailsModal, setOpenTransactionDetailsModal] =
    useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<
    OrderType | undefined
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
      key: 'noOfProducts',
      label: 'No. of Products',
    },
    {
      key: 'price',
      label: 'Price',
    },
  ];
  return (
    <>
      <Table
        isStriped
        shadow='none'
        selectionMode='single'
        onRowAction={(key) => {
          const item = orders?.data?.find((item) => item.id === Number(key));

          if (item) {
            setSelectedTransaction(item);
            setOpenTransactionDetailsModal(true);
          }
        }}
        aria-label='My Account transactions'
        removeWrapper
        classNames={{
          tbody: 'text-base',
          th: 'text-sm bg-transparent text-semibold text-header-100',
          tr: 'hover:bg-primary/10 rounded-xl hover:cursor-pointer',
          td: 'group-data-[odd=true]:before:bg-white text-light py-4 text-header-100',
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={orders?.data || []}
          emptyContent={loadingGetOrders ? ' ' : 'No orders to display.'}
          loadingContent={<Spinner size='sm' />}
          isLoading={loadingGetOrders}
        >
          {(item) => (
            <TableRow key={item.id}>
              <TableCell className='rounded-l-xl'>{item.id}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.products.length}</TableCell>
              <TableCell className='rounded-r-xl'>{item.amount}</TableCell>
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
