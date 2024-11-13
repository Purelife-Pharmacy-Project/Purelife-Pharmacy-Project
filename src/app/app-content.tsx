'use client';
import { useSearch } from "@/helpers/useContext/authContext";

export default function AppContent({ children }: { children: React.ReactNode }) {
  const { showSearch } = useSearch();

  return (
      <div className={`${showSearch ? 'lg:pt-[92px] pt-[143px]' : 'lg:pt-[92px] pt-[89px]'}`}>
        {children}
      </div>
  );
}