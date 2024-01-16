import { AccountTransactions } from '@/components/my-account/AccountTransactions';

export default function MyAccountOrdersPage() {
  return (
    <section className='w-100 grid gap-6'>
      <h1 className='text-2xl font-semibold text-header-100'>Orders</h1>

      <AccountTransactions />
    </section>
  );
}
