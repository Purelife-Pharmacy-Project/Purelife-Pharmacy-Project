'use client';
import { usePathname } from 'next/navigation';

export const SettingsHeader = () => {
  const pathName = usePathname();
  const title = pathName.split('/')[3] || 'Settings';

  return (
    <h1 className='text-2xl font-semibold capitalize text-header-100'>
      {title}
    </h1>
  );
};
