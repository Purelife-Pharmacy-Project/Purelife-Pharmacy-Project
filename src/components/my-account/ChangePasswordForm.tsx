import { inputDefault } from '@/theme';
import { Button, Input } from '@nextui-org/react';

export const ChangePasswordForm = () => {
  return (
    <form className='grid gap-6'>
      <Input
        label='Old Password'
        size='lg'
        type='password'
        placeholder='Enter your old password'
        labelPlacement='outside'
        autoComplete='new-password'
        classNames={inputDefault}
      />

      <Input
        label='New Password'
        size='lg'
        type='password'
        placeholder='Enter your new password'
        labelPlacement='outside'
        autoComplete='new-confirm-password'
        classNames={inputDefault}
      />

      <Button color='primary' size='lg' radius='full' className='w-max px-10'>
        Edit Profile
      </Button>
    </form>
  );
};
