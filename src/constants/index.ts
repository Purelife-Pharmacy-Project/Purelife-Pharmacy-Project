import { IconDoctor } from '@/library/icons/IconDoctor';
import { IconFluidMed } from '@/library/icons/IconFluidMed';
import { IconLabs } from '@/library/icons/IconLabs';
import { IconPill } from '@/library/icons/IconPill';
import { IconPrescription } from '@/library/icons/IconPrescription';

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
    url: '/book-lab-test',
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
    url: '#',
  },
];

export const healthServicesFull = [
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
    url: '#',
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
    url: '#',
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
    url: '#',
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
    url: '#',
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
    url: '#',
  },
];
