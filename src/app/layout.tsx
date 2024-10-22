import { AppNavbar } from '@/components/AppNavbar';
import { Providers } from '@/providers';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react';
import './globals.css';
import AnnouncementBanner from '@/components/AnnouncementBanner';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  adjustFontFallback: false,
  variable: '--font-grotesque',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Purelife Health',
  description: 'your one-stop shop for wellness and lifestyle',
  metadataBase: new URL('https://purelifehealth.io'),
  keywords: [
    'Telehealth Africa',
    'Telemedicine services in Africa',
    'Digital health Africa',
    'e-Health opportunities Africa',
    'Virtual Medical Consultation Africa',
    'Mobile health Africa',
    'Telehealth technology in Africa',
    'Online doctor consultations in Africa',
    'Remote healthcare services Africa',
    'Health tech startups Africa',
    'Electronic medical records Africa',
    'Telehealth advancements Africa',
    'Rural healthcare telemedicine Africa',
    'Accessible healthcare Africa',
    'e-Prescription services Africa',
    'Prescription',
    'Dosage',
    'Vaccination',
    'Antibiotics',
    'Epidemic',
    'Side Effects',
    'Diagnosis',
    'Immunization',
    'Hygiene',
    'Infection Control',
    'Over-the-counter (OTC)',
    'Clinical Trial',
    'Health Promotion',
    'Disease Prevention',
    'Pharmacology',
    'Biomedicine',
    'Toxicology',
    'Pathogen',
    'Chronic Condition',
    'Pandemic Preparedness',
    'Generic Drugs',
    'Therapeutics',
    'Patient Counseling',
    'Drug Interactions',
    'Pharmacokinetics',
    'Health Screening',
    'Medication Adherence',
    'Public Health Policy',
    'Epidemiology',
    'Antiviral',
    'Health Education',
    'Community Health',
    'Inoculation',
    'Drug Formulary',
    'Preventive Care',
    'Health Surveillance',
    'Outbreak Response',
    'Medication Therapy Management (MTM)',
    'Health Equity',
    'Environmental Health',
    'Pharmacokinetics',
    'Biomedicine',
    'Pathogen',
    'Antiseptic',
    'Toxicology',
    'Placebo Effect',
    'Pandemic',
    'Inoculation',
    'Generic Drugs',
    'Health Policy',
    'Sanitation',
    'Patient Education',
    'Outbreak',
    'Wellness Programs',
    'Chronic Condition',
    'Healthcare Quality',
    'Meal Plan',
    'Fitness',
    'Consult Doctor',
  ],
  openGraph: {
    title: 'Purelife Health',
    description: 'your one-stop shop for wellness and lifestyle',
    siteName: 'Purelife Health',
    type: 'website',
    locale: 'en_US',
    url: 'https://purelifehealth.io',
    images: [
      {
        url: '/app-logo.png',
        width: 400,
        height: 400,
        alt: 'Purelife Health',
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ['user'],
  //   queryFn: () => getUserSession(),
  // });

  return (
    <html lang='en'>
      <body className={bricolage.className}>
        <Providers>
          <main className='bg-background text-foreground light'>
            {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
            {/* <AnnouncementBanner /> */}
            <AppNavbar />
            {/* </HydrationBoundary> */}

            {children}
          </main>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
