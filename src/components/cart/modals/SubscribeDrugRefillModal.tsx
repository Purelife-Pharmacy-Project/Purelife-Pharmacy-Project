'use client';
import { IconCalendar } from '@/components/icons/IconCalendar';
import { inputBorderedGray, selectBorderedGray } from '@/theme';
import {
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { FC } from 'react';

type SubscribeDrugRefillModalProps = {
  isOpen: boolean;
  // TODO: (Me): Remember to make this mandatory. you removed this for testing purposes.
  onOpenChange?: () => void;
};

export const SubscribeDrugRefillModal: FC<SubscribeDrugRefillModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  return (
    <Modal
      size='xl'
      className='bg-primaryLight py-10 lg:px-4'
      isOpen={isOpen}
      hideCloseButton
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <div className='grid gap-2'>
                <p className='text-3xl font-bold text-header-100'>
                  Subscribe to a drug refill
                </p>
                <p className='font-normal leading-6 text-content'>
                  With Pure life, you can get your medications delivered to you
                  at your preferred intervals.
                </p>
              </div>
            </ModalHeader>

            <ModalBody>
              <Card shadow='none'>
                <CardBody>
                  <div className='grid gap-8 md:grid-flow-col md:grid-cols-[2fr_4fr] md:gap-4 xl:px-4'>
                    <p className='text-2xl text-header-100'>
                      How often do you want your meds delivered to you?
                    </p>

                    <div className='grid gap-6'>
                      <div className='grid grid-flow-col grid-cols-[2fr_5fr] items-start gap-4'>
                        <Input
                          size={'lg'}
                          classNames={inputBorderedGray}
                          defaultValue={'1'}
                          className={'h-full'}
                          type='number'
                        />
                        <Select
                          size={'lg'}
                          aria-label='Select duration'
                          classNames={selectBorderedGray}
                          labelPlacement='outside'
                          defaultSelectedKeys={['0']}
                        >
                          <SelectItem
                            className={
                              'text-content data-[selected=true]:text-primary'
                            }
                            key={0}
                            value=''
                          >
                            Select a country
                          </SelectItem>
                          <SelectItem
                            className={
                              'text-content data-[selected=true]:text-primary'
                            }
                            key={'month'}
                            value='month'
                          >
                            Month
                          </SelectItem>
                          <SelectItem
                            className={
                              'text-content data-[selected=true]:text-primary'
                            }
                            key={'week'}
                            value='week'
                          >
                            Week
                          </SelectItem>
                        </Select>
                      </div>
                      <Input
                        size={'lg'}
                        label='Start Date'
                        type='date'
                        labelPlacement='outside'
                        placeholder={'dd/mm/yyyy'}
                        classNames={inputBorderedGray}
                        className={'h-full'}
                        endContent={<IconCalendar color={'header-100'} />}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>

              <div className='flex justify-end'>
                <div className='flex gap-4'>
                  <Button
                    radius='full'
                    size='lg'
                    variant={'bordered'}
                    className={
                      'border-header-100 bg-white text-header-100 lg:px-10'
                    }
                    onPress={onClose}
                  >
                    Discard
                  </Button>
                  <Button
                    radius='full'
                    size='lg'
                    color='primary'
                    className={'lg:px-10'}
                    onPress={onClose}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
