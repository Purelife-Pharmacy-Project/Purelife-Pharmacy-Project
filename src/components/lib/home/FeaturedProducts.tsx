import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export const FeaturedProducts = () => {
  return (
    <div className='grid gap-10'>
      <h1 className='text-center text-2xl font-bold text-header-100 lg:text-4xl'>
        Featured Products
      </h1>

      <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 3 })
          .fill(0)
          .map((_, index) => (
            <Card key={index} shadow='none' className='w-full' radius='lg'>
              <CardBody className='overflow-visible px-0 py-2 md:px-3'>
                <div>
                  <Image
                    alt='Card background'
                    className='rounded-xl object-cover'
                    src='/images/dummy-imagee.png'
                  />
                </div>
              </CardBody>
              <CardFooter className='flex w-full justify-between'>
                <div>
                  <p className='text-lg font-semibold text-header-100'>
                    Amino Pep 200ml
                  </p>
                  <p className='font-medium text-header-100'>₦2,550.00 </p>
                </div>
                <Button
                  className='border-header-100 text-header-100'
                  variant='bordered'
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
      <div className='flex justify-center'>
        <Button color='primary' className='px-16 py-8' radius='full' size='lg'>
          Shop & Order
        </Button>
      </div>
    </div>
  );
};
