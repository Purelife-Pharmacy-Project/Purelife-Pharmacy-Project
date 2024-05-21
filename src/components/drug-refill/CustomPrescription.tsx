import { IconPlusSolid } from '@/components/icons/IconPlusSolid';
import { Button, useDisclosure } from '@nextui-org/react';
import { CustomPrescriptionForm } from './modals/CustomPrescriptionForm';
import { CustomPrescriptionSuccess } from './modals/CustomPrescriptionSuccess';
import { SelectCustomerRole } from './modals/SelectCustomerRole';

export const CustomPrescription = () => {
  const {
    isOpen: isSelectCustomerRoleOpen,
    onOpenChange: onOpenSelectCustomerRoleChange,
  } = useDisclosure();
  const {
    isOpen: isCustomPrescriptionOpen,
    onOpenChange: onOpenCustomPrescriptionChange,
  } = useDisclosure();

  const { isOpen: isSuccess, onOpenChange: onOpenSuccess } = useDisclosure();

  return (
    <>
      <div className='flex w-full items-center justify-center pb-12 pt-4'>
        <div className='flex flex-col items-center gap-4 md:flex-row'>
          <p className='max-w-[252px] text-lg font-light text-content'>
            Can&apos;t spell or see your drug? Upload prescription here.
          </p>

          <Button
            size='lg'
            radius='full'
            onPress={onOpenSelectCustomerRoleChange}
            className='bg-white p-6 font-light text-content'
            startContent={<IconPlusSolid size={38} color='primary' />}
          >
            Upload Here
          </Button>
        </div>
      </div>

      {/* Modals */}

      <SelectCustomerRole
        isOpen={isSelectCustomerRoleOpen}
        onOpenChange={() => {
          onOpenSelectCustomerRoleChange();
          setTimeout(() => {
            onOpenCustomPrescriptionChange();
          }, 500);
        }}
      />

      <CustomPrescriptionForm
        isOpen={isCustomPrescriptionOpen}
        onOpenChange={() => {
          onOpenCustomPrescriptionChange();
          setTimeout(() => {
            onOpenSuccess();
          }, 500);
        }}
      />

      <CustomPrescriptionSuccess
        isOpen={isSuccess}
        onOpenChange={onOpenSuccess}
      />
    </>
  );
};
