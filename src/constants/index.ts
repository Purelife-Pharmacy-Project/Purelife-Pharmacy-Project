import { IconDoctor } from '@/components/icons/IconDoctor';
import { IconFluidMed } from '@/components/icons/IconFluidMed';
import { IconLabs } from '@/components/icons/IconLabs';
import { IconPill } from '@/components/icons/IconPill';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api/v1';

export const USER_TOKEN_KEY = 'user_token';
export const USER_ID_KEY = 'user_id';
export const PARTNER_ID_KEY = 'partner_id';
export const DELIVERY_LOCATIONS_CATEGORY_ID = '16';

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
    isAvailable: true,
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
    isAvailable: true,
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
    isAvailable: true,
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
      'Consult with our team of healthcare professionals and specialists, anytime, anywhere\n' +
      '\n',
    url: '/telehealth/find-a-doctor',
    actionText: 'Consult Now',
    isAvailable: true,
  },
  // {
  //   icon: IconPrescription as ({
  //     color,
  //     size,
  //   }: {
  //     color?: string;
  //     size?: number;
  //   }) => JSX.Element,
  //   title: 'Upload Prescription',
  //   description:
  //     'Ease Your Healthcare Journey as we manage and secure your prescriptions with ease.',
  //   url: '/telehealth/upload-prescription',
  //   actionText: 'Upload Now',
  //   isAvailable: true,
  // },
  // {
  //   icon: IconEmergency as ({
  //     color,
  //     size,
  //   }: {
  //     color?: string;
  //     size?: number;
  //   }) => JSX.Element,
  //   title: 'Book Emergency',
  //   description:
  //     "We're here for you when things go wrong, big or small. Count on us to prioritize your safety and well-being",
  //   // url: '/telehealth/book-emergency',
  //   url: '#',
  //   actionText: 'Book Now',
  //   isAvailable: false,
  // },
  // {
  //   icon: IconWellness as ({
  //     color,
  //     size,
  //   }: {
  //     color?: string;
  //     size?: number;
  //   }) => JSX.Element,
  //   title: 'Pure Wellness',
  //   description:
  //     'Get Health insurance, nutrition, and customize diet and fitness plans to embark on a journey towards holistic well-being.',
  //   // url: '/telehealth/pure-wellness',
  //   url: '#',
  //   actionText: 'Learn More',
  //   isAvailable: false,
  // },
];

export const earnedClients = [
  {
    name: 'Dermatologie',
    image: '/images/clients/dermatologie.png',
  },
  {
    name: 'Novo Care',
    image: '/images/clients/novo-care.png',
  },
  {
    name: 'Pure fitness',
    image: '/images/clients/pure-fitness.png',
  },
  {
    name: 'Reckitt',
    image: '/images/clients/reckitt.png',
  },
];

export const genderAnswers = [
  {
    name: 'Male',
    value: 'male',
  },
  {
    name: 'Female',
    value: 'female',
  },
  {
    name: 'Prefer not to say',
    value: 'other',
  },
];
