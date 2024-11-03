'use client';
import { BookConsultationForm } from '@/components/find-a-doctor/BookConsultationForm';
import { BillingAndPaymentModal } from '@/components/find-a-doctor/modals/BillingAndPaymentModal';
import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';
import { IconVideo } from '@/components/icons/IconVideo';
import { allDoctors } from '@/helpers/mocks/doctors';
import { toNaira } from '@/helpers/utils';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ReviewConsultationBooking() {
  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  const router = useRouter();
  // const doctorSlug = usePathname().split('/').pop();

  const doctorData = allDoctors.find((doctor) => doctor.slug === 'salako');

  if (!doctorData) router.push('/find-a-doctor');
  const onOpenCheckoutModal = () => {
    setOpenCheckoutModal(true);
  };
  const onCloseCheckoutModal = () => {
    setOpenCheckoutModal(false);
  };
  return (
    <>
      <main className='mt-20 flex flex-col items-center'>
        <Section className='max-w-[95vw] md:w-[40%] md:max-w-[40%]'>
          <h1 className=' text-2xl font-bold  text-header-100 lg:text-3xl'>
            Review and book
          </h1>
          <div className='mb-4  mt-5 grid grid-cols-[1fr_3fr] gap-2 rounded-[12px] border p-3'>
            <div className='flex w-fit rounded-full bg-primaryLight'>
              <Image
                src={doctorData.image}
                alt='doctor image'
                className='rounded-full'
                width={100}
                height={100}
              />
            </div>
            <div className='text-sm font-medium text-[#5A5A5A]'>
              <h3 className='text-2xl font-semibold text-[#1E272F]'>
                {doctorData?.name}
              </h3>
              <p>{doctorData?.title}</p>
              <p>Fri, Nov 15 at 8:00 AM WAT</p>
              <div className='flex items-center gap-2'>
                <IconVideo /> <span>Video Visit</span>{' '}
              </div>
            </div>
          </div>
          <div className=' bordder-t border-b py-4'>
            <h3 className='text-xl font-semibold md:text-2xl'>
              Patient&apos;s Information
            </h3>
            <p className='text-base font-medium md:text-lg'>Full Name</p>
            <p className='mb-2 text-base font-medium text-[#5A5A5A] md:text-lg'>
              Ashley Olamide Ifeayin
            </p>
            <p className='text-base font-medium md:text-lg'>Email Address</p>
            <p className='text-base font-medium text-[#5A5A5A] md:text-lg'>
              ashley.ife@gmail.com
            </p>
          </div>
          <div className=' border-b py-4'>
            <h3 className='text-xl font-semibold md:text-2xl'>
              Consultation Fee
            </h3>
            <p className='text-base font-bold md:text-lg'>{toNaira(10000)}</p>
          </div>
          <Button
            onClick={onOpenCheckoutModal}
            className='cursor-pointer mt-10 h-[60px] w-full rounded-full text-xl'
            color='primary'
          >
            Pay ₦10,000
          </Button>
        </Section>

        <Footer />
      </main>
      <BillingAndPaymentModal
        isOpen={openCheckoutModal}
        onClose={onCloseCheckoutModal}
        toggleModal={() => setOpenCheckoutModal(false)}
        amount={10000}
      />
    </>
  );
}
