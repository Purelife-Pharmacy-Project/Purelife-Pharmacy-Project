'use client';
import { useSearch } from '@/helpers/useContext/authContext';
import { usePathname } from 'next/navigation';

export default function AppContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showSearch } = useSearch();
  const pathname = usePathname();

  return (
    <div
      className={`${showSearch && pathname !== '/' ? 'pt-[143px]' : 'pt-[89px]'} lg:pt-[92px]`}
    >
      {children}
    </div>
  );
}
