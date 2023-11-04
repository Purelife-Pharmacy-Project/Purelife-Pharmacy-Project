'use client';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import { Section } from '../home/Section';
import { DoctorsForm } from './forms/DoctorsForm';
import { PatientForm } from './forms/PatientForm';

export const DrugSubscriptionForm = () => {
  return (
    <div className='grid justify-center lg:pb-10'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <Tabs
            aria-label='Options'
            classNames={{
              tabList:
                'mx-auto rounded-full flex border border-primaryGreenDark',
              tab: 'w-full rounded-full px-10 py-6',
              cursor: 'rounded-full bg-primaryGreenDark',
              tabContent: 'group-data-[selected=true]:text-white',
            }}
          >
            <Tab key='patient' title='As a patient'>
              <Card className='bg-primaryGreenLight' shadow='none'>
                <CardBody className='lg:py-[67px]'>
                  <PatientForm />
                </CardBody>
              </Card>
            </Tab>
            <Tab key='doctor' title='As a doctor'>
              <Card className='bg-primaryGreenLight' shadow='none'>
                <CardBody className='lg:py-[67px]'>
                  <DoctorsForm />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </Section>
    </div>
  );
};
