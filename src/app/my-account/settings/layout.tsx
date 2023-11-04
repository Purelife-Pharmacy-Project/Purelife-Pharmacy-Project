import { SettingsBackButton } from '@/components/lib/my-account/SettingsBackButton';
import { SettingsHeader } from '@/components/lib/my-account/SettingsHeader';

export default function AccountSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='w-100 grid gap-6'>
      <div className='flex gap-4'>
        <SettingsBackButton />
        <SettingsHeader />
      </div>

      {children}
    </section>
  );
}
