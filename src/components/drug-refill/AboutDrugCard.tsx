'use client';
import {
  useCreateSubscription,
  useGetSubscriptionTempList,
  useGetUser,
} from '@/hooks';
import { CreateSubscriptionPayload } from '@/services/drug-refill/types';
import { Product } from '@/services/products/types';
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  Radio,
  RadioGroup,
} from '@nextui-org/react';
import React, { FC, useEffect } from 'react';
import { toast } from 'sonner';
import { IconPlus } from '../icons/IconPlus';
import { IconSpinner } from '../icons/IconSpinner';
import { Paystack } from '../paystack';
import { DrugRefillModal } from './DrugRefillModal';
import { Quantity } from './Quantity';

type AboutDrugCardProps = {
  product?: Product;
  addNew?: () => void;
  onFinish?: () => void;
};

type SubProducts = {
  product: Product;
  quantity: number;
  subscriptionId: string;
};

export const AboutDrugCard: FC<AboutDrugCardProps> = ({
  product,
  addNew,
  onFinish,
}) => {
  const { subscriptionTempList, loadingSubscriptionTempList } =
    useGetSubscriptionTempList();
  const [selectedSubscriptionMethod, setSelectedSubscriptionMethod] =
    React.useState<string | undefined>(undefined);
  const [productQuantity, setProductQuantity] = React.useState<number>(1);
  const [showDrugRefillModal, setShowDrugRefillModal] = React.useState(false);

  const { user } = useGetUser();

  useEffect(() => {
    if (product) {
      setShowDrugRefillModal(true);
    }
  }, [product]);

  const { loadingCreateSubscription, createSubscription } =
    useCreateSubscription(() => {
      setProductSubscriptionList([]);
      onFinish?.();
    });

  // this is a list of products that a user would like to subscribe to.
  const [productSubscriptionList, setProductSubscriptionList] = React.useState<
    SubProducts[]
  >([]);

  // this would handle the addition of a subscription to the list of subscriptions
  const handleAddSubscription = () => {
    if (!product) return;
    const productExists = productSubscriptionList.find(
      (item) => item.product.id === product.id
    );

    if (productExists) {
      toast.info('Product already added to subscription');
      return;
    }

    const payload: SubProducts = {
      product: product,
      quantity: productQuantity,
      subscriptionId: selectedSubscriptionMethod || '',
    };
    setProductSubscriptionList([...productSubscriptionList, payload]);

    // clear the selected subscription method
    setSelectedSubscriptionMethod(undefined);
    // clear the selected subscription method
    setSelectedSubscriptionMethod(undefined);
    // clear the product quantity
    setProductQuantity(1);
  };

  const handleCreateSubscription = () => {
    if (!selectedSubscriptionMethod)
      return toast.info('Please select a subscription method');
    if (productSubscriptionList.length === 0)
      return toast.info('Please add a product to subscribe to');

    const paymentButton = document.querySelector(
      '#paymentButton > button'
    ) as HTMLButtonElement;

    if (paymentButton) {
      paymentButton.click();
    }
  };

  const totalAmount = productSubscriptionList.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handlePaymentSuccess = (response: any) => {
    if (!response) return;

    const payload: CreateSubscriptionPayload = {
      templateId: Number(selectedSubscriptionMethod),
      products: productSubscriptionList.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
        priceUnit: item.product.price,
      })),
    };

    createSubscription(payload);
  };

  return (
    <section className='absolute w-full'>
      <Card
        shadow='none'
        style={{
          boxShadow: '5px 5px 100px 5px rgba(0, 0, 0, 0.05)',
        }}
        className='mb-5 w-full'
      >
        <CardBody className='h-max bg-white py-8 md:h-[650px] lg:px-20'>
          <div className='flex w-full items-center justify-between'>
            <p className='my-6 text-xl font-medium text-header-100'>
              Your Medications
            </p>

            <Button
              radius='full'
              size='sm'
              isDisabled={productSubscriptionList.length === 0}
              onPress={addNew}
              color='primary'
              isIconOnly
              className='border-primary text-white'
            >
              <IconPlus />
            </Button>
          </div>

          {productSubscriptionList.length === 0 ? (
            <p className='italic text-content'>
              Your Medications will show here. Search via the search bar above
              to continue.
            </p>
          ) : null}
          {productSubscriptionList.length > 0 ? (
            <React.Fragment>
              <div className='max-h-[300px] min-h-[300px] w-full overflow-y-auto'>
                <Accordion isCompact variant='bordered'>
                  {productSubscriptionList.map((subscription, index) => (
                    <AccordionItem
                      aria-label={subscription.product.name}
                      title={subscription.product.name?.toLowerCase() || 'N/A'}
                      classNames={{
                        title: 'capitalize text-header-100 font-light text-lg',
                      }}
                      key={index}
                    >
                      <React.Fragment>
                        <div className='flex flex-col gap-4'>
                          <div className='flex justify-between border-b border-gray-300 py-4'>
                            <p className='text-lg font-light text-header-100'>
                              Medication
                            </p>
                            <p className='max-w-[300px] break-words text-right font-semibold capitalize text-header-100 lg:text-lg'>
                              {subscription.product?.name?.toLowerCase() ||
                                'N/A'}
                            </p>
                          </div>
                          <div className='flex justify-between border-b border-gray-300 py-4'>
                            <p className='text-lg font-light text-header-100'>
                              Product Price
                            </p>
                            <p className='max-w-[300px] break-words text-right text-lg font-semibold lowercase text-header-100'>
                              {subscription.product?.amount || 'N/A'}
                            </p>
                          </div>
                          <div className='flex justify-between border-b border-gray-300 py-4'>
                            <p className='text-lg font-light text-header-100'>
                              Quantity
                            </p>
                            <div
                              className={
                                !subscription.product
                                  ? 'pointer-events-none opacity-50'
                                  : ''
                              }
                            >
                              <Quantity
                                quantity={subscription.quantity}
                                decreaseQuantity={() => {
                                  if (productQuantity > 1) {
                                    const newProductSubscriptionList =
                                      productSubscriptionList.map((item) => {
                                        if (
                                          item.product.id ===
                                          subscription.product.id
                                        ) {
                                          return {
                                            ...item,
                                            quantity: item.quantity - 1,
                                          };
                                        }
                                        return item;
                                      });

                                    setProductSubscriptionList(
                                      newProductSubscriptionList
                                    );
                                  }
                                }}
                                increaseQuantity={() => {
                                  if (productQuantity < 3) {
                                    const newProductSubscriptionList =
                                      productSubscriptionList.map((item) => {
                                        if (
                                          item.product.id ===
                                          subscription.product.id
                                        ) {
                                          return {
                                            ...item,
                                            quantity: item.quantity + 1,
                                          };
                                        }
                                        return item;
                                      });

                                    setProductSubscriptionList(
                                      newProductSubscriptionList
                                    );
                                  }
                                }}
                                totalQuantity={3}
                              />
                            </div>
                          </div>
                          {/* <div className='flex justify-between border-b border-gray-300 py-4'>
                            <p className='text-lg font-light text-header-100'>
                              Subscription Plan
                            </p>
                            <RadioGroup
                              isDisabled={
                                loadingSubscriptionTempList ||
                                !subscription.product
                              }
                              defaultValue={subscription.subscriptionId}
                              onValueChange={(value) => {
                                const newProductSubscriptionList =
                                  productSubscriptionList.map((item) => {
                                    if (
                                      item.product.id ===
                                      subscription.product.id
                                    ) {
                                      return {
                                        ...item,
                                        subscriptionId: value,
                                      };
                                    }
                                    return item;
                                  });

                                setProductSubscriptionList(
                                  newProductSubscriptionList
                                );
                              }}
                              orientation='horizontal'
                              className='flex flex-col gap-4 lg:flex-row'
                            >
                              {subscriptionTempList?.map((item) => (
                                <Radio key={item.id} value={String(item.id)}>
                                  {item.name}
                                </Radio>
                              ))}
                            </RadioGroup>
                          </div> */}
                        </div>

                        <div className='my-5 flex justify-end'>
                          <div className='flex flex-col items-center gap-4 lg:flex-row'>
                            <Button
                              variant='bordered'
                              radius='full'
                              isDisabled={!subscription.product}
                              onPress={() => {
                                const newProductSubscriptionList =
                                  productSubscriptionList.filter(
                                    (item) =>
                                      item.product.id !==
                                      subscription.product.id
                                  );

                                setProductSubscriptionList(
                                  newProductSubscriptionList
                                );
                              }}
                              size='lg'
                              className='border-header-100 text-header-100'
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </React.Fragment>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className='grid gap-4 pt-4 lg:flex-row'>
                <RadioGroup
                  label='Subscription Plan'
                  isDisabled={loadingSubscriptionTempList || !product}
                  onValueChange={(value) =>
                    setSelectedSubscriptionMethod(value)
                  }
                >
                  {subscriptionTempList?.map((item) => (
                    <Radio key={item.id} value={String(item.id)}>
                      {item.name}
                    </Radio>
                  ))}
                </RadioGroup>
                <div className='flex items-center justify-start gap-4 pt-4 lg:flex-row'>
                  <Button
                    variant='bordered'
                    radius='full'
                    isDisabled={productSubscriptionList.length === 0}
                    onPress={() => {
                      setProductSubscriptionList([]);
                    }}
                    size='lg'
                    className='border-header-100 text-header-100'
                  >
                    Clear
                  </Button>

                  <Button
                    radius='full'
                    size='lg'
                    spinner={<IconSpinner />}
                    isLoading={loadingCreateSubscription}
                    isDisabled={productSubscriptionList.length === 0}
                    onPress={handleCreateSubscription}
                    color='primary'
                    className='border-primary text-white'
                  >
                    Create Subscription Plan
                  </Button>
                </div>
              </div>
            </React.Fragment>
          ) : null}
        </CardBody>
      </Card>

      <DrugRefillModal
        isOpen={showDrugRefillModal}
        openChange={() => setShowDrugRefillModal(false)}
        product={product}
        handleAddSubscription={handleAddSubscription}
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
      />

      <div className='hidden' id='paymentButton'>
        <Paystack
          amount={totalAmount}
          email={user?.email as string}
          ctaText='Pay Now'
          label='Shop and Order'
          onSuccess={(response) => handlePaymentSuccess(response)}
        />
      </div>
    </section>
  );
};
