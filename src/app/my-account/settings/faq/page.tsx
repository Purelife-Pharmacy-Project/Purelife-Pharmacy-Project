'use client';
import { Accordion, AccordionItem, Card, CardBody } from '@nextui-org/react';

export default function SettingsFaqPage() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  return (
    <Card shadow='none'>
      <CardBody>
        <Accordion>
          <AccordionItem
            key='1'
            aria-label='Accordion 1'
            title='What does Purelife do?'
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key='2'
            aria-label='Accordion 2'
            title='How to book a test online with Purelife?'
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key='3'
            aria-label='Accordion 3'
            title='How to check my test booking status?'
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key='4'
            aria-label='Accordion 3'
            title='How can I make an online payment for the booking? How will I get my result?'
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
}
