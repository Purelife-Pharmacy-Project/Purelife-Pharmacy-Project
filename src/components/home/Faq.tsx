'use client';
import { Accordion, AccordionItem, Card, CardBody } from '@nextui-org/react';
import { Section } from './Section';

export const HomeFaq = () => {
  const questions = [
    {
      id: 1,
      title: 'What does Purelife do?',
      body: 'PureLife Health offers an all-encompassing healthcare experience, integrating medical consultations, diagnostics, vaccinations, medication sourcing, and post-medication management services for individuals across Nigeria. PureLife Health serves as a pivotal link between healthcare providers, and users.',
    },
    {
      id: 2,
      title: 'How to book a test online on purelife ?',
      body:
        'To book a test on PureLife Health, navigate to the Telehealth section on our website, select the option to book a lab test of your choice, and schedule a home sample collection. A certified professional will be dispatched to your location for the sample collection. Once the test is completed, you will receive the results via email and can also access them through your account on the PureLife platform.\n' +
        '\n',
    },
    {
      id: 3,
      title: 'How does PureLife Health ensure the quality of its services?',
      body:
        'PureLife Health undergoes a rigorous quality process to ensure the quality of its services, acting as a link between wholesalers, retail pharmacy stores, healthcare providers, and end users.\n' +
        '\n',
    },
    {
      id: 4,
      title: 'What time does purelife close ?',
      body:
        'We are available 24 hours a day and 7 days a week. We work longer so you can live longer .\n' +
        '\n',
    },
    {
      id: 5,
      title: 'Is my data confidential and safe ?',
      body: 'Yes, your data is safe and confidential on PureLife Health. The platform adheres to stringent security measures to ensure the privacy and integrity of e-health data through strict access restriction, data integrity and accountability.',
    },
    {
      id: 6,
      title: 'Can I order telehealth services for someone else ?',
      body:
        'Yes, you can place an order for someone else to get access to all forms of services on the platform including consultations with a professional and routine medications alongside post medication therapy management.\n' +
        '\n',
    },
  ];

  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-2'>
          <h1 className='text-start text-xl font-bold text-header-100 lg:text-4xl'>
            Frequently asked questions
          </h1>
          <Card shadow='none'>
            <CardBody className='px-0'>
              <Accordion>
                {questions.map((question) => (
                  <AccordionItem
                    key={question.id}
                    aria-label={question.title}
                    title={question.title}
                  >
                    {question.body}
                  </AccordionItem>
                ))}
              </Accordion>
            </CardBody>
          </Card>
        </div>
      </Section>
    </div>
  );
};
