'use client';
import { IconSearch } from '@/library/icons/IconSearch';
import { inputDefault } from '@/theme';
import { Card, CardBody, Input, Radio, RadioGroup } from '@nextui-org/react';

export const ProductsFilter = () => {
  const filterOptions = [
    {
      name: 'Manufacturer',
      options: [
        {
          name: 'Johnson & Johnson',
          value: 'johnson&johnson',
        },
        {
          name: 'Pfizer',
          value: 'pfizer',
        },
        {
          name: 'Roche',
          value: 'roche',
        },
        {
          name: 'Novartis',
          value: 'novartis',
        },
        {
          name: 'Others',
          value: 'others',
        },
      ],
    },
    {
      name: 'Price',
      options: [
        {
          name: '₦0 - ₦1000',
          value: '0-1000',
        },
        {
          name: '₦1000 - ₦2000',
          value: '1000-2000',
        },
        {
          name: '₦2000 - ₦3000',
          value: '2000-3000',
        },
        {
          name: '₦3000 - ₦4000',
          value: '3000-4000',
        },
        {
          name: '₦4000 and above',
          value: '4000+',
        },
      ],
    },
  ];
  return (
    <Card shadow='none' className='h-max bg-primaryLight'>
      <CardBody>
        <h1 className='mb-4 text-2xl font-semibold text-header-100'>Filter</h1>

        <div className='grid gap-4'>
          {filterOptions.map((filterOption, index) => (
            <RadioGroup
              classNames={{ label: 'font-semibold text-header-100' }}
              label={filterOption.name}
              key={index}
            >
              <Input
                type='text'
                isClearable
                startContent={<IconSearch />}
                radius='full'
                className='mb-3'
                placeholder='search'
                classNames={inputDefault}
              />
              {filterOption.options.map((option, index) => (
                <Radio key={index} value={option.value}>
                  {option.name}
                </Radio>
              ))}
            </RadioGroup>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
