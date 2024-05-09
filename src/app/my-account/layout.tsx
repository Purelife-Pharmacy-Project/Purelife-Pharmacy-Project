import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';
import { MyAccountTabs } from '@/components/my-account/MyAccountTabs';

export default function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='grid gap-6'>
        <div className='mt-20 grid justify-center bg-primaryLight py-6'>
          <Section className='bg-primaryLight'>
            <h1 className='text-4xl font-semibold text-header-100'>
              My Account
            </h1>
          </Section>
        </div>
        <div className='grid justify-center py-6'>
          <Section>
            <MyAccountTabs>{children}</MyAccountTabs>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  );
}
