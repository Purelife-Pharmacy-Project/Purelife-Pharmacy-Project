import { IDoctor } from '@/services/consult-doctor/types';

export const allDoctors: IDoctor[] = [
  {
    slug: 'ike-emmanuel',
    name: 'Dr. Ike Emmanuel Chinedum',
    title: 'General Partitioner',
    image: '/images/doctors/doctor-ike.png',
    yearsOfExperience: 5,
    description:
      "Dr. Ike Emmanuel Chinedum is a skilled Medical Doctor with degrees in MBBS and Physiology from Bingham University. He's recognized by the General Medical Council (GMC) in the UK. ",
  },
  {
    slug: 'salako',
    name: 'Dr. Saloko',
    image: '/images/doctors/doctor-saloko.png',
    title: 'General Partitioner',
    yearsOfExperience: 5,
    description:
      'Dr. Salako is an experienced Audiologist and Speech-Language Pathologist focusing on childhood speech issues, with a research emphasis.',
  },
];
