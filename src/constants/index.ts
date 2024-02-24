import { IconDoctor } from '@/components/icons/IconDoctor';
import { IconEmergency } from '@/components/icons/IconEmergency';
import { IconFluidMed } from '@/components/icons/IconFluidMed';
import { IconLabs } from '@/components/icons/IconLabs';
import { IconPill } from '@/components/icons/IconPill';
import { IconPrescription } from '@/components/icons/IconPrescription';
import { IconWellness } from '@/components/icons/IconWellness';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api/v1';

export const USER_TOKEN_KEY = 'user_token';

export const teleHealthServices = [
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
    url: '/telehealth/drug-refill',
    actionText: 'Subscribe',
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
    url: '/telehealth/book-lab-test',
    actionText: 'Book Now',
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
    url: '/telehealth/get-vaccination',
    actionText: 'Get Vaccinated',
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
    url: '/telehealth/find-a-doctor',
    actionText: 'Consult Now',
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
    url: '/telehealth/upload-prescription',
    actionText: 'Upload Now',
  },
  {
    icon: IconEmergency as ({
      color,
      size,
    }: {
      color?: string;
      size?: number;
    }) => JSX.Element,
    title: 'Book Emergency',
    description:
      "We're here for you when things go wrong, big or small. Count on us to prioritize your safety and well-being",
    url: '/telehealth/book-emergency',
    actionText: 'Learn More',
  },
  {
    icon: IconWellness as ({
      color,
      size,
    }: {
      color?: string;
      size?: number;
    }) => JSX.Element,
    title: 'Pure Wellness',
    description:
      'Get Health insurance, nutrition, and customize diet and fitness plans to embark on a journey towards holistic well-being.',
    url: '/telehealth/pure-wellness',
    actionText: 'Learn More',
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
