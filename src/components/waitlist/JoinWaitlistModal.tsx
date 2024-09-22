import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  WaitingListPayload,
  waitingListSchema,
} from '@/services/waitlist/schema';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '@nextui-org/react';
import { inputBorderedRegular } from '@/theme';

type Prop = {
  isOpen: boolean;
  openChange: () => void;
};

const JoinWaitlistModal: React.FC<Prop> = ({ isOpen, openChange }) => {
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitingListPayload>({
    resolver: zodResolver(waitingListSchema),
    mode: 'all',
    defaultValues,
  });

  const onSubmit = (data: WaitingListPayload) => {};

  return (
    <Modal onOpenChange={openChange} isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <p className='text-2xl font-bold text-header-100'>
            Join Waiting List
          </p>
        </ModalHeader>
        <ModalBody>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-6 pb-5'
          >
            <div className='flex gap-4'>
              <Input
                radius='lg'
                {...register('firstName')}
                errorMessage={errors.firstName?.message}
                labelPlacement='outside'
                label='First name'
                isRequired
                placeholder='Enter your first name'
                classNames={inputBorderedRegular}
              />
              <Input
                radius='lg'
                {...register('lastName')}
                errorMessage={errors.lastName?.message}
                labelPlacement='outside'
                isRequired
                label='Last name'
                placeholder='Enter your last name'
                classNames={inputBorderedRegular}
              />
            </div>
            <div className='w-full'>
              <Input
                {...register('email')}
                errorMessage={errors.email?.message}
                radius='lg'
                type='email'
                isRequired
                labelPlacement='outside'
                label='Email Address'
                placeholder='john@doe.com'
                classNames={inputBorderedRegular}
              />
            </div>

            <Button
              type='submit'
              color='primary'
              size={'lg'}
              radius={'full'}
              className={'w-full'}
              // isDisabled={loading}
              // isLoading={loading}
            >
              Save Changes
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default JoinWaitlistModal;
