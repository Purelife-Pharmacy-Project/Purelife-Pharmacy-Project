import { genderAnswers } from '@/constants';
import { inputDefault, selectBorderedGray } from '@/theme';
import { textAreaDefault } from '@/theme/index';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import { FC, FormEvent } from 'react';

type CustomPrescriptionFormProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};

export const CustomPrescriptionForm: FC<CustomPrescriptionFormProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onOpenChange();
  };

  return (
    <Modal isOpen={isOpen} hideCloseButton onClose={onOpenChange}>
      <ModalContent className='pb-8 pt-8'>
        {(onClose) => (
          <ModalBody>
            <form onSubmit={handleSubmit} className='grid gap-4 px-3'>
              <p className='px-3 text-center text-2xl font-bold text-header-100'>
                Kindly provide the right information here.
              </p>

              <div className='grid gap-6 px-3'>
                <Input
                  type='text'
                  autoFocus
                  placeholder=' '
                  labelPlacement='outside'
                  label='Full Name'
                  classNames={inputDefault}
                  className='w-full rounded-lg border'
                />

                <Input
                  type='email'
                  labelPlacement='outside'
                  label='Email Address'
                  placeholder=' '
                  classNames={inputDefault}
                  className='w-full rounded-lg border'
                />

                <Input
                  type='tel'
                  label='Phone Number'
                  placeholder=' '
                  labelPlacement='outside'
                  classNames={inputDefault}
                  className='w-full rounded-lg border'
                  inputMode='numeric'
                />

                <Select
                  label='What is your gender'
                  placeholder=' '
                  labelPlacement='outside'
                  color='default'
                  classNames={selectBorderedGray}
                >
                  {genderAnswers?.map((gender, index) => (
                    <SelectItem
                      className='text-content'
                      value={gender.value}
                      key={index}
                    >
                      {gender.name}
                    </SelectItem>
                  )) ?? []}
                </Select>

                <Input
                  type='text'
                  labelPlacement='outside'
                  classNames={inputDefault}
                  label='List of Medications in use'
                  placeholder=' '
                  className='w-full rounded-lg border'
                />

                <Textarea
                  labelPlacement='outside'
                  classNames={textAreaDefault}
                  label='Any Known Allergies or Drug Interactions?'
                  placeholder=' '
                  className='w-full rounded-lg'
                />
              </div>

              <Button
                size='lg'
                radius='full'
                color='primary'
                className='mx-auto w-max px-10'
                type='submit'
              >
                Submit
              </Button>
            </form>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};
