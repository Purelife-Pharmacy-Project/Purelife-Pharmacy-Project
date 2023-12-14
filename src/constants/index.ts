import { IconDoctor } from '@/components/icons/IconDoctor';
import { IconFluidMed } from '@/components/icons/IconFluidMed';
import { IconLabs } from '@/components/icons/IconLabs';
import { IconPill } from '@/components/icons/IconPill';
import { IconPrescription } from '@/components/icons/IconPrescription';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api/v1';

export const USER_TOKEN_KEY = 'user_token';

export const healthServices = [
  {
    icon: IconPill as ({
      color,
      size,
    }: {
      color?: string;
      size?: number;
    }) => JSX.Element,
    title: 'Subscribe to a drug refill',
    description:
      'Get your medications delivered to you at your preferred intervals.',
    url: '/drug-refill',
  },
  {
    icon: IconLabs as ({
      color,
      size,
    }: {
      color?: string;
      size?: number;
    }) => JSX.Element,
    title: 'Book a lab test',
    description:
      'Choose from our over 500 effective test packages, aimed at providing you with the best health care possible.',
    url: '/book-a-test',
  },
  {
    icon: IconFluidMed as ({
      color,
      size,
    }: {
      color?: string;
      size?: number;
    }) => JSX.Element,
    title: 'Get Vaccination',
    description: 'Choose from our expertly curated vaccines whenever you want.',
    url: '/get-vaccination',
  },
  {
    icon: IconDoctor as ({
      color,
      size,
    }: {
      color?: string;
      size?: number;
    }) => JSX.Element,
    title: 'Consult with a doctor',
    description:
      'Choose from our over 500 effective test packages, aimed at providing you with the best health care possible.',
    url: '/find-a-doctor',
  },
  {
    icon: IconPrescription as ({
      color,
      size,
    }: {
      color?: string;
      size?: number;
    }) => JSX.Element,
    title: 'Upload Prescription',
    description:
      'Choose from our over 500 effective test packages, aimed at providing you with the best health care possible.',
    url: '/upload-prescription',
  },
];

export const earnedClients = [
  {
    name: 'IFitness',
    image: '/images/clients/iFitness.png',
  },
  {
    name: 'Buy Asap',
    image: '/images/clients/buyAsap.png',
  },
  {
    name: 'Nike',
    image: '/images/clients/nike.png',
  },
  {
    name: 'Gallant Biz',
    image: '/images/clients/gallantBiz.png',
  },
  {
    name: 'Laroche',
    image: '/images/clients/laroche.png',
  },
];
