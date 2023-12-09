import { Button, Card, CardBody } from '@nextui-org/react';

export const DrugTestCard = () => {
  return (
    <Card shadow='none' className='bg-white'>
      <CardBody className='grid gap-4 lg:p-8'>
        <h3 className='text-2xl font-semibold text-primaryGreenDark'>
          Chlamydia IgM Ab (Quantitative)
        </h3>
        <p className='text-sm text-content'>
          Chlamydia trachomatis Antibody (IgM) - Chlamydia trachomatis is
          associated with infections of the mucous membranes of the urogenital
          system, the upper respiratory tract, and the eye.
        </p>

        <div className='flex items-center justify-between'>
          <p className='text-xl font-semibold text-primaryGreenDark'>₦19,400</p>

          <Button color='success' className='px-8 text-white'>
            Add to cart
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
