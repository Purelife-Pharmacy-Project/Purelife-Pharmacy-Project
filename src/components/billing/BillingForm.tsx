'use client';

import {
  useCartStore,
  useGetCities,
  useGetPartner,
  useGetStates,
  useLogin,
  useRegister,
} from '@/hooks';
import { BillingPayload, billingSchema } from '@/services/billing/schema';
import { User, UserType } from '@/services/user/types';
import {
  inputBorderedRegular,
  inputDefault,
  selectBorderedGrayLight,
} from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, Input, Select, SelectItem } from '@nextui-org/react';
import { FC, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IconEyeClose } from '@/components/icons/IconEyeClose';
import { IconEye } from '@/components/icons/IconEye';
import { RegisterPayload } from '@/services/user/schema';
import { FormMessage } from '@/library/ui/FormMessage';

type BillingFormProps = {
  onUpdated: () => void;
  isProfile?: boolean;
  isPickup?: string;
};

export const BillingForm: FC<BillingFormProps> = ({
  onUpdated,
  isProfile,
  isPickup,
}) => {
  const { partner } = useGetPartner();

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const toggleVisibility = () => setPasswordIsVisible(!passwordIsVisible);

  const { setDeliveryDetails, deliveryDetails } = useCartStore();

  const { registerUser, loadingRegister, registerError } = useRegister(() => {
    const data = getValues();
    loginUser({ email: data.email, password: data.password || '' });
  });

  const { loginUser, loadingLogin, loginError, isError } = useLogin(() => {
    const data = getValues();
    const payload: UserType = {
      id: data.id,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phoneNumber: data.phone,
      contactAddress: data.address,
    };
    setDeliveryDetails(payload);
    onUpdated?.();
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    createAccount: false,
  };

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm<BillingPayload>({
    resolver: zodResolver(billingSchema),
    mode: 'all',
    defaultValues,
  });

  const isCreateAccount = watch('createAccount');
  const state = watch('stateId');

  const { states, loadingStates } = useGetStates();
  const { cities, loadingCities } = useGetCities(+(state || 0));

  useEffect(() => {
    if (partner) {
      const _user = new User(partner);

      setValue('id', _user.id);
      setValue('firstName', _user.firstName);
      setValue('lastName', _user.lastName);
      setValue('email', _user.email);
      setValue('phone', _user.phoneNumber);
      // setValue('address', removeHtmlTags(_user.contactAddress));
    } else {
      setValue('id', +(process.env.NEXT_PUBLIC_GUEST_ID || '0'));
    }
  }, [setValue, partner]);

  useEffect(() => {
    if (deliveryDetails) {
      setValue('id', deliveryDetails.id);
      setValue('firstName', deliveryDetails.name.split(' ')[0]);
      setValue('lastName', deliveryDetails.name.split(' ')[1]);
      setValue('email', deliveryDetails.email);
      setValue('phone', deliveryDetails.phoneNumber);
    }
  }, [deliveryDetails]);

  useEffect(() => {
    if (!isCreateAccount) {
      setValue('password', undefined);
      setValue('cityId', undefined);
      setValue('stateId', undefined);
    }
  }, [isCreateAccount]);

  useEffect(() => {
    if (isPickup) {
      setValue('address', isPickup);
    }
  }, [isPickup]);

  const onSubmit = (data: BillingPayload) => {
    const payload: UserType = {
      id: data.id,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phoneNumber: data.phone,
      contactAddress: data.address,
    };
    //
    if (data.createAccount) {
      // if user chooses to create an account while editing billing information
      return registerUser({
        ...payload,
        ...data,
      } as unknown as RegisterPayload);
    }

    setDeliveryDetails(payload);
    onUpdated?.();
  };

  const error = useMemo(
    () => registerError || loginError,
    [registerError, loginError]
  );
  const loading = useMemo(
    () => loadingLogin || loadingRegister,
    [loadingLogin, loadingRegister]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit, console.log)}
      className='flex flex-col gap-6'
    >
      {error ? <FormMessage type='error' message={error!} /> : null}
      {!Object.keys(deliveryDetails).length ? (
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
      ) : null}
      <div className='w-full'>
        <Input
          radius='lg'
          isRequired
          {...register('address')}
          errorMessage={errors.address?.message}
          labelPlacement='outside'
          label='Contact Address'
          placeholder='Enter your address'
          classNames={inputBorderedRegular}
        />
      </div>
      {!Object.keys(deliveryDetails).length ? (
        <>
          <div className='w-full'>
            <Input
              {...register('phone')}
              errorMessage={errors.phone?.message}
              radius='lg'
              type='text'
              minLength={2}
              maxLength={11}
              isRequired
              inputMode='numeric'
              labelPlacement='outside'
              label='Phone'
              placeholder='0123XXXXXXX'
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
          {isCreateAccount ? (
            <>
              <Input
                label='Password'
                type={passwordIsVisible ? 'text' : 'password'}
                autoComplete='new-password'
                errorMessage={errors.password?.message}
                classNames={inputDefault}
                {...register('password')}
                endContent={
                  <button
                    type='button'
                    className='px-2'
                    onClick={toggleVisibility}
                  >
                    {' '}
                    {passwordIsVisible ? (
                      <IconEyeClose color='content' />
                    ) : (
                      <IconEye color='content' />
                    )}
                  </button>
                }
              />
              <Select
                items={states || []}
                isLoading={loadingStates}
                label='State'
                errorMessage={errors.stateId?.message}
                classNames={selectBorderedGrayLight}
                onChange={(value) => setValue('stateId', +value.target.value)}
              >
                {(item) => (
                  <SelectItem
                    value={+item.id}
                    key={item.id}
                    className='capitalize'
                  >
                    {item.name}
                  </SelectItem>
                )}
              </Select>
              <Select
                items={cities || []}
                isLoading={loadingCities}
                label='City'
                errorMessage={errors.cityId?.message}
                classNames={selectBorderedGrayLight}
                onChange={(value) => setValue('cityId', +value.target.value)}
              >
                {(item) => (
                  <SelectItem
                    value={item.id}
                    key={item.id}
                    className='capitalize'
                  >
                    {item.name}
                  </SelectItem>
                )}
              </Select>
            </>
          ) : null}
          <div className='w-full'>
            <Checkbox {...register('createAccount')}>
              Create an account?
            </Checkbox>
          </div>
        </>
      ) : null}
      {/*{!partner ? (*/}
      {/*  <div className='w-full'>*/}
      {/*    <Checkbox {...register('createAccount')}>Create an account?</Checkbox>*/}
      {/*  </div>*/}
      {/*) : null}*/}

      {/* <div className='relative w-full'>
        <Textarea
          size='lg'
          labelPlacement='outside'
          label='Order Notes (Optional)'
          style={{ height: '310px' }}
          placeholder='Noted about your prescription'
          classNames={{
            label: ['text-content text-md font-light'],
            inputWrapper: [
              'border border-content bg-white data-[hover=true]:bg-white',
              'group-data-[focus=true]:bg-white',
              'group-data-[active=true]:bg-white',
            ],
          }}
        />
      </div> */}

      <Button
        type='submit'
        color='primary'
        size={isProfile ? 'lg' : 'md'}
        radius={isProfile ? 'full' : 'lg'}
        className={isProfile ? 'mb-5 w-max ' : 'w-full'}
        isDisabled={loading}
        isLoading={loading}
      >
        Save Changes
      </Button>
    </form>
  );
};
