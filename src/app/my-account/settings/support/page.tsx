import { IconChatSolid } from '@/components/icons/IconChatSolid';
import { IconEmailSolid } from '@/components/icons/IconEmailSolid';
import { IconPhoneSolid } from '@/components/icons/IconPhoneSolid';
import { Card, CardBody, Link } from '@nextui-org/react';

export default function SettingsSupportPage() {
  return (
    <Card shadow='none'>
      <CardBody className='grid gap-10'>
        <p className='text-light text-lg'>
          If you couldn&apos;t find the answer you were looking for in our FAQs
          or need personalized assistance, our support team is here to assist
          you. You can reach us through the following channels:
        </p>

        <div className='grid w-full gap-6'>
          <div className='grid w-full grid-flow-col grid-cols-[1fr_11fr] items-center gap-4'>
            <div className='grid h-[42px] w-[42px] place-content-center rounded-full bg-primaryLight'>
              <IconChatSolid color='primary' size={24} />
            </div>
            <p className='font-light'>
              <span className='font-bold'>Live Chat:</span> Chat with one of our
              support representatives in real-time.{' '}
              <Link className='underline' href='#'>
                Click the chat icon
              </Link>{' '}
              in the bottom right corner of your screen to start a conversation.
            </p>
          </div>
          <div className='grid w-full grid-flow-col grid-cols-[1fr_11fr] items-center gap-4'>
            <div className='grid h-[42px] w-[42px] place-content-center rounded-full bg-primaryLight'>
              <IconEmailSolid color='primary' size={24} />
            </div>
            <p className='font-light'>
              <span className='font-bold'>Email Support:</span> Send us an email
              at{' '}
              <Link className='underline' href='#'>
                supportpurelifepharmacy.ng
              </Link>{' '}
              We aim to respond to your queries within 24 hours.
            </p>
          </div>
          <div className='grid w-full grid-flow-col grid-cols-[1fr_11fr] items-center gap-4'>
            <div className='grid h-[42px] w-[42px] place-content-center rounded-full bg-primaryLight'>
              <IconPhoneSolid color='primary' size={24} />
            </div>
            <p className='font-light'>
              <span className='font-bold'>Phone Support:</span> If you prefer
              speaking with a representative, you can reach us at
              <Link className='underline' href='#'>
                (+234) 809 056 4568
              </Link>{' '}
              .Our phone support is available during our business hours.
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
