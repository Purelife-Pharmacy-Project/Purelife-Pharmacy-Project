import { AccountTransactions } from '@/components/my-account/AccountTransactions';

export default function MyAccountTransactionsPage() {
  return (
    <section className='w-100 grid gap-6'>
      <h1 className='text-2xl font-semibold text-header-100'>Transactions</h1>

      <AccountTransactions />
    </section>
  );
}
