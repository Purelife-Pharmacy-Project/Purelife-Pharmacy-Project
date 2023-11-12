'use client';
import { Tab, Tabs } from '@nextui-org/react';
import { OrderSummary } from './OrderSummary';

export const DeliveryModeTabs = () => {
  return (
    <div className='grid w-full lg:pb-10'>
      <div className='grid w-full gap-6 lg:justify-end'>
        <Tabs
          aria-label='Options'
          classNames={{
            tabList: 'mx-auto rounded-full flex border border-primaryGreenDark',
            tab: 'rounded-full px-10 py-6',
            cursor: 'rounded-full bg-primaryGreenDark',
            tabContent: 'group-data-[selected=true]:text-white',
          }}
        >
          <Tab key='homeDelivery' title='Home Delivery'>
            <OrderSummary />
          </Tab>
          <Tab key='inStore' title='In Store'>
            <OrderSummary />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
