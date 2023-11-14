import { AccountPersonalForm } from '@/components/my-account/AccountPersonalForm';

export default function MyAccountPage() {
  return (
    <section className='w-100 grid gap-6 lg:max-w-[516px]'>
      <h1 className='text-2xl font-semibold text-header-100'>
        Personal Details
      </h1>

      <AccountPersonalForm />
    </section>
  );
}
