import { IDoctor } from '@/services/consult-doctor/types';

export const allDoctors: IDoctor[] = [
  {
    slug: 'ike-emmanuel',
    name: 'Dr. Ike Emmanuel Chinedum',
    title: 'General Practitioner',
    image: '/images/doctors/doctor-ike.png',
    yearsOfExperience: 5,
    description:
      "Dr. Ike Emmanuel Chinedum is a skilled Medical Doctor with degrees in MBBS and Physiology from Bingham University. He's recognized by the General Medical Council (GMC) in the UK. ",
  },
  {
    slug: 'salako',
    name: 'Dr. Saloko',
    image: '/images/doctors/doctor-saloko.png',
    title: 'General Practitioner',
    yearsOfExperience: 5,
    description:
      'Dr. Salako is an experienced Audiologist and Speech-Language Pathologist focusing on childhood speech issues, with a research emphasis.',
  },
  {
    slug: 'ifeoluwa-olatunji',
    name: 'Ifeoluwa Olatunji',
    image: '/images/doctors/doctor-ifeoluwa.png',
    title: 'Cosmetologist',
    yearsOfExperience: 5,
    description:
      'Ifeoluwa Olatunji, a dedicated cosmetologist, offers personalized skincare, makeup, and hair solutions. With expertise and passion, she helps clients enhance their natural beauty and feel confident.',
  },
  {
    slug: 'helen-afolayan',
    name: 'Helen Afolayan',
    image: '/images/doctors/doctor-helen.png',
    title: 'Pharmacist',
    yearsOfExperience: 5,
    description:
      "Helen, a seasoned health professional with six years of experience in pharmaceutical sales and health organizations. Passionate about community pharmacy, she's known for excellence and analytical thinking.",
  },
  {
    slug: 'oluwadamilola-sanni',
    name: 'Oluwadamilola Sanni',
    image: '/images/doctors/doctor-Oluwadamilola.png',
    title: 'General Practitioner',
    yearsOfExperience: 5,
    description:
      'Dr. Oluwadamilola Sanni is a Family Physician and Rural Health Knowledge Translator at Olabisi Onabanjo University Teaching Hospital (OOUTH).',
  },
];
