'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

export const AccountSubscriptions = () => {
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
      label: 'Date Frequency',
    },
    {
      key: 'refillDate',
      label: 'Date of Refill',
    },
  ];

  const data = [
    {
      id: 1,
      medication: 'Acebutolol',
      refillFrequency: '2',
      dateCreated: '25 Oct 2023',
      date: '25 Oct 2023',
    },
    {
      id: 2,
      medication: 'Acebutolol',
      refillFrequency: '2',
      dateCreated: '25 Oct 2023',
      date: '25 Oct 2023',
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
          <TableRow key={item.id}>
            <TableCell>{item.medication}</TableCell>
            <TableCell>{item.refillFrequency}</TableCell>
            <TableCell>{item.dateCreated}</TableCell>
            <TableCell>{item.date}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
