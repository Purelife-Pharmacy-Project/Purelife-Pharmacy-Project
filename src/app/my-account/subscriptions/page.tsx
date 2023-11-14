import { AccountSubscriptions } from '@/components/my-account/AccountSubscriptions';

export default function MyAccountSubscriptionsPage() {
  return (
    <section className='w-100 grid gap-6'>
      <h1 className='text-2xl font-semibold text-header-100'>Subscriptions</h1>

      <AccountSubscriptions />
    </section>
  );
}
