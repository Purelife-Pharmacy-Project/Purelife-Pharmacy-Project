'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

export const AccountTransactions = () => {
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

  const data = [
    {
      orderId: '23748437',
      status: 'Pending',
      description: 'Lonart 20mg Tablet',
      date: '25 Oct 2023',
      price: '₦ 1500.00',
    },
    {
      orderId: '23748438',
      status: 'Pending',
      description: 'Lonart 20mg Tablet',
      date: '25 Oct 2023',
      price: '₦ 1500.00',
    },
    {
      orderId: '23748439',
      status: 'Pending',
      description: 'Lonart 20mg Tablet',
      date: '25 Oct 2023',
      price: '₦ 1500.00',
    },
  ];
  return (
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
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data} emptyContent={'No rows to display.'}>
        {(item) => (
          <TableRow key={item.orderId}>
            <TableCell>{item.orderId}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.price}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
