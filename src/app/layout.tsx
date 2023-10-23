import { Providers } from '@/providers';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Purelife Web',
  description: 'your one-stop shop for wellness and lifestyle',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={bricolage.className}>
        <Providers>
          <main className='bg-background text-foreground light'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
