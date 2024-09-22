'use client';

import React from 'react';
import { Section } from '@/components/home/Section';
import { Accordion, AccordionItem } from '@nextui-org/react';

type Prop = {};

const data = [
  { title: 'What types of tests can I get at your pharmacy?', description: '' },
  { title: 'Do I need a prescription to purchase a test?', description: '' },
  { title: 'How do I administer the test at home?', description: '' },
  {
    title: 'What should I do if I have abnormal results from a test?',
    description: '',
  },
  {
    title: "What should I do if I'm unsure about which test to choose?",
    description: '',
  },
];

const Faq: React.FC<Prop> = () => {
  return (
    <Section>
      <h3 className='mb-12 text-center text-2xl font-bold capitalize text-header-100 lg:text-4xl'>
        Frequently asked questions
      </h3>
      <Accordion
        variant='bordered'
        className='lg:px-10 lg:py-10 xl:px-16 xl:py-14'
      >
        {data.map(({ title, description }, index) => (
          <AccordionItem key={index} aria-label='Accordion 1' title={title}>
            {description}
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default Faq;
